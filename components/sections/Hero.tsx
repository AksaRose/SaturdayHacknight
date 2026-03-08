"use client";

import { motion } from "@/lib/motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import LiveCountdown from "@/components/ui/LiveCountdown";
import { REGISTER_URL } from "@/lib/data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Spotlight */}
      <div className="absolute inset-0 spotlight" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Eyebrow */}
        <motion.div {...fadeUp(0)} className="flex flex-wrap items-center justify-center gap-2">
          <span className="font-mono text-xs text-[#00ff87] tracking-widest uppercase border border-[#00ff87]/30 px-3 py-1.5 rounded-full bg-[#00ff87]/5">
            TinkerHub Foundation presents
          </span>
          <span className="font-mono text-xs text-[#666666] border border-white/10 px-3 py-1.5 rounded-full">
            Free · Open to all · No experience needed
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.1)}
          className="mt-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none"
        >
          Stop Watching.
          <br />
          <span className="text-[#00ff87]">Start Building.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          {...fadeUp(0.2)}
          className="mt-6 text-lg sm:text-xl text-[#666666] max-w-2xl mx-auto leading-relaxed"
        >
          Saturday Hack Night is TinkerHub&apos;s weekly maker sprint — 5
          consecutive online build nights, culminating in a 24-hour physical
          hackathon at TinkerSpace Kochi for the top builders.
        </motion.p>

        {/* Countdown */}
        <motion.div {...fadeUp(0.3)} className="mt-10">
          <p className="font-mono text-xs text-[#666666] uppercase tracking-widest mb-4">
            Next Hack Night in
          </p>
          <LiveCountdown />
        </motion.div>

        {/* CTA */}
        <motion.div {...fadeUp(0.4)} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#00ff87] text-black font-bold text-base px-8 py-4 rounded-lg hover:shadow-[0_0_30px_rgba(0,255,135,0.5),0_0_80px_rgba(0,255,135,0.2)] transition-all duration-300"
          >
            Join the Next Hack Night
            <ArrowRight size={18} />
          </a>
          <a
            href="#blueprint"
            className="inline-flex items-center gap-2 border border-white/20 text-white/70 font-semibold text-base px-8 py-4 rounded-lg hover:border-white/40 hover:text-white transition-all duration-300"
          >
            How it works
          </a>
        </motion.div>

        {/* Live status badge */}
        <motion.div {...fadeUp(0.5)} className="mt-8">
          <span className="inline-flex items-center gap-2 font-mono text-xs text-[#666666]">
            <span className="w-2 h-2 rounded-full bg-[#00ff87] animate-pulse" />
            Online sprints · Every second Saturday · 6 PM IST
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#blueprint"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#444444] hover:text-white transition-colors"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={24} />
      </motion.a>
    </section>
  );
}
