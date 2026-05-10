import { useEffect, useState } from "react";
import irsimLogo from "@/assets/irsim-logo.png";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SoundToggle, playClick } from "@/components/SoundToggle";

const ROBLOX_URL = "https://www.roblox.com/games/119297331402283/IR-Sim";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["About", "#about"],
    ["Roles", "#roles"],
    ["Stations", "#stations"],
    ["Fleet", "#fleet"],
    ["Services", "#services"],
    ["Play", "#play"],
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
        <a href="#" className="flex items-center gap-3 group">
          <img
            src={irsimLogo}
            alt="IRSIM logo"
            width={40}
            height={40}
            className="w-10 h-10 object-contain drop-shadow-[0_0_12px_oklch(0.62_0.24_27/0.5)] transition-transform group-hover:rotate-[-4deg]"
          />
          <div className="font-display tracking-widest text-xl">IRSIM</div>
          <span className="hidden md:inline font-mono-rail text-xs text-muted-foreground border border-border px-2 py-0.5 rounded">
            Z-CR / DIV-RBL
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6 font-mono-rail text-xs uppercase tracking-widest">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onMouseEnter={playClick}
              className="nav-link transition-transform hover:-translate-y-[1px]"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <SoundToggle />
          <ThemeToggle />
          <a
            href={ROBLOX_URL}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={playClick}
            className="btn-tactile font-mono-rail text-xs uppercase tracking-widest bg-primary text-primary-foreground px-4 py-2 rounded-sm"
          >
            Play on Roblox
          </a>
        </div>
      </div>
    </header>
  );
}
