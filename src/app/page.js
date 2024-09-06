"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Loading from "./Loading";

const MyComponentsDynamic = dynamic(() => import("./portfolio"), {
  loading: () => <Loading />,
  ssr: false,
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#0E0D0D]">
      {isLoading ? <Loading /> : <MyComponentsDynamic />}
    </div>
  );
}
