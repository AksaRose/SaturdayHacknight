"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Wifi, Coffee, Zap, Users, ArrowRight } from "lucide-react";
import { TINKERSPACE_MAPS_URL } from "@/lib/data";

const amenities = [
  { icon: Wifi, label: "High-speed internet" },
  { icon: Coffee, label: "Food & drinks" },
  { icon: Zap, label: "Power at every seat" },
  { icon: Users, label: "Mentor access" },
];

export default function TinkerSpace() {
  return (
    <section id="tinkerspace" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-xs text-[#ffb800] uppercase tracking-widest mb-4">
              The Offline Finale
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-5 leading-tight">
              TinkerSpace Kochi —{" "}
              <span className="text-[#ffb800]">Where the best builders meet.</span>
            </h2>
            <p className="text-[#888888] leading-relaxed mb-6">
              TinkerSpace is TinkerHub Foundation&apos;s physical maker lab in Kochi,
              Kerala. It&apos;s a place where hardware meets software, where ideas
              become prototypes overnight.
            </p>
            <p className="text-[#888888] leading-relaxed mb-8">
              The SHN finale is a 24-hour hackathon held here — selected teams
              arrive in the evening, hack through the night, and present in the
              morning. It&apos;s intense, it&apos;s unforgettable, and the best projects
              come out of it.
            </p>

            {/* What's covered */}
            <div className="glass-card rounded-xl p-5 mb-6">
              <p className="font-mono text-xs text-[#666666] uppercase tracking-widest mb-4">
                What&apos;s Covered for Selected Teams
              </p>
              <div className="space-y-2">
                {[
                  "Full access to TinkerSpace for 24 hours",
                  "Meals and beverages throughout",
                  "Mentor sessions with industry builders",
                  "Travel stipend details shared on invitation",
                  "Accommodation for outstation participants (on request)",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-sm text-[#888888]">
                    <span className="text-[#00ff87] mt-0.5 shrink-0">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <a
              href={TINKERSPACE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm text-[#ffb800] hover:text-white transition-colors"
            >
              <MapPin size={14} />
              View on Google Maps
              <ArrowRight size={12} />
            </a>
          </motion.div>

          {/* Right — info cards */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {/* Location */}
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <MapPin size={18} className="text-[#ffb800]" />
                <h3 className="font-bold text-white">Location</h3>
              </div>
              <p className="text-[#888888] text-sm leading-relaxed">
                TinkerSpace, Kochi, Kerala, India
                <br />
                <span className="text-[#666666] text-xs font-mono">
                  ~30 minutes from Kochi Central Railway Station
                </span>
              </p>
            </div>

            {/* Format */}
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Clock size={18} className="text-[#ffb800]" />
                <h3 className="font-bold text-white">Finale Format</h3>
              </div>
              <div className="space-y-2 font-mono text-xs text-[#666666]">
                {[
                  ["6:00 PM", "Teams arrive, check in"],
                  ["7:00 PM", "Theme announced, hacking begins"],
                  ["All night", "Build. Mentors available."],
                  ["6:00 AM", "Final push deadline"],
                  ["10:00 AM", "Project demos & presentations"],
                ].map(([time, label]) => (
                  <div key={time} className="flex gap-4">
                    <span className="text-[#ffb800] w-20 shrink-0">{time}</span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div className="glass-card rounded-xl p-6">
              <h3 className="font-bold text-white mb-3">At TinkerSpace</h3>
              <div className="grid grid-cols-2 gap-3">
                {amenities.map((a) => (
                  <div key={a.label} className="flex items-center gap-2 text-sm text-[#888888]">
                    <a.icon size={14} className="text-[#ffb800]" />
                    {a.label}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
