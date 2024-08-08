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
    if (ipnData?.data?.status === "successful") {
      // const paymentReference = ipnData.data.reference;

      // Perform additional actions, such as updating your database, sending emails, etc.
      const paymentEmail = ipnData.data?.txRef.split("_")[1];
      const paymentName = ipnData.data?.txRef.split("_")[0];
      console.log("email", { paymentEmail });
      await sendEmail(
        {
          to: paymentEmail
        },
        {
          subject: "Congratulations! You just bought the course",
          html: `
          <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Email</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <style>
                    body {
                        margin: 0;
                        padding: 0;
                        background-color: #000000;
                        color: #ffffff !important;
                        font-family: Arial, sans-serif;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        min-height: 100vh;
                        overflow-y: auto;
                    }

                    .container {
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 20px;
                    }

                    .email-box {
                        background-color: #000;
                        box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);
                        padding: 20px;
                        max-width: 400px;
                        width: 100%;
                        margin: 0 auto;
                        color: #ffffff !important;
                    }

                    /* mobile screens */
                    @media (max-width: 768px) {
                        .email-box {
                            max-width: 300px;
                        }
                    }

                    .title, p, .end {
                        text-align: center;
                        color: #ffffff !important;
                    }

                    .box-row {
                        background-color: #f0f0f0;
                        padding: 10px;
                        border-radius: 10px;
                        margin-top: 20px;
                    }

                    .account-name {
                        font-weight: 700;
                        font-size: 20px;
                        padding-bottom: 10px;
                        color: #ffffff !important;
                    }

                    .social-icons {
                        text-align: center;
                        margin: 20px 0;
                        color: white;
                    }

                    .social-icons span {
                        margin: 0 10px;
                        display: inline-block;
                        background-color: rgb(0, 255, 132);
                        border-radius: 50%;
                        padding: 10px;
                    }

                    .social-icons span a {
                        color: #fff;
                        text-decoration: none;
                    }

                    .btn {
                        display: block;
                        width: fit-content;
                        padding: 12px 40px;
                        margin: 30px auto;
                        background-color: transparent;
                        color: rgb(0, 255, 132);
                        border-radius: 10px;
                        outline: none;
                        border: 1px solid rgb(0, 255, 132);
                        text-decoration: none; /* Use this for <a> based buttons */
                    }

                    .end {
                        font-size: 14px;
                        color: #ffffff !important;
                        padding-top: 20px;
                        text-align: center;
                    }

                    .end a {
                        color: #ffffff !important;
                        font-weight: 600;
                        text-decoration: none;
                    }

                    .course-image {
                        width: 100%;
                        height: auto;
                        max-width: 100%;
                        margin: 20px 0;
                        border-radius: 10px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="email-box">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="table-layout: fixed;">
                            <tr>
                                <td style="text-align: center;">
                                    <img src="https://res.cloudinary.com/dfyeocma8/image/upload/v1722719189/upwag9nqg49icyck17wd.png" width="50" height="50" alt="" style="vertical-align: middle; margin-right: -15px;">
                                    <h3 style="display: inline; font-size: 23px; margin: 0; padding-left: 10px; color: #ffffff !important;">oxmastery</h3>
                                </td>
                            </tr>
                        </table>
                        <h2 class="title">Congratulations!</h2>
                        <img src="https://res.cloudinary.com/dfyeocma8/image/upload/v1722718801/la4nkevwu2o9twru9msj.png" alt="Course Image" class="course-image">
                        <p>Congratulations on purchasing our course! <br> We are thrilled to have you on board and can't wait to see you excel.</p>
                        <p>To get started, simply click the link below:</p>
                        <div class="email-box-content">
                            <a href="https://docs.google.com/document/d/1xsfLJIcsiXX2UUPV35g04idujtTYgdAcsgstbb0B6aM/edit?usp=share_link" class="btn">Get Started</a>
                            <p class="end">
                                This is an automatically generated email. Please do not reply to this email. 
                                If you face any issues, please contact us at <a href="mailto:contact@doxmastery.com">contact@doxmastery.com</a>.
                            </p>
                            <hr>
                            <div class="social-icons">
                                <span><a href="https://www.instagram.com/acctbazaar/"><img src="https://res.cloudinary.com/dfyeocma8/image/upload/v1722720542/zwecb4fjxxzxfudqmmmt.png" alt=""></a></span>
                                <span><a href="https://t.me/acctbazaarchannel"><img src="https://res.cloudinary.com/dfyeocma8/image/upload/v1722720920/yrrzkbbjjddmm34hotp4.png" alt=""></a></span>
                            </div>
                            <p class="end">Copyright &copy; 2024 Doxmastery.</p>
                        </div>
                    </div>
                </div>
            </body>
            </html>
                    

            `
        }
      );
    } else {
      return NextResponse.json({ message: "Bad request" }, { status: 400 });
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
