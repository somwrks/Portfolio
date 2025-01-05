import { Resend } from 'resend';


export default async function handler(req, res) {
  if (req.method === 'POST') {
    const resend = new Resend(process.env.RESEND_API);
    const { name, email, subject, message } = req.body;

    try {
      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'ashworks1706@gmail.com',
        subject: `Somwrks.com - ${subject}`,
        html: `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 20px auto;
                background-color: #ffffff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }
              .header {
                text-align: center;
                border-bottom: 1px solid #dddddd;
                padding-bottom: 10px;
              }
              .header h1 {
                font-size: 24px;
                margin: 0;
                color: #333;
              }
              .content p {
                font-size: 16px;
                line-height: 1.6;
                margin: 10px 0;
              }
              .content strong {
                color: #555;
              }
              .footer {
                text-align: center;
                border-top: 1px solid #dddddd;
                padding-top: 10px;
                margin-top: 20px;
              }
              .footer p {
                font-size: 14px;
                color: #888;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Message from Your Portfolio</h1>
              </div>
              <div class="content">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong><br/>${message}</p>
              </div>
              <div class="footer">
                <p>Thank you for reaching out!</p>
              </div>
            </div>
          </body>
          </html>
        `,
      });
      
      

      return res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to send the email.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
