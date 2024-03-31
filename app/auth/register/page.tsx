"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import styles from "../auth.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Register() {
  const router = useRouter();
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target as HTMLInputElement;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setButtonDisabled(true);
    try {
      const response = await axios.post("/api/auth/register", user);

      toast.success("Registration successful");
      router.push("/login");
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
    setLoading(false);
    setButtonDisabled(false);
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <>
      <h1 className={styles.heading}>Create your account</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className="mb-2">
          <input
            type="text"
            id="username"
            name="username"
            value={user.username}
            onChange={handleChange}
            className="auth-form-input"
            placeholder="Username"
            required
          />
        </div>

        <div className="mb-2">
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="auth-form-input"
            placeholder="Email"
            required
          />
        </div>

        <div className="mb-2">
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            className="auth-form-input"
            placeholder="Password"
            required
          />
        </div>

        <button type="submit" className="auth-form-button">
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

      <button className="auth-button-regular mt-4 flex gap-4 items-center justify-center">
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
