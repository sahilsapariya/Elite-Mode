const nodemailer = require("nodemailer");
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import { ObjectId } from "mongoose";

type SendEmailProps = {
  to: string;
  subject: string;
  text: string;
  userId: ObjectId;
  emailType: string;
};

export const sendEmail = async ({
  to,
  subject,
  text,
  userId,
  emailType,
}: SendEmailProps) => {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);
    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        $set: {
          verifyToken: hashedToken,
          verifyTokenExpire: Date.now() + 3600000,
        },
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        $set: {
          resetToken: hashedToken,
          resetTokenExpire: Date.now() + 3600000,
        },
      });
    }

    var transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const htmlContent = `
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Verify your email</title>
      <style>
        body {
          font-family: sans-serif;
          margin: 0;
          padding: 0;
        }
        .container {
          padding: 30px;
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
        }
        .title {
          font-size: 24px;
        }
        .message {
          font-size: 16px;
          padding: 15px 0;
        }
        .button {
          background-color: #000;
          color: #fff;
          padding: 10px 20px;
          border: none;
          border-radius: 2px;
          cursor: pointer;
          text-decoration: none;
          text-transform: none;
        }
        .socials {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px 0;
          column-gap: 2rem;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1 class="title">Verify your email</h1>
        <p class="message">
          Thank you for registering with our website. Please click the button
          below to verify your email address
        </p>
        <a href="${process.env.DOMAIN}/auth/verifytoken?token=${hashedToken}" class="button">Click here</a>
        <p class="message">
          If you did not register for our website, please ignore this email.
        </p>
        <hr />
        <div class="socials">
          <a
            href="https://instagram.com/_sahil_sapariya_03"
            class="button"
            target="_blank"
            style="border-radius: 50px"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com/sahil_sapariya"
            class="button"
            target="_blank"
            style="border-radius: 50px"
          >
            Twitter
          </a>
        </div>
      </div>
    </body>
  </html>  
    `;

    const mailOptions = {
      from: process.env.SMTP_FROM,
      to,
      subject,
      text,
      html: htmlContent,
    };

    const mailResponse = await transporter.sendMail(mailOptions);

    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
