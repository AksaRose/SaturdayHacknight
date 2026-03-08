import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 mt-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="font-mono text-xl font-bold text-[#00ff87] mb-1">
              SHN
            </div>
            <p className="text-sm text-[#666666]">
              A{" "}
              <a
                href="https://tinkerhub.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00ff87] hover:underline"
              >
                TinkerHub Foundation
              </a>{" "}
              initiative.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-6">
            {[
              { label: "How It Works", href: "#blueprint" },
              { label: "Timeline", href: "#timeline" },
              { label: "Projects", href: "#hall-of-fame" },
              { label: "Community", href: "#community" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#666666] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* GitHub */}
          <a
            href="https://github.com/appukurian/saturday-hack-night"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[#666666] hover:text-white transition-colors"
          >
            <Github size={16} />
            Open Source
          </a>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-mono text-xs text-[#444444]">
            © 2025 TinkerHub Foundation. All rights reserved.
          </p>
          <p className="font-mono text-xs text-[#444444]">
            Built with Next.js + ♥
          </p>
        </div>
      </div>
    </footer>
  );
}
