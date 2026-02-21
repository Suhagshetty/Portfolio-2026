"use client";

import { motion, Variants } from "framer-motion";
import { Inter, Manrope, Instrument_Serif } from "next/font/google";
import DraggablePhotoWindow from "@/components/DraggablePhotoWindow";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
});

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const K = ({ children }: { children: React.ReactNode }) => (
  <span className={`${manrope.className} font-semibold text-zinc-300`}>
    {children}
  </span>
);

export default function Hero() {
  return (
    <section className="flex items-start pt-6 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full items-start">
        <div className="space-y-6 max-w-xl">
          <motion.h1
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className={`${instrumentSerif.className} text-[36px] leading-tight tracking-tight text-white`}
          >
            Suhag, 22
          </motion.h1>

          <motion.p
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className={`${inter.className} text-[15px] text-zinc-400 leading-relaxed`}
          >
            Software Engineer with <K>1+ year</K> of experience building
            scalable full-stack applications. Previously interned at{" "}
            <K>Nextiva</K> and <K>Capgemini</K> — shipping features with{" "}
            <K>72% test coverage</K> and APIs serving{" "}
            <K>1,500+ enterprise customers</K>.
          </motion.p>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className={`${inter.className} text-[15px] text-zinc-400 leading-relaxed`}
          >
            Currently building <K>Apex</K>, a <K>Cursor competitor</K> — an
            AI-powered code editor with intelligent code completion, real-time
            collaboration, and AI-assisted generation.
          </motion.p>

          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className={`${inter.className} text-[15px] text-zinc-400 leading-relaxed`}
          >
            <K>National Hackathon Champion</K> at DevHacks and Code for Bharat.
            Led the <K>200+ member Oscode SAIT</K> community. Won{" "}
            <K>Student of the Year</K> four years running.
          </motion.p>

          <motion.p
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className={`${inter.className} text-[15px] text-zinc-400 leading-relaxed`}
          >
            Open to Work: Full-Time, Freelance, or Collabs.{" "}
            <a
              href="mailto:suhagshetty07@gmail.com"
              className={`${manrope.className} font-semibold text-zinc-300 border-b border-zinc-500/40 hover:border-zinc-400 transition-colors`}
            >
              Let&apos;s talk.
            </a>
          </motion.p>
        </div>

        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex justify-center lg:justify-end mt-1"
        >
          <div className="w-[280px] sm:w-[320px] lg:w-[340px]">
            <DraggablePhotoWindow />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
