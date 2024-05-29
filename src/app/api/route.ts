import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";
// import Mailgen from "mailgen";

export async function POST(request: NextRequest) {
  const body = await request.json();
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "judilegend2@gmail.com",
      pass: "xcwo paem mtra ualp",
    },
  });

  const info = await transporter.sendMail({
    from: "judilegend2@gmail.com", // sender address
    to: body.email, // list of receivers
    subject: `Bonjour ${body.nom}`, // Subject line
    text: "Email bien recu ", // plain text body
    // html: "<b>Hello world?</b>", // html body
  });

  return NextResponse.json({ ...body }, { status: 200 });
}
