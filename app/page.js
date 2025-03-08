"use client";

import Image from "next/image";
import Navbar from "./_components/Navbar";
import { NavbarProvider } from "./_contexts/navbarContex";

export default function Home() {
  return (
    <div>
      <NavbarProvider>
        <Navbar />
      </NavbarProvider>
    </div>
  );
}
