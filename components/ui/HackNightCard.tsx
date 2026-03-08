"use client";

import { motion } from "framer-motion";
import { CalendarDays, Code2, ArrowRight } from "lucide-react";
import type { HackNight } from "@/lib/data";
import { REGISTER_URL } from "@/lib/data";

interface HackNightCardProps {
  event: HackNight;
  index: number;
}

const difficultyConfig = {
  Beginner: { color: "#00ff87", bg: "rgba(0,255,135,0.1)", label: "Beginner" },
  Intermediate: {
    color: "#00d4ff",
    bg: "rgba(0,212,255,0.1)",
    label: "Intermediate",
  },
  Advanced: {
    color: "#ffb800",
    bg: "rgba(255,184,0,0.1)",
    label: "Advanced",
  },
};

export default function HackNightCard({ event, index }: HackNightCardProps) {
  const diff = difficultyConfig[event.difficulty];
  const stacks = event.stack.split(", ");

  return (
    <motion.div
      className="glass-card rounded-xl p-6 flex flex-col gap-4 group hover:border-white/20 transition-colors duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Difficulty badge */}
      <div className="flex items-center justify-between">
        <span
          className="font-mono text-xs px-2 py-1 rounded-full font-semibold"
          style={{ color: diff.color, backgroundColor: diff.bg }}
        >
          {diff.label}
        </span>
        <span className="font-mono text-xs text-[#666666]">
          #{String(event.id).padStart(2, "0")}
        </span>
      </div>

      {/* Theme */}
      <div>
        <h3 className="text-xl font-bold text-white leading-tight group-hover:text-[#00ff87] transition-colors duration-300">
          {event.theme}
        </h3>
      </div>

      {/* Date */}
      <div className="flex items-center gap-2 text-[#666666]">
        <CalendarDays size={14} />
        <span className="font-mono text-sm">{event.date}</span>
        <span className="font-mono text-sm">· 6:00 PM IST</span>
      </div>

      {/* Stack tags */}
      <div className="flex items-start gap-2 flex-wrap">
        <Code2 size={14} className="text-[#666666] mt-0.5 shrink-0" />
        {stacks.map((s) => (
          <span
            key={s}
            className="font-mono text-xs bg-white/5 border border-white/8 rounded px-2 py-0.5 text-[#00d4ff]"
          >
            {s.trim()}
          </span>
        ))}
      </div>

      {/* Register CTA */}
      <div className="mt-auto pt-2">
        <a
          href={REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-[#00ff87] text-[#00ff87] font-semibold text-sm px-4 py-2 rounded-lg hover:bg-[#00ff87] hover:text-black transition-all duration-300"
        >
          Register
          <ArrowRight size={14} />
        </a>
      </div>
    </motion.div>
  );
}
