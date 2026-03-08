"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, Users, FolderGit2 } from "lucide-react";
import { pastHackNights } from "@/lib/data";

export default function PreviousNights() {
  const recent = pastHackNights.slice(0, 3);

  return (
    <section id="past-nights" className="py-24 px-4 sm:px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="font-mono text-xs text-[#00d4ff] uppercase tracking-widest mb-3">
              Past Hack Nights
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              What Was Built
            </h2>
          </div>
          <a
            href="/saturday-hack-night/archive/"
            className="inline-flex items-center gap-2 font-mono text-sm text-[#00d4ff] hover:text-white transition-colors shrink-0"
          >
            View all hack nights
            <ArrowRight size={14} />
          </a>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recent.map((night, i) => (
            <motion.a
              key={night.slug}
              href={`/saturday-hack-night/archive/${night.slug}/`}
              className="glass-card rounded-xl p-6 flex flex-col gap-4 group hover:border-white/20 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Night number + date */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#666666]">
                  SHN #{String(night.id).padStart(3, "0")}
                </span>
                <span className="font-mono text-xs text-[#666666]">
                  {night.date}
                </span>
              </div>

              {/* Theme */}
              <div>
                <h3 className="font-bold text-white text-xl leading-tight group-hover:text-[#00d4ff] transition-colors duration-300">
                  {night.theme}
                </h3>
                <p className="font-mono text-xs text-[#444444] mt-1">
                  {night.stack}
                </p>
              </div>

              {/* Best project */}
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#00ff87]/5 border border-[#00ff87]/10">
                <Star size={13} className="text-[#00ff87] mt-0.5 shrink-0" />
                <div>
                  <p className="font-mono text-xs text-[#00ff87] mb-0.5">
                    Best Project
                  </p>
                  <p className="text-sm font-semibold text-white leading-snug">
                    {night.bestProject.name}
                  </p>
                  <p className="font-mono text-xs text-[#666666]">
                    by {night.bestProject.creator}
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 pt-1">
                <div className="flex items-center gap-1.5 text-[#666666]">
                  <Users size={12} />
                  <span className="font-mono text-xs">
                    {night.participants} builders
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[#666666]">
                  <FolderGit2 size={12} />
                  <span className="font-mono text-xs">
                    {night.submittedCount} projects
                  </span>
                </div>
              </div>

              {/* CTA */}
              <div className="flex items-center gap-1.5 text-sm text-[#666666] group-hover:text-[#00d4ff] transition-colors duration-300 mt-auto">
                <span>See all projects</span>
                <ArrowRight size={13} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
