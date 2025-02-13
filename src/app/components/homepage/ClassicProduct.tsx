"use client";
import Image from "next/image";
import React from "react";
import { Products } from "../../assets";

export default function ClassicProduct() {
  const product = {
    _id: "vita-classic-product",
    title: "Vita Classic Product",
    price: 16.48,
    discountPrice: 16.48, // No discount applied
    img: Products.p11, // Ensure this is a valid image URL
    href: "/products/vita-classic-product",
    quantity: 1,
  };

  const handleAddToCart = () => {
    const storedCart = localStorage.getItem("cart");
    let cart = storedCart ? JSON.parse(storedCart) : [];

    if (!Array.isArray(cart)) {
      cart = [];
    }

    const existingProductIndex = cart.findIndex((item: { _id: string; }) => item._id === product._id);

    if (existingProductIndex !== -1) {
      // If product exists, increase quantity
      cart[existingProductIndex].quantity += 1;
    } else {
      // Add new product
      cart.push(product);
    }

    // ✅ Save updated cart in `localStorage`
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.title} added to cart successfully!`);
  };

  return (
    <section className="pt-48 lg:px-[195px] text-center lg:text-start bg-[#23856D] flex flex-col lg:flex-row lg:justify-center items-center lg:items-end gap-[30px]">
      <div className="min-w-[333px] w-[60vw] lg:w-[510px] lg:h-[432px] mx-auto flex flex-col gap-[30px] lg:justify-center lg:mb-[112px]">
        <h1 className="text-white lg:text-xl">SUMMER 2020</h1>
        <h2 className="font-bold text-[40px] text-white lg:text-[58px]">Vita Classic <br /> Product</h2>
        <p className="text-white text-xl lg:text-sm">
          We know how large objects will act, We know <br className="lg:block hidden"/> how are objects will act, We know
        </p>
        <div className="flex flex-col gap-[20px] lg:gap-[34px] lg:flex-row lg:justify-start items-center">
          <p className="text-white font-bold text-2xl">${product.price.toFixed(2)}</p>
          <button
            className="text-sm font-bold rounded text-white bg-[#2DC071] px-8 py-3 lg:py-[15px] lg:px-[40px] w-fit"
            onClick={handleAddToCart} // ✅ Now adds the product to cart
          >
            ADD TO CART
          </button>
        </div>
      </div>
      <Image src={product.img} alt={product.title} className=""/>
    </section>
  );
}
