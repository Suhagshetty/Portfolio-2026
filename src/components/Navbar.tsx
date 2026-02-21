"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import { MapPin } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

const navItems = [
  { label: "README.md", id: "whoami" },
  { label: "Projects", id: "projects" },
  { label: "Ship Log", id: "shiplog" },
];

interface NavbarProps {
  activeSection?: string;
  onSectionChange?: (id: string) => void;
}

export default function Navbar({
  activeSection,
  onSectionChange,
}: NavbarProps) {
  const [active, setActive] = useState(activeSection ?? "whoami");
  const [hovered, setHovered] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
          timeZoneName: "short",
        }),
      );
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  // Highlight active section on scroll
  useEffect(() => {
    const sectionIds = navItems.map((i) => i.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    setActive(id);
    onSectionChange?.(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const indicator = hovered ?? active;

  return (
    <div
      className={`${inter.className} sticky top-0 z-50 bg-background/80 backdrop-blur-md`}
    >
      <div className="flex items-center justify-between py-4">
        <nav className="flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              className="relative px-4 py-1.5 text-xs font-medium tracking-wide transition-colors duration-200"
              style={{
                color:
                  active === item.id
                    ? "hsl(var(--foreground))"
                    : "hsl(var(--foreground) / 0.45)",
              }}
            >
              {item.label}
              {indicator === item.id && (
                <motion.span
                  layoutId="navbar-underline"
                  className="absolute bottom-0 left-4 right-4 h-[1.5px] rounded-full bg-current"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          {currentTime && (
            <span className="hidden sm:block text-xs tabular-nums text-muted-foreground font-mono">
              {currentTime}
            </span>
          )}

          <div className="hidden sm:flex items-center gap-1.5 text-muted-foreground">
            <MapPin className="w-3 h-3" strokeWidth={1.5} />
            <span className="text-xs">Bengaluru, IN</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="hidden sm:block text-xs text-muted-foreground">
              Available for work
            </span>
          </div>
        </div>
      </div>

      <div className="h-[1px] w-full bg-border/40">
        <motion.div
          className="h-full bg-foreground/60 origin-left"
          style={{ scaleX: scrollProgress / 100 }}
          transition={{ ease: "linear", duration: 0 }}
        />
      </div>
    </div>
  );
}
