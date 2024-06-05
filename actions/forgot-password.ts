"use server";

import { ResetSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import * as z from "zod";
import { sendPasswordResetMail } from "@/utils/mail";
import { generatePasswordResetToken } from "@/utils/tokens";

export const reset = async (values: z.infer<typeof ResetSchema>) => {
  const validatedFields = ResetSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid email!" };
  }

  const { email } = validatedFields.data;

  const user = await getUserByEmail(email);

  if (!user) {
    return {
      error: "Email not found!",
    };
  }

  const passwordResetToken = await generatePasswordResetToken(email);

  await sendPasswordResetMail(
    passwordResetToken.email,
    passwordResetToken.token
  );

  return { success: "Check your email for further instructions!" };
};
