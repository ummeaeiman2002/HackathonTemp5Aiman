"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import { Product } from "../../../types/products";
import sanity from "@/sanity/lib/sanityclient";
import { addToCart } from "../actions/actions";
import Link from "next/link";
import { useRouter } from "next/navigation";


const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
  
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product"] {
          _id,
          title,
          price,
          description,
          discountPercentage,
          "imageUrl": productImage.asset->url,
          tags
        }`;
      
        const data = await sanity.fetch(query);
        setProducts(data);
      } catch (error) {
        console.error("Error Fetching Products:", error);
      }
    };

    fetchProducts();
  }, []);
   
  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    alert(`${product.productName} added to cart successfully!`);
    addToCart(product);
  
   }


  return (
    <div className="p-4">
      <h2 className="text-center text-slate-800 mt-4 mb-2">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => router.push(`/products/${product._id}`)}
            // Navigate to dynamic route
          >






    <Link href={`/components/products/${product.slug?.current}`} passHref>
      <div className="block p-4 border rounded-lg hover:shadow-lg transition">
        {product.imageUrl && (
          <Image
            src={product.imageUrl}
            alt={product.title || "Product Image"}
            width={300}
            height={300}
            className="w-full h-48 object-cover rounded-md"
          />
        )}
        <h2 className="text-lg font-semibold mt-4">{product.title}</h2>
        <p className="text-slate-800 mt-2">${product.price}</p>
      </div>
    </Link>
            <button
           className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md 
           hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-out"

            onClick={(e) => handleAddToCart(e, product)}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;