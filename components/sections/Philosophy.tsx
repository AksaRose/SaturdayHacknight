"use client";

import { motion } from "@/lib/motion";
import { Zap, Compass, Hammer, BookOpen } from "lucide-react";

const principles = [
  {
    icon: Hammer,
    title: "Build, Don't Watch",
    description:
      "The best way to understand a technology is to build something with it. Not follow a tutorial. Not read docs. Build.",
  },
  {
    icon: Compass,
    title: "Explore Depth, Not Breadth",
    description:
      "Each hack night goes deep into one domain — hardware, AI, web, CLI, creative coding. We're tech makers: hardware and software, anything goes. Stack is always a suggestion, never a rule.",
  },
  {
    icon: Zap,
    title: "Ship by Midnight",
    description:
      "Constraints unlock creativity. A hard deadline forces you to scope down, focus, and ship something real.",
  },
  {
    icon: BookOpen,
    title: "Learning Sticks When You Build",
    description:
      "You will remember what you built at 2 AM far longer than any tutorial you watched on 1.5x speed.",
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-xs text-[#00ff87] uppercase tracking-widest mb-3">
            Our Philosophy
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Learn by Doing.{" "}
            <span className="text-[#00ff87]">Explore by Building.</span>
          </h2>
          <p className="text-[#666666] text-lg leading-relaxed">
            Saturday Hack Night is not a bootcamp. There are no lectures. You
            pick a theme, you pick a stack, and you build something — anything —
            by midnight. That&apos;s the whole curriculum.
          </p>
        </motion.div>

        {/* Principles grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              className="glass-card rounded-xl p-6 group"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#00ff87]/10 border border-[#00ff87]/20 mb-4">
                <p.icon size={18} className="text-[#00ff87]" />
              </div>
              <h3 className="font-bold text-white text-lg mb-2">{p.title}</h3>
              <p className="text-[#666666] text-sm leading-relaxed">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Manifesto line */}
        <motion.div
          className="mt-14 border-l-2 border-[#00ff87]/40 pl-6"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-xl sm:text-2xl font-semibold text-white/80 leading-relaxed">
            &ldquo;The project you shipped at SHN will teach you more than the
            course you almost finished.&rdquo;
          </p>
          <p className="font-mono text-sm text-[#00ff87] mt-3">
            — TinkerHub Foundation
          </p>
        </motion.div>
      </div>
    </section>
  );
}
