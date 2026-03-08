"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import TerminalBox from "@/components/ui/TerminalBox";
import { DISCORD_URL } from "@/lib/data";

export default function Community() {
  return (
    <section id="community" className="py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-xs text-[#00ff87] uppercase tracking-widest mb-3">
            Join the Network
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Join the Builders
          </h2>
          <p className="text-[#666666] text-base max-w-xl mx-auto mb-10">
            2,400+ makers. Real-time help, build logs, and event announcements.
            Zero gatekeeping.
          </p>
        </motion.div>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <TerminalBox
            prompt="discord@shn:~$"
            command="/join saturday-hack-night"
            successMessage="Connection established. Welcome to the builders' space."
          />
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#5865f2] text-white font-bold text-base px-8 py-4 rounded-lg hover:bg-[#4752c4] transition-all duration-300"
          >
            Join Discord
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
