/** biome-ignore-all lint/style/noMagicNumbers: minor */
"use client";

import { motion } from "motion/react";
import type React from "react";

import {
  Accenture,
  Amazon,
  Apple,
  Bain,
  BankOfAmerica,
  BCG,
  Citigroup,
  Deloitte,
  EY,
  GoldmanSachs,
  Google,
  JpMorgan,
  KPMG,
  McKinsey,
  Meta,
  Microsoft,
  MorganStanley,
  PwC,
} from "./logos";

type LogoCloudAnimatedProps = {
  title?: string;
  description?: string;
  logos?: Array<{
    name: string;
    logo: React.ComponentType;
    url?: string;
  }>;
};

export function LogoCloud({
  title = "Practice with Top Companies",
  description = "Simulate AI-powered interviews with company-specific questions from these industry leaders.",
  logos = [
    {
      name: "JPMorgan Chase",
      logo: JpMorgan,
      url: "https://www.jpmorgan.com/",
    },
    {
      name: "Goldman Sachs",
      logo: GoldmanSachs,
      url: "https://www.goldmansachs.com/",
    },
    {
      name: "Morgan Stanley",
      logo: MorganStanley,
      url: "https://www.morganstanley.com/",
    },
    { name: "Citigroup", logo: Citigroup, url: "https://www.citigroup.com/" },
    {
      name: "Bank of America",
      logo: BankOfAmerica,
      url: "https://www.bankofamerica.com/",
    },
    { name: "Apple", logo: Apple, url: "https://www.apple.com/" },
    { name: "Microsoft", logo: Microsoft, url: "https://www.microsoft.com/" },
    { name: "Google", logo: Google, url: "https://www.google.com/" },
    { name: "Meta", logo: Meta, url: "https://www.meta.com/" },
    { name: "Amazon", logo: Amazon, url: "https://www.amazon.com/" },
    {
      name: "McKinsey & Company",
      logo: McKinsey,
      url: "https://www.mckinsey.com/",
    },
    {
      name: "Boston Consulting Group",
      logo: BCG,
      url: "https://www.bcg.com/",
    },
    { name: "Bain & Company", logo: Bain, url: "https://www.bain.com/" },
    { name: "Deloitte", logo: Deloitte, url: "https://www.deloitte.com/" },
    { name: "Accenture", logo: Accenture, url: "https://www.accenture.com/" },
    { name: "PwC", logo: PwC, url: "https://www.pwc.com/" },
    { name: "EY", logo: EY, url: "https://www.ey.com/" },
    { name: "KPMG", logo: KPMG, url: "https://home.kpmg/xx/en/home.html" },
  ],
}: LogoCloudAnimatedProps) {
  return (
    <section className="overflow-hidden py-40">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mb-0 text-center"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 font-semibold text-2xl text-foreground md:text-3xl lg:text-4xl">
            {title}
          </h2>
          <p className="text-foreground/70 text-sm md:text-base">
            {description}
          </p>
        </motion.div>

        {/* Infinite scrolling logos */}
        <div
          className="relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 20%, hsl(0 0% 0% / 1) 80%, hsl(0 0% 0% / 0))",
            // biome-ignore lint/style/useNamingConvention: minor
            WebkitMaskImage:
              "linear-gradient(to right, hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 20%, hsl(0 0% 0% / 1) 80%, hsl(0 0% 0% / 0))",
          }}
        >
          <motion.div
            animate={{
              x: [0, -33.333 * logos.length],
            }}
            className="flex min-w-full flex-shrink-0 items-center justify-around gap-8"
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {/* First set */}
            {logos.map((logo, index) => (
              <motion.a
                animate={{ opacity: 1, scale: 1 }}
                className="group flex flex-shrink-0 flex-col items-center justify-center p-6 transition-all hover:scale-105"
                href={logo.url}
                initial={{ opacity: 0, scale: 0.8 }}
                key={`first-${logo.name}`}
                rel="noopener noreferrer"
                target="_blank"
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <motion.div
                  className="mb-2 text-4xl *:fill-foreground"
                  transition={{ type: "spring", stiffness: 300 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <logo.logo />
                </motion.div>
              </motion.a>
            ))}
            {/* Second set for seamless loop */}
            {logos.map((logo, index) => (
              <motion.a
                animate={{ opacity: 1, scale: 1 }}
                className="group flex flex-shrink-0 flex-col items-center justify-center p-6 transition-all hover:scale-105"
                href={logo.url}
                initial={{ opacity: 0, scale: 0.8 }}
                key={`second-${logo.name}`}
                rel="noopener noreferrer"
                target="_blank"
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <motion.div
                  className="mb-2 text-4xl *:fill-foreground"
                  transition={{ type: "spring", stiffness: 300 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <logo.logo />
                </motion.div>
              </motion.a>
            ))}
            {/* Third set for even smoother loop */}
            {logos.map((logo, index) => (
              <motion.a
                animate={{ opacity: 1, scale: 1 }}
                className="group flex flex-shrink-0 flex-col items-center justify-center p-6 transition-all hover:scale-105"
                href={logo.url}
                initial={{ opacity: 0, scale: 0.8 }}
                key={`third-${logo.name}`}
                rel="noopener noreferrer"
                target="_blank"
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <motion.div
                  className="mb-2 text-4xl *:fill-foreground"
                  transition={{ type: "spring", stiffness: 300 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <logo.logo />
                </motion.div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
