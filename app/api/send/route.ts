import { Resend } from "resend";
import * as React from "react";
import { EmailTemplate } from "@/components/email-template";
import { NextRequest } from "next";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();
    const { data, error } = await resend.emails.send({
      from: "Prodoit.dev <onboarding@resend.dev>",
      to: ["bhoopalsanthosh@gmail.com"],
      subject: "New message from prodoit.dev",
      react: EmailTemplate({
        firstName: name,
        message,
        email,
      }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
