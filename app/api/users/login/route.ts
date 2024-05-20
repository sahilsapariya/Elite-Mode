import { connect } from "@/db/db";
import User from "@/models/userModel";
import { NextResponse, NextRequest } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        {
          error: "User does not exist",
        },
        { status: 400 }
      );
    }

    bcryptjs.compare(password, user.password, (err, isMatch) => {
      if (err) throw err;
      if (!isMatch) {
        return NextResponse.json(
          {
            error: "Invalid credentials",
          },
          { status: 400 }
        );
      }
    });

    const payload = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET!, {
      expiresIn: '1d',
    });

    const response = NextResponse.json({
      message: "Logged In success",
      success: true,
    });

    response.cookies.set("token", token, {
      httpOnly: true,
    });
    return response;

  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}
