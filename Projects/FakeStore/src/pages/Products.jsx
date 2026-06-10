import React from "react";

const Products = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-6 p-6">
        <div className="border rounded-lg shadow-sm p-3">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
            alt=""
            className="w-full h-60 object-contain"
          />

          <h2 className="mt-3 text-lg">
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
          </h2>

          <div className="flex items-center gap-2 mt-2">
            <span>3.9 ★★★★★</span>
            <span className="text-blue-500">(120)</span>
          </div>

          <div className="mt-3">
            <span className="text-3xl font-semibold">₹109.95</span>
          </div>

          <button className="w-full bg-yellow-400 rounded-full py-2 mt-4 hover:bg-yellow-500">
            Add to Cart
          </button>
        </div>

        {/* <div className="border-2 border-dashed rounded-lg h-[500px] flex items-center justify-center text-gray-400">
          Add Product Here
        </div>

        <div className="border-2 border-dashed rounded-lg h-[500px] flex items-center justify-center text-gray-400">
          Add Product Here
        </div>

        <div className="border-2 border-dashed rounded-lg h-[500px] flex items-center justify-center text-gray-400">
          Add Product Here
        </div> */}
      </div>

      <div className="p-6">
        <div className="flex border rounded-lg shadow-sm p-4 gap-6 hover:shadow-md">
          <div className="w-64 h-64 flex items-center justify-center">
            <img
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
              alt=""
              className="h-full object-contain"
            />
          </div>

          <div className="flex-1">

            <h2 className="text-3xl font-medium leading-tight">
              Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
            </h2>

            <div className="flex items-center gap-2 mt-3">
              <span className="text-lg">3.9</span>
              <span className="text-orange-500">★★★★★</span>
              <span className="text-blue-600">(120)</span>
            </div>

            <div className="mt-3">
              <span className="text-5xl font-medium">₹109.95</span>
            </div>

            <button className="mt-5 bg-yellow-400 hover:bg-yellow-500 px-28 py-3 rounded-full text-xl">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
