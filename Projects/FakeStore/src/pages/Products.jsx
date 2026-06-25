import React, { useEffect, useMemo, useState } from "react";
import { FaStar } from "react-icons/fa";
import { data } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    let active = true;

    // setIsLoading(true);

    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        if (active) {
          setProducts(data);
        }
      })
      .catch(() => {
        if (active) {
          setIsError(true);
        }
      })
      .finally(() => {
        if (active) {
          setIsLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(products.map((p) => p.category)));
    return ["all", ...unique];
  }, [products]);

  const visibleProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      <div className=" max-w-7xl mx-auto px-6 py-10">
        <div className=" mb-8">
          <h1 className=" font-display text-3xl sm:text-4xl font-bold text-slate-900">
            All Products
          </h1>
          <p className=" text-slate-600 mt-2">
            {products.length > 0
              ? `${visibleProducts.length} items`
              : "Loading the catalog...."}
          </p>
        </div>

        {categories.length > 1 && (
          <div className=" flex flex-wrap gap-2.5 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition border ${activeCategory === cat ? "bg-blue-600 text-white border-blue-600" : "bg-white text-slate-700 hover:border-blue-300"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {isError ? (
          <div className=" text-center py-24">
            <p className=" text-slate-700 font-medium">
              The catalog didn't load.
            </p>
            <p className=" text-slate-500 text-sm mt-1">
              Check your connection and refresh the page.
            </p>
          </div>
        ) : isLoading ? (
          <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className=" bg-white border border-slate-200 rounded-2xl p-4 animate-pulse"
              >
                <div className=" bg-slate-100 h-48 rounded-xl" />
                <div className=" h-3 bg-slate-100 rounded mt-4 w-3/4" />
                <div className="h-3 bg-slate-100 rounded mt-2 w-1/2" />
                <div className="h-8 bg-slate-100 rounded-full mt-4" />
              </div>
            ))}
          </div>
        ) : (
          <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {visibleProducts.map((product) => (
              <div
                key={product.id}
                className=" bg-white border border-slate-200 rounded-2xl p-4 flex flex-col hover:shadow-lg hover:-translate-y-1 transition"
              >
                <div className=" relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className=" w-full h-48 object-contain"
                  />
                  <span className=" absolute top-0 left-0 bg-slate-900 text-white text-[10px] font-mono px-2 py-1 rounded-full capitalize">
                    {product.category}
                  </span>
                </div>

                <div className=" flex flex-col flex-1 mt-3">
                  <p
                    title={product.title}
                    className=" text-sm font-medium text-slate-800 line-clamp-2"
                  >
                    {product.title}
                  </p>
                  <div className=" flex gap-1 mt-1.5 text-xs  text-amber-500 font-semibold">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    {product.rating?.rate ?? "_"}

                    <span className=" text-slate-400 font-normal">
                      ({product.rating?.count ?? 0})
                    </span>
                  </div>

                  <div className=" flex items-center justify-between mt-3">
                    <span>${product.price}</span>
                  </div>
                </div>

                <button className=" w-full bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold rounded-full py-2.5 mt-4 transition">Add to Cart</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Products;
