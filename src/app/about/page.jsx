"use client";
import React from "react";
import Navbar from "../components/Navbar";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const goTo = () => {
    router.push("/blog?name=mobile&id=293");
  };
  return (
    <div>
      <Navbar></Navbar>
      <h1>This is a about page</h1>
      <button
        onClick={goTo}
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
      >
        Button
      </button>
    </div>
  );
};

export default page;
