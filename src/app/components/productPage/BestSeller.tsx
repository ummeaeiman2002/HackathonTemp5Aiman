import React from "react";
import Featured from "../homepage/Featured";




export default function BestSeller() {
  return (
    <section className="bg-white lg:w-[73vw] mx-auto flex flex-col py-[48px] gap-[24px] items-center lg:items-start">
      <h3 className="text-[#252B42] text-2xl font-bold lg:text-start">
        BESTSELLER PRODUCTS
      </h3>
      <div className="flex flex-col gap-[24px] items-center lg:flex-row">
        <Featured
          title="{product.title}"
          img={
            "/Pro/-1.png"
          }
          updateDate="{product._updatedAt}"
          price={23}
          discountPrice={23}
        />
        <Featured
          title="{Graphic Design}"
          img={
          "https://cdn.sanity.io/images/oywqmg2v/production/2219cafc285ec13a2ed3f88aa36cbea852a11735-305x375.png"
          }
          updateDate="{EnglishDepartment}"
          price={23}
          discountPrice={23}
        />
        <Featured
          title="{product.title}"
          img={
            "https://cdn.sanity.io/images/oywqmg2v/production/2219cafc285ec13a2ed3f88aa36cbea852a11735-305x375.png"
          }
          updateDate="{product._updatedAt}"
          price={23}
          discountPrice={23}
        />
        <Featured
          title="{product.title}"
          img={
            "https://cdn.sanity.io/images/oywqmg2v/production/2219cafc285ec13a2ed3f88aa36cbea852a11735-305x375.png"
          }
          updateDate="{product._updatedAt}"
          price={23}
          discountPrice={23}
        />
      </div>
    </section>
  );
}
