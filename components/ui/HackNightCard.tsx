"use client";

import { motion } from "@/lib/motion";
import { CalendarDays, Code2, ArrowRight, Users } from "lucide-react";
import type { HackNight } from "@/lib/data";
import { REGISTER_URL } from "@/lib/data";

interface HackNightCardProps {
  event: HackNight;
  index: number;
}

const difficultyConfig = {
  Beginner: { color: "#00ff87", bg: "rgba(0,255,135,0.1)" },
  Intermediate: { color: "#00d4ff", bg: "rgba(0,212,255,0.1)" },
  Advanced: { color: "#ffb800", bg: "rgba(255,184,0,0.1)" },
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
      {/* Top row */}
      <div className="flex items-center justify-between">
        <span
          className="font-mono text-xs px-2 py-1 rounded-full font-semibold"
          style={{ color: diff.color, backgroundColor: diff.bg }}
        >
          {event.difficulty}
        </span>
        <span className="font-mono text-xs text-[#444444]">
          #{String(event.id).padStart(2, "0")}
        </span>
      </div>

      {/* Theme */}
      <div>
        <h3 className="text-xl font-bold text-white leading-tight group-hover:text-[#00ff87] transition-colors duration-300">
          {event.theme}
        </h3>
        <p className="text-sm text-[#666666] mt-1 leading-relaxed line-clamp-2">
          {event.about}
        </p>
      </div>

      {/* Date */}
      <div className="flex items-center gap-2 text-[#666666]">
        <CalendarDays size={13} />
        <span className="font-mono text-xs">{event.date} · 6:00 PM IST</span>
      </div>

      {/* Stack tags */}
      <div className="flex items-start gap-2 flex-wrap">
        <Code2 size={13} className="text-[#666666] mt-0.5 shrink-0" />
        {stacks.map((s) => (
          <span
            key={s}
            className="font-mono text-xs bg-white/5 border border-white/8 rounded px-2 py-0.5 text-[#00d4ff]"
          >
            {s.trim()}
          </span>
        ))}
      </div>

      {/* Team size */}
      <div className="flex items-center gap-1.5 text-[#444444]">
        <Users size={12} />
        <span className="font-mono text-xs">Solo or team of 2</span>
      </div>

      {/* Mentors preview */}
      {event.mentors.length > 0 && (
        <div className="text-xs text-[#666666]">
          <span className="font-mono text-[#444444]">Mentors: </span>
          {event.mentors.map((m) => m.name).join(", ")}
        </div>
      )}

      {/* CTAs */}
      <div className="mt-auto pt-2 flex items-center gap-3">
        <a
          href={REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#00ff87] text-black font-bold text-xs px-4 py-2 rounded-lg hover:shadow-[0_0_16px_rgba(0,255,135,0.4)] transition-all duration-300"
        >
          Register
          <ArrowRight size={12} />
        </a>
        <a
          href={`/saturday-hack-night/events/${event.slug}/`}
          className="inline-flex items-center gap-1.5 font-mono text-xs text-[#666666] hover:text-white transition-colors"
        >
          Event details
          <ArrowRight size={11} />
        </a>
      </div>
    </motion.div>
  );
}
