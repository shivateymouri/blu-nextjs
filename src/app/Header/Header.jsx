"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import logo from "../../assets/images/logo.JPG";
import { IoMenuOutline } from "react-icons/io5";
import { BsBoxArrowInDown } from "react-icons/bs";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  let liColorFlag = true;
  const menuLiClickColor = (e) => {
    if (!liColorFlag) {
      e.target.perrclassName = "text-black";
      liColorFlag = false;
    } else {
      e.target.className = "text-[#4e91e6]";
      liColorFlag = true;
    }
  };
  // e.target.className ="text-[#4e91e6]"
  return (
    <header className="w-full bg-white text-black border-b-1 border-gray-300 py-3 sticky top-0 right-0">
      <section className="flex lg:justify-between justify-around items-center lg:w-2/3 w-full m-auto">
        <span className="cursor-pointer flex lg:hidden text-[22px]" onClick={toggleMenu}>
          <IoMenuOutline />
        </span>
        <Image src={logo} alt="header-logo" className="object-cover h-auto cursor-pointer" />
        <div className="w-full hidden lg:flex px-5 p-3">
          <ul className="flex justify-center items-center gap-6 text-[16px] *:hover:text-[#4e91e6] *:cursor-pointer ">
            <li>خدمات</li>
            <li>وام</li>
            <li>باز کردن حساب</li>
            <li>بلوجونیور</li>
            <li>تماس با ما</li>
            <li>سوالات متداول</li>
            <li>بلاگ</li>
          </ul>
        </div>
        <button className="cursor-pointer border-2 rounded-lg border-[#4e91e6] text-[16px] font-bold hidden lg:flex justify-center items-center text-[#4e91e6] w-[200px] p-3">
          دانلود و نصب بلو
        </button>
        <span className="flex lg:hidden text-[22px]">
          <BsBoxArrowInDown />
        </span>
      </section>
      {isMenuOpen && (
        <>
          <div
            className={`fixed top-18 right-0 h-screen w-64 bg-gray-100 shadow-lg z-50 p-5 
            transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} 
            transition-transform duration-400 ease-in-out`}
          >
            <ul className="mt-5 space-y-4 *:cursor-pointer">
              <li onClick={menuLiClickColor}>خدمات</li>
              <li onClick={menuLiClickColor}>وام</li>
              <li onClick={menuLiClickColor}>باز کردن حساب</li>
              <li onClick={menuLiClickColor}>بلوجونیور</li>
              <li onClick={menuLiClickColor}>تماس با ما</li>
              <li onClick={menuLiClickColor}>سوالات متداول</li>
              <li onClick={menuLiClickColor}>بلاگ</li>
            </ul>
          </div>
        </>
      )}
    </header>
  );
}
