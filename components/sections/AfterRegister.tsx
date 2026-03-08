"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Lightbulb, Github, Moon, Trophy } from "lucide-react";

const steps = [
  {
    icon: Mail,
    time: "Immediately",
    title: "Confirmation email",
    description: "You'll get an email from hub.tinkerhub.org confirming your spot. Check spam if you don't see it within 5 minutes.",
  },
  {
    icon: MessageSquare,
    time: "Day before",
    title: "Discord invite + theme preview",
    description: "Join the SHN Discord server. The Saturday theme is announced 24 hours in advance so you can do light prep if you want.",
  },
  {
    icon: Lightbulb,
    time: "Saturday 6:00 PM IST",
    title: "Theme drops. Hacking starts.",
    description: "The full challenge brief goes live. Mentors come online. You have the rest of the night — no check-ins, no progress reports, just build.",
  },
  {
    icon: Github,
    time: "Saturday by midnight",
    title: "Push and submit",
    description: "Push your code to a public GitHub repo and submit the link via the hub.app form. A working prototype is enough — polish is optional.",
  },
  {
    icon: Moon,
    time: "Sunday",
    title: "Projects reviewed",
    description: "The TinkerHub team reviews all submissions. Standout projects are featured in the SHN Discord and the archive page.",
  },
  {
    icon: Trophy,
    time: "After all 5 nights",
    title: "Finale invitations sent",
    description: "Top teams from the season receive direct invitations to the 24-hour offline hackathon at TinkerSpace Kochi.",
  },
];

export default function AfterRegister() {
  return (
    <section id="after-register" className="py-24 px-4 sm:px-6 bg-[#0d0d0d]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-xs text-[#00ff87] uppercase tracking-widest mb-3">
            What Happens Next
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            After You Register
          </h2>
          <p className="text-[#666666] text-base">
            Here&apos;s exactly what to expect from registration to finale — step by step.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[22px] top-3 bottom-3 w-px bg-white/8 hidden sm:block" />

          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                className="flex gap-5"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                {/* Icon dot */}
                <div className="shrink-0 w-11 h-11 rounded-full glass-card flex items-center justify-center z-10">
                  <step.icon size={16} className="text-[#00ff87]" />
                </div>

                {/* Content */}
                <div className="flex-1 glass-card rounded-xl p-5 pb-5">
                  <span className="font-mono text-xs text-[#00ff87] mb-1 block">
                    {step.time}
                  </span>
                  <h3 className="font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-sm text-[#666666] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
