"use client";

import { motion } from "@/lib/motion";
import HackNightCard from "@/components/ui/HackNightCard";
import { upcomingNights } from "@/lib/data";

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 px-4 sm:px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-xs text-[#00ff87] uppercase tracking-widest mb-3">
            Season 01 · 2026
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Upcoming Hack Nights
          </h2>
          <p className="text-[#666666] text-base max-w-xl mx-auto">
            5 online build sprints, every second Saturday.{" "}
            <span className="text-white font-medium">
              Join any single night — you don&apos;t need to attend all 5.
            </span>
          </p>
        </motion.div>

        {/* "Any night counts" callout */}
        <motion.div
          className="mb-8 mx-auto max-w-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-xs">
            {["Free to join", "Solo or team of 2", "Any skill level", "Push to GitHub by midnight"].map((tag) => (
              <span
                key={tag}
                className="border border-white/10 text-[#666666] px-3 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Finale callout */}
        <motion.div
          className="mb-12 mx-auto max-w-2xl glass-card rounded-xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="font-mono text-xs text-[#ffb800] uppercase tracking-widest mb-1">
              Grand Finale
            </p>
            <p className="text-white font-semibold">
              24-hour Hackathon · TinkerSpace Kochi
            </p>
            <p className="text-[#666666] text-sm">
              Top teams from any of the 5 nights get invited — attend even one to qualify
            </p>
          </div>
          <span className="font-mono text-xs border border-[#ffb800]/30 text-[#ffb800] bg-[#ffb800]/5 px-3 py-1.5 rounded-full shrink-0">
            Invite Only
          </span>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingNights.map((event, i) => (
            <HackNightCard key={event.id} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
