"use server";

import bcrypt from "bcryptjs";

import { RegisterSchema } from "@/schemas";
import * as z from "zod";
import { db } from "@/db/db";
import { getUserByEmail } from "@/data/user";

export const registerAction = async (
  values: z.infer<typeof RegisterSchema>
) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid email or password. Please try again.",
    };
  }
  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email)

  if (existingUser) {
    return {
      error: "User already exists",
    };
  }

  await db.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  });

  // TODO: Send email to user

  return {
    success: "Email Sent!",
  };
};
