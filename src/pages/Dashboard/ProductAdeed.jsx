import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import axiosPublic from "../../api/axiosPublic";
import { toast } from "react-toastify";

const ProductAdded = () => {
  const { register, handleSubmit, reset, watch } = useForm();
  const [categories, setCategories] = useState([]);
  const [catsLoading, setCatsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");

  const axiosCategory = axios.create({
    baseURL: "https://test-2-tan-chi.vercel.app/api/v1",
  });

  const selectedCategory = watch("categoryId");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axiosCategory.get("/category");
        setCategories(res.data?.data || []);
      } catch (err) {
        console.log(err);
        setCategories([]);
      } finally {
        setCatsLoading(false);
      }
    };
    fetchCategories();
  }, []);

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      let categoryId = data.categoryId;

      if (newCategoryName.trim()) {
        const res = await axiosCategory.post("/category", {
          categoryName: newCategoryName.trim(),
        });
        categoryId = res.data?.data?.id;
      }

      if (!categoryId) {
        toast.error("Please select an existing category or create a new one.");
        setIsSubmitting(false);
        return;
      }

      const payload = {
        productName: data.productName,
        description: data.description,
        price: Number(data.price),
        stock: Number(data.stock),
        images: data.imageUrl ? [data.imageUrl.trim()] : [],
        categoryId,
      };

      await axiosPublic.post("/products", payload);

      toast.success("Product added successfully!");
      reset();
      setNewCategoryName("");
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Failed to add product.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen py-12 px-4">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Add New Product
          </h1>
          <p className="text-gray-600">Admin Only · Upload Products</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-6">
            <h2 className="text-2xl font-semibold text-white">
              Product Details
            </h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Product Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("productName", { required: true })}
                    placeholder="e.g., Premium Cotton T-Shirt"
                    className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-200 outline-none text-gray-800"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    {...register("description", { required: true })}
                    rows="5"
                    placeholder="Write a detailed description of the product..."
                    className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-200 outline-none resize-none text-gray-800"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Price ($) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      {...register("price", { required: true })}
                      placeholder="1299"
                      className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-200 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Stock Quantity <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      {...register("stock", { required: true })}
                      placeholder="50"
                      className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-200 outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Image URL
                  </label>
                  <input
                    {...register("imageUrl")}
                    placeholder="https://example.com/image.jpg"
                    className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-200 outline-none text-gray-800"
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    Provide a direct link to the main product image
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Select Category
                  </label>
                  <select
                    disabled={catsLoading}
                    {...register("categoryId")}
                    className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-200 outline-none text-gray-800 disabled:bg-gray-100"
                  >
                    <option value="">-- Choose a category --</option>
                    {catsLoading ? (
                      <option>Loading categories...</option>
                    ) : (
                      categories.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.categoryName}
                        </option>
                      ))
                    )}
                  </select>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-4 text-gray-500">OR</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Create New Category
                  </label>
                  <input
                    value={newCategoryName}
                    onChange={(e) => setNewCategoryName(e.target.value)}
                    placeholder="e.g., Winter Collection"
                    disabled={!!selectedCategory}
                    className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all duration-200 outline-none disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-800"
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    {selectedCategory &&
                      "Cannot create new category when one is already selected"}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none cursor-pointer"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-3">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Saving...
                  </span>
                ) : (
                  "Add Product"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProductAdded;
