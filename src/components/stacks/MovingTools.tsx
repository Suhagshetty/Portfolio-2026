"use client";

import Marquee from "react-fast-marquee";
import { Instrument_Serif, Inter } from "next/font/google";

const instrumentSerif = Instrument_Serif({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"], weight: ["500"] });

const SI = "/icons";

// Note: Inngest → temporalio (closest alternative), Aceternity UI → radixui (component lib), Neon → xata (modern DB alt)
const row1 = [
  { name: "TypeScript", icon: `${SI}/typescript.svg` },
  { name: "JavaScript", icon: `${SI}/javascript.svg` },
  { name: "Python", icon: `${SI}/python.svg` },
  { name: "Java", icon: `${SI}/openjdk.svg` },
  { name: "React.js", icon: `${SI}/react.svg` },
  { name: "Next.js", icon: `${SI}/nextdotjs.svg` },
  { name: "Redux", icon: `${SI}/redux.svg` },
  { name: "TailwindCSS", icon: `${SI}/tailwindcss.svg` },
  { name: "Bootstrap", icon: `${SI}/bootstrap.svg` },
  { name: "Framer Motion", icon: `${SI}/framer.svg` },
  { name: "GSAP", icon: `${SI}/greensock.svg` },
  { name: "ShadCN", icon: `${SI}/shadcnui.svg` },
  { name: "Radix UI", icon: `${SI}/radixui.svg` },
];

const row2 = [
  { name: "Node.js", icon: `${SI}/nodedotjs.svg` },
  { name: "Express.js", icon: `${SI}/express.svg` },
  { name: "Bun", icon: `${SI}/bun.svg` },
  { name: "MongoDB", icon: `${SI}/mongodb.svg` },
  { name: "PostgreSQL", icon: `${SI}/postgresql.svg` },
  { name: "MySQL", icon: `${SI}/mysql.svg` },
  { name: "Prisma", icon: `${SI}/prisma.svg` },
  { name: "Supabase", icon: `${SI}/supabase.svg` },
  { name: "Neon", icon: `${SI}/neon.svg` },
  { name: "Firebase", icon: `${SI}/firebase.svg` },
  { name: "Clerk", icon: `${SI}/clerk.svg` },
  { name: "OpenAI", icon: `${SI}/openai.svg` },
  { name: "AWS", icon: `${SI}/amazonaws.svg` },
  { name: "Docker", icon: `${SI}/docker.svg` },
  { name: "Vercel", icon: `${SI}/vercel.svg` },
  { name: "Git", icon: `${SI}/git.svg` },
  { name: "Linux", icon: `${SI}/linux.svg` },
];

function Pill({ name, icon }: { name: string; icon: string }) {
  return (
    <div
      className="flex items-center gap-2.5 mx-1.5 shrink-0"
      style={{
        padding: "10px 20px",
        borderRadius: "12px",
        background: "#1c1c1e",
        border: "1px solid #2c2c2e",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={icon}
        alt={name}
        style={{
          width: 16,
          height: 16,
          objectFit: "contain",
          filter: "invert(1)",
        }}
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
      <span
        className={inter.className}
        style={{
          fontSize: 14,
          color: "#ffffff",
          whiteSpace: "nowrap",
          fontWeight: 500,
        }}
      >
        {name}
      </span>
    </div>
  );
}

export default function TechStack() {
  return (
    <section className="pt-2 pb-8">
      <h2
        className={`${instrumentSerif.className} text-2xl font-normal italic text-zinc-200 mb-4`}
      >
        Tools that I have used
      </h2>

      <div
        className="space-y-3"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <Marquee speed={40} pauseOnHover gradient={false}>
          {row1.map((item) => (
            <Pill key={item.name} name={item.name} icon={item.icon} />
          ))}
        </Marquee>

        <Marquee speed={40} pauseOnHover gradient={false} direction="right">
          {row2.map((item) => (
            <Pill key={item.name} name={item.name} icon={item.icon} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
