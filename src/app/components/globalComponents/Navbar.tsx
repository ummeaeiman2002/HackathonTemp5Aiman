"use client";
import React, { useState } from "react";
import { NavbarMobile, NavbarDesktop } from "../../assets";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full">
      {/* nav div */}
      <div className="flex justify-between items-center py-7 px-5">
        {/* logo */}
       <Link href="/"> <h1 className="font-bold text-xl  w-[187px] ">Bandage</h1></Link>
        {/* Icons :hidden in desktop*/}
        <div className="flex items-center justify-end gap-7 lg:hidden">
          <button>
            <Image
              src={NavbarMobile.search}
              alt=""
              width={10}
              height={10}
              className="w-[24px] h-[24px]"
            />
          </button>
          <Link href="/cart"><button>
            <Image
              src={NavbarMobile.cart}
              alt=""
              width={10}
              height={10}
              className="w-[24px] h-[24px]"
            />
          </button></Link>
          <button onClick={openMenu}>
            <Image
              src={NavbarMobile.menu}
              alt=""
              width={10}
              height={10}
              className="w-[24px] h-[13.71px]"
            />
          </button>
        </div>

        {/* desktop nav section */}
        <div className="max-w-[1155px] w-[80vw] hidden lg:flex justify-between ">
          {/* menu : desktop */}

          <div className="flex text-[#737373] font-semibold gap-4 justify-between text-base">
      {/* Home Link */}
      <Link href="/" className="hover:text-blue-500 transition">
        Home
      </Link>

      {/* Shop Link with Icon */}
      <div className="flex justify-center items-center min-w-[63px] w-[4.3vw] gap-2">
        <Link href="/productlist" className="flex items-center gap-2 hover:text-blue-500 transition">
          <span>Shop</span>
          <Image
            src={NavbarDesktop.shop}
            alt="Shop Icon"
            width={10}
            height={10}
            className=""
          />
        </Link>
      </div>

      {/* Other Links */}
      <Link href="/About" className="hover:text-blue-500 transition">
        About
      </Link>
      <Link href="/Producting" className="hover:text-blue-500 transition">
        Product
      </Link>
      <Link href="/contact" className="hover:text-blue-500 transition">
        Contact
      </Link>
      <Link href="/Price" className="hover:text-blue-500 transition">
        Price
      </Link>

      <Link href="/team" className="hover:text-blue-500 transition">
        Team
      </Link>
    </div>

          {/* icons : desktop */}
          <div className="max-w-[324px] w-[22.5vw] text-[#23A6F0] flex  justify-between items-center">
            <div className="flex items-center gap-2">

            <div className="flex space-x-4">
  <Link
    href="/login"
    className="text-[12px] font-bold lg:text-sm text-myBlue hover:text-myDark"
  >
    Login
  </Link>
  <span className="text-[12px] lg:text-sm text-gray-500">/</span>
  <Link
    href="/register"
    className="text-[12px] font-bold lg:text-sm text-myBlue hover:text-myDark"
  >
    Register
  </Link>
</div>


              <Image
                src={NavbarDesktop.user}
                alt=""
                width={10}
                height={10}
                className="w-[12px] h-[12px]"
              />
            
            </div>
            <div></div>
            <Link href="/Search" className="text-lg font-semibold text-blue-600">
            <Image
              src={NavbarDesktop.Search}
              alt=""
              className="w-[16px] h-[16px]"
            />
            </Link>





            <div className="flex items-center gap-2">
            <Link href="/cart" className="text-lg font-semibold text-blue-600">
              <Image
                src={NavbarDesktop.Cart}
                alt=""
                className="w-[16px] h-[16px]"
              />
              </Link>
              <p className="text-sm">1</p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={NavbarDesktop.heart}
                alt=""
                className="w-[16px] h-[16px]"
              />
              <p className="text-sm">1</p>
            </div>
          </div>
        </div>
      </div>

      {/* menu */}
      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } text-[#737373] text-2xl font-semibold text-center flex-col gap-7 py-16 lg:hidden`}
      >
        <Link href="/">Home</Link>
        <Link href="/productlist">Product</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}