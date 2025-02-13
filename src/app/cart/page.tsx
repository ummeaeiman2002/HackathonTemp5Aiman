"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        setCart(JSON.parse(storedCart));
      } catch (error) {
        console.error("Error parsing cart data:", error);
      }
    }
  }, []);

  const handleRemoveItem = (id: string) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    const updatedCart = cart.map((item) =>
      item._id === id ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    router.push("/checkout");
  };

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = cart.length > 0 ? 10.0 : 0;
  const tax = subtotal * 0.08;
  const totalPrice = subtotal + shipping + tax;

  return (
    <div className="flex flex-col justify-center items-center gap-6 py-10">
      <h2 className="text-3xl font-bold">
        Your Cart {cart.length > 0 ? `(${cart.length} items)` : "is Empty"}
      </h2>

      {cart.length === 0 ? (
        <Link href="/products">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Go Shopping</button>
        </Link>
      ) : (
        <>
        
  <div className="lg:w-[70vw] w-[85vw] mx-auto gap-6 flex flex-col">
    {cart.map((item, index) => (
      <div key={item?._id || index} className="flex gap-6 items-center border shadow p-4">
        <img src={item.img} alt="" className="w-20 h-20 object-cover" />
    
                <div className="flex justify-between w-full">
                  <p>{item.title}</p>
                  <p>${item.discountPrice ?? item.price}</p>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) => handleUpdateQuantity(item._id, Number(e.target.value))}
                    className="w-12 border p-1"
                  />
                  <button onClick={() => handleRemoveItem(item._id)} className="text-red-500">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 border shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Order Summary</h3>
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Shipping: ${shipping.toFixed(2)}</p>
            <p>Tax (8%): ${tax.toFixed(2)}</p>
            <h2 className="text-2xl font-bold">Total: ${totalPrice.toFixed(2)}</h2>
            <button onClick={handleCheckout} className="bg-green-500 text-white px-4 py-2 rounded mt-4">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
