"use client";
import React, { useState } from "react";
import { icons, Products } from "@/app/assets";
import Image from "next/image";

export default function TheProduct() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const images: any[] = [Products.p1, Products.p2];

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="w-[85vw] lg:w-[73vw] mx-auto py-[48px] flex flex-col lg:flex-row gap-[30px] ">
      <div className="flex flex-col gap-[30px] lg:w-[510px] lg:h-[546px]">
        <div className=" relative ">
          {/* crousel */}
          <Image
            src={images[currentIndex]}
            alt=""
            width={5000}
            height={100}
            className={`w-[348px] h-[277px] lg:w-[510px] lg:h-[450px] mx-auto object-cover   `}
          />

          <div className="flex justify-between">
            <button onClick={prev}>
              <Image
                src={icons.crouselPrev}
                alt=""
                width={100}
                height={100}
                className=" w-[24px] absolute left-[40px] top-[118px] lg:top-[258px]"
              />
            </button>
            <button onClick={next}>
              <Image
                src={icons.crouselNext}
                alt=""
                width={100}
                height={100}
                className=" w-[24px] absolute right-[40px] top-[118px] lg:top-[258px]"
              />
            </button>
          </div>
        </div>

        <div className="flex gap-[15px] py-[15px]">
          <Image
            src={images[0]}
            alt=""
            width={100}
            height={100}
            className={`w-[100px] h-[75px] object-cover ${currentIndex === 0 ? "opacity-100" : "opacity-40"}`}
          />
          <Image
            src={images[1]}
            alt=""
            width={100}
            height={100}
            className={`w-[100px] h-[75px] object-cover ${currentIndex === 1 ? "opacity-100" : "opacity-40"}`}
          />
        </div>
      </div>

      <div className="w-[full] lg:w-[510px]  px-[24px] flex flex-col gap-[20px]">
        {/* other content */}
        <h2 className="text-xl text-[#252B42]">Floating Phone</h2>

        <div className="flex gap-[5000px] items-center">
          <div className="flex gap-[6px]  ">
            <Image src={icons.star} alt="" />
            <Image src={icons.star} alt="" />
            <Image src={icons.star} alt="" />
            <Image src={icons.star} alt="" />
            <Image src={icons.star} alt="" />
          </div>
          <p className="text-[#737373] text-sm font-bold">10 Reviews</p>
        </div>

        <div className="flex flex-col gap-[10px]">
          <div className="flex gap-[10px] items-center">
            <h3 className="text-[#858585] font-bold line-through ">
              $original price
            </h3>
            <h3 className="text-[#252B42] font-bold text-xl">$discountprice</h3>
          </div>

          <div className="flex gap-[5px] text-sm font-bold items-center">
            <h4 className="text-[#737373]">Availability :</h4>
            <p className="text-[#23A6F0]">In Stock</p>
          </div>
        </div>

        <p className="text-sm text-justify text-[#858585]">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </p>

        <div className="w-full h-[2px] bg-[#858585]"></div>

        <div className="flex gap-[10px]">
          <button>
            <Image
              src={icons.heart2}
              alt=""
              className="bg-white border rounded-full p-[5px] w-[30px] h-[30px] hover:bg-[#23A6F0]"
            />
          </button>
          <button>
            <Image
              src={icons.cart2}
              alt=""
              className="bg-white border rounded-full p-[5px] w-[30px] h-[30px] hover:bg-[#23A6F0]"
            />
          </button>
          <button>
            <Image
              src={icons.eye}
              alt=""
              className="bg-white border rounded-full p-[5px] w-[30px] h-[30px] hover:bg-[#23A6F0]"
            />
          </button>
        </div>

        <div className="flex text-xs ">
          <p>tags will goes here dynamically</p>
        </div>
      </div>
    </section>
  );
}
