"use client";

import { motion } from "@/lib/motion";
import { ArrowRight, Star, Users, FolderGit2, ArrowLeft } from "lucide-react";
import { pastHackNights } from "@/lib/data";

const difficultyColors = {
  Beginner: { color: "#00ff87", bg: "rgba(0,255,135,0.1)" },
  Intermediate: { color: "#00d4ff", bg: "rgba(0,212,255,0.1)" },
  Advanced: { color: "#ffb800", bg: "rgba(255,184,0,0.1)" },
};

export default function ArchivePage() {
  const totalParticipants = pastHackNights.reduce(
    (sum, n) => sum + n.participants,
    0
  );
  const totalProjects = pastHackNights.reduce(
    (sum, n) => sum + n.submittedCount,
    0
  );

  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: "#090909", color: "#ffffff" }}
    >
      {/* Nav back */}
      <div className="sticky top-0 z-50 border-b border-white/8 bg-[#090909]/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center gap-4">
          <a
            href="/saturday-hack-night/"
            className="flex items-center gap-2 font-mono text-sm text-[#666666] hover:text-white transition-colors"
          >
            <ArrowLeft size={14} />
            Back to SHN
          </a>
          <span className="text-white/20">/</span>
          <span className="font-mono text-sm text-white">Archive</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        {/* Page header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs text-[#00d4ff] uppercase tracking-widest mb-3">
            Every Night. Every Project.
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Past Hack Nights
          </h1>
          <p className="text-[#666666] text-lg max-w-xl">
            A record of every Saturday, every theme, and every project shipped
            by the SHN community.
          </p>

          {/* Aggregate stats */}
          <div className="flex flex-wrap gap-8 mt-8">
            {[
              {
                value: pastHackNights.length,
                label: "Hack Nights",
                color: "#00d4ff",
              },
              {
                value: totalParticipants + "+",
                label: "Builders",
                color: "#00ff87",
              },
              {
                value: totalProjects + "+",
                label: "Projects Shipped",
                color: "#ffb800",
              },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="font-mono text-3xl font-bold"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-[#666666] mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Hack night cards */}
        <div className="space-y-6">
          {pastHackNights.map((night, i) => {
            const diff = difficultyColors[night.difficulty];
            return (
              <motion.a
                key={night.slug}
                href={`/saturday-hack-night/archive/${night.slug}/`}
                className="glass-card rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 group hover:border-white/20 transition-all duration-300 block"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                {/* Left: Number */}
                <div className="shrink-0">
                  <div className="font-mono text-4xl font-bold text-white/10 group-hover:text-white/20 transition-colors w-20">
                    #{String(night.id).padStart(3, "0")}
                  </div>
                </div>

                {/* Center: Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold text-white group-hover:text-[#00d4ff] transition-colors duration-300">
                      {night.theme}
                    </h2>
                    <span
                      className="font-mono text-xs px-2 py-0.5 rounded-full font-semibold"
                      style={{ color: diff.color, backgroundColor: diff.bg }}
                    >
                      {night.difficulty}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4">
                    <span className="font-mono text-sm text-[#666666]">
                      {night.date}
                    </span>
                    <span className="font-mono text-sm text-[#444444]">·</span>
                    <span className="font-mono text-sm text-[#666666]">
                      {night.stack}
                    </span>
                  </div>

                  {/* Best project preview */}
                  <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#00ff87]/5 border border-[#00ff87]/10 mb-4 max-w-lg">
                    <Star size={13} className="text-[#00ff87] mt-0.5 shrink-0" />
                    <div className="min-w-0">
                      <p className="font-mono text-xs text-[#00ff87] mb-0.5">
                        Best Project
                      </p>
                      <p className="font-semibold text-white text-sm truncate">
                        {night.bestProject.name}
                      </p>
                      <p className="font-mono text-xs text-[#666666]">
                        {night.bestProject.description}
                      </p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-5">
                    <div className="flex items-center gap-1.5 text-[#666666]">
                      <Users size={13} />
                      <span className="font-mono text-xs">
                        {night.participants} builders
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#666666]">
                      <FolderGit2 size={13} />
                      <span className="font-mono text-xs">
                        {night.submittedCount} projects submitted
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: CTA */}
                <div className="shrink-0 flex items-center">
                  <div className="flex items-center gap-2 font-mono text-sm text-[#666666] group-hover:text-[#00d4ff] transition-colors duration-300">
                    View projects
                    <ArrowRight size={14} />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </main>
  );
}
