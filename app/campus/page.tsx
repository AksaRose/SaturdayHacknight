"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  Users,
  Wifi,
  Coffee,
  Monitor,
  CheckCircle2,
  ArrowRight,
  Calendar,
  MessageSquare,
} from "lucide-react";
import { pastHackNights, DISCORD_URL } from "@/lib/data";

const requirements = [
  {
    icon: MapPin,
    title: "A Space",
    description:
      "A room, lab, or open area where builders can sit and hack for 6+ hours. College labs work great.",
  },
  {
    icon: Wifi,
    title: "Internet",
    description:
      "Stable Wi-Fi for everyone. GitHub pushes must go through by midnight.",
  },
  {
    icon: Monitor,
    title: "Projector / Screen",
    description:
      "To share the theme, stream the online session, and show off projects at the end.",
  },
  {
    icon: Coffee,
    title: "Energy & Snacks",
    description:
      "Optional but strongly recommended. Builders who are fed, build better.",
  },
  {
    icon: Users,
    title: "A Campus Lead",
    description:
      "One person to coordinate registration, manage the space, and report project submissions.",
  },
];

const steps = [
  {
    step: "01",
    title: "Apply to Host",
    description:
      "Fill out the campus host form. We'll get back within 48 hours with confirmation and the theme kit for the upcoming hack night.",
  },
  {
    step: "02",
    title: "Register Your Builders",
    description:
      "Share the hub.app registration link with your campus community. Each participant registers individually.",
  },
  {
    step: "03",
    title: "Run the Hack Night",
    description:
      "On Saturday at 6 PM, open the theme, start hacking. The online SHN runs simultaneously — your campus group joins the same event.",
  },
  {
    step: "04",
    title: "Submit by Midnight",
    description:
      "Each team pushes their project to GitHub and submits the link before midnight. Campus lead collects and verifies.",
  },
  {
    step: "05",
    title: "Celebrate & Report",
    description:
      "Showcase projects at the end. Share a photo or video to the SHN Discord. The best campus project gets featured in the archive.",
  },
];

const previousThemes = pastHackNights.map((n) => ({
  theme: n.theme,
  stack: n.stack,
  difficulty: n.difficulty,
  slug: n.slug,
}));

const difficultyColors = {
  Beginner: "#00ff87",
  Intermediate: "#00d4ff",
  Advanced: "#ffb800",
};

export default function CampusPage() {
  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: "#090909", color: "#ffffff" }}
    >
      {/* Top nav */}
      <div className="sticky top-0 z-50 border-b border-white/8 bg-[#090909]/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center gap-4 font-mono text-sm text-[#666666]">
          <a
            href="/saturday-hack-night/"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <ArrowLeft size={14} />
            Back to SHN
          </a>
          <span className="text-white/20">/</span>
          <span className="text-white">Bring SHN to Your Campus</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        {/* Hero */}
        <motion.div
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs text-[#00ff87] uppercase tracking-widest mb-4">
            Campus Edition
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Bring Saturday Hack Night
            <br />
            <span className="text-[#00ff87]">to Your Campus.</span>
          </h1>
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            SHN is designed to run anywhere — a college lab, a maker space, a
            classroom. If you have 5 builders and a Wi-Fi connection, you can
            host a campus hack night that runs in sync with the main online
            event.
          </p>
          <p className="text-[#666666] text-base leading-relaxed">
            Your campus builders compete in the same event, build on the same
            theme, and submit to the same pool. Top teams — from anywhere —
            get invited to TinkerSpace Kochi for the finale.
          </p>
        </motion.div>

        {/* Team size callout */}
        <motion.div
          className="mb-20 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[
            {
              label: "Solo",
              icon: "👤",
              desc: "Build alone. Your project, your vision.",
            },
            {
              label: "Team of 2",
              icon: "👥",
              desc: "Pair up. One to build, one to debug.",
              highlight: true,
            },
          ].map((opt) => (
            <div
              key={opt.label}
              className={`flex-1 glass-card rounded-xl p-5 flex items-start gap-4 ${
                opt.highlight ? "border-[#00ff87]/20 bg-[#00ff87]/3" : ""
              }`}
            >
              <span className="text-2xl">{opt.icon}</span>
              <div>
                <div className="font-bold text-white mb-1">{opt.label}</div>
                <div className="text-sm text-[#666666]">{opt.desc}</div>
              </div>
            </div>
          ))}
          <div className="flex-1 glass-card rounded-xl p-5 flex items-center justify-center text-center">
            <p className="font-mono text-sm text-[#444444]">
              Max 2 per team.
              <br />
              Both members get invited if selected.
            </p>
          </div>
        </motion.div>

        {/* What you need */}
        <div className="mb-20">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold mb-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What You Need to Host
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {requirements.map((req, i) => (
              <motion.div
                key={req.title}
                className="glass-card rounded-xl p-5 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#00ff87]/10 border border-[#00ff87]/20 mb-4">
                  <req.icon size={18} className="text-[#00ff87]" />
                </div>
                <h3 className="font-bold text-white mb-2">{req.title}</h3>
                <p className="text-sm text-[#666666] leading-relaxed">
                  {req.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* How to run it */}
        <div className="mb-20">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold mb-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            How to Run It
          </motion.h2>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                className="glass-card rounded-xl p-6 flex gap-5"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <span className="font-mono text-2xl font-bold text-[#00ff87]/30 shrink-0 w-10">
                  {step.step}
                </span>
                <div>
                  <h3 className="font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-sm text-[#666666] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Previous themes — what to expect */}
        <div className="mb-20">
          <motion.div
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                Previously Run Topics
              </h2>
              <p className="text-[#666666] text-sm">
                Each hack night explores a different domain. Here&apos;s what we&apos;ve covered.
              </p>
            </div>
            <a
              href="/saturday-hack-night/archive/"
              className="inline-flex items-center gap-2 font-mono text-sm text-[#00d4ff] hover:text-white transition-colors shrink-0"
            >
              All hack nights
              <ArrowRight size={13} />
            </a>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {previousThemes.map((t, i) => (
              <motion.a
                key={t.slug}
                href={`/saturday-hack-night/archive/${t.slug}/`}
                className="glass-card rounded-xl p-5 group hover:border-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-white group-hover:text-[#00d4ff] transition-colors">
                    {t.theme}
                  </h3>
                  <span
                    className="font-mono text-xs shrink-0 ml-2"
                    style={{
                      color: difficultyColors[t.difficulty],
                    }}
                  >
                    {t.difficulty}
                  </span>
                </div>
                <p className="font-mono text-xs text-[#444444]">{t.stack}</p>
                <div className="flex items-center gap-1 mt-3 text-xs text-[#444444] group-hover:text-[#00d4ff] transition-colors font-mono">
                  View projects <ArrowRight size={11} />
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="glass-card rounded-2xl p-8 sm:p-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-xs text-[#00ff87] uppercase tracking-widest mb-4">
            Ready?
          </p>
          <h2 className="text-3xl font-bold mb-3">
            Host SHN at Your Campus
          </h2>
          <p className="text-[#666666] text-base mb-8 max-w-lg mx-auto">
            Reach out on Discord or email us. We&apos;ll send you the theme kit,
            posters, and everything you need to run a smooth hack night.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#00ff87] text-black font-bold text-base px-8 py-4 rounded-lg hover:shadow-[0_0_20px_rgba(0,255,135,0.4)] transition-all duration-300"
            >
              <MessageSquare size={18} />
              Reach out on Discord
            </a>
            <a
              href="mailto:hello@tinkerhub.org"
              className="inline-flex items-center gap-2 border border-white/20 text-white/70 font-semibold text-base px-8 py-4 rounded-lg hover:border-white/40 hover:text-white transition-all duration-300"
            >
              <Calendar size={18} />
              Email Us
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
