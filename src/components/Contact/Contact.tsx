"use client";

import { useState } from "react";
import { Instrument_Serif, Inter } from "next/font/google";

const instrumentSerif = Instrument_Serif({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500"] });

const SI = "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons";

const socials = [
  {
    name: "GitHub",
    icon: `${SI}/github.svg`,
    href: "https://github.com/Suhagshetty",
  },
  {
    name: "LinkedIn",
    icon: `${SI}/linkedin.svg`,
    href: "https://linkedin.com/in/suhagshetty07",
  },
  {
    name: "Instagram",
    icon: `${SI}/instagram.svg`,
    href: "https://www.instagram.com/suhagshetty.dev/",
  },
  {
    name: "YouTube",
    icon: `${SI}/youtube.svg`,
    href: "https://www.youtube.com/@worksuhag",
  },
  { name: "X", icon: `${SI}/x.svg`, href: "https://x.com/Suhag_tsx" },
];

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const buttonLabel = {
    idle: "Submit",
    loading: "Sending...",
    success: "Message Sent ✓",
    error: "Something went wrong — try again",
  }[status];

  return (
    <section className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left */}
        <div className="space-y-6">
          <h2
            className={`${instrumentSerif.className} text-3xl font-normal italic text-white`}
          >
            Get in Touch
          </h2>

          <p
            className={`${inter.className} text-sm text-zinc-400 leading-relaxed`}
          >
            If you have any inquiries, please feel free to reach out. You can
            contact me via email at{" "}
            <a
              href="mailto:worksuhag@gmail.com"
              className="text-white font-medium hover:underline"
            >
              worksuhag@gmail.com
            </a>
          </p>

          <div className="space-y-3">
            <p className={`${inter.className} text-sm text-white font-medium`}>
              Follow me
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-lg border border-zinc-700 flex items-center justify-center hover:border-zinc-500 hover:bg-zinc-900 transition-all"
                  title={s.name}
                >
                  <img
                    src={s.icon}
                    alt={s.name}
                    style={{ width: 18, height: 18, filter: "invert(1)" }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={`${inter.className} w-full bg-transparent border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors`}
            />
            <input
              type="text"
              placeholder="Phone No"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className={`${inter.className} w-full bg-transparent border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors`}
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={`${inter.className} w-full bg-transparent border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors`}
          />

          <textarea
            placeholder="Message"
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={`${inter.className} w-full bg-transparent border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors resize-none`}
          />

          <button
            onClick={handleSubmit}
            disabled={status === "loading" || status === "success"}
            className={`${inter.className} w-full py-3 rounded-lg font-medium text-sm transition-colors ${
              status === "success"
                ? "bg-zinc-700 text-zinc-300 cursor-default"
                : status === "error"
                  ? "bg-red-900/40 text-red-300 border border-red-800"
                  : "bg-white text-black hover:bg-zinc-200"
            }`}
          >
            {buttonLabel}
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="relative mt-16 pt-8 flex items-center justify-between">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent" />
        <p
          className={`${inter.className} text-sm md:text-base font-medium bg-gradient-to-r from-zinc-400 via-white to-zinc-400 bg-clip-text text-transparent`}
        >
          © 2026 Developed with ♥ by Suhag
        </p>
        <div className="flex items-center gap-3">
          <a
            href="#"
            className={`${inter.className} text-xs text-zinc-600 hover:text-zinc-400 transition-colors uppercase tracking-widest`}
          >
            RSS Feed
          </a>
          <span className="text-zinc-700">/</span>
          <a
            href="#"
            className={`${inter.className} text-xs text-zinc-600 hover:text-zinc-400 transition-colors uppercase tracking-widest`}
          >
            Site Map
          </a>
        </div>
      </div>
    </section>
  );
}
