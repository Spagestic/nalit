"use client";
import { Hexagon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="relative z-20 flex items-center justify-between p-6">
      {/* Logo */}
      <div className="flex items-center">
        <Hexagon className="h-10 w-10 text-white" />
      </div>

      {/* Navigation */}
      <nav className="flex items-center space-x-2">
        <a
          className="rounded-full px-3 py-2 font-light text-white/80 text-xs transition-all duration-200 hover:bg-white/10 hover:text-white"
          href="/features"
        >
          Features
        </a>
        <a
          className="rounded-full px-3 py-2 font-light text-white/80 text-xs transition-all duration-200 hover:bg-white/10 hover:text-white"
          href="/pricing"
        >
          Pricing
        </a>
        <a
          className="rounded-full px-3 py-2 font-light text-white/80 text-xs transition-all duration-200 hover:bg-white/10 hover:text-white"
          href="/docs"
        >
          Docs
        </a>
      </nav>

      {/* Login Button Group with Arrow */}
      <div
        className="group relative flex items-center"
        id="gooey-btn"
        style={{ filter: "url(#gooey-filter)" }}
      >
        <button
          className="-translate-x-10 group-hover:-translate-x-19 absolute right-0 z-0 flex h-8 cursor-pointer items-center justify-center rounded-full bg-white px-2.5 py-2 font-normal text-black text-xs transition-all duration-300 hover:bg-white/90"
          type="button"
        >
          <svg
            className="h-3 w-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <title>Arrow</title>
            <path
              d="M7 17L17 7M17 7H7M17 7V17"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
        </button>
        <Button
          asChild
          className="z-10 flex h-8 cursor-pointer items-center rounded-full bg-white px-6 py-2 font-normal text-black text-xs transition-all duration-300 hover:bg-white/90"
          type="button"
        >
          <Link href="/dashboard">Login</Link>
        </Button>
      </div>
    </header>
  );
}
