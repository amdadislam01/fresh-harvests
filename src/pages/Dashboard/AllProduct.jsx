import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axiosPublic from "../../api/axiosPublic";
import { toast } from "react-toastify";

const fetchProducts = async () => {
  const res = await axiosPublic.get("/products");
  return res.data.data;
};

const fetchCategories = async () => {
  const res = await axiosPublic.get("/category");
  return res.data.data;
};

const AllProduct = () => {
  const queryClient = useQueryClient();

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const { data: _categories = [] } = useQuery({
    queryKey: ["adminCategories"],
    queryFn: fetchCategories,
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => axiosPublic.delete(`/products/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
      toast.success("Product deleted successfully!");
    },
    onError: (err) => {
      toast.error("Failed to delete product.");
      console.error(err);
    },
  });

  const handleDelete = (id) => {
    deleteMutation.mutate(id);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="mx-auto max-w-7xl">
          <div className="animate-pulse">
            <div className="mb-8 h-10 w-64 rounded-lg bg-gray-200"></div>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-20 rounded-xl bg-gray-200"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen py-8 px-4 md:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            All Products
          </h1>
          <p className="text-gray-600">
            Manage your product inventory ({products.length} items)
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
                  <th className="px-6 py-5 text-left text-sm font-semibold uppercase tracking-wider">
                    #
                  </th>
                  <th className="px-6 py-5 text-left text-sm font-semibold uppercase tracking-wider">
                    Product Name
                  </th>
                  <th className="px-6 py-5 text-left text-sm font-semibold uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-5 text-left text-sm font-semibold uppercase tracking-wider">
                    Stock
                  </th>
                  <th className="px-6 py-5 text-left text-sm font-semibold uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-5 text-center text-sm font-semibold uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {products.map((p, i) => (
                  <tr
                    key={p.id}
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="px-6 py-5 text-sm text-gray-600">{i + 1}</td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        {p.images && p.images[0] ? (
                          <img
                            src={p.images[0]}
                            alt={p.productName}
                            className="h-12 w-12 rounded-lg object-cover border border-gray-200"
                          />
                        ) : (
                          <div className="h-12 w-12 rounded-lg bg-gray-200 border border-gray-300 flex items-center justify-center">
                            <span className="text-gray-400 text-xs">
                              No img
                            </span>
                          </div>
                        )}
                        <span className="font-medium text-gray-900">
                          {p.productName}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-sm font-semibold text-gray-800">
                      $ {p.price}
                    </td>
                    <td className="px-6 py-5">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                          p.stock > 10
                            ? "bg-green-100 text-green-800"
                            : p.stock > 0
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {p.stock} in stock
                      </span>
                    </td>
                    <td className="px-6 py-5 text-sm text-gray-600">
                      {p.category?.categoryName || "Uncategorized"}
                    </td>
                    <td className="px-6 py-5 text-center">
                      <button
                        onClick={() => handleDelete(p.id)}
                        disabled={deleteMutation.isPending}
                        className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-red-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {deleteMutation.isPending ? (
                          <>
                            <svg
                              className="animate-spin h-4 w-4"
                              viewBox="0 0 24 24"
                            >
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
                            Deleting...
                          </>
                        ) : (
                          "Delete"
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="md:hidden">
            {products.map((p, i) => (
              <div
                key={p.id}
                className="border-b border-gray-200 p-5 last:border-b-0 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-gray-500">
                      #{i + 1}
                    </span>
                    {p.images && p.images[0] ? (
                      <img
                        src={p.images[0]}
                        alt={p.productName}
                        className="h-16 w-16 rounded-xl object-cover border"
                      />
                    ) : (
                      <div className="h-16 w-16 rounded-xl bg-gray-200 border flex items-center justify-center">
                        <span className="text-gray-400 text-xs">No image</span>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => handleDelete(p.id)}
                    disabled={deleteMutation.isPending}
                    className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-red-700 disabled:opacity-70"
                  >
                    {deleteMutation.isPending ? "Deleting..." : "Delete"}
                  </button>
                </div>

                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {p.productName}
                </h3>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-gray-500">Price:</span>
                    <p className="font-semibold text-gray-900">$ {p.price}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Stock:</span>
                    <p>
                      <span
                        className={`inline-block rounded-full px-2 py-1 text-xs font-medium ${
                          p.stock > 10
                            ? "bg-green-100 text-green-800"
                            : p.stock > 0
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {p.stock}
                      </span>
                    </p>
                  </div>
                  <div className="col-span-2">
                    <span className="text-gray-500">Category:</span>
                    <p className="font-medium text-gray-900">
                      {p.category?.categoryName || "Uncategorized"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {products.length === 0 && (
          <div className="text-center py-20">
            <div className="mx-auto mb-6 h-32 w-32 rounded-full bg-gray-200"></div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No products found
            </h3>
            <p className="text-gray-500">Start by adding your first product!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllProduct;
