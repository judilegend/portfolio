import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { to, subject, text } = req.body;

    // Configurez votre transporteur SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'judilegend2@gmail.com',
        pass: 'bklkgctynyvejnvj',
      },
    });

    try {
      // Envoyez l'email
      await transporter.sendMail({
        from: '"judi legend" <judilegend2@gmail.com>', // Remplacez par votre nom et email
        to: to,
        subject: subject,
        text: text,

        
      });

      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
