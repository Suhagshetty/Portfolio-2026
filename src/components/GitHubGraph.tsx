"use client";

import { useEffect, useState } from "react";
import { Inter, Instrument_Serif } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500"] });
const instrumentSerif = Instrument_Serif({ subsets: ["latin"], weight: "400" });

type Contribution = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

const COLORS = ["#1a1a1a", "#2d2d2d", "#4a4a4a", "#717171", "#e0e0e0"];

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function getColor(level: number) {
  return COLORS[level] ?? COLORS[0];
}

export default function GitHubGraph() {
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/github")
      .then((r) => r.json())
      .then((data) => {
        setContributions(data.contributions ?? []);
        setTotal(data.total?.[2026] ?? 0);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const weeks: Contribution[][] = [];
  if (contributions.length > 0) {
    let week: Contribution[] = [];
    const firstDay = new Date(contributions[0].date).getDay();
    for (let i = 0; i < firstDay; i++) {
      week.push({ date: "", count: 0, level: 0 });
    }
    for (const day of contributions) {
      week.push(day);
      if (week.length === 7) {
        weeks.push(week);
        week = [];
      }
    }
    if (week.length > 0) weeks.push(week);
  }

  const monthLabels: { label: string; col: number }[] = [];
  weeks.forEach((week, i) => {
    const first = week.find((d) => d.date);
    if (first) {
      const d = new Date(first.date);
      if (d.getDate() <= 7) {
        const label = MONTHS[d.getMonth()];
        if (!monthLabels.find((m) => m.label === label)) {
          monthLabels.push({ label, col: i });
        }
      }
    }
  });

  return (
    <section className="pt-8 pb-0">
      <h2
        className={`${instrumentSerif.className} text-2xl font-normal italic text-zinc-200 mb-6`}
      >
        Contributions
      </h2>

      {loading ? (
        <div className="h-36 flex items-center justify-center">
          <span className={`${inter.className} text-sm text-zinc-200`}>
            Loading...
          </span>
        </div>
      ) : (
        <div className="overflow-x-auto max-w-full">
          <div className="min-w-max">
            {/* Month labels */}
            <div className="flex gap-[4px] mb-2 ml-0">
              {weeks.map((_, i) => {
                const month = monthLabels.find((m) => m.col === i);
                return (
                  <div key={i} className="w-[14px]">
                    {month && (
                      <span
                        className={`${inter.className} text-[11px] text-zinc-200`}
                      >
                        {month.label}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Grid */}
            <div className="flex gap-[4px]">
              {weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-[4px]">
                  {week.map((day, di) => (
                    <div
                      key={di}
                      title={
                        day.date
                          ? `${day.date}: ${day.count} contributions`
                          : ""
                      }
                      className="w-[14px] h-[14px] rounded-[3px]"
                      style={{ background: getColor(day.level) }}
                    />
                  ))}
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between mt-3">
              <span className={`${inter.className} text-xs text-zinc-200`}>
                {total.toLocaleString()} contributions in 2026
              </span>
              <div className="flex items-center gap-1.5">
                <span className={`${inter.className} text-xs text-zinc-200`}>
                  Less
                </span>
                {COLORS.map((c, i) => (
                  <div
                    key={i}
                    className="w-[14px] h-[14px] rounded-[3px]"
                    style={{ background: c }}
                  />
                ))}
                <span className={`${inter.className} text-xs text-zinc-200`}>
                  More
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
