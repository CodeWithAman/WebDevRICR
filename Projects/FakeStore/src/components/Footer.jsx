import React from "react";
import { Link } from "react-router-dom";
import {
  FaStore,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const socials = [FaFacebook, FaInstagram, FaTwitter, FaGithub];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className=" bg-slate-900 text-slate-300">
        <div className=" max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className=" md:col-span-2">
            <Link
              to="/"
              className=" flex items-center gap-3 text-2xl font-display font-bold text-white mb-4"
            >
              <div className=" p-2 bg-blue-600 rounded-xl">
                <FaStore className="text-white text-xl" />
              </div>
              <span>FakeStore</span>
            </Link>
            <p className=" text-slate-400 mx-w-sm leading-relaxed">
              Everyday essentials and standout finds, picked for quality and
              priced fair. Shop with confidence, every time.
            </p>

            <div className=" flex items-center gap-3 mt-6">
              {socials.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className=" w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition"
                >
                  <Icon className=" text-sm" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className=" text-white font-display font-semibold mb-4">
              Shop
            </h4>
            <ul className=" space-y-2.5 text-sm">
              <li>
                <Link to="/products" className=" hover:text-white transition">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className=" hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contactUs" className=" hover:text-white transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className=" text-white font-display font-semibold mb-4">
              Stay in the loop
            </h4>
            <p className=" text-sm text-slate-400 mb-3">
              Get new arrivals and offers in your inbox.
            </p>
            <form className=" flex gap-1" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="you@example.com"
                className=" w-full bg-slate-800 text-sm placeholder:text-slate-500 rounded-l-lg px-3 py-2.5 outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className=" bg-blue-600 hover:bg-blue-700 transition px-4 rounded-r-lg text-white text-sm font-medium">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className=" border-t border-slate-800">
          <div className=" max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500 font-mono ">
            <span className=" hover:text-slate-300"> © {year} FAKESTORE·THANK YOU FOR SHOPPING WITH US</span>
            <span className=" hover:text-slate-300"> BUILT BY AMAN 😍🥰</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
