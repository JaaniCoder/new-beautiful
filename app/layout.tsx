import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. Customizing the Link Preview (Metadata)
// When you text her the link, this is what will show up in the preview card.
export const metadata: Metadata = {
  title: "For My Beautiful Girl ❤️",
  description: "A little reminder of how much I love you and appreciate everything you do for us. - Yours, Anuj",
  openGraph: {
    title: "Hey gorgeous...",
    description: "I made a little something just for you. Open it.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full", 
        "antialiased", 
        geistSans.variable, 
        geistMono.variable, 
        jetbrainsMono.variable,
        "font-mono"
      )}
    >
      <body className="min-h-full flex flex-col relative">
        {children}

        {/* 2. Persistent Global Floating Signature */}
        <div className="fixed bottom-4 right-6 sm:bottom-6 sm:right-8 z-50 pointer-events-none opacity-40 mix-blend-screen">
          <p className="text-[10px] sm:text-xs tracking-[0.3em] text-white/50 uppercase font-sans">
            Jitin & Her <span className="text-rose-500 animate-pulse inline-block ml-1">❤</span>
          </p>
        </div>
      </body>
    </html>
  );
}