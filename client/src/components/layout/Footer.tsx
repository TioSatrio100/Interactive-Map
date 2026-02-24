import React from "react";
import { Compass } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6 md:px-12 brutal-border border-b-0 border-l-0 border-r-0 border-t-8 border-primary mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-secondary brutal-border border-white flex items-center justify-center shadow-[2px_2px_0px_0px_#fff]">
              <Compass className="w-6 h-6 stroke-[3] text-white" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tighter">INDOVIBE EXPLORER</span>
          </div>
          <p className="text-gray-400 font-sans max-w-md">
            Discover the raw, unfiltered beauty of Indonesia, one destination at a time.
            Explore maps, curated activities, and hidden gems.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12 font-display font-bold tracking-wider">
          <div className="flex flex-col gap-3">
            <h4 className="text-primary mb-2">EXPLORE</h4>
            <a href="#" className="hover:text-primary transition-colors">Destinations</a>
            <a href="#" className="hover:text-primary transition-colors">Interactive Map</a>
            <a href="#" className="hover:text-primary transition-colors">Activities</a>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-secondary mb-2">COMPANY</h4>
            <a href="#" className="hover:text-secondary transition-colors">About Us</a>
            <a href="#" className="hover:text-secondary transition-colors">Contact</a>
            <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t-2 border-gray-800 text-center md:text-left text-gray-500 font-display text-sm">
        &copy; {new Date().getFullYear()} INDOVIBE EXPLORER. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
