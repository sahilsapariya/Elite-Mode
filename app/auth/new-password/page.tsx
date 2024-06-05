"use client";

import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import React, { useEffect, useState, useTransition } from "react";
import styles from "../auth.module.css";
import { NewPasswordSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { newPassword } from "@/actions/new-password";
import { NextURL } from "next/dist/server/web/next-url";
import { NextRequest } from "next/server";
import Link from "next/link";

type NewPasswordData = z.infer<typeof NewPasswordSchema>;

function NewPassword() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const [token, setToken] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewPasswordData>({
    resolver: zodResolver(NewPasswordSchema),
  });

  const [user, setUser] = useState<NewPasswordData>({ password: "" });

  const handleChange = (e: any) => {
    const { name, value } = e.target as HTMLInputElement;
    setUser({
      ...user,
      [name]: value,
    });
  };
  useEffect(() => {
    const urlToken = window.location.href.split("=")[1] || "";
    setToken(urlToken);
  }, []);

  const onSubmit = (data: NewPasswordData) => {
    startTransition(() => {
      newPassword(data, token).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };

  return (
    <>
      <h1 className={styles.heading}>Reset password</h1>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className="mb-2">
          <input
            type="text"
            id="password"
            {...register("password")}
            value={user.password}
            onChange={handleChange}
            className="auth-form-input"
            placeholder="Password"
            disabled={isPending}
          />
          {errors.password && (
            <p className="error-message">{errors.password.message}</p>
          )}
        </div>

        <div className="my-4">
          <FormError message={error} />
          <FormSuccess message={success} />
        </div>

        <button type="submit" className="auth-form-button" disabled={isPending}>
          Update password
        </button>
      </form>

      <div className="mt-4 mb-3">
          <Link
            href={"/auth/login"}
            className="text-sm font-light mt-2"
          >
            Back to Login
          </Link>
        </div>
    </>
  );
}

export default NewPassword;
