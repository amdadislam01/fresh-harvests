import React from "react";
import { Link } from "react-router";
const products = [
  { id: 1, name: "Mushroom", price: "$2.3/kg", image: "/images/mushroom.png" },
  {
    id: 2,
    name: "Mustard",
    price: "$1.3/kg",
    image: "/images/mustard.png",
    active: true,
  },
  { id: 3, name: "Orange", price: "$4.2/kg", image: "/images/orange.png" },
  {
    id: 4,
    name: "Pomegranate",
    price: "$11.2/kg",
    image: "/images/pomegranate.png",
  },
];
const RelatedProdut = () => {
  return (
    <div className="pt-12">
      <div className="text-center mb-10">
        <span className="inline-block bg-[#f1f5ec] rubik-font text-[#749b3f] text-md font-semibold px-4 py-2 rounded-md mb-3">
          Our Products
        </span>
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-2 rubik-font">
          Related products
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-sm p-4 text-center"
          >
            <Link to={`/product/${product.id}`}>
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
            <p className="text-gray-500 text-sm mb-4">{product.price}</p>

            <button className="w-full py-2 rounded-md text-md border transition rubik-font border-gray-300 hover:bg-[#FF6A1A] hover:text-white cursor-pointer">
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProdut;
