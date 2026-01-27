import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      sizes: [],
    },
  });

  const submitHandler = async (product) => {
    try {
      const res = await fetch("http://localhost:5000/api/product/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Failed to create product");
        return;
      }

      reset();
      navigate("/");
    } catch (error) {
      alert("Server error");
    }
  };

  return (
    <div className="flex justify-center items-center p-5 min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg flex flex-col gap-6 border"
      >
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Create New T-Shirt
        </h1>

        <input
          className="outline-none w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          {...register("image")}
          type="url"
          placeholder="Image URL"
        />

        <input
          className="outline-none w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          {...register("title")}
          type="text"
          placeholder="Title"
        />

        <input
          className="outline-none w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          {...register("description")}
          type="text"
          placeholder="Description"
        />

        <input
          className="outline-none w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          {...register("category")}
          type="text"
          placeholder="Category"
        />

        <input
          className="outline-none w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          {...register("price", { valueAsNumber: true })}
          type="number"
          placeholder="Price"
        />

        <div className="w-full">
          <p className="text-sm font-semibold text-gray-700 mb-2">Available Sizes</p>

          <div className="flex gap-4 flex-wrap">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <label
                key={size}
                className="flex items-center gap-2 border px-3 py-2 rounded-lg cursor-pointer"
              >
                <input
                  type="checkbox"
                  value={size}
                  {...register("sizes")}
                  className="accent-blue-600"
                />
                <span>{size}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 mt-4 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 active:scale-95 transition"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
