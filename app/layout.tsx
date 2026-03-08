import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  preload: false, // only used for code/data elements, defer it
});

export const metadata: Metadata = {
  title: "Saturday Hack Night — TinkerHub",
  description:
    "Stop watching. Start building. Join TinkerHub's weekly maker sprint every Saturday at 6 PM. Free, open to all, no experience needed.",
  keywords: ["hackathon", "TinkerHub", "maker", "hardware", "software", "Kerala", "students"],
  openGraph: {
    title: "Saturday Hack Night — TinkerHub",
    description: "Build something real. Every Saturday. 6 PM. Free.",
    type: "website",
    url: "https://appukurian.github.io/saturday-hack-night",
    siteName: "Saturday Hack Night",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saturday Hack Night — TinkerHub",
    description: "Build something real. Every Saturday. 6 PM. Free.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // allow user zoom — accessibility requirement
  themeColor: "#090909",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        {/* Skip to main content — first focusable element on page */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <MotionProvider>
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
