import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaLaptop,
  FaGem,
  FaTshirt,
  FaShoppingBag,
  FaStar,
} from "react-icons/fa";

const categories = [
  { key: "electronics", label: "Electronics", icon: FaLaptop },
  { key: "jewelery", label: "Jewelery", icon: FaGem },
  { key: "men's clothing", label: "Men's Wear", icon: FaTshirt },
  { key: "women's clothing", label: "Women's Wear", icon: FaShoppingBag },
];

const trustItems = [
  { label: "FREE SHIPPING", detail: "ON ORDERS OVER $50" },
  { label: "SECURE CHECKOUT", detail: "256-BIT SSL ENCRYPTED" },
  { label: "EASY RETURNS", detail: "30 DAY WINDOW" },
  { label: "24/7 SUPPORT", detail: "REAL HUMANS ONLY" },
];

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then((data) => {
        if (active) {
          setProducts(data);
        }
      })
      .catch(() => {})
      .finally(() => {
        if (active) {
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  const hero = products[0];
  const featured = products.slice(1, 5);

  return (
    <>
      <div>
        <section className=" relative overflow-hidden bg-gradient-to-b from-blue-100 via-white to-white">
          <div className=" absolute -top-24 -right-24 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl" />
          <div className=" absolute top-40 -left-20 w-72 h-72 bg-amber-200/40 rounded-full blur-3xl" />

          <div
            className=" relative max-w-7xl
           mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <span className=" inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-semibold tracking-wide px-3">
                NEW DROPS WEEKLY
              </span>
              <h1 className=" font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mt-5 leading-[1.1]">
                Good finds,{" "}
                <span className=" text-blue-600">fairly priced.</span>
              </h1>
              <p className=" text-slate-600 text-lg mt-5 max-w-md leading-relaxed">
                Electronics, jewelry and everyday wear, curated and checked for
                quality before they ever reach your cart.
              </p>
              <div className=" flex flex-wrap items-center gap-4 mt-8">
                <Link
                  to="/products"
                  className=" inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-2xl shadow-2xl shadow-blue-600/20 transition"
                >
                  Shop the Collection <FaArrowRight />
                </Link>
                <Link
                  to="/about"
                  className=" font-semibold text-slate-700 hover:text-blue-600 transition px-2"
                >
                  Our Story
                </Link>
              </div>
            </div>

            <div className=" relative h-80 sm:h-96 flex items-center justify-center">
              {hero && (
                <div className=" relative w-56 sm:w-64 bg-white rounded-3xl shadow-2xl p-5 rotate-3 hover:rotate-0 transition duration-500 animate-bounce">
                  <img
                    src={hero.image}
                    alt={hero.title}
                    className=" w-full h-44 object-contain"
                  />
                  <p className=" text-sm font-medium text-slate-800 mt-3 line-clamp-2">
                    {hero.title}
                  </p>
                  <div className=" flex items-center justify-between mt-2">
                    <span className=" font-display font-bold text-blue-600">
                      ${hero.price}
                    </span>
                    <span className=" flex items-center gap-1.5 text-xs text-amber-500 font-semibold">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      {hero.rating?.rate}
                    </span>
                  </div>
                </div>
              )}
              <div className=" absolute top-2 right-4 sm:right-8 bg-white rounded-2xl shadow-2xl px-4 py-3 -rotate-6">
                <p className=" text-xs text-slate-400 font-mono">IN STOCK</p>
                <p className=" font-display font-bold text-slate-900">
                  Ready to ship
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className=" max-w-5xl mx-auto px-6 -mt-2 mb-16 relative z-10">
          <div className=" recepit-edge bg-slate-900 text-slate-100 rounded-sm py-6 px-6 sm:px-10 grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono shadow-2xl">
            {trustItems.map((item) => (
              <div key={item.label}>
                <p className=" text-[11px] sm:text-sm font-bold tracking-wider">
                  {item.label}
                </p>
                <p className=" text-[10px] sm:text-[11px] text-slate-400 mt-1">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className=" max-w-7xl max-auto px-6 py-10">
          <h2 className=" font-display text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
            Shop by Category
          </h2>
          <div className=" grid grid-cols-2 md:grid-cols-4 gap-5">
            {categories.map((cat) => (
              <Link
                key={cat.key}
                to="/products"
                className=" group bg-white border border-slate-200 rounded-2xl p-6 flex flex-col items-center gap-3 hover:border-blue-300  hover:shadow-lg transition"
              >
                <div className=" w-14 h-14 rounded-2xl bg-blue-50 group-hover:bg-blue-600 flex items-center justify-center transition">
                  <cat.icon className=" text-2xl text-blue-600 group-hover:text-white transition" />
                </div>
                <span className=" font-medium text-slate-700 text-sm text-center">
                  {cat.label}
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className=" max-w-7xl mx-auto px-6 py-10">
          <div className=" flex items-end  justify-between mb-8">
            <h2 className=" font-display text-2xl sm:text-3xl font-bold text-slate-900">
              Featured Right Now
            </h2>
            <Link
              to="/products"
              className=" text-blue-600 font-semibold text-sm hover:text-blue-700 flex items-center gap-1.5"
            >
              View All <FaArrowRight className=" text-xs" />{" "}
            </Link>
          </div>
          <div className=" grid grid-cols-2 md:grid-cols-4 gap-5">
            {loading
              ? Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className=" bg-white border border-slate-200 rounded-2xl p-4 animate-pulse"
                  >
                    <div className=" bg-slate-100 h-40 rounded-xl" />
                    <div className=" h-3 bg-slate-100 rounded mt-4 w-3/4" />
                    <div className=" h-3 bg-slate-100 rounded mt-4 w-1/2" />
                  </div>
                ))
              : featured.map((p) => (
                  <div
                    key={p.id}
                    className=" bg-white border border-slate-200 rounded-2xl p-4 flex flex-col hover:shadow-lg hover:-translate-y-1 transition"
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      className=" h-40 w-full object-contain"
                    />
                    <p className=" text-sm font-medium text-slate-800 mt-3 line-clamp-2 flex-1">
                      {p.title}
                    </p>
                    <div className=" flex items-center justify-between mt-3">
                      <span className=" font-display font-bold text-slate-900">
                        ${p.price}
                      </span>
                      <button className=" text-xs font-semibold bg-amber-400 hover:bg-amber-500 text-slate-900 px-3 py-1.5 rounded-full transition">
                        Add
                      </button>
                    </div>
                  </div>
                ))}
          </div>
        </section>

        <section className=" max-w-7xl mx-auto px-6 py-10">
          <div className=" bg-blue-600 rounded-3xl px-8 py-12 sm:py-12 text-center relative overflow-hidden">
            <h2 className=" font-display text-2xl sm:text-3xl font-bold text-white">
              Browse the Full Catalog
            </h2>
            <p className=" text-blue-100 mt-3 max-w-md mx-auto">
              Hundreds of items across electronics, jewelry and apparel are
              waiting for you.
            </p>
            <Link
              to="/products"
              className=" inline-flex items-center gap-2 bg-white text-blue-600 font-semibold  px-6 py-3  rounded-2xl mt-7 hover:bg-blue-50 transition"
            >
              Start Shopping <FaArrowRight />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
