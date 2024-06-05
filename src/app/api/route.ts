import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { to, subject, text } = req.body;

    // Configurez votre transporteur SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "albertinot2422@gmail.com",
        pass: "bklkgctynyvejnvj",
      },
    });

    try {
      // Envoyez l'email
      await transporter.sendMail({
        from: '"albert tinot" <albertinot2422@gmail.com>', // Remplacez par votre nom et email
        to: to,
        subject: subject,
        text: text,
      });

      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error sending email" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
