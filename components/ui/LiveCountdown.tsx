"use client";

import { useEffect, useState } from "react";
import { getNextNight, getNextNightDate } from "@/lib/data";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(target: Date): TimeLeft {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function Digit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="font-mono text-4xl md:text-5xl font-bold text-[#00ff87] tabular-nums leading-none">
        {pad(value)}
      </div>
      <div className="font-mono text-xs text-[#666666] uppercase tracking-widest mt-1">
        {label}
      </div>
    </div>
  );
}

export default function LiveCountdown() {
  const nextNight = getNextNight();
  const [target] = useState(() => getNextNightDate());
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    getTimeLeft(target)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(target));
    }, 1000);
    return () => clearInterval(interval);
  }, [target]);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Which event */}
      <p className="font-mono text-xs text-[#444444]">
        SHN #{String(nextNight.id).padStart(2, "0")} ·{" "}
        <span className="text-[#00ff87]">{nextNight.theme}</span> ·{" "}
        {nextNight.date} · 6:00 PM IST
      </p>
      {/* Digits */}
      <div className="flex items-center gap-4 md:gap-6">
        <Digit value={timeLeft.days} label="days" />
        <span className="font-mono text-3xl text-[#666666] mb-4">:</span>
        <Digit value={timeLeft.hours} label="hrs" />
        <span className="font-mono text-3xl text-[#666666] mb-4">:</span>
        <Digit value={timeLeft.minutes} label="min" />
        <span className="font-mono text-3xl text-[#666666] mb-4">:</span>
        <Digit value={timeLeft.seconds} label="sec" />
      </div>
    </div>
  );
}
