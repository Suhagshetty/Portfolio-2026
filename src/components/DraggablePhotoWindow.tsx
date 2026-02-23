"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function DraggablePhotoWindow() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className="relative w-full flex justify-start">
      {/* STACK WRAPPER */}
      <div className="relative w-full max-w-[340px] h-[420px] sm:h-[440px]">
        {/* BACK STACK LAYER 1 */}
        <div className="absolute inset-0 bg-neutral-900 rounded-2xl shadow-2xl rotate-6 translate-x-5 translate-y-5 opacity-40" />

        {/* BACK STACK LAYER 2 */}
        <div className="absolute inset-0 bg-neutral-900 rounded-2xl shadow-2xl rotate-3 translate-x-2 translate-y-2 opacity-60" />

        {/* DRAGGABLE CARD — drag disabled on mobile */}
        <motion.div
          drag={!isMobile}
          dragElastic={0.18}
          dragConstraints={{ left: -180, right: 180, top: -180, bottom: 180 }}
          whileTap={!isMobile ? { scale: 0.98 } : undefined}
          initial={{ rotate: -2 }}
          whileHover={{ rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className={`relative w-full h-full bg-neutral-950 rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.6)] overflow-hidden ${
            !isMobile ? "cursor-grab active:cursor-grabbing" : ""
          }`}
        >
          {/* MAC BAR */}
          <div className="flex items-center gap-2 px-4 py-3 bg-neutral-900 border-b border-neutral-800">
            <div className="flex gap-2">
              <span className="w-3 h-3 bg-red-500 rounded-full" />
              <span className="w-3 h-3 bg-yellow-400 rounded-full" />
              <span className="w-3 h-3 bg-green-500 rounded-full" />
            </div>
            <span className="mx-auto text-xs text-neutral-500">
              Photo Booth
            </span>
          </div>

          {/* IMAGE */}
          <div className="relative w-full h-[280px] sm:h-[300px] bg-black">
            <Image
              src="/prof.jpeg"
              alt="Profile"
              fill
              sizes="(max-width: 640px) 100vw, 340px"
              className="object-cover grayscale"
              priority
            />
          </div>

          {/* CONTROLS */}
          <div className="flex items-center justify-between px-5 py-3 bg-neutral-900 border-t border-neutral-800">
            <div className="flex gap-2">
              <div className="w-7 h-5 bg-neutral-700 rounded-md" />
              <div className="w-7 h-5 bg-neutral-700 rounded-md" />
            </div>
            <div className="w-12 h-12 bg-neutral-700 rounded-full flex items-center justify-center">
              <div className="w-7 h-7 bg-white rounded-full" />
            </div>
            <button className="text-xs text-neutral-400 bg-neutral-800 px-3 py-1.5 rounded-md hover:bg-neutral-700 transition">
              Effects
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
