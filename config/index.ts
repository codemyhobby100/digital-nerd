const config = {
  flutterwave_public_key: process.env.NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY || "",
  dollarRate: parseFloat(process.env.NEXT_PUBLIC_DOLLAR_RATE || "1"),
  coursePrice: parseFloat(process.env.NEXT_PUBLIC_COURSEPRICE || "1"),
  nowPaymentApiKey: process.env.NEXT_PUBLIC_NOWPAYMENT_API_KEY || "",
  nowPaymentInvoiceUrl: process.env.NEXT_PUBLIC_NOWPAYMENT_INVOICE_URL || "",
  baseServerUrl: process.env.NEXT_PUBLIC_BASE_SERVER_URL || "",
  baseFrontEndUrl: process.env.NEXT_PUBLIC_FRONTEND_URL || "",
  emailUser: process.env.NEXT_PUBLIC_EMAIL_USER || "",
  emailUserPass: process.env.NEXT_PUBLIC_EMAIL_USER_PASS || "",
  courseLink: process.env.NEXT_PUBLIC_COURSE_LINK || ""
};

export default config;
