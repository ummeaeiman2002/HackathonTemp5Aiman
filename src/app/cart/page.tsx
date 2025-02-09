"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const [cart, setCart] = useState<
    {
      img: string;
      title: string;
      category: string;
      price: number;
      discountPrice: number;
      href: string;
      quantity: number;
    }[]
  >([]);
  
  const router = useRouter();

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const handleRemoveItem = (href: string) => {
    const updatedCart = cart.filter((item) => item.href !== href);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleUpdateQuantity = (href: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    const updatedCart = cart.map((item) =>
      item.href === href ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    router.push("/checkout");
  };

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 10.0;
  const tax = subtotal * 0.08;
  const totalPrice = subtotal + shipping + tax;

  return (
    <div className="flex flex-col justify-center items-center gap-[50px] py-[10px]">
      <h2 className="text-3xl font-bold">Your Cart has ({cart.length}) items</h2>

      <div className="lg:w-[70vw] w-[85vw] mx-auto gap-[20px] flex flex-col">
        
      {cart.map((item, index) => (
  <div key={`${item.href}-${index}`} className="flex gap-[10px] lg:gap-[20px] items-center border shadow lg:pb-[10px]">
    <img src={item.img || "/fallback-image-url"} alt="" className="w-[100px] h-[100px] object-cover" />
    <div className="flex justify-between w-full">
      <p>{item.title}</p>
      <p>${item.discountPrice ?? item.price}</p>
      <button onClick={() => handleRemoveItem(item.href)}>Remove</button>
    </div>
          </div>
        ))}
      </div>

      <button onClick={handleCheckout} className="bg-blue-500 text-white px-4 py-2 rounded">Checkout</button>
    </div>
  );
}
