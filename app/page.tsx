"use client";
import dynamic from "next/dynamic";
import React from "react";

const ComputerScene = dynamic(() => import("@/components/ComputerScene"), {
  ssr: false,
});

export default function Home() {
  return (

    <div style={{ position: "relative", minHeight: "100vh" }}>
      <div
        style={{
          position: "fixed", 
          top: "20px",
          fontSize: "24px",
          fontWeight: "bold",
          color: "white"
        }}
      >
        Maple Avatar AI 🍄🍁
      </div>
      <ComputerScene />
    </div>
    
  );
}
