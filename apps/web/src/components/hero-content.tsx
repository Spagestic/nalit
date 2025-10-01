"use client";

export default function HeroContent() {
  return (
    <main className="absolute bottom-8 left-8 z-20 max-w-lg">
      <div className="text-left">
        <div
          className="relative mb-4 inline-flex items-center rounded-full bg-white/5 px-3 py-1 backdrop-blur-sm"
          style={{
            filter: "url(#glass-effect)",
          }}
        >
          <div className="absolute top-0 right-1 left-1 h-px rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <span className="relative z-10 font-light text-white/90 text-xs">
            ✨ AI-Powered Interview Practice
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="mb-4 font-light text-5xl text-white tracking-tight md:text-6xl md:leading-16">
          <span className="instrument font-medium italic">Master</span> Your
          <br />
          <span className="font-light text-white tracking-tight">
            Interview Skills
          </span>
        </h1>

        {/* Description */}
        <p className="mb-4 font-light text-white/70 text-xs leading-relaxed">
          Simulate voice-based interviews and get targeted feedback on your
          speech content and delivery. Practice with company-specific questions
          and improve faster.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <button
            className="cursor-pointer rounded-full border border-white/30 bg-transparent px-8 py-3 font-normal text-white text-xs transition-all duration-200 hover:border-white/50 hover:bg-white/10"
            type="button"
          >
            Pricing
          </button>
          <button
            className="cursor-pointer rounded-full bg-white px-8 py-3 font-normal text-black text-xs transition-all duration-200 hover:bg-white/90"
            type="button"
          >
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
}
