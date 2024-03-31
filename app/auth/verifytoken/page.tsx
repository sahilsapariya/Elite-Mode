"use client";

import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function VerifyEmailPage() {
  const router = useRouter();

  const [token, setToken] = useState("");
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
    const { query } = router;
    const urlToken = query.token;
    setToken(urlToken as string)
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      handleVerify();
    }
  }, [token]);

  return <div>VerifyEmailPage</div>;
}

export default VerifyEmailPage;
