"use client";
import React from "react";
import { useState } from "react";
import Header from "../../app/Header/Header";
import Image from "next/image";
import { MdSlowMotionVideo } from "react-icons/md";
import rocket from "../../assets/images/card-image-rocket.png";
import bank from "../../assets/images/card-image-bank.png";
import safe from "../../assets/images/card-image-safety.png";
// import defvid from "../../../public/videos/card-blue-video-cbg.webm"
import blufront from "../../assets/images/card-blue-render-front.png";
import bluback from "../../assets/images/card-blue-render-back.png";
const colorsData = {
  blue: {
    video: "/videos/card-blue-video-cbg.webm",
    front: "/cardsimg/card-blue-render-front.png",
    back: "/cardsimg/card-blue-render-back.png",
    hex: "#4e91e6",
  },
  red: {
    video: "/videos/card-red-video-cbg.webm",
    front: "/cardsimg/card-red-render-front.png",
    back: "/cardsimg/card-red-render-back.png",
    hex: "#ff0d3b",
  },
  green: {
    video: "/videos/card-green-video-cbg.webm",
    front: "/cardsimg/card-green-render-front.png",
    back: "/cardsimg/card-green-render-back.png",
    hex: "#00ab84",
  },
  purple: {
    video: "/videos/card-purple-video-cbg.webm",
    front: "/cardsimg/card-purple-render-front.png",
    back: "/cardsimg/card-purple-render-back.png",
    hex: "#6558b1",
  },
  yellow: {
    video: "/videos/card-yellow-video-cbg.webm",
    front: "/cardsimg/card-yellow-render-front.png",
    back: "/cardsimg/card-yellow-render-back.png",
    hex: "#ffd100",
  },
  rosegold: {
    video: "/videos/card-rosegold-video-cbg.webm",
    front: "/cardsimg/card-rosegold-render-front.png",
    back: "/cardsimg/card-rosegold-render-back.png",
    hex: "#e1a6ad",
  },
  black: {
    video: "/videos/card-black-video-cbg.webm",
    front: "/cardsimg/card-black-render-front.png",
    back: "/cardsimg/card-black-render-back.png",
    hex: "#000000",
  },
};

export default function () {
  const [selectedColor, setSelectedColor] = useState("blue");
  const current = colorsData[selectedColor];

  return (
    <div className="relative">
      <Header />
      <div className="bg-white text-black">
        {/* head top  */}
        <div className="flex justify-center items-center flex-col gap-4 py-10">
          <div className="flex flex-col justify-center items-center *:text-[40px] *:font-extrabold *:lg:text-[80px]">
            <div className="flex gap-3">
              <h1 className="text-[#4e91e6]">بلو، </h1>
              <h2>بانک</h2>
            </div>
            <div>ولی دوست داشتنی</div>
          </div>
          <p className="text-center p-3">
            بلو،بانکی تمام دیجیتال است که همه عملیات بانکی کاملا آنلاین و با
            اپلیکیشن بلو انجام می‌شود.
          </p>
          <button className="cursor-pointer rounded-lg text-[18px] outline-none font-bold flex justify-center items-center bg-[#4e91e6] text-white w-[200px] p-3">
            دانلود اپلیکیشن
          </button>
          <div className="cursor-pointer text-[#4e91e6] flex justify-center items-center gap-3">
            <span className="flex justify-center items-center text-[22px]">
              <MdSlowMotionVideo />
            </span>
            <h5 className=" text-[20px]">ویدیو معرفی بلو</h5>
          </div>
        </div>
        {/* end of head top */}
        {/* blu specialities */}

        {/* سریع  */}
        <div className="bg-white flex justify-center items-center flex-col p-3">
          <div className="lg:w-1/2 w-full flex flex-col-reverse lg:flex-row justify-center items-center py-5">
            <div>
              <Image
                src={rocket}
                alt="card-image-rocket"
                className="object-cover "
              />
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-[20px]">سریع</h2>
              <p>
                انجام تمام کارهای بانکی مثل بازکردن حساب، گرفتن وام و... در کمتر
                از ۷ دقیقه
              </p>
            </div>
          </div>
        </div>
        {/* سریع  */}
        {/* آسان  */}
        <div className="bg-white flex justify-center items-center flex-col p-3">
          <div className="lg:w-1/2 w-full flex flex-col lg:flex-row justify-center items-center py-5">
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-[20px]">آسان</h2>
              <p>
                انجام تمام کارهای بانکی به صورت آنلاین فقط از طریق اپلیکیشن بلو
              </p>
            </div>
            <div>
              <Image
                src={bank}
                alt="card-image-rocket"
                className="object-cover "
              />
            </div>
          </div>
        </div>
        {/* آسان  */}
        {/* امن  */}
        <div className="bg-white flex justify-center items-center flex-col p-3">
          <div className="lg:w-1/2 w-full flex flex-col-reverse lg:flex-row justify-center items-center py-5">
            <div>
              <Image
                src={safe}
                alt="card-image-rocket"
                className="object-cover "
              />
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-[20px]">امن</h2>
              <p>
                کوتاه شدن دست کلاه‌برداران مجازی و حقیقی از سرمایه‌ی شما با
                استفاده از سرویس‌های باکس پس‌انداز و مسدود سازی کارت و....
              </p>
              <div className="*:text-[#4e91e6] flex justify-start items-center gap-2 *:text-[18px]">
                <span></span>
                <a href="#">راهنمای باز کردن حساب</a>
              </div>
            </div>
          </div>
        </div>
        {/* امن  */}

        {/* end of blu specialities */}
        
        {/* بلو فقط آبی نیست  */}
        <div className="w-full p-3 flex flex-col justify-center items-center gap-3">
          <h2 className="text-[25px] font-extrabold">بلو فقط آبی نیست</h2>
          <h6 className="text-gray-400">کارت های بلو</h6>
        </div>
        <div className="w-full flex justify-center items-center py-5">
          <div className="lg:w-2/3 flex gap-3 w-full p-3">
            {/* بخش وسط */}
            <div className="flex justify-center items-center lg:w-2/3 w-full bg-[#eef4fc] rounded-2xl">
              {/* رنگ‌ها */}
              <div className="w-1/4 p-3 flex flex-col justify-center items-center gap-5">
                {Object.keys(colorsData).map((color) => (
                  <div
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`flex items-center justify-center w-10 h-10  rounded-full transition-all duration-200
      ${selectedColor === color ? "ring-2 ring-offset-2 ring-gray-400" : ""}
    `}
                  >
                    <div
                      className="w-9 h-9 md:w-10 md:h-10 rounded-full cursor-pointer"
                      style={{ backgroundColor: colorsData[color].hex }}
                    />
                  </div>
                ))}
              </div>

              {/* ویدیو */}
              <div className="w-3/4">
                <video
                  key={current.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="bg-[#eef4fc] h-auto"
                >
                  <source src={current.video} type="video/webm" className="bg-transparent"/>
                  مرورگر شما از ویدیو پشتیبانی نمی‌کند.
                </video>
              </div>
            </div>

            {/* بخش چپ: عکس‌ها */}
            <div className="hidden w-1/2 lg:flex lg:flex-col lg:justify-center lg:gap-3 *:bg-[#eef4fc] *:flex *:justify-center *:rounded-2xl *:h-[355px]">
              <div className="items-start">
                <Image
                  src={current.back}
                  alt="card back"
                  width={300}
                  height={200}
                  className="w-2/3"
                />
              </div>
              <div className="items-end">
                <Image
                  src={current.front}
                  alt="card front"
                  width={300}
                  height={200}
                  className="w-2/3"
                />
              </div>
            </div>
          </div>
        </div>
        {/* بلو فقط آبی نیست  */}
      </div>
    </div>
  );
}
