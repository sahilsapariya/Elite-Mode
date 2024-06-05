const nodemailer = require("nodemailer");

export const sendTwoFactorTokenMail = async (to: string, token: string) => {
  try {
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
      <title>[Elliye] Please verify your device</title>
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
        .message-sm {
          font-size: 12px;
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
        .token {
          letter-spacing: 8px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1 class="title">Elliye</h1>
        <p class="message">

          Elliye -- 2FA OTP to login to your account is

        </p>
        <br>

        <h1 class="title token">${token}</h1>

        <hr />

        <p class="message-sm">
          If you did not initiate this login request, someone may be trying to gain access to your account.
        </p>
        <br>
        <br>
        <p class="message">
          If you need any help, please visit our Support Portal.
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
          subject: "[Elliye] Please verify your device",
          html: htmlContent,
        };
    
        const mailResponse = await transporter.sendMail(mailOptions);
    
        return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const sendPasswordResetMail = async (to: string, token: string) => {
  try {
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
        <h1 class="title">Reset your password</h1>
        <p class="message">

        </p>
        <a href="${process.env.DOMAIN}/auth/new-password?token=${token}" class="button">Click here</a>
        <p class="message">
          If you did not ask for reset password, please ignore this email.
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
      subject: "Reset your password",
      html: htmlContent,
    };

    const mailResponse = await transporter.sendMail(mailOptions);

    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const sendVerificationMail = async (to: string, token: string) => {
  try {
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
        <a href="${process.env.DOMAIN}/auth/new-verification?token=${token}" class="button">Click here</a>
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
      subject: "Verify your email address",
      html: htmlContent,
    };

    const mailResponse = await transporter.sendMail(mailOptions);

    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
