"use client";

import Image from "next/image";
import Link from "next/link";

import logo from "@/public/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeLine } from "react-icons/ri";
import NavLinksList from "./NavLinksList";
import { useNavbarContext } from "../_contexts/navbarContex";

function Navbar() {
  const { toggle, setActive, setToggle } = useNavbarContext();
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
            Ahmed &nbsp;{" "}
            <span className="sm:block hidden">| Fullstack Developer</span>
          </p>
        </div>

        <NavLinksList mobile={false} />

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            className="w-[28px] h-[28px] cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {toggle ? <RiCloseLargeLine /> : <GiHamburgerMenu />}
          </button>
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <NavLinksList mobile={true} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
