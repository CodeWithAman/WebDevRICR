import React from "react";
import { Link } from "react-router-dom";
import { FaBullseye, FaHandshake, FaLeaf, FaArrowRight } from "react-icons/fa";

const stats = [
  { value: "120K+", label: "Orders Shipped" },
  { value: "4.7/5", label: "Avg. Rating" },
  { value: "48 HR", label: "Avg. Dispatch" },
  { value: "30 DAY", label: "Returns" },
];

const values = [
  {
    icon: FaBullseye,
    title: "Curated, not cluttered",
    body: "Every product on the shelf earns its spot. We'd rather list 500 good items than 5,000 mediocre ones.",
  },
  {
    icon: FaHandshake,
    title: "Fair from checkout to return",
    body: "Clear pricing, honest descriptions and a returns process that doesn't make you fight for it.",
  },
  {
    icon: FaLeaf,
    title: "Built to last",
    body: "We We favor suppliers who make things meant to be used for years, not replaced every season. ",
  },
];

const timeline = [
  {
    year: "2019",
    text: "Started as a weekend side project, shipping orders from a spare room.",
  },
  {
    year: "2021",
    text: "Crossed 10,000 orders and moved into our first small warehouse.",
  },
  {
    year: "2024",
    text: "Now a small team obsessing over the details of an everyday catalog.",
  },
];

const About = () => {
  return (
    <>
      <div>
        <section className=" bg-gradient-to-b from-blue-100 to-white">
          <div className=" max-w-7xl mx-auto px-6 py-20 text-center">
            <span className=" inline-block bg-blue-100 text-blue-700 text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full font-mono">
              ABOUT US
            </span>
            <h1 className=" font-display text-4xl sm:text-5xl font-bold text-slate-900 mt-5 leading-tight">
              We built the store we'd actually want to shop at.
            </h1>
            <p className=" text-slate-600 text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
              My Company started with a simple complaint: too many online stores
              bury good products under bad ones. So we built one that doesn't.
            </p>
          </div>
        </section>

        <section className=" max-w-7xl mx-auto px-6 -mt-6 mb-20 relative z-10 ">
          <div className=" receipt-edge bg-slate-900 text-white rounded-sm py-7 px-6 sm:px-10 grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono shadow-xl">
            {stats.map((s) => (
              <div key={s.label} className=" text-center sm:text-left">
                <p className=" text-xl sm:text-2xl font-bold">{s.value}</p>
                <p className=" text-[11px] text-slate-400 mt-1 tracking-wide">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className=" max-w-7xl mx-auto px-6 py-10">
          <h2 className=" font-display text-2xl sm:text font-bold text-slate-900 mb-10 text-center">
            What we actually care about
          </h2>
          <div className=" grid md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className=" bg-white border border-slate-200 rounded-2xl p-7"
              >
                <div className=" w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                  <v.icon className="text-blue-600 text-lg" />
                </div>
                <h3 className=" font-display font-semibold text-lg text-slate-900">
                  {v.title}
                </h3>
                <p className=" text-slate-600 text-sm mt-2 leading-relaxed">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className=" max-w-7xl mx-auto px-6 py-16">
          <h2 className=" font-dispaly text-2xl sm:text-3xl font-bold text-slate-900 mb-10 text-center">
            How we got here
          </h2>
          <div className=" space-y-8 border-l-2 border-blue-100 pl-8">
            {timeline.map((t) => (
              <div key={t.year} className=" relative">
                <span className=" absolute -left-[39px] top-1 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-blue-100" />
                <p className=" font-mono text-sm text-blue-600 font-bold">
                  {t.year}
                </p>
                <p className=" text-slate-700 mt-1">{t.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className=" max-w-7xl mx-auto px-6 pb-20">
          <div className=" bg-blue-600 rounded-3xl px-8 py-12 text-center">
            <h2 className=" font-display text-2xl sm:text-3xl font-bold text-white">Ready to take a look?</h2>
            <p className=" text-blue-100 mt-3">See what's new in the catalog this week</p>
            <Link to={"/products"} className=" inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl mt-7 hover:bg-blue-50 transition">
              Browse Products <FaArrowRight />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
