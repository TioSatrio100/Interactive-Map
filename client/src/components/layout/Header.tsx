import React from "react";
import { Link } from "wouter";
import { Compass, Menu } from "lucide-react";
import { BrutalistButton } from "@/components/ui/BrutalistButton";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background brutal-border border-l-0 border-r-0 border-t-0 py-4 px-6 md:px-12 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2 group">
        <div className="w-10 h-10 bg-primary brutal-border shadow-[2px_2px_0px_0px_#000] flex items-center justify-center group-hover:bg-secondary transition-colors">
          <Compass className="w-6 h-6 stroke-[3]" />
        </div>
        <span className="font-display font-bold text-xl md:text-2xl tracking-tighter">INDOVIBE</span>
      </Link>

      <nav className="hidden md:flex items-center gap-8 font-display font-bold text-sm tracking-widest">
        <Link href="#map" className="hover:text-secondary transition-colors border-b-2 border-transparent hover:border-secondary">MAP</Link>
        <Link href="#featured" className="hover:text-accent transition-colors border-b-2 border-transparent hover:border-accent">FEATURED</Link>
        <Link href="#discover" className="hover:text-brutal-green transition-colors border-b-2 border-transparent hover:border-brutal-green">DISCOVER</Link>
        <Link href="#about" className="hover:text-brutal-orange transition-colors border-b-2 border-transparent hover:border-brutal-orange">ABOUT</Link>
      </nav>

      <div className="hidden md:block">
        <BrutalistButton variant="primary" size="sm">
          BROWSE ALL
        </BrutalistButton>
      </div>

      <button className="md:hidden w-10 h-10 bg-white brutal-border shadow-[2px_2px_0px_0px_#000] flex items-center justify-center active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all">
        <Menu className="w-6 h-6" />
      </button>
    </header>
  );
}
