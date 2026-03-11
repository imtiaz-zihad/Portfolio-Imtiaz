import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_MAILER_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    const data = await resend.emails.send({
      from: "Contact <onboarding@resend.dev>",
      to: "imtiaz20067@gmail.com",
      subject: subject || "New Contact Message",
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

   // console.log("Email sent:", data);

    return NextResponse.json({ success: true });

  } catch (error) {
    //console.error("Resend Error:", error);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}