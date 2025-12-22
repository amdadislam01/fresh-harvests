import React, { useState } from "react";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import group1 from "../../assets/Group-1.png";

// Fetch categories from API
const fetchCategories = async () => {
  const res = await fetch("/api/api/v1/category");
  if (!res.ok) throw new Error("Failed to fetch categories");

  const data = await res.json();
  return ["All", ...data.data.map((c) => c.categoryName)];
};

const fetchAllProducts = async () => {
  const res = await fetch("/api/api/v1/products?status=active");
  if (!res.ok) throw new Error("Failed to fetch products");
  const data = await res.json();
  return data.data.map((p) => ({
    _id: p.id,
    name: p.productName,
    price: p.price,
    image: p.images,
    categoryName: p.category.categoryName, 
  }));
};

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const { data: allProducts = [], isLoading, isError } = useQuery({
    queryKey: ["allProducts"],
    queryFn: fetchAllProducts,
  });

  const products =
    activeCategory === "All"
      ? allProducts
      : allProducts
          .filter((p) => p.categoryName === activeCategory);

  return (
    <section className="py-16 relative">
      <div className="absolute right-4 -bottom-26 md:right-46">
        <img src={group1} alt="" />
      </div>
      <div className="absolute left-4 -bottom-28 md:left-26 md:-bottom-60 rotate-60">
        <img src={group1} alt="" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 pt-12">
        <div className="text-center mb-10">
          <span className="inline-block bg-[#f1f5ec] rubik-font text-[#749b3f] text-md font-semibold px-4 py-2 rounded-md mb-3">
            All Products
          </span>
          <h2 className="text-3xl md:text-6xl font-semibold text-gray-900 mb-2 rubik-font">
            All Products
          </h2>
        </div>

        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-md border text-sm rubik-font transition ${
                activeCategory === cat
                  ? "bg-[#749b3f] text-white border-[#749b3f]"
                  : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {isLoading && (
          <div className="text-center text-gray-500 text-lg">Loading products...</div>
        )}
        {isError && (
          <div className="text-center text-red-500 text-lg">Failed to load products</div>
        )}

        {!isLoading && !isError && (
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

                <h3 className="font-semibold text-gray-800 rubik-font">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-4">${product.price}/kg</p>

                <button className="w-full py-2 rounded-md text-md border transition rubik-font border-gray-300 hover:bg-[#FF6A1A] hover:text-white">
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Shop;
