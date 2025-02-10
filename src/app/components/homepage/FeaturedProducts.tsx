import React from "react";
import { Products } from "../../assets";
import { client } from "@/sanity/lib/client";
import Featured from "./Featured";


export default async function FeaturedProducts() {
  const response = await client.fetch(
    `*[_type=='product'][0..7]{title, _updatedAt,_id,  productImage{
      asset->{
        _id,
        url
      }
    }, price, dicountPercentage}`
  );
  console.log("p----------", response[0].dicountPercentage );

  return (
    <section className="min-w-[333px] w-[80vw] mx-auto py-24 flex flex-col gap-14">
      <div className="flex flex-col gap-3 text-center">
        <h2 className=" text-xl leading-[30px] text-[#737373]">
          Featured Products
        </h2>
        <h3 className="font-bold text-2xl ">
          BESTSELLER <br className="lg:hidden" /> PRODUCTS
        </h3>
        <p className="text-sm text-[#737373]">
          Pronlems trying to resolve <br className="lg:hidden" /> the conflict
          between
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-[30px] lg:justify-center lg:items-center mx-auto ">
        {response.map(
          (
            product: {
              title: string;
              _id:string;
              productImage: {
                asset: {
                  url: string;
                };
              };
              price: number;
              dicountPercentage: number;
              _updatedAt: string;
            },
            index: number
          ) => (
            <Featured
            key={product._id}
            href={`/product/${product._id}`}  // ✅ Added href with dynamic product ID
            title={product.title}
            img={product.productImage?.asset?.url || "https://cdn.sanity.io/images/oywqmg2v/production/2219cafc285ec13a2ed3f88aa36cbea852a11735-305x375.png"}
            price={product.price}
            discountPrice={
              product.price - (product.price * (product.dicountPercentage || 0)) / 100  // ✅ Fixed typo & added fallback
            }
          />
          

          )
        )}

        {/* upr wala dynamic h niche wala static. koi sa bhi uncomment krlo */}
        {/* <Featured img={Products.p6} />
        <Featured img={Products.p7} />
        <Featured img={Products.p8} />
        <Featured img={Products.p9} />
        <Featured img={Products.p10} />
        <Featured img={Products.p10} />
        <Featured img={Products.p1} /> */}
      </div>
    </section>
  );
}
