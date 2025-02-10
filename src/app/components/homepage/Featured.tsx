"use client"
import React, { useState } from "react";
import Link from "next/link";

interface FeaturedProps {
  title: string;
  img: string;
  price: number;
  discountPrice: number;
  href?: string;
  updateDate?: string;
}

const Featured: React.FC<FeaturedProps> = ({ title, img, price, discountPrice, href, updateDate }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    alert(`Added ${quantity}x "${title}" to cart!`);
    // TODO: Implement actual cart functionality (e.g., Redux, Context API, Local Storage)
  };

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white w-64 flex flex-col items-center">
      <Link href={href || "#"} className="block">
        <img src={img} alt={title} className="w-full h-48 object-cover rounded-md" />
      </Link>
      <h3 className="text-lg font-semibold mt-2 text-center">{title}</h3>
      {updateDate && <p className="text-gray-500 text-sm text-center">Updated: {updateDate}</p>}

      <div className="text-center mt-2">
        <p className="text-gray-700">
          Price: <span className="font-bold">${price}</span>
        </p>
        <p className="text-red-500">
          Discount Price: <span className="font-bold">${discountPrice}</span>
        </p>
      </div>

      {/* Quantity Selector */}
      <div className="flex items-center gap-2 mt-3">
        <button
          className="px-3 py-1 bg-gray-200 rounded text-lg"
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
        >
          -
        </button>
        <span className="text-lg font-semibold">{quantity}</span>
        <button
          className="px-3 py-1 bg-gray-200 rounded text-lg"
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </button>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Featured;
