import { connect } from "@/db/db";
import User from "@/models/userModel";
import { NextResponse, NextRequest } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/utils/mailer";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;
    console.log(reqBody);

    await User.findOne({ email }).then(() => {
      return NextResponse.json(
        {
          error: "User already exists",
        },
        { status: 400 }
      );
    });

    bcryptjs.genSalt(10, (err, salt) => {
      bcryptjs.hash(password, salt, async (err, hash) => {
        if (err) throw err;
        const newUser = new User({
          username,
          email,
          password: hash,
        });

        await newUser.save().then(async () => {
          await sendEmail({
            to: email,
            subject: "Verify your email",
            text: `Welcome to our app, ${username}`,
            userId: newUser._id,
            emailType: "VERIFY",
          });
        });
      });
    });

    return NextResponse.json(
      {
        message: "User registered successfully",
        success: true,
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}
