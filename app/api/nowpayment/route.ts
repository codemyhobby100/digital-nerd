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
    if (ipnData.payment_status === "finished") {
      // const paymentReference = ipnData.data.reference;

      // Perform additional actions, such as updating your database, sending emails, etc.
      const paymentEmail = ipnData?.order_id.split("_")[1];
      const paymentName = ipnData?.order_id.split("_")[0];
      console.log("email", { paymentEmail });
      await sendEmail(
        {
          to: paymentEmail
        },
        {
          subject: "You have successfully buy the course",
          html: `
            <h1>Hey ${paymentName}</h2>
            <p>
            
            Thank you for buying this course. Here is the link blow
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
