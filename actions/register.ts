"use server"

import { RegisterSchema } from '@/schemas';
import * as z from 'zod'

export const registerAction = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values)

    if (!validatedFields.success) {
        return {
            error: "Invalid email or password. Please try again.",
        }
    }

    return {
        success: "Email Sent!",
    }
}