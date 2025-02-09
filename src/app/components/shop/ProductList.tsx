"use client";
import React, { useState, useEffect } from "react";
import Featured from "../homepage/Featured";
import { client } from "@/sanity/lib/client";

// Define the types for the product and product image
interface ProductImage {
  asset: {
    _id: string;
    url: string;
  };
}

interface Product {
  _id: string;
  title: string;
  productImage?: ProductImage | null;
  price: number;
  discountPercentage?: number;
  _updatedAt: string;
  category?: {
    title: string;
  };
}

export default function ProductList() {
  const [products, setProducts] = useState<Product[][]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [currentButtonSet, setCurrentButtonSet] = useState<number>(0);
  const chunkSize = 3;
  const buttonsPerPage = 3;

  // Fetch data inside useEffect
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response: Product[] = await client.fetch(
          `*[_type=='product']{
            _id,
            title,
            _updatedAt,
            productImage{
              asset->{
                _id,
                url
              }
            },
            price,
            discountPercentage,
            category {
              title
            }
          }`
        );

        // Divide products into chunks of 3
        const paginatedProducts: Product[][] = Array.from(
          { length: Math.ceil(response.length / chunkSize) },
          (_, i) => response.slice(i * chunkSize, i * chunkSize + chunkSize)
        );

        setProducts(paginatedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Handle page change
  const handlePageChange = (index: number) => {
    setCurrentPage(index);
  };

  // Handle next button group
  const handleNextButtonSet = () => {
    if ((currentButtonSet + 1) * buttonsPerPage < products.length) {
      setCurrentButtonSet(currentButtonSet + 1);
    }
  };

  // Handle previous button group
  const handlePreviousButtonSet = () => {
    if (currentButtonSet > 0) {
      setCurrentButtonSet(currentButtonSet - 1);
    }
  };

  return (
    <section className="py-20 flex flex-col items-center gap-[48px] w-[80vw] lg:w-[75vw] mx-auto">
      <div className="flex flex-col gap-14 lg:gap-[30px] lg:flex-row">
        {Array.isArray(products?.[currentPage]) &&
          products[currentPage].map((product) => (
            <Featured
              key={product._id}
              href={product._id}
              title={product.title}
              img={product.productImage?.asset?.url || "fallback-image-url"}
              // category={product.category?.title || "WOMEN"}
              price={product.price}
              dicountPrice={
                typeof product.price === "number" &&
                typeof product.discountPercentage === "number"
                  ? product.price - (product.price * product.discountPercentage) / 100
                  : product.price
              }
            />
          ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex rounded border-[#E8E8E8] gap-0 w-[313px] mt-8 shadow">
        <button
          className="text-[#BDBDBD] text-sm border-r-[1px] p-[25px]"
          disabled={currentButtonSet === 0}
          onClick={handlePreviousButtonSet}
        >
          First
        </button>
        {products
          .slice(
            currentButtonSet * buttonsPerPage,
            currentButtonSet * buttonsPerPage + buttonsPerPage
          )
          .map((_, index) => {
            const actualIndex = currentButtonSet * buttonsPerPage + index;
            return (
              <button
                key={actualIndex}
                className={`${
                  actualIndex === currentPage
                    ? "text-white bg-[#23A6F0]"
                    : "text-[#23A6F0] font-bold"
                } border-r-[1px] py-[25px] px-[20px] hover:text-white hover:bg-[#23A6F0]`}
                onClick={() => handlePageChange(actualIndex)}
              >
                {actualIndex + 1}
              </button>
            );
          })}
        <button
          className="text-[#23A6F0] font-bold p-[25px]"
          disabled={(currentButtonSet + 1) * buttonsPerPage >= products.length}
          onClick={handleNextButtonSet}
        >
          Next
        </button>
      </div>
    </section>
  );
}
