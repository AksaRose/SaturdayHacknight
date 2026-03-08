"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "@/lib/motion";
import { Plus, Minus } from "lucide-react";
import { faq } from "@/lib/data";

function FAQItem({ item, index }: { item: { question: string; answer: string }; index: number }) {
  const [open, setOpen] = useState(false);
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-btn-${index}`;

  return (
    <motion.div
      className="border-b border-white/8 last:border-0"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      <button
        id={buttonId}
        aria-expanded={open}
        aria-controls={panelId}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group touch-target"
        onClick={() => setOpen(!open)}
      >
        <span className={`font-semibold text-base transition-colors duration-200 ${open ? "text-[#00ff87]" : "text-white group-hover:text-[#00ff87]"}`}>
          {item.question}
        </span>
        <span className="shrink-0 text-[#666666]" aria-hidden="true">
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-[#888888] text-sm leading-relaxed pb-5">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 px-4 sm:px-6 bg-[#0d0d0d]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-xs text-[#00ff87] uppercase tracking-widest mb-3">
            Common Questions
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            FAQ
          </h2>
          <p className="text-[#666666] text-base">
            Everything you need to know before you register.
          </p>
        </motion.div>

        <div className="glass-card rounded-2xl px-6 sm:px-8">
          {faq.map((item, i) => (
            <FAQItem key={item.question} item={item} index={i} />
          ))}
        </div>

        {/* Still have questions */}
        <motion.p
          className="text-center text-sm text-[#666666] mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Still have questions?{" "}
          <a
            href="https://discord.gg/tinkerhub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00ff87] hover:underline"
          >
            Ask in Discord
          </a>{" "}
          — someone will answer within hours.
        </motion.p>
      </div>
    </section>
  );
}
