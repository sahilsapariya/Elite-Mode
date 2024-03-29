"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SearchBar from "./SearchBar";

const NAV_LINKS = [
  { href: "/", label: "Categories", key: "categories" },
  { href: "/", label: "New Arrivals", key: "new arrivals" },
  { href: "/", label: "Features", key: "features" },
  { href: "/", label: "Collection", key: "collection" },
];

const Header = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  return (
    <>
      {isNavActive && (
        <>
          <div
            className="fixed top-0 left-0 w-screen h-screen opacity-50 z-50 lg:hidden"
            style={{ background: "black" }}
          ></div>

          <div
            className={`lg:hidden fixed top-0 left-0 h-full w-2/3 md:w-1/3 bg-white z-50  ${
              isNavActive ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <Image
              className="m-5 absolute top-0 left-0 cursor-pointer z-100 text-black"
              src={"/icons/icon-close.svg"}
              alt="close"
              height={32}
              width={32}
              onClick={() => setIsNavActive(!isNavActive)}
            />
            <div className="p-6 mt-16">
              <ul className="flex flex-col">
                {NAV_LINKS.map((link) => (
                  <li key={link.key} className="py-2">
                    <Link
                      href={link.href}
                      className="font-bold"
                      onClick={() => setIsNavActive(!isNavActive)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}

      <nav className="container mx-auto max-w-[1200px] flex justify-between items-center px-6 [1200px]:px-0 2xl:px-0 relative z-30 py-4 lg:border-b-5 lg:border-b">
        <div className="flex justify-between items-center gap-4 lg:gap-20">
          <Image
            className="lg:hidden cursor-pointer inline-block"
            src={"/icons/icon-menu.svg"}
            alt="menu"
            width={20}
            height={20}
            onClick={() => setIsNavActive(!isNavActive)}
          />

          <Link
            href="/"
            className="flex flex-nowrap items-center justify-center"
          >
            <Image
              src="/icons/img_group_19.svg"
              alt="image"
              width={32}
              height={32}
              className="cursor-pointer"
            />
            <p className="cursor-pointer text-gray-800 text-2xl font-[Poppins] font-bold">
              Elliye
            </p>
          </Link>
          <ul className="hidden h-full gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="text-sm text-slate-500"
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>

        <div className="flex gap-4 flex-nowrap justify-center items-center">
          <div className="relative">
            <Image
              src={"/icons/img_cart.svg"}
              alt="cart"
              height={32}
              width={32}
              className="cursor-pointer"
            />

            <span className="absolute top-[-8px] right-[-10px] text-[10px] cursor-pointer bg-orange-500 py-[1px] px-2 rounded-full text-white">
              1
            </span>
          </div>
          <div>
            <button
              className="text-white bg-[#000] px-4 py-2 border-0 rounded-sm cursor-pointer"
              type="button"
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      <SearchBar />
    </>
  );
};

export default Header;
