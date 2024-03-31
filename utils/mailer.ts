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
    console.log("userId: ", userId);
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
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "a6a02521e38332",
        pass: "33c60c20df8c11",
      },
    });

    const htmlContent = `<a href="${
      process.env.DOMAIN
    }/veriftoken?token=${hashedToken}" style="color: white; padding: 1rem; background-color: lightblue;">Click here to ${
      emailType === "VERIFY" ? "Verify your email" : "Reset your password"
    }</a>
    <br />
    <p>${hashedToken}</p>
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
