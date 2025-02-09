"use client"; // Mark this file as a Client Component

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type CartItem = {
  _id?: string;
  title: string;
  price: string;
  imageUrl: string;
  quantity: number;
};

type ShippingDetails = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
};

export default function Checkout() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const [shippingDetails, setShippingDetails] = useState<ShippingDetails>({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        if (Array.isArray(parsedCart)) {
          setCart(parsedCart);
        }
      } catch (error) {
        console.error("Error parsing cart:", error);
      }
    }
  }, []);

  const subtotal = cart.reduce((total, item) => total + Number(item.price) * item.quantity, 0);
  const shipping = 10.0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitShipping = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSubmitPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStep(3);
    setIsLoading(false);
    localStorage.removeItem("cart");
  };

  const renderOrderSummary = () => (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
      <div className="space-y-3">
        {cart.map((item, index) => (
          <div key={item._id ? item._id : `${item.title}-${index}`} className="flex justify-between text-sm">
            <span className="text-gray-600">
              {item.title} x {item.quantity}
            </span>
            <span className="font-medium">${(Number(item.price) * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <div className="h-px bg-gray-200 my-4"></div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Shipping</span>
          <span className="font-medium">${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Tax</span>
          <span className="font-medium">${tax.toFixed(2)}</span>
        </div>
        <div className="h-px bg-gray-200 my-4"></div>
        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span className="text-blue-600">${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );

  const renderOrderComplete = () => (
    <div className="text-center py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Confirmed!</h2>
      <p className="text-gray-600 mb-6">Thank you for your order. A confirmation email will be sent shortly.</p>
      <button
        onClick={() => router.push("/")}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
      >
        Continue Shopping
      </button>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            {step === 1 && (
              <>
                <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
                <form onSubmit={handleSubmitShipping} className="space-y-4">
                  <input type="text" name="firstName" required placeholder="First Name" value={shippingDetails.firstName} onChange={handleInputChange} className="w-full p-2 border rounded-lg" />
                  <input type="text" name="lastName" required placeholder="Last Name" value={shippingDetails.lastName} onChange={handleInputChange} className="w-full p-2 border rounded-lg" />
                  <input type="email" name="email" required placeholder="Email" value={shippingDetails.email} onChange={handleInputChange} className="w-full p-2 border rounded-lg" />
                  <input type="text" name="address" required placeholder="Address" value={shippingDetails.address} onChange={handleInputChange} className="w-full p-2 border rounded-lg" />
                  <input type="text" name="city" required placeholder="City" value={shippingDetails.city} onChange={handleInputChange} className="w-full p-2 border rounded-lg" />
                  <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg">Continue to Payment</button>
                </form>
              </>
            )}

            {step === 2 && (
              <>
                <h2 className="text-2xl font-bold mb-6">Payment Information</h2>
                <form onSubmit={handleSubmitPayment} className="space-y-4">
                  <input type="text" required placeholder="Card Number" className="w-full p-2 border rounded-lg" />
                  <input type="text" required placeholder="MM/YY" className="w-full p-2 border rounded-lg" />
                  <input type="text" required placeholder="CVV" className="w-full p-2 border rounded-lg" />
                  <button type="submit" disabled={isLoading} className="w-full py-3 bg-blue-600 text-white rounded-lg">{isLoading ? "Processing..." : "Place Order"}</button>
                </form>
              </>
            )}

            {step === 3 && renderOrderComplete()}
          </div>
        </div>

        <div className="lg:col-span-1">{renderOrderSummary()}</div>
      </div>
    </div>
  );
}
