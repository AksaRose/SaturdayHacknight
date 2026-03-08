"use client";

import { motion } from "framer-motion";
import ProjectBentoGrid from "@/components/ui/ProjectBentoGrid";
import { projects } from "@/lib/data";

export default function HallOfFame() {
  return (
    <section id="hall-of-fame" className="py-24 px-4 sm:px-6 relative">
      {/* Subtle spotlight */}
      <div className="absolute inset-0 spotlight-cyan pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-xs text-[#00d4ff] uppercase tracking-widest mb-3">
            Hall of Fame
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            What Gets Built
          </h2>
          <p className="text-[#666666] text-base max-w-xl mx-auto">
            Real projects shipped by real builders. Hover to explore.
          </p>
        </motion.div>

        {/* Bento grid */}
        <ProjectBentoGrid projects={projects} />
      </div>
    </section>
  );
}
