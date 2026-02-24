import React from "react";
import { type Destination } from "@shared/schema";
import { BrutalistCard } from "./ui/BrutalistCard";
import { BrutalistBadge } from "./ui/BrutalistBadge";
import { BrutalistButton } from "./ui/BrutalistButton";
import { MapPin, Star } from "lucide-react";

interface DestinationCardProps {
  destination: Destination;
  onClick?: () => void;
}

export function DestinationCard({ destination, onClick }: DestinationCardProps) {
  // Use a fallback image if none exists
  {/* scenic unplash landscape */}
  const defaultImage = "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80";
  
  return (
    <BrutalistCard className="flex flex-col h-full bg-white group" hoverable onClick={onClick}>
      <div className="relative h-48 w-full border-b-3 border-black overflow-hidden bg-gray-200">
        <img 
          src={destination.imageUrl || defaultImage} 
          alt={destination.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {destination.isPopular && (
          <div className="absolute top-3 left-3">
            <BrutalistBadge variant="secondary">POPULAR</BrutalistBadge>
          </div>
        )}
        <div className="absolute bottom-3 right-3 bg-white brutal-border px-2 py-1 flex items-center gap-1 shadow-[2px_2px_0px_0px_#000]">
          <Star className="w-4 h-4 fill-primary text-primary" />
          <span className="font-display font-bold text-sm">{destination.rating}</span>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-1 text-muted-foreground mb-1">
          <MapPin className="w-4 h-4" />
          <span className="font-display text-xs font-bold uppercase">{destination.climate} REGION</span>
        </div>
        
        <h3 className="text-2xl mb-1 line-clamp-1">{destination.name}</h3>
        <p className="font-display font-medium text-sm text-gray-600 mb-4 line-clamp-1 uppercase">
          {destination.subtitle}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          <BrutalistBadge variant="white" className="border-2 text-[10px]">
            {destination.activitiesCount} ACTIVITIES
          </BrutalistBadge>
          <BrutalistBadge variant="white" className="border-2 text-[10px]">
            {destination.attractionsCount} ATTRACTIONS
          </BrutalistBadge>
        </div>
        
        <BrutalistButton variant="white" fullWidth className="group-hover:bg-primary group-hover:text-black mt-auto">
          EXPLORE
        </BrutalistButton>
      </div>
    </BrutalistCard>
  );
}
