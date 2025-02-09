import { icons } from "@/app/assets";
import Image from "next/image";
import React from "react";

export default function Filter() {
  return (
    <section>
    <div className="bg-white w-[1440px] h[98px]">
      <div className="bg-white flex flex-col lg:flex-row lg:justify-between lg:w-[75vw] mx-auto gap-[24px] py-[24px] items-center">
        <p className="text-sm font-bold text-[#737373]">Showing all results</p>

        <div className="flex gap-[15px] justify-center items-center">
          <p className="text-sm font-bold text-[#737373]">Views</p>
          <div className="border rounded p-3">
            <Image src={icons.block} alt="" className="w-[16px] h-[16px]" />
          </div>
          <div className="border rounded p-3">
            <Image src={icons.todos} alt="" className="w-[16px] h-[16px] " />
          </div>
        </div>

        <div className="flex gap-[15px]">
          <select
            id=""
            name="Popularity"
            className="text-sm text-[#737373] bg-gray-100 border-[#DDDDDD] border rounded py-3 px-5"
          >
            <option value="popularity">Popularity</option>
            <option value="option1">option1</option>
            <option value="option2">option2</option>
            <option value="option3">option3</option>
          </select>
          <button className="bg-[#23A6F0] text-white py-3 px-5 rounded">
            Filter
          </button>
        </div>
      </div>
    </div>
    </section>
  );
}
