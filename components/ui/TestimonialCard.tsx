"use client";

import { motion } from "@/lib/motion";
import type { Testimonial } from "@/lib/data";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
  className?: string;
}

export default function TestimonialCard({
  testimonial,
  index,
  className,
}: TestimonialCardProps) {
  return (
    <motion.div
      className={cn("glass-card rounded-xl p-6 break-inside-avoid", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <p className="text-4xl text-[#00ff87] font-serif leading-none mb-3">
        &ldquo;
      </p>
      <p className="text-white/80 text-base leading-relaxed italic mb-4">
        {testimonial.quote}
      </p>
      <p className="font-mono text-sm text-[#00ff87]">
        &mdash; {testimonial.name}
      </p>
    </motion.div>
  );
}
