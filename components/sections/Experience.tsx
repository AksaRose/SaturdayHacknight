"use client";

import { motion } from "@/lib/motion";
import { ImageIcon } from "lucide-react";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/lib/data";

function PhotoPlaceholder({ label }: { label: string }) {
  return (
    <div className="glass-card rounded-xl aspect-video flex flex-col items-center justify-center gap-3 break-inside-avoid">
      <ImageIcon size={24} className="text-[#444444]" />
      <p className="font-mono text-xs text-[#444444]">{label}</p>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-xs text-[#00ff87] uppercase tracking-widest mb-3">
            The Vibe
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Builders Speak
          </h2>
          <p className="text-[#666666] text-base max-w-xl mx-auto">
            From first-time coders to hardware hackers — this is what SHN does
            to people.
          </p>
        </motion.div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {testimonials[0] && (
            <TestimonialCard testimonial={testimonials[0]} index={0} />
          )}
          <PhotoPlaceholder label="TinkerSpace Kochi — Finale night" />
          {testimonials[1] && (
            <TestimonialCard testimonial={testimonials[1]} index={1} />
          )}
          {testimonials[2] && (
            <TestimonialCard testimonial={testimonials[2]} index={2} />
          )}
          <PhotoPlaceholder label="Online sprint in progress" />
        </div>

        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { value: "5", label: "Online Sprints" },
            { value: "24h", label: "Grand Finale" },
            { value: "∞", label: "Things to Build" },
            { value: "0", label: "Prior XP Needed" },
          ].map((stat) => (
            <div key={stat.label} className="text-center glass-card rounded-xl p-5">
              <div className="font-mono text-3xl font-bold text-[#00ff87] mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-[#666666]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
