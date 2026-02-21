"use client";

import { Instrument_Serif, Inter } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";

const instrumentSerif = Instrument_Serif({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500"] });

const projects = [
  {
    title: "GitSmash",
    stack: ["Next.js", "NeonDB", "Clerk", "Firebase", "AssemblyAI", "Stripe"],
    description:
      "GitHub code collaboration platform with RAG-powered Q&A on repos, commit log analysis, meeting transcription via AssemblyAI, and team invite + billing via Stripe.",
    image: "/projects/gitsmash.png",
    repo: "#",
  },
  {
    title: "Sanity.AI",
    stack: ["Next.js 14", "TypeScript", "tRPC", "PostgreSQL", "Docker"],
    description:
      "AI-powered website generation platform that converts natural language prompts into production-ready websites.",
    image: "/projects/sanity.png",
    repo: "#",
  },
  {
    title: "Hermes.AI",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
    description:
      "AI career platform with resume builder, ATS score checker, and mock interview system. 95+ Lighthouse score.",
    image: "/projects/hermes.png",
    repo: "#",
  },
  {
    title: "Apex Code Editor",
    stack: ["React.js", "Node.js", "Express.js", "AWS Lambda", "S3"],
    description:
      "Multi-language code editor with AI-assisted generation, syntax highlighting, and direct GitHub push/pull integration.",
    image: "/projects/apex2.png",
    repo: "#",
  },
];

export default function Projects() {
  return (
    <section className="py-8">
      <h2
        className={`${instrumentSerif.className} text-2xl font-normal italic text-zinc-200 mb-8`}
      >
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
            className="flex flex-col gap-3"
          >
            {/* Screenshot */}
            <div className="relative w-full aspect-[16/8] rounded-lg overflow-hidden bg-zinc-900 border border-zinc-800">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Info */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3
                  className={`${instrumentSerif.className} text-lg text-white`}
                >
                  {project.title}
                </h3>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg"
                    alt="GitHub"
                    style={{ width: 16, height: 16, filter: "invert(0.6)" }}
                    className="hover:brightness-200 transition-all"
                  />
                </a>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className={`${inter.className} text-[11px] font-medium text-zinc-300 bg-zinc-800 border border-zinc-700 px-2 py-0.5 rounded-md`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p
                className={`${inter.className} text-sm text-zinc-500 leading-relaxed`}
              >
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
