import { NextRequest, NextResponse } from "next/server";

import axios from 'axios';
import httpStatus from "http-status"; // A
import config from "@/config";
type PaymentData = {
  tx_ref: string;
  amount: number;
  redirect_url: string;
  customer_email: string;
  paymentType: EPaymentType;
};

enum EPaymentType {
  FLUTTERWAVE = "FLUTTERWAVE",
  NOWPAY = "NOWPAY"
}

async function generateFlutterWavePaymentURL(
  paymentData: PaymentData
): Promise<string> {
  const { tx_ref, amount, redirect_url, customer_email, paymentType } =
    paymentData;
  const paymentOptions = "card"; // You can customize this based on your requirements

  const requestData = {
    tx_ref: `${tx_ref}`,
    amount: amount * config.dollarRate,
    currency: "NGN",
    redirect_url,
    payment_options: paymentOptions,
    customer: {
      email: customer_email
    }
  };
  console.log({ requestData });
  try {
    const response = await axios.post(
      "https://api.flutterwave.com/v3/payments",
      requestData,
      {
        headers: {
          Authorization: `Bearer ${config.flutterwave_public_key}`,
          "Content-Type": "application/json"
        }
      }
    );

    const paymentURL = response.data.data.link;
    return paymentURL;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to generate payment URL");
  }
}

async function createNowPayInvoice(invoice: {
  amount: number;
  ipn_callback_url: string;
  order_id: string;
  order_description?: string;
  success_url: string;
  cancel_url: string;
}): Promise<string> {
  const nowPaymentsApiKey = config.nowPaymentApiKey || "";
  const sandboxApiUrl = config.nowPaymentInvoiceUrl || "";

  try {
    const response = await axios.post(
      sandboxApiUrl,
      {
        ...invoice,
        price_amount: invoice.amount,
        ipn_callback_url: invoice.ipn_callback_url
          ? config.baseServerUrl + invoice.ipn_callback_url
          : undefined,
        price_currency: "USD"
      },
      {
        headers: {
          "x-api-key": nowPaymentsApiKey,
          "Content-Type": "application/json"
        }
      }
    );

    return response.data.invoice_url;
  } catch (err) {
    console.error(err);
    throw new Error("Something went wrong");
  }
}

export async function POST(req: NextRequest) {
  try {
    const { paymentMethod, ...paymentDataInfo } = await req.json();
    const paymentData: PaymentData = {
      amount: 20,
      tx_ref: `${paymentDataInfo.name}_${
        paymentDataInfo.email
      }_${new Date().toISOString()}`,
      customer_email: paymentDataInfo.email,
      redirect_url: config.baseFrontEndUrl,
      paymentType: paymentMethod as EPaymentType
    };

    let paymentURL: string;

    switch (paymentMethod) {
      case "FLUTTERWAVE":
        paymentURL = await generateFlutterWavePaymentURL(paymentData);
        break;
      case "NOWPAY":
        paymentURL = await createNowPayInvoice({
          amount: paymentData.amount,
          order_id: paymentData.tx_ref,
          ipn_callback_url: "/webhook",
          success_url: "/",
          cancel_url: "/"
        });
        break;
      default:
        return NextResponse.json(
          { message: "Invalid payment method" },
          { status: httpStatus.BAD_REQUEST }
        );
    }

    return NextResponse.json({ paymentURL }, { status: httpStatus.OK });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: httpStatus.INTERNAL_SERVER_ERROR }
    );
  }
}
