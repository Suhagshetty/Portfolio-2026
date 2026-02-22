"use client";

import { Instrument_Serif, Inter } from "next/font/google";
import { motion } from "framer-motion";

const instrumentSerif = Instrument_Serif({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

const experiences = [
  {
    company: "Nextiva",
    role: "Software Engineer",
    period: "Jun 2025 – Present",
    description:
      "Engineered RESTful APIs serving 1,500+ enterprise customers, improving response time by 20% through query optimization and Redis caching.",
    stack: [
      "Node.js",
      "Express.js",
      "React 18",
      "Next.js 14",
      "TypeScript",
      "MongoDB",
      "Redis",
    ],
  },
  {
    company: "Capgemini",
    role: "Frontend Developer Intern",
    period: "Jun 2024 – Nov 2024",
    description:
      "Built React 18 components for an enterprise dashboard serving 2,000+ daily active users, reducing page load time by 15% through code splitting and lazy loading.",
    stack: ["React 18", "Tailwind CSS", "ShadCN UI", "Redux", "TypeScript"],
  },
  {
    company: "Apex",
    role: "Founder & Software Engineer",
    period: "2024 – Present",
    description:
      "Building a Cursor competitor — AI-powered code editor with intelligent completion, real-time collaboration via WebSockets, and GitHub import/export deployed on AWS.",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AWS",
      "WebSockets",
    ],
  },
];

export default function WorkExperience() {
  return (
    <section className="py-8">
      <h2
        className={`${instrumentSerif.className} text-2xl font-normal italic text-zinc-200 mb-10`}
      >
        Work Experience
      </h2>

      <div className="relative">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
            className="relative flex gap-8 pb-12 last:pb-0"
          >
            {/* Timeline dot + line */}
            <div className="flex flex-col items-center">
              <div className="relative shrink-0 mt-1.5">
                <div className="w-3 h-3 rounded-full bg-zinc-400" />
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-zinc-300 blur-[4px] opacity-60" />
              </div>
              {index < experiences.length - 1 && (
                <div className="relative flex-1 mt-3 flex justify-center">
                  <div
                    className="w-px h-full"
                    style={{
                      background:
                        "linear-gradient(to bottom, #52525b 0%, #27272a 60%, transparent 100%)",
                    }}
                  />
                  <div
                    className="absolute w-[3px] h-full blur-sm"
                    style={{
                      background:
                        "linear-gradient(to bottom, #71717a 0%, transparent 70%)",
                      opacity: 0.4,
                    }}
                  />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="space-y-2 pb-2">
              <div className="flex items-baseline gap-4 flex-wrap">
                <h3
                  className={`${instrumentSerif.className} text-xl text-white`}
                >
                  {exp.company}
                </h3>
                <span className={`${inter.className} text-xs text-zinc-600`}>
                  {exp.period}
                </span>
              </div>

              <p
                className={`${inter.className} text-sm font-semibold text-white`}
              >
                {exp.role}
              </p>

              <p
                className={`${inter.className} text-sm text-zinc-500 leading-relaxed`}
              >
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className={`${inter.className} text-xs font-semibold text-zinc-200 bg-zinc-800 border border-zinc-700 px-2 py-0.5 rounded-md`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
