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
  const [registered, setRegistered] = useState(true);

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
      const response = await axios.post("/api/users/register", user);

      toast.success("Registration successful");
      setRegistered(true);
    } catch (error: any) {
      toast.error(error.message);
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
      {loading && (
        <div className="w-screen h-screen z-50 bg-white opacity-20 flex justify-center items-center">
          Processing...
        </div>
      )}

      {!registered ? (
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

            <button
              type="submit"
              className="auth-form-button"
              disabled={buttonDisabled}
            >
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
            disabled={loading}
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
      ) : (
        <>
          <div className="w-full flex flex-col justify-center items-center">
            <h1 className="text-center text-2xl font-bold font-[Poppins] text-[#393D46] my-5">
              Registration successful
            </h1>
            <p>Verify your email to continue</p>
            <button
              onClick={() => {
                window.opener = null;
                window.open("https://gmail.google.com/", "_blank");
              }}
              className="mt-5 px-5 py-3 bg-black text-white rounded-sm"
            >
              Open Gmail
            </button>
          </div>
        </>
      )}
    </>
  );
}
