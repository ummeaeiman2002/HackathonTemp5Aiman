import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/products";
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

interface ProductsPageProps {
  params: { slug: string }; // ✅ Corrected type (params should not be a Promise)
}

// ✅ Ensure getProduct returns a Product or null
async function getProduct(slug: string): Promise<Product | null> {
  if (!slug) return null; // ✅ Prevents query errors if slug is missing

  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      image,
      price
    }`, 
    { slug }
  );
}

export default async function ProductPage({ params }: ProductsPageProps) {
  const { slug } = params;

  // ✅ Debugging: Ensure slug exists
  if (!slug) {
    console.error("❌ Error: Slug is missing!");
    return <div className="text-center text-red-500">Invalid product URL</div>;
  }

  const product = await getProduct(slug);

  // ✅ Handle case where the product does not exist
  if (!product) {
    return <div className="text-center text-gray-500">Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="aspect-square">
          {product.image ? (
            <Image
              src={urlFor(product.image)?.url() || "/placeholder.jpg"} // ✅ Fallback if image is missing
              alt={product.title} 
              width={500}
              height={500}
              className="rounded-lg shadow-md object-cover"
            />
          ) : (
            <div className="text-center text-gray-500">No image available</div>
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-2xl font-semibold">${product.price}</p>
        </div>
      </div>
    </div>
  );
}











// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import Image from "next/image";
// import sanity from "@/sanity/lib/sanityclient";

// interface Product {
//   _id: string;
//   title: string;
//   price: number;
//   description: string;
//   discountPercentage: number;
//   imageUrl: string;
//   tags: string[];
// }

// const ProductDetailsPage = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState<Product | null>(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       const query = `*[_type == "product" && _id == "${id}"][0] {
//         _id, title, price, description, discountPercentage,
//         "imageUrl": productImage.asset->url, tags
//       }`;
//       const data = await sanity.fetch(query);
//       setProduct(data);
//     };

//     if (id) fetchProduct();
//   }, [id]);

//   if (!product) return <p className="text-center text-gray-600">Loading...</p>;

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <Image src={product.imageUrl} alt={product.title} width={500} height={500} className="rounded-lg mx-auto" />
//       <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
//       <p className="text-lg text-gray-700">${product.price} <span className="text-red-500">-{product.discountPercentage}%</span></p>
//       <p className="mt-2 text-gray-600">{product.description}</p>
//       <div className="mt-4">
//         {product.tags.map((tag) => (
//           <span key={tag} className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md mr-2">#{tag}</span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductDetailsPage;
