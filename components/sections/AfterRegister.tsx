"use client";

import { motion } from "@/lib/motion";
import { Mail, MessageSquare, Lightbulb, Github, Moon, Trophy } from "lucide-react";

const steps = [
  {
    icon: Mail,
    time: "Right after you register",
    title: "Get your confirmation email",
    description:
      "After you register for a specific SHN, you’ll receive a confirmation email from hub.tinkerhub.org with all the key details. Check spam if you don’t see it in a few minutes.",
  },
  {
    icon: Lightbulb,
    time: "1 day before · 8:00 PM",
    title: "LetXplore intro session",
    description:
      "On the day before the hack night, there’s a LetXplore session at 8 PM IST — a live intro to that week’s theme, tools, and example ideas so you’re not starting cold.",
  },
  {
    icon: Github,
    time: "Hack Night Saturday · 6:00 PM",
    title: "Saturday Hack Night starts",
    description:
      "On Saturday at 6 PM IST, the actual SHN begins. You team up, build around the week’s theme, and work towards a working prototype before midnight.",
  },
  {
    icon: MessageSquare,
    time: "Hack Night Saturday · 8:00 PM",
    title: "Idea pitch call",
    description:
      "Around 8 PM IST, there’s a pitch session where teams quickly present their idea on a live call. It’s informal but helps you clarify what you’re building.",
  },
  {
    icon: Moon,
    time: "Hack Night Saturday · ~11:00 PM",
    title: "Submit your project",
    description:
      "By around 11 PM IST, you wrap up and submit your project through hub.tinkerhub.org — link to your public GitHub repo plus a short description is enough.",
  },
  {
    icon: Trophy,
    time: "Within 4 days",
    title: "Results announced",
    description:
      "Within the next 4 days, the TinkerHub team reviews all submissions and announces results for that SHN night. Standout projects move closer to the finale.",
  },
  {
    icon: Trophy,
    time: "After all 5 nights",
    title: "Invite to TinkerSpace finale",
    description:
      "Once the full season of 5 SHN nights is over, top teams receive email invites to the 24-hour in-person finale at TinkerSpace Kochi — that email is your official invitation.",
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
