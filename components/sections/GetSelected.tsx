"use client";

import { motion } from "@/lib/motion";
import { Github, Users, Trophy, ArrowRight, Gift } from "lucide-react";
import { REGISTER_URL, STICKERS_URL } from "@/lib/data";

const steps = [
  {
    icon: Github,
    step: "01",
    title: "Register & Attend",
    description:
      "Sign up for any hack night. Show up on Saturday at 6 PM IST — online, no travel needed.",
  },
  {
    icon: Users,
    step: "02",
    title: "Build — Solo or with One Partner",
    description:
      "Hack alone or with one teammate (max 2 per team). Use any language, framework, hardware, or API you want — the stack suggestion is a starting point, not a rule.",
  },
  {
    icon: Trophy,
    step: "03",
    title: "Get Invited to the Finale",
    description:
      "Top teams from the 5 online sprints get a direct invitation to the 24-hour offline hackathon at TinkerSpace Kochi.",
  },
];

export default function GetSelected() {
  return (
    <section id="get-selected" className="py-24 px-4 sm:px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-xs text-[#ffb800] uppercase tracking-widest mb-3">
            Your Path to the Finale
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Build. Ship. Get{" "}
            <span className="text-[#ffb800]">Invited.</span>
          </h2>
          <p className="text-[#666666] text-base max-w-xl mx-auto">
            There is no jury during the hack night. Just build something real,
            push it to GitHub, and let your project speak for itself.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              className="glass-card rounded-xl p-7 relative overflow-hidden group"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              viewport={{ once: true }}
            >
              {/* Step number watermark */}
              <span className="absolute top-4 right-5 font-mono text-6xl font-bold text-white/4 select-none">
                {step.step}
              </span>

              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#ffb800]/10 border border-[#ffb800]/20 mb-5">
                <step.icon size={20} className="text-[#ffb800]" />
              </div>
              <h3 className="font-bold text-white text-lg mb-2">{step.title}</h3>
              <p className="text-[#666666] text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Highlight box */}
        <motion.div
          className="rounded-xl border border-[#ffb800]/20 bg-[#ffb800]/5 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-5"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="font-mono text-xs text-[#ffb800] uppercase tracking-widest mb-2">
              The Invitation
            </p>
            <h3 className="text-xl font-bold text-white mb-1">
              You + your whole team gets the invite
            </h3>
            <p className="text-[#666666] text-sm max-w-lg">
              If your project gets selected, every member of your team receives
              an invitation to the 24-hour physical hackathon at TinkerSpace
              Kochi. Travel stipend details shared separately.
            </p>
          </div>
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-[#ffb800] text-black font-bold text-sm px-6 py-3 rounded-lg hover:shadow-[0_0_20px_rgba(255,184,0,0.4)] transition-all duration-300"
          >
            Start Building
            <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* Winner goodies */}
        <motion.div
          className="rounded-xl border border-[#00ff87]/15 bg-[#00ff87]/5 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#00ff87]/10 border border-[#00ff87]/20 shrink-0">
            <Gift size={20} className="text-[#00ff87]" />
          </div>
          <div className="flex-1">
            <p className="font-mono text-xs text-[#00ff87] uppercase tracking-widest mb-1">
              Best Project Goodies
            </p>
            <h3 className="font-bold text-white mb-1">
              Winners get the full TinkerHub pack
            </h3>
            <p className="text-[#666666] text-sm">
              Best project of each hack night gets an exclusive goodies pack — TinkerHub t-shirt, SHN sticker set, and surprise merch. Shipped to your door.
            </p>
          </div>
          <a
            href={STICKERS_URL}
            className="shrink-0 inline-flex items-center gap-2 border border-[#00ff87]/30 text-[#00ff87] font-mono text-xs px-4 py-2 rounded-lg hover:bg-[#00ff87]/10 transition-all duration-300"
          >
            Claim stickers
            <ArrowRight size={13} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
