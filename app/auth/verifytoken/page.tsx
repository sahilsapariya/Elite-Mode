"use client";

import Loader from "@/components/Loader";
import axios from "axios";

import React, { useEffect, useState } from "react";

function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const handleVerify = async () => {
    try {
      const response = await axios.post("/api/users/verifytoken", { token });
      setVerified(true);
    } catch (error: any) {
      setError(true);
      console.log(error.response.data);
    }
  };

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
  }, [token]);

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
                onClick={() => {
                  window.opener = null;
                  window.open(`${process.env.DOMAIN}/home`, "_self");
                }}
                className="mt-5 px-5 py-3 bg-black text-white rounded-sm"
              >
                Go to website
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
