import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { fullName, email, phone, message, captcha } = await req.json();

  // ✅ Xác thực reCAPTCHA
  const verify = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`,
  }).then((r) => r.json());

  if (!verify.success)
    return NextResponse.json({ error: "Captcha verification failed" }, { status: 400 });

  // 👉 Gửi dữ liệu sang Strapi
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contacts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      data: { fullName, email, phone, message },
    }),
  });

  if (!res.ok) return NextResponse.json({ error: "Failed to save contact form" }, { status: 400 });

  return NextResponse.json({ success: true });
}