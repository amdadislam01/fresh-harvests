import React from "react";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { useCart } from "../../context/CartContext";

const fetchRelatedProducts = async (categoryId, currentProductId) => {
  const res = await fetch(`/api/v1/products?category=${categoryId}`);
  if (!res.ok) {
    throw new Error("Failed to fetch related products");
  }

  const data = await res.json();

  return data.data
    .filter((p) => p.categoryId !== currentProductId)
    .slice(0, 4)
    .map((p) => ({
      _id: p.id,
      name: p.productName,
      price: p.price,
      image: Array.isArray(p.images) ? p.images[0] : "",
    }));
};

const RelatedProdut = ({ categoryId, currentProductId }) => {
  const { addToCart } = useCart();
  const {
    data: products = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["related-products", categoryId],
    queryFn: () => fetchRelatedProducts(categoryId, currentProductId),
    enabled: !!categoryId,
  });

  return (
    <div className="pt-12">
      <div className="text-center mb-10">
        <span className="inline-block bg-[#f1f5ec] rubik-font text-[#749b3f] text-md font-semibold px-4 py-2 rounded-md mb-3">
          Our Products
        </span>
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-2 rubik-font">
          Related Products
        </h2>
      </div>

      {isLoading && (
        <div className="text-center text-gray-500 text-lg">
          Loading products...
        </div>
      )}
      {isError && (
        <div className="text-center text-red-500 text-lg">
          Failed to load products
        </div>
      )}

      {!isLoading && !isError && products.length === 0 && (
        <div className="text-center text-gray-500 text-lg">
          No related products found.
        </div>
      )}

      {!isLoading && !isError && products.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-xl shadow-sm p-4 text-center hover:shadow-md transition"
            >
              <Link to={`/product/${product._id}`}>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-36 object-contain mx-auto"
                  />
                </div>
              </Link>

              <h3 className="font-semibold text-gray-800 rubik-font">
                {product.name}
              </h3>
              <p className="text-gray-500 text-sm mb-4">${product.price}/kg</p>

              <button
                onClick={() => addToCart(product)}
                className="w-full py-2 rounded-md text-md border transition rubik-font border-gray-300 hover:bg-[#FF6A1A] hover:text-white cursor-pointer"
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RelatedProdut;
