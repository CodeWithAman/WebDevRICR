import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";

const info = [
  { icon: FaEnvelope, label: "Email", value: "hello@mycompany.com" },
  { icon: FaPhoneAlt, label: "Phone", value: "+91 98765 43210" },
  { icon: FaMapMarkerAlt, label: "Address", value: "MP Nagar, Bhopal, India" },
];

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-linear-to-b from-blue-50 to-white">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full font-mono">
            GET IN TOUCH
          </span>

          <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mt-5">
            Questions? We read every message.
          </h1>

          <p className="text-slate-600 text-lg mt-4">
            Order issues, product questions or just feedback, drop us a line and
            we'll get back within a day.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-5">
            {info.map((item) => (
              <div
                key={item.label}
                className="bg-white border border-slate-200 rounded-2xl p-6 flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <item.icon className="text-blue-600" />
                </div>

                <div>
                  <p className="text-xs text-slate-500 font-mono tracking-wide">
                    {item.label.toUpperCase()}
                  </p>

                  <p className="font-medium text-slate-800 mt-1">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}

            <div className="bg-slate-900 text-slate-200 rounded-2xl p-6 font-mono text-xs leading-relaxed">
              <p className="text-white font-bold mb-2">SUPPORT HOURS</p>
              <p>MON – FRI 9:00 – 18:00</p>
              <p>SAT 10:00 – 16:00</p>
              <p>SUN CLOSED</p>
            </div>
          </div>

          <div className="md:col-span-3 bg-white border border-slate-200 rounded-2xl p-7 sm:p-9">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <FaCheckCircle className="text-emerald-500 text-4xl mb-4" />

                <h3 className="font-display text-xl font-bold text-slate-900">
                  Message sent
                </h3>

                <p className="text-slate-600 mt-2 max-w-sm">
                  Thanks, {form.name.split(" ")[0] || "there"}. We'll reply at{" "}
                  {form.email} soon.
                </p>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      email: "",
                      message: "",
                    });
                  }}
                  className="mt-6 text-blue-600 font-semibold text-sm hover:text-blue-700"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium text-slate-700">
                      Name
                    </label>

                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full mt-1.5 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-slate-700">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full mt-1.5 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="How can we help?"
                    className="w-full mt-1.5 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-xl transition"
                >
                  Send Message
                  <FaPaperPlane className="text-sm" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
