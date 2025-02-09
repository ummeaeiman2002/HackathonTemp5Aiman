import Image from "next/image";
import React from "react";
import { Products, icons } from "../../assets";

export default function ShopCategories() {
  return (
    <section className="bg-[#FAFAFA]">
      <div className="w-[1080px] h-[271px] mx-auto flex flex-col lg:flex-row lg:pb-[48px] gap-[18px] lg:gap-[15px] py-7">
        <Image src={Products.productList1} alt="" className="lg:w-[205px] lg:h-[223px] object-cover" />
        <Image src={Products.productList2} alt="" className="lg:w-[205px] lg:h-[223px] object-cover" />
        <Image src={Products.productList3} alt="" className="lg:w-[205px] lg:h-[223px] object-cover" />
        <Image src={Products.productList4} alt="" className="lg:w-[205px] lg:h-[223px] object-cover" />
        <Image src={Products.productList5} alt="" className="lg:w-[205px] lg:h-[223px] object-cover" />
      </div>
    </section>
  );
}
