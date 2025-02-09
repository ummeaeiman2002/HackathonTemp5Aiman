// parent of Product
import React from "react";
import Product from "./Product";
import { Products } from "../../assets";

export default function Editors() {
  return (
    <section className=" py-24  bg-[#FAFAFA]">
      <div className="min-w-[333px] w-[80vw] mx-auto flex flex-col gap-14">
        <div className="flex flex-col gap-3 text-center">
          <h2 className="font-bold text-2xl ">EDITOR'S PICK</h2>
          <p className="text-sm text-[#737373]">
            Pronlems trying to resolve <br className="lg:hidden" /> the conflict
            between
          </p>
        </div>

        <div className=" flex flex-col lg:flex-row gap-5 lg:w-[75vw] lg:h-[34vw] mx-auto ">
     
          
          <Product p={Products.p1} text="MEN"/>
          <Product p={Products.p2} text="WOMEN" />
          {/* <Product p={Products.p3} text="ACCESSORIES" /> */}
          <Product p={Products.p4} text="KIDS" />
        </div>
      </div>
    </section>
  );
}
