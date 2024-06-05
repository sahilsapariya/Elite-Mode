"use client";
import React, { Suspense, useState, useTransition } from "react";
import styles from "../auth.module.css";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { login } from "@/actions/login";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { useSearchParams } from "next/navigation";

type LoginFormData = z.infer<typeof LoginSchema>;

export default function Login() {
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider!"
      : "";

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
  });

  const [user, setUser] = useState<LoginFormData>({ email: "", password: "" });

  const handleChange = (e: any) => {
    const { name, value } = e.target as HTMLInputElement;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const onSubmit = (data: LoginFormData) => {
    startTransition(() => {
      login(data).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };

  const handleGoogleLogin = (provider: "google") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <Suspense
      fallback={
        <div className="w-screen h-screen z-50 bg-white opacity-20 flex justify-center items-center">
          Processing...
        </div>
      }
    >
      <h1 className={styles.heading}>Welcome back</h1>

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

        <div className="mt-4 mb-3">
          <Link
            href={"/auth/forgot-password"}
            className="text-sm font-light mt-2"
          >
            Forgot password?
          </Link>
        </div>

        <FormError message={error || urlError} />
        <FormSuccess message={success} />

        <button type="submit" className="auth-form-button" disabled={isPending}>
          Login
        </button>
      </form>

      <p className="text-sm font-light my-4">
        Don&apos;t have an account?{" "}
        <Link href="/auth/register" className="text-blue-500">
          Register
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
    </Suspense>
  );
}
