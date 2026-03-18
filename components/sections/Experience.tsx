"use client";

import { motion } from "@/lib/motion";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/lib/data";

/** Public assets live under basePath in next.config (static export + GitHub Pages). */
const ASSET = (path: string) =>
  `/saturday-hack-night${path.startsWith("/") ? path : `/${path}`}`;

function ExperiencePhoto({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) {
  return (
    <div className="glass-card rounded-xl overflow-hidden break-inside-avoid flex flex-col">
      <div className="relative aspect-video w-full bg-[#111] overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
      <p className="font-mono text-xs text-[#666666] px-3 py-2.5 border-t border-white/8">
        {label}
      </p>
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

        {/* Row 1: two stories + photo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {testimonials[0] && (
            <TestimonialCard testimonial={testimonials[0]} index={0} />
          )}
          {testimonials[1] && (
            <TestimonialCard testimonial={testimonials[1]} index={1} />
          )}
          <ExperiencePhoto
            src={ASSET("/photos/IMG_5813.JPG")}
            alt="Kailash Nadh addressing hacknighters during Physical Hack Night"
            label="Kailash Nadh addressing hacknighters during Physical Hack Night"
          />
        </div>
        {/* Row 2: third story + second photo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials[2] && (
            <TestimonialCard
              testimonial={testimonials[2]}
              index={2}
              className="lg:col-span-2"
            />
          )}
          <ExperiencePhoto
            src={ASSET("/photos/IMG_5699.JPG")}
            alt="Hack Night in progress"
            label="Hack Night in progress"
          />
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
            { value: "1600+", label: "Participants" },
            { value: "400+", label: "Projects" },
            { value: "45+", label: "HackNights" },
            { value: "5", label: "Offline HackNights" },
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
