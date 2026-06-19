import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaStore, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-md">
        <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3 text-2xl font-bold text-blue-600"
          >
            <div className="p-2 bg-blue-100 rounded-xl">
              <FaStore className="text-blue-600 text-lg" />
            </div>
            <span>FakeStore</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-slate-700 font-medium hover:text-blue-700 transition"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-slate-700 font-medium hover:text-blue-700 transition"
            >
              About
            </Link>

            <Link
              to="/product"
              className="text-slate-700 font-medium hover:text-blue-700 transition"
            >
              Products
            </Link>

            <Link
              to="/contactUs"
              className="text-slate-700 font-medium hover:text-blue-700 transition"
            >
              Contact Us
            </Link>
          </nav>

          <div className=" flex items-center gap-3">
            <Link to="/Product" className=" p-2.5 rounded-xl bg-slate-100 hover:bg-blue-100 transition">
              <FaShoppingBag className=" text-slate-700 text-lg"/>
            </Link>

            <button className=" md-hidden p-2.5 rounded-xl bg-slate-100" onclick={() => setOpen(!open)}>{open ? <FaTimes/> : <FaBars/>}</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
