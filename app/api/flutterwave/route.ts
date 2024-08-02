// pages/api/webhook/route.js
import config from "@/config";
import sendEmail from "@/helpers/sendEmail";
import { Send } from "lucide-react";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Extract the body of the request
    const ipnData = await req.json();

    // Log the webhook data to the console
    console.log("Webhook received:", ipnData);
    if (ipnData.status === "successful") {
      // const paymentReference = ipnData.data.reference;

      // Perform additional actions, such as updating your database, sending emails, etc.
      const paymentEmail = ipnData?.txRef.split("_")[1];
      const paymentName = ipnData?.txRef.split("_")[0];
      sendEmail(
        {
          to: paymentEmail
        },
        {
          subject: "You have successfully buy the course",
          html: `
            <h1>Hey ${paymentName}</h2>
            <p>
            
            Thank you for buying this course.
            </p>
            <a href="${config.courseLink}">
            ${config.courseLink}
            </a>

            `
        }
      );
    }
    // eslint-disable-next-line no-console
    console.log(ipnData);

    // Respond to the webhook request
    return NextResponse.json(
      { message: "Webhook received successfully" },
      { status: 200 }
    );
  } catch (error) {
    // Handle any errors
    console.error("Error handling webhook:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
