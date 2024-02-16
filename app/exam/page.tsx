"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Quiz from "@/app/components/quiz";

// TODO remove, this demo shouldn't need to reset the theme.

export default function SignUp() {
  const router = useRouter();

  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("Auth") === "true") {
      setIsAuth(true);
    } else {
      router.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        background: "linear-gradient(90.04deg, #800080 0.03%, #ffc0cb 99.96%)",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "start",
        justifyContent: "center",
      }}
    >
      {isAuth && <Quiz />}
    </div>
  );
}
