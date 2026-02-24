import React from "react";
import { type Destination } from "@shared/schema";
import { BrutalistCard } from "./ui/BrutalistCard";
import { BrutalistBadge } from "./ui/BrutalistBadge";
import { BrutalistButton } from "./ui/BrutalistButton";
import { X, Star, Calendar, Thermometer, MapPin } from "lucide-react";

interface MapPopupModalProps {
  destination: Destination | null;
  onClose: () => void;
}

export function MapPopupModal({ destination, onClose }: MapPopupModalProps) {
  if (!destination) return null;

  {/* placeholder modal image */}
  const defaultImage = "https://images.unsplash.com/photo-1553603227-2366a99ce714?w=1200&q=80";

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm pointer-events-auto">
      <BrutalistCard className="w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden bg-white shadow-[12px_12px_0px_0px_#000] relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white brutal-border shadow-[2px_2px_0px_0px_#000] flex items-center justify-center hover:bg-destructive hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col md:flex-row h-full overflow-y-auto">
          {/* Left: Image & Quick Stats */}
          <div className="w-full md:w-2/5 relative border-b-3 md:border-b-0 md:border-r-3 border-black bg-gray-100 flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent z-0 mix-blend-multiply"></div>
            <img 
              src={destination.imageUrl || defaultImage} 
              alt={destination.name}
              className="w-full h-48 md:h-full object-cover"
            />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
              <h2 className="text-4xl md:text-5xl font-black drop-shadow-md mb-2">{destination.name}</h2>
              <p className="font-display font-bold uppercase tracking-wider drop-shadow-md">{destination.subtitle}</p>
            </div>
          </div>

          {/* Right: Details */}
          <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col bg-[#F4F4F0]">
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="bg-white brutal-border px-3 py-2 flex items-center gap-2 shadow-[2px_2px_0px_0px_#000]">
                <Star className="w-5 h-5 fill-primary text-primary" />
                <span className="font-display font-bold">{destination.rating}</span>
              </div>
              <div className="bg-white brutal-border px-3 py-2 flex items-center gap-2 shadow-[2px_2px_0px_0px_#000]">
                <Calendar className="w-5 h-5 text-accent" />
                <span className="font-display font-bold text-sm">BEST: {destination.bestTime}</span>
              </div>
              <div className="bg-white brutal-border px-3 py-2 flex items-center gap-2 shadow-[2px_2px_0px_0px_#000]">
                <Thermometer className="w-5 h-5 text-destructive" />
                <span className="font-display font-bold text-sm">{destination.climate}</span>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl mb-3 border-b-3 border-black pb-2 inline-block">ABOUT</h3>
              <p className="font-sans text-gray-700 leading-relaxed">
                {destination.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-brutal-green/20 brutal-border p-4 shadow-[2px_2px_0px_0px_#000]">
                <div className="font-display text-4xl font-black text-brutal-green">{destination.activitiesCount}</div>
                <div className="font-display font-bold text-xs uppercase">Curated Activities</div>
              </div>
              <div className="bg-accent/20 brutal-border p-4 shadow-[2px_2px_0px_0px_#000]">
                <div className="font-display text-4xl font-black text-accent">{destination.attractionsCount}</div>
                <div className="font-display font-bold text-xs uppercase">Top Attractions</div>
              </div>
            </div>

            <div className="mt-auto pt-4 flex gap-4">
              <BrutalistButton variant="primary" className="flex-1">
                PLAN TRIP
              </BrutalistButton>
              <BrutalistButton variant="white" className="px-4" onClick={onClose}>
                BACK TO MAP
              </BrutalistButton>
            </div>
          </div>
        </div>
      </BrutalistCard>
    </div>
  );
}
