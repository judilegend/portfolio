import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("Request body:", body);

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465, // utilisez 587 si vous souhaitez utiliser TLS
      secure: true, // true pour SSL, false pour TLS
      auth: {
        user: "judilegend2@gmail.com",
        pass: "bklkgctynyvejnvj",
      },
    });

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER, // sender address
      to: body.email, // list of receivers
      subject: `Bonjour ${body.nom}`, // Subject line
      text: "Email bien reçu", // plain text body
      // html: "<b>Hello world?</b>", // html body
    });

    console.log("Email sent:", info.messageId);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email", error: error.message },
      { status: 500 }
    );
  }
}
