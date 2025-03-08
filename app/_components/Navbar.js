"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "@/public/logo.png";
import NavLink from "./NavLink";

function Navbar() {
  const [active, setActive] = useState(false);
  return (
    <nav className="sm:px-16 p-6 w-full flex justify-center items-center min-h-[60px] fixed top-0 z-20">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="relative h-9 w-9">
            <Link
              href="/"
              className="flex gap-2 items-center p-3"
              onClick={() => {
                setActive("");
                window.scroll(0, 0);
              }}
            >
              <Image
                src={logo}
                alt="logo"
                fill
                className="object-contain bg-white rounded-4xl"
              />
            </Link>
          </div>
          <p className="text-white flex text-[18px] font-bold cursor-pointer ml-4 p-2">
            Ahmed <span className="sm:block hidden">| Fullstack Developer</span>
          </p>
        </div>

        <ul className="list-none sm:flex flex-row gap-10">
          <NavLink link={"#about"} active={false}>
            About
          </NavLink>
          <NavLink link={"work"} active={false}>
            Work
          </NavLink>
          <NavLink link={"contact"} active={false}>
            Contact
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
