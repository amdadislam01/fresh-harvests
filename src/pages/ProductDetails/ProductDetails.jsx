import React from "react";
import coconut from "../../assets/coconut.png";
import { FaCartArrowDown, FaHeart } from "react-icons/fa";
import RelatedProdut from "../../components/RelatedProduct/RelatedProdut";

const ProductDetails = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-16">
      <div className="overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-12">
          <div className="relative">
            <img
              src={coconut}
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
                Fruits
              </span>
              <h1 className="text-4xl font-bold mt-2 rubik-font">Coconut</h1>

              <div className="flex items-center gap-3 mt-4">
                <div className="flex text-yellow-400">★★★★★</div>
                <span className="text-gray-800 rubik-font font-bold">5.0</span>
                <span className="text-sm text-gray-500 rubik-font">
                  (5.0 1 review)
                </span>
              </div>

              <div className="mt-4">
                <span className="text-3xl font-bold text-orange-500 rubik-font">
                  $6.3/kg
                </span>
              </div>

              <p className="text-gray-700 mt-6 leading-relaxed">
                From our farm directly to your door, our fresh coconuts are
                harvested at the peak of ripeness, offering you a sweet,
                hydrating treat full of flavor. Packed with natural nutrients,
                coconut is perfect for a variety of culinary uses, from
                smoothies to savory dishes, or even for a refreshing drink
                straight from the shell.
              </p>

              <div className="flex items-center gap-6 mt-8 md:mt-20">
                <span className="text-gray-700 font-semibold rubik-font">Quantity</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <span className="px-4 py-2">-</span>
                  <span className="px-6 py-2 border-x border-gray-300 font-bold rubik-font">1</span>
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
              <p>
                Our coconuts are sustainably grown, ensuring the best quality
                and taste. Each coconut is handpicked and carefully prepared,
                offering you the freshest product possible. Rich in healthy
                fats, electrolytes, and essential nutrients, coconuts provide
                both hydration and nourishment. Whether you’re using the water,
                flesh, or milk, our coconuts bring versatility to your kitchen
                while supporting healthy living.
              </p>
              <p>
                Perfect for smoothies, desserts, curries, and more — let the
                natural sweetness of the coconut elevate your recipes. Enjoy the
                tropical goodness in its purest form, directly from nature.
              </p>
            </div>
          </div>
        </div>
      </div>
      <RelatedProdut />
    </div>
  );
};

export default ProductDetails;
