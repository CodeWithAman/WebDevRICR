import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaStore, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200 shadow-md">
      <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 text-2xl font-bold text-blue-600"
        >
          <div className="p-2 bg-blue-100 rounded-xl">
            <FaStore className="text-blue-600 text-lg" />
          </div>
          <span className="text-xl">FakeStore</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-slate-700 font-medium hover:text-blue-600 hover:underline transition"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-slate-700 font-medium hover:text-blue-600 hover:underline transition"
          >
            About
          </Link>

          <Link
            to="/products"
            className="text-slate-700 font-medium hover:text-blue-600 hover:underline transition"
          >
            Products
          </Link>

          <Link
            to="/contactUs"
            className="text-slate-700 font-medium hover:text-blue-600 hover:underline transition"
          >
            Contact Us
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/products"
            className="p-2.5 rounded-xl bg-slate-100 hover:bg-blue-100 transition"
          >
            <FaShoppingBag className="text-slate-700 text-lg" />
          </Link>

          <button
            className="md:hidden p-2.5 rounded-xl bg-slate-100"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden flex flex-col px-6 pb-4 bg-white border-t border-slate-200">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="py-3 text-slate-700"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className="py-3 text-slate-700"
          >
            About
          </Link>

          <Link
            to="/products"
            onClick={() => setOpen(false)}
            className="py-3 text-slate-700"
          >
            Products
          </Link>

          <Link
            to="/contactUs"
            onClick={() => setOpen(false)}
            className="py-3 text-slate-700"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
