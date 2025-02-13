"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { client } from "@/sanity/lib/client";


interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  tags: string[];
}



const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const query = `*[_type == "product" && _id == "${id}"][0] {
        _id, title, price, description, discountPercentage,
        "imageUrl": productImage.asset->url, tags
      }`;
      const data = await client.fetch(query);
      setProduct(data);
    };

    if (id) fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Image src={product.imageUrl} alt={product.title} width={400} height={400} className="rounded-lg" />
      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
      <p className="text-lg text-gray-700">${product.price}</p>
      <p className="mt-2 text-gray-600">{product.description}</p>
    </div>
  );
};

export default ProductDetailsPage;
