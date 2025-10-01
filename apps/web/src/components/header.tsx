"use client";

export default function Header() {
  return (
    <header className="relative z-20 flex items-center justify-between p-6">
      {/* Logo */}
      <div className="flex items-center">
        <svg
          aria-hidden="true"
          className="size-10 translate-x-[-0.5px] text-white"
          fill="currentColor"
          viewBox="0 0 147 70"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Logo</title>
          <path d="M56 50.2031V14H70V60.1562C70 65.5928 65.5928 70 60.1562 70C57.5605 70 54.9982 68.9992 53.1562 67.1573L0 14H19.7969L56 50.2031Z" />
          <path d="M147 56H133V23.9531L100.953 56H133V70H96.6875C85.8144 70 77 61.1856 77 50.3125V14H91V46.1562L123.156 14H91V0H127.312C138.186 0 147 8.81439 147 19.6875V56Z" />
        </svg>
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
        <button
          className="z-10 flex h-8 cursor-pointer items-center rounded-full bg-white px-6 py-2 font-normal text-black text-xs transition-all duration-300 hover:bg-white/90"
          type="button"
        >
          Login
        </button>
      </div>
    </header>
  );
}
