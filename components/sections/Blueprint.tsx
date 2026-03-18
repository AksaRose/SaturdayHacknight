"use client";

import { Fragment } from "react";
import { motion } from "@/lib/motion";
import { ClipboardList, Code2, Trophy } from "lucide-react";
import StepConnector from "@/components/ui/StepConnector";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Register",
    description:
      "Sign up via the hub.app link for the upcoming Saturday. Free, open to all students and hobbyists.",
  },
  {
    number: "02",
    icon: Code2,
    title: "Build Online",
    description:
      "Spend the Saturday hacking on a project in the given stack. Push your code to GitHub by midnight.",
  },
  {
    number: "03",
    icon: Trophy,
    title: "Win Offline",
    description:
      "Top builders from the 5 online sprints get invited to the 24-hour finale at TinkerSpace Kochi.",
  },
];

export default function Blueprint() {
  return (
    <section id="blueprint" className="py-24 px-4 sm:px-6">
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
            The Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">How It Works</h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-0 items-center">
          {steps.map((step, i) => (
            <Fragment key={step.number}>
              <motion.div
                className="glass-card rounded-xl p-6 text-center md:col-span-1 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                {/* Step number */}
                <div className="font-mono text-4xl font-bold text-[#00ff87]/20 group-hover:text-[#00ff87]/40 transition-colors mb-4 leading-none">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#00ff87]/10 border border-[#00ff87]/20 mb-4">
                  <step.icon size={22} className="text-[#00ff87]" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#666666] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>

              {/* Connector — between steps only */}
              {i < steps.length - 1 && (
                <div className="md:col-span-1 md:px-2">
                  <StepConnector />
                  {/* Mobile vertical connector */}
                  <div className="md:hidden flex justify-center">
                    <div className="w-px h-8 bg-[#00ff87]/20" />
                  </div>
                </div>
              )}
            </Fragment>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          className="text-center text-sm text-[#444444] mt-10 font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          5 online sprints · 1 grand finale · 0 gatekeeping
        </motion.p>
      </div>
    </section>
  );
}
