import React from "react";
import Image from "next/image"; // Import Next.js Image component;
import { footerIcons } from "@/app/assets";



export default function NotificationBar() {
  return (
    <div className="bg-[#252B48]">
      <div className="max-w-[1400px] mx-auto px-[50px] text-white flex justify-between items-center h-[60px]">
        {/* Left Section: Contact Info */}
        <div className="flex gap-[20px]">
          <div className="flex gap-[5px] items-center">
            <i className="bi bi-telephone"></i>
            <p  className="text-sm md:text-base">(225) 555-0118</p>
          </div>

          <div className="flex gap-[5px] items-center">
            <i className="bi bi-envelope"></i>
            <p>michelle.rivera@example.com</p>
          </div>
        </div>

        {/* Center Section: Offer */}
        <div className="text-center">
          <p className="w-full md:w-auto text-center text-sm md:text-base mt-2 md:mt-0">Follow Us and get a chance to win 80% off</p>
        </div>

         {/* Right Section: Social Icons */}
         <div className="flex gap-[10px] items-center">
          <p className="text-sm md:text-base">Follow Us:</p>
          <div className="flex gap-[10px]">
          </div>
        </div>
      </div>
    </div>
  );
}
