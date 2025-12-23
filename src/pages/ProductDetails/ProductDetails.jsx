import React, { useEffect, useState } from "react";
import { FaCartArrowDown, FaHeart } from "react-icons/fa";
import RelatedProdut from "../../components/RelatedProduct/RelatedProdut";
import { useParams } from "react-router";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("/api/v1/products");
        const result = await response.json();

        const productData = result.data.find((p) => p.id === id);

        setProduct(productData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  console.log(product);

  if (loading) {
    return <div className="text-center py-20">Loading Product...</div>;
  }

  if (!product) {
    return <div className="text-center py-20">Product not found.</div>;
  }
  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-16">
      <div className="overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-12">
          <div className="relative">
            <img
              src={product.images}
              alt="Coconut"
              className="w-full  rounded-xl object-cover shadow border border-gray-100"
            />
            <div className="flex justify-center mt-4 gap-2">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <span className="text-sm text-[#749b3f] bg-[#ecf0e6] px-2 py-1.5 rounded-md rubik-font uppercase tracking-wider">
                {product.category.categoryName}
              </span>
              <h1 className="text-4xl font-bold mt-2 rubik-font">
                {product.productName}
              </h1>

              <div className="flex items-center gap-3 mt-4">
                <div className="flex text-yellow-400">★★★★★</div>
                <span className="text-gray-800 rubik-font font-bold">5.0</span>
                <span className="text-sm text-gray-500 rubik-font">
                  (5.0 1 review)
                </span>
              </div>

              <div className="mt-4">
                <span className="text-3xl font-bold text-orange-500 rubik-font">
                  $ {product.price}/kg
                </span>
              </div>

              <p className="text-gray-700 mt-6 leading-relaxed">
                {product.description}
              </p>

              <div className="flex items-center gap-6 mt-8 md:mt-20">
                <span className="text-gray-700 font-semibold rubik-font">
                  Quantity
                </span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <span className="px-4 py-2">-</span>
                  <span className="px-6 py-2 border-x border-gray-300 font-bold rubik-font">
                    1
                  </span>
                  <span className="px-4 py-2">+</span>
                </div>
                <span className="text-gray-500">/kg</span>
              </div>

              <div className="flex flex-col md:flex-row gap-4 mt-10">
                <div className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 bg-gray-50">
                  <FaHeart />
                  Save as favorite
                </div>
                <div className="flex items-center gap-2 px-8 py-3 bg-orange-500 text-white rounded-lg shadow-md">
                  <FaCartArrowDown />
                  Add to cart
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex px-6 md:px-12 gap-3 pt-4 pb-4">
            <div className="px-6 py-3 font-medium rounded-lg bg-[#749B3F] text-white rubik-font">
              Description
            </div>
            <div className="px-6 py-3 font-medium rounded-lg text-gray-600 bg-gray-100 ">
              Reviews <span className="text-sm">(1)</span>
            </div>
          </div>

          <div className="ml-6 md:ml-12 px-12 py-8 bg-[#F4F6F6] rounded-lg">
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </div>
      <RelatedProdut
        categoryId={product?.categoryId}
        currentProductId={product.category.id}
      />
    </div>
  );
};

export default ProductDetails;
