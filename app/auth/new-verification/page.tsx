"use client";

import Loader from "@/components/Loader";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { newVerification } from "@/actions/new-verification";

function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleVerify = useCallback(() => {
    if(!token) {
      setError("Missing Token")
    };

    newVerification(token)
      .then((res) => {
        if (res.error) {
          setError(res.error);
        } else {
          setVerified(true);
        }
      })
      .catch(() => {
        setError("Error verifying email");
      });
  }, [token]);

  useEffect(() => {
    const urlToken = window.location.href.split("=")[1] || "";
    setToken(urlToken);
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      setLoading(true);
      handleVerify();
      setLoading(false);
    }
  }, [token, handleVerify]);

  return (
    <>
      {loading ? (
        <>
          <div className="w-full flex flex-col justify-center items-center">
            <h1 className="text-center text-xl font-bold font-[Poppins] text-[#393D46] my-5">
              Verifying your email
            </h1>
            <Loader />
          </div>
        </>
      ) : error ? (
        <>
          <div className="w-full flex flex-col justify-center items-center">
            <h1 className="text-center text-xl font-bold font-[Poppins] text-[#f64b4b] my-5">
              Error verifying your email
            </h1>
            <p className="text-center max-w-[350px] font-bold font-[Poppins]">
              Sorry for inconvenience
            </p>

            <p className="text-center max-w-[350px]">
              Close this page and click on the verification button in the e-mail
              again
            </p>
          </div>
        </>
      ) : (
        <>
          {verified ? (
            <div className="w-full flex flex-col justify-center items-center">
              <h1 className="text-center text-2xl font-bold font-[Poppins] text-[#393D46] my-5">
                Email verified
              </h1>
              <button
                onClick={() => router.push("/auth/login")}
                className="mt-5 px-5 py-3 bg-black text-white rounded-sm"
              >
                Go to login
              </button>
            </div>
          ) : (
            <div className="w-full flex flex-col justify-center items-center">
              <h1 className="text-center text-2xl font-bold font-[Poppins] text-[#393D46] my-5">
                Something went wrong
              </h1>
              <p className="text-center max-w-[350px]">
                Close this page and click on the verification button in the
                e-mail again
              </p>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default VerifyEmailPage;
