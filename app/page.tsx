"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, Quote, Stars } from "lucide-react";
import { Playfair_Display, Inter, Caveat } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500"] });
const caveat = Caveat({ subsets: ["latin"], weight: ["400", "600", "700"] });

const sweetNotes = [
  "Take a deep breath. You're doing amazing, and I'm right here with you.",
  "I am so damn proud of the woman you are, and the one you're becoming.",
  "Whenever you feel exhausted, just remember I'm always in your corner.",
  "You make me the happiest guy alive, honestly.",
  "Stop stressing for a second and just smile. I love you.",
  "Every little thing you do to make me feel like yours... I notice all of it.",
  "You and me. That's the only future I want.",
  "I love yu today, tomorrow & for the rest of my life. ❤️"
];

export default function Home() {
  const [noteIndex, setNoteIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  // Ensures animations and random generation match perfectly on client load
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const generateNote = () => {
    let nextIndex = noteIndex;
    while (nextIndex === noteIndex) {
      nextIndex = Math.floor(Math.random() * sweetNotes.length);
    }
    setNoteIndex(nextIndex);
  };

  if (!isMounted) return null;

  return (
    // overflow-x-hidden prevents mobile horizontal scrolling issues from the glowing orbs
    <main
      className={`relative min-h-screen bg-[#09090e] text-white overflow-x-hidden ${inter.className} selection:bg-rose-500/40 selection:text-white`}
    >
      {/* 
        Ultra-Realistic Glass Background:
        Includes deep ambient glowing orbs and a subtle noise texture for that premium Apple-like feel 
      */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Top left pink glow */}
        <div className="absolute top-[-10%] left-[-10%] w-75 sm:w-125 lg:w-175 aspect-square bg-rose-600/20 rounded-full blur-[80px] sm:blur-[120px] mix-blend-screen animate-pulse duration-10000"></div>
        {/* Bottom right indigo glow */}
        <div
          className="absolute bottom-[-10%] right-[-10%] w-75 sm:w-125 lg:w-150 aspect-square bg-indigo-600/20 rounded-full blur-[80px] sm:blur-[120px] mix-blend-screen animate-pulse duration-10000"
          style={{ animationDelay: "2s" }}
        ></div>
        {/* Center violet glow */}
        <div
          className="absolute top-[30%] left-[20%] w-62.5 sm:w-100 aspect-square bg-violet-600/15 rounded-full blur-[100px] mix-blend-screen animate-pulse duration-10000"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Subtle noise texture */}
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24 flex flex-col items-center">
        {/* Hero Section - True Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} // smooth spring-like easing
          className="w-full relative group mb-16 sm:mb-24 mt-4 sm:mt-10"
        >
          {/* Subtle hover glow behind the glass */}
          <div className="absolute -inset-0.5 bg-linear-to-br from-rose-500/30 to-violet-500/30 rounded-[2rem] sm:rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

          <div className="relative bg-white/3 backdrop-blur-2xl border-t border-t-white/20 border-l border-l-white/10 border-b border-b-white/5 border-r border-r-white/5 p-8 sm:p-12 lg:p-16 rounded-[2rem] sm:rounded-[3rem] shadow-[0_8px_40px_rgba(0,0,0,0.5)] flex flex-col items-center text-center">
            <motion.div
              animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="mb-6 sm:mb-8 bg-white/5 p-4 sm:p-5 rounded-full border border-white/10 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]"
            >
              <Heart className="text-rose-400 fill-rose-400/30 w-8 h-8 sm:w-10 sm:h-10" />
            </motion.div>

            <h1
              className={`${playfair.className} text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 tracking-wide bg-clip-text text-transparent bg-linear-to-br from-white via-white/90 to-white/50 leading-tight`}
            >
              Hey you.
            </h1>

            <div className="space-y-5 sm:space-y-6 text-base sm:text-lg lg:text-xl text-white/70 font-light max-w-2xl leading-relaxed sm:leading-loose px-2">
              <p>
                I know you&apos;ve been working so hard lately. I see you constantly
                pushing yourself, trying to improve your skills, and building a
                life for yu.
              </p>
              <p>
                Sometimes, in the middle of all that hustle, I just want to
                pause everything to tell you how incredibly proud I am of you.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 3D Tilted Glass Cards - Stacks on Mobile, Grid on Desktop */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-24 sm:mb-32">
          {[
            {
              icon: (
                <Sparkles className="text-rose-300 mb-5 sm:mb-6 opacity-80 w-6 h-6 sm:w-8 sm:h-8" />
              ),
              title: "Your Effort",
              text: "Every single thing you do to make me feel loved, to claim me as yours... it never goes unnoticed.",
              delay: 0.1,
            },
            {
              icon: (
                <Stars className="text-indigo-300 mb-5 sm:mb-6 opacity-80 w-6 h-6 sm:w-8 sm:h-8" />
              ),
              title: "Through It All",
              text: "Through the burnout, the quiet days, the highs, and the chaotic moments - I am in this with you.",
              delay: 0.3,
            },
            {
              icon: (
                <Heart className="text-violet-300 mb-5 sm:mb-6 opacity-80 w-6 h-6 sm:w-8 sm:h-8" />
              ),
              title: "Our Future",
              text: "When you talk about our future, I just sit there and realize how completely lucky I am to be yours.",
              delay: 0.5,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }} // Removed deep 3D tilt as it feels clunky on mobile, replaced with a smooth float
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: item.delay, duration: 0.8, ease: "easeOut" }}
              className="h-full group"
            >
              <div className="h-full bg-linear-to-br from-white/[0.07] to-white/2 backdrop-blur-xl border-t border-t-white/20 border-l border-l-white/10 border-r border-r-white/5 border-b border-b-white/5 p-6 sm:p-8 lg:p-10 rounded-[1.5rem] sm:rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_40px_rgba(225,29,72,0.15)] hover:bg-white/9 transition-all duration-500 flex flex-col">
                {item.icon}
                <h3
                  className={`${playfair.className} text-xl sm:text-2xl mb-3 sm:mb-4 text-white/90 font-medium tracking-wide`}
                >
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm sm:text-base font-light leading-relaxed grow">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Neumorphic/Glass Booster */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full max-w-3xl flex flex-col items-center mb-20 sm:mb-32 relative px-2 sm:px-0"
        >
          <div className="w-full bg-white/3 backdrop-blur-3xl rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-12 lg:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-t border-t-white/20 border-l border-l-white/10 border-r border-r-transparent border-b border-b-transparent relative overflow-hidden flex flex-col items-center">
            <Quote className="text-white/10 mb-4 sm:mb-8 absolute top-6 sm:top-10 left-6 sm:left-10 w-8 h-8 sm:w-12 sm:h-12" />

            <div className="min-h-40 sm:min-h-45 flex items-center justify-center w-full px-2 sm:px-8 mb-8 sm:mb-10 z-10 mt-6 sm:mt-0">
              <AnimatePresence mode="wait">
                <motion.p
                  key={noteIndex}
                  initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -15, filter: "blur(8px)" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`${caveat.className} text-3xl sm:text-4xl lg:text-5xl text-rose-100/90 text-center leading-normal sm:leading-relaxed tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]`}
                >
                  {sweetNotes[noteIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Premium Mobile-Friendly Button */}
            <button
              onClick={generateNote}
              className="relative group w-full sm:w-auto px-8 py-4 sm:py-5 bg-white/5 backdrop-blur-md rounded-2xl sm:rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-[0_8px_20px_rgba(0,0,0,0.3)] border-t border-t-white/20 border-l border-l-white/10 border-b border-b-black/20 focus:outline-none [-webkit-tap-highlight-color:transparent]"
            >
              {/* Added group-active:opacity-100 so the button background glows on mobile tap */}
              <div className="absolute inset-0 bg-linear-to-r from-rose-500/40 to-violet-500/40 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500"></div>

              <span className="relative z-10 flex items-center justify-center gap-3 font-medium tracking-wide text-white/90 text-sm sm:text-base">
                Read another
                {/* Added group-active:fill-rose-400 so the heart turns red on touch */}
                <Heart className="text-rose-400 group-hover:fill-rose-400 group-active:fill-rose-400 transition-all duration-300 w-4 h-4 sm:w-5 sm:h-5" />
              </span>
            </button>
          </div>
        </motion.div>

        {/* Deeply Personal Sign-off */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="text-center w-full pb-8 sm:pb-12"
        >
          <div className="w-px h-16 sm:h-24 bg-linear-to-b from-white/20 to-transparent mx-auto mb-6 sm:mb-8"></div>
          <p className="text-white/40 text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-6">
            Forever yours
          </p>
          <p
            className={`${caveat.className} text-5xl sm:text-7xl text-white/90 drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]`}
          >
            Anuj
          </p>
        </motion.div>
      </div>
    </main>
  );
}
