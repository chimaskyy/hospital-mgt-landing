"use client";

import { useState, useEffect } from "react";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
// import LoadingScreen from "@/components/LoadingScreen";

export default function RootLayout({ children }) {
  
  return (
    <>
        <main>
          <Header />
          <div className="min-h-screen  bg-white">{children}</div>
          <Footer />
        </main>
    
    </>
  );
}
