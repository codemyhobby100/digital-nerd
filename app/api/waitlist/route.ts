import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email) {
      return NextResponse.json({ message: "Email is required" }, { status: 400 });
    }

    // 1️⃣ Save to Supabase
    const { error: dbError } = await supabase.from("waitlist").insert([{ email }]);
    if (dbError) {
      // Handle potential duplicate emails gracefully
      if (dbError.code === '23505') { // 23505 is the PostgreSQL code for unique_violation
        return NextResponse.json({ message: "You are already on the waitlist." }, { status: 409 }); // Use 409 Conflict for duplicates
      }
      console.error("Supabase error:", dbError); // Log the full error object
      return NextResponse.json({ message: `Database error: ${dbError.message}` }, { status: 500 });
    }

    // 2️⃣ Send automatic email via EmailJS
    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: process.env.EMAILJS_SERVICE_ID,
          template_id: process.env.EMAILJS_TEMPLATE_ID,
          user_id: process.env.EMAILJS_PUBLIC_KEY,
          template_params: {
            user_email: email,
            message: "Thanks for joining our waitlist! We'll keep you updated. 🚀",
          },
        }),
      });
      if (!res.ok) {
        throw new Error(`EmailJS API responded with status: ${res.status}`);
      }
    } catch (emailError) {
      console.error("EmailJS sending failed:", emailError);
      // Still return a success response as the user IS on the waitlist
      return NextResponse.json({ message: "You're on the list! However, we couldn't send a confirmation email." }, { status: 201 });
    }

    return NextResponse.json({ message: "Successfully joined the waitlist!" }, { status: 201 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ message: "An unexpected error occurred." }, { status: 500 });
  }
}
