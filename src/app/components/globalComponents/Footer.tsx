import Image from "next/image";
import React from "react";
import { footerIcons } from "../../assets";

export default function Footer() {
  return (
    <>
      <footer className="pt-24 lg:pt-0 flex flex-col gap-20 ">
        {/* Footer Header */}
        <div className="bg-[#FAFAFA] pt-5 ">
          <div className="flex flex-row justify-between items-center w-[75vw] mx-auto py-10">
            {/* Left Side: Title */}
            <h1 className="text-2xl font-bold">Bandage</h1>

            {/* Right Side: Social Icons */}
            <div className="flex gap-[20px]">
              <Image src={footerIcons.facebook} alt="Facebook" width={24} height={24} />
              <Image src={footerIcons.instagram} alt="Instagram" width={24} height={24} />
              <Image src={footerIcons.twitter} alt="Twitter" width={24} height={24} />
            </div>
          </div>
        </div>


        {/* Middle Section */}
        <div className="bg-white">
          <div className="max-w-[1050px] mx-auto py-8 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {/* Company Info */}
              <div>
                <h3 className="font-bold mb-4 text-[16px]">Company Info</h3>
                <ul className="space-y-1 text-[#737373] font-medium text-[14px]">
                  <li><a href="/" className="hover:underline">About Us</a></li>
                  <li><a href="/" className="hover:underline">Carrier</a></li>
                  <li><a href="/" className="hover:underline">We are hiring</a></li>
                  <li><a href="/" className="hover:underline">Blog</a></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="font-bold mb-4 text-[16px]">Legal</h3>
                <ul className="space-y-1 text-[#737373] font-medium text-[14px]">
                  <li><a href="/" className="hover:underline">Privacy Policy</a></li>
                  <li><a href="/" className="hover:underline">Terms of Use</a></li>
                  <li><a href="/" className="hover:underline">Refund Policy</a></li>
                </ul>
              </div>

              {/* Features */}
              <div>
                <h3 className="font-bold mb-4 text-[16px]">Features</h3>
                <ul className="space-y-1 text-[#737373] font-medium text-[14px]">
                  <li><a href="/" className="hover:underline">Business Marketing</a></li>
                  <li><a href="/" className="hover:underline">User Analytics</a></li>
                  <li><a href="/" className="hover:underline">Live Chat</a></li>
                  <li><a href="/" className="hover:underline">Unlimited Support</a></li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="font-bold mb-4 text-[16px]">Resources</h3>
                <ul className="space-y-1 text-[#737373] font-medium text-[14px]">
                  <li><a href="/" className="hover:underline">iOS & Android</a></li>
                  <li><a href="/" className="hover:underline">Watch a Demo</a></li>
                  <li><a href="/" className="hover:underline">Customers</a></li>
                  <li><a href="/" className="hover:underline">API</a></li>
                </ul>
              </div>

              {/* Get in Touch */}
              <div className="col-span-2">
                <h3 className="font-bold mb-4 text-[16px]">Get In Touch</h3>
                <form className="flex flex-col sm:flex-row gap-2">
                  <input
                    className="bg-[#F9F9F9] p-2 rounded-md border border-[#E6E6E6] w-full sm:w-auto"
                    placeholder="Your Email"
                    type="email"
                  />
                  <button className="bg-[#23A6F0] px-4 py-2 text-white rounded-md" type="submit">
                    Subscribe
                  </button>
                </form>
                <p className="text-[#737373] text-sm mt-2">Lore imp sum dolor Amit</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-[#FAFAFA]">
          <div className="max-w-[1050px] mx-auto flex justify-center items-center h-[75px] px-4 text-center">
            <p className="text-sm text-[#737373]">
              Made with love by Aiman Ahsan. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
