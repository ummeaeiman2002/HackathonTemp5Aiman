import React from "react";
import Featured from "../homepage/Featured";

// Mock product data (replace with real data from props/state)
const products = [
  { title: "Product 1", img: "/Pro/-1.png", updateDate: "2024-02-10", price: 23, discountPrice: 20 },
  { title: "Graphic Design", img: "https://cdn.sanity.io/images/oywqmg2v/production/2219cafc285ec13a2ed3f88aa36cbea852a11735-305x375.png", updateDate: "EnglishDepartment", price: 23, discountPrice: 20 },
  { title: "Product 3", img: "https://cdn.sanity.io/images/oywqmg2v/production/2219cafc285ec13a2ed3f88aa36cbea852a11735-305x375.png", updateDate: "2024-02-10", price: 23, discountPrice: 20 },
  { title: "Product 4", img: "https://cdn.sanity.io/images/oywqmg2v/production/2219cafc285ec13a2ed3f88aa36cbea852a11735-305x375.png", updateDate: "2024-02-10", price: 23, discountPrice: 20 }
];

export default function BestSeller() {
  return (
    <section className="bg-white lg:w-[73vw] mx-auto flex flex-col py-[48px] gap-[24px] items-center lg:items-start">
      <h3 className="text-[#252B42] text-2xl font-bold lg:text-start">
        BESTSELLER PRODUCTS
      </h3>
      <div className="flex flex-col gap-[24px] items-center lg:flex-row">
        {products.map((product, index) => (
          <Featured
          key={index}
          title={product.title}  
          img={product.img}  
          updateDate={product.updateDate}  // ✅ Now valid
          price={product.price}
          discountPrice={product.discountPrice}  // ✅ Fixed spelling
          href={`/product/${index}`}  // ✅ Added href (if required)
         />
        
        ))}
      </div>
    </section>
  );
}
