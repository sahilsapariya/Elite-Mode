"use client";
import React, { useState, useTransition } from "react";
import styles from "../auth.module.css";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/schemas";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { registerAction } from "@/actions/register";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

type RegisterFormData = z.infer<typeof RegisterSchema>;

export default function Register() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterSchema),
  });

  const [user, setUser] = useState<RegisterFormData>({
    email: "",
    password: "",
    name: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target as HTMLInputElement;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const onSubmit = (data: RegisterFormData) => {
    startTransition(() => {
      registerAction(data).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };

  const handleGoogleLogin = (provider: "google") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <>
      {isPending && (
        <div className="w-screen h-screen z-50 bg-white opacity-20 flex justify-center items-center">
          Processing...
        </div>
      )}

      <h1 className={styles.heading}>Create an account</h1>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className="mb-2">
          <input
            type="text"
            id="name"
            {...register("name")}
            value={user.name}
            onChange={handleChange}
            className="auth-form-input"
            placeholder="Name"
            disabled={isPending}
          />
          {errors.name && (
            <p className="error-message">{errors.name.message}</p>
          )}
        </div>

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

        <div className="mb-2">
          <input
            type="password"
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

        <FormError message={error} />
        <FormSuccess message={success} />

        <button type="submit" className="auth-form-button" disabled={isPending}>
          Register
        </button>
      </form>

      <p className="text-sm font-light my-4">
        Already have an account?{" "}
        <Link href="/auth/login" className="text-blue-500">
          Log in
        </Link>
      </p>

      <div className="flex items-center w-[80%] mx-auto max-w-[350px] ">
        <span className="h-[1px] w-full bg-gray-400 mr-2"></span>
        <span className="text-xs font-extralight">OR</span>
        <span className="h-[1px] w-full bg-gray-400 ml-2"></span>
      </div>

      <button
        className="auth-button-regular mt-4 flex gap-4 items-center justify-center"
        disabled={isPending}
        onClick={() => handleGoogleLogin("google")}
      >
        <Image
          src={"/icons/social/google-color-icon.svg"}
          alt="Google icon"
          width={20}
          height={20}
        />
        <span>Continue with Google</span>
      </button>
    </>
  );
}
