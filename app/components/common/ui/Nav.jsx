"use client";
import Link from "next/link";
import { useState } from "react";

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <>
      <nav className="bg-background text-specifics min-w-full h-[100px] lg:h-[50px] lg:px-[110px] py-[10px] flex justify-between lg:justify-around items-center box-border border-accent">
        <Link href="/">
          {/* <Image
            src=""
            alt="Street foundation logo"
            className="w-[150px] h-[100px] lg:w-[200px] lg:h-[150px]"
            width="100"
            height="100"
          /> */}
          <span className="text-xl">Play</span>
          <span className="font-bold text-xl">Listor</span>
        </Link>
        <div
          className="cursor-pointer z-20 lg:hidden px-5 lg:px-0"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24"
              height="24"
              className="close-icon text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </div>

        <ul
          className={`fixed mt-0 bg-gray-500 p-2 ${
            menuOpen
              ? "visible flex flex-col justify-center gap-10 w-full top-0 items-center bg-headerStart h-[100vh] transition-all ease-in-out delay-15 z-10 text-white"
              : "collapse hidden"
          } lg:relative lg:flex lg:bg-transparent lg:gap-20 lg:transition-all lg:items-center lg:visible`}
        >
          <li className="hover:underline">
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="hover:underline">
            <Link href="/about" onClick={closeMenu}>
              About Us
            </Link>
          </li>
          <li className="hover:underline">
            <Link href="/whatwedo" onClick={closeMenu}>
              What We Do
            </Link>
          </li>
          <li className="hover:underline">
            <Link href="/media" onClick={closeMenu}>
              Media
            </Link>
          </li>
          <li className="hover:underline">
            <Link href="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
          <div>{/* <Button label="Donate" /> */}</div>
        </ul>
      </nav>

      <hr className="border-1 border-secondary" />
    </>
  );
}
