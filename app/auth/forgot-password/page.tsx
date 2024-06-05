"use client";

import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import React, { useState, useTransition } from "react";
import styles from "../auth.module.css";
import { ResetSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { reset } from "@/actions/forgot-password";

type ResetFormData = z.infer<typeof ResetSchema>;

function ForgotPassword() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetFormData>({
    resolver: zodResolver(ResetSchema),
  });

  const [user, setUser] = useState<ResetFormData>({ email: "" });

  const handleChange = (e: any) => {
    const { name, value } = e.target as HTMLInputElement;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const onSubmit = (data: ResetFormData) => {
    startTransition(() => {
      reset(data).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
    console.log(data);
  };

  return (
    <>
      <h1 className={styles.heading}>Reset password</h1>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className="mb-2">
          <input
            type="email"
            id="email"
            {...register("email")}
            value={user.email}
            onChange={handleChange}
            className="auth-form-input"
            placeholder="Email"
            disabled={isPending}
          />
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </div>

        <div className="my-4">
          <FormError message={error} />
          <FormSuccess message={success} />
        </div>

        <button type="submit" className="auth-form-button" disabled={isPending}>
          Send reset email
        </button>
      </form>
    </>
  );
}

export default ForgotPassword;
