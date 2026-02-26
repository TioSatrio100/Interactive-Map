import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { IndonesiaMap } from "@/components/map/IndonesiaMap";
import { MapPopupModal } from "@/components/MapPopupModal";
import { BrutalistCard } from "@/components/ui/BrutalistCard";
import { BrutalistButton } from "@/components/ui/BrutalistButton";
import { BrutalistBadge } from "@/components/ui/BrutalistBadge";
import { DestinationCard } from "@/components/DestinationCard";
import { STATIC_DESTINATIONS } from "@/lib/static-data";
import { MapPin, ArrowRight, Activity, Camera, Star } from "lucide-react";

export default function Home() {
  const destinations = STATIC_DESTINATIONS;
  const isLoading = false;
  const [selectedDestId, setSelectedDestId] = useState<number | null>(null);

  // Filter for featured section
  const featuredDestinations = destinations.filter(d => d.isFeatured).slice(0, 3);
  
  // Use the first featured as default sidebar content if none selected
  const activeSidebarDest = selectedDestId 
    ? destinations.find(d => d.id === selectedDestId) 
    : featuredDestinations[0] || destinations[0];

  const handleMapSelect = (id: number) => {
    setSelectedDestId(id);
  };

  const handleCloseModal = () => {
    setSelectedDestId(null);
  };

  {/* Unsplash discover indonesia placeholder */}
  const discoverImage = "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1000&q=80";

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary selection:text-black">
      <Header />

      <main className="flex-grow">
        {/* HERO SECTION - MAP & SIDEBAR */}
        <section id="map" className="flex flex-col lg:flex-row h-[80vh] min-h-[600px] brutal-border border-l-0 border-r-0 border-t-0">
          
          {/* Left Sidebar */}
          <div className="w-full lg:w-[400px] xl:w-[450px] bg-white border-b-3 lg:border-b-0 lg:border-r-3 border-black flex flex-col p-6 lg:p-8 z-10 overflow-y-auto">
            <h1 className="text-4xl lg:text-5xl font-black mb-2 leading-none">EXPLORE<br/><span className="text-primary drop-shadow-[2px_2px_0px_#000]">INDONESIA</span></h1>
            <p className="font-sans text-muted-foreground font-medium mb-8">
              Click markers on the map to discover diverse destinations across the archipelago.
            </p>

            {isLoading ? (
              <div className="animate-pulse space-y-4">
                <div className="h-48 bg-gray-200 brutal-border"></div>
                <div className="h-8 bg-gray-200 w-3/4"></div>
                <div className="h-4 bg-gray-200 w-full"></div>
                <div className="h-4 bg-gray-200 w-5/6"></div>
              </div>
            ) : activeSidebarDest ? (
              <BrutalistCard variant="white" className="mt-auto bg-[#F4F4F0] relative overflow-hidden">
                {/* Decorative corner block */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-secondary rotate-45 border-b-3 border-black z-10"></div>
                
                <div className="h-40 border-b-3 border-black relative bg-gray-200">
                  <img 
                    src={activeSidebarDest.imageUrl || "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80"} 
                    alt={activeSidebarDest.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 flex gap-2">
                    <BrutalistBadge variant="white" className="border-2 shadow-none text-[10px]">
                      <Star className="w-3 h-3 text-primary fill-primary inline mr-1"/>
                      {activeSidebarDest.rating}
                    </BrutalistBadge>
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-2xl mb-1">{activeSidebarDest.name}</h3>
                  <p className="font-display text-xs font-bold text-gray-500 uppercase mb-3 border-b-2 border-black/10 pb-2 inline-block">
                    {activeSidebarDest.subtitle}
                  </p>
                  <p className="font-sans text-sm text-gray-700 line-clamp-3 mb-5">
                    {activeSidebarDest.description}
                  </p>
                  
                  <BrutalistButton 
                    variant="black" 
                    fullWidth 
                    size="sm"
                    className="group"
                    onClick={() => setSelectedDestId(activeSidebarDest.id)}
                  >
                    <span className="flex items-center justify-center gap-2">
                      VIEW FULL DETAILS
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </BrutalistButton>
                </div>
              </BrutalistCard>
            ) : (
              <div className="mt-auto p-6 bg-gray-100 brutal-border text-center font-display font-bold">
                NO DESTINATIONS FOUND
              </div>
            )}
          </div>

          {/* Right Map Area */}
          <div className="flex-grow relative bg-[#E5E5DF]">
            <IndonesiaMap 
              destinations={destinations} 
              selectedId={selectedDestId}
              onSelect={handleMapSelect} 
            />
            {/* The absolute overlay modal triggered by marker click */}
            {selectedDestId && (
              <MapPopupModal 
                destination={destinations.find(d => d.id === selectedDestId) || null} 
                onClose={handleCloseModal} 
              />
            )}
          </div>
        </section>

        {/* STATS BAR */}
        <section className="bg-primary py-12 px-6 md:px-12 brutal-border border-l-0 border-r-0 border-t-0">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <BrutalistCard variant="white" className="p-6 text-center">
              <MapPin className="w-8 h-8 mx-auto mb-2 text-accent" />
              <div className="text-4xl md:text-5xl font-black mb-1">17K+</div>
              <div className="font-display font-bold text-xs md:text-sm uppercase text-gray-600">Islands</div>
            </BrutalistCard>
            <BrutalistCard variant="white" className="p-6 text-center">
              <Camera className="w-8 h-8 mx-auto mb-2 text-secondary" />
              <div className="text-4xl md:text-5xl font-black mb-1">300+</div>
              <div className="font-display font-bold text-xs md:text-sm uppercase text-gray-600">Attractions</div>
            </BrutalistCard>
            <BrutalistCard variant="white" className="p-6 text-center">
              <Star className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-4xl md:text-5xl font-black mb-1">50+</div>
              <div className="font-display font-bold text-xs md:text-sm uppercase text-gray-600">Featured</div>
            </BrutalistCard>
            <BrutalistCard variant="white" className="p-6 text-center">
              <Activity className="w-8 h-8 mx-auto mb-2 text-brutal-green" />
              <div className="text-4xl md:text-5xl font-black mb-1">100+</div>
              <div className="font-display font-bold text-xs md:text-sm uppercase text-gray-600">Activities</div>
            </BrutalistCard>
          </div>
        </section>

        {/* FEATURED DESTINATIONS */}
        <section id="featured" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <BrutalistBadge variant="accent" className="mb-4 text-sm">TOP PICKS</BrutalistBadge>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
                FEATURED<br/>DESTINATIONS
              </h2>
            </div>
            <BrutalistButton variant="white" size="lg">
              VIEW ALL DIRECTORY
            </BrutalistButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              Array(3).fill(0).map((_, i) => (
                <div key={i} className="h-96 bg-gray-200 brutal-border animate-pulse"></div>
              ))
            ) : featuredDestinations.length > 0 ? (
              featuredDestinations.map(dest => (
                <DestinationCard 
                  key={dest.id} 
                  destination={dest} 
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setSelectedDestId(dest.id);
                  }}
                />
              ))
            ) : (
              // Fallback placeholder cards if API is empty
              Array(3).fill(0).map((_, i) => (
                <BrutalistCard key={i} className="p-12 text-center flex flex-col items-center justify-center bg-gray-100 h-96">
                  <MapPin className="w-12 h-12 text-gray-400 mb-4" />
                  <h3 className="text-xl text-gray-500">Destination Coming Soon</h3>
                </BrutalistCard>
              ))
            )}
          </div>
        </section>

        {/* DISCOVER INDONESIA */}
        <section id="discover" className="py-20 px-6 md:px-12 bg-black text-white brutal-border border-l-0 border-r-0 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 flex flex-col items-start relative z-10">
              <BrutalistBadge variant="secondary" className="mb-6">ABOUT INDONESIA</BrutalistBadge>
              <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] text-white drop-shadow-[4px_4px_0px_#4A90E2]">
                A LAND OF<br/>ENDLESS<br/>WONDERS
              </h2>
              <p className="font-sans text-lg text-gray-300 mb-8 max-w-lg">
                Spanning the equator, Indonesia is the world's largest island country. 
                With over 17,000 islands, it offers unparalleled diversity in culture, 
                landscapes, and experiences. From the misty volcanoes of Java to the 
                pristine coral reefs of Raja Ampat.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-10">
                <span className="brutal-border border-white bg-brutal-green text-black font-display font-bold px-4 py-2 uppercase shadow-[4px_4px_0px_0px_#fff] -rotate-2">
                  17K+ ISLANDS
                </span>
                <span className="brutal-border border-white bg-primary text-black font-display font-bold px-4 py-2 uppercase shadow-[4px_4px_0px_0px_#fff] rotate-1">
                  1300+ ETHNIC GROUPS
                </span>
                <span className="brutal-border border-white bg-brutal-purple text-black font-display font-bold px-4 py-2 uppercase shadow-[4px_4px_0px_0px_#fff] -rotate-1">
                  9 UNESCO SITES
                </span>
              </div>
              
              <BrutalistButton variant="primary" size="lg" className="shadow-[4px_4px_0px_0px_#fff]">
                START YOUR JOURNEY
              </BrutalistButton>
            </div>
            
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute inset-0 bg-secondary translate-x-4 translate-y-4 brutal-border border-white"></div>
              <div className="absolute inset-0 bg-accent translate-x-8 translate-y-8 brutal-border border-white"></div>
              <BrutalistCard variant="white" className="relative z-10 h-[500px] p-2 bg-white border-white shadow-none">
                <div className="w-full h-full brutal-border border-black overflow-hidden bg-gray-800">
                   <img 
                     src={discoverImage} 
                     alt="Discover Indonesia" 
                     className="w-full h-full object-cover opacity-90"
                   />
                </div>
              </BrutalistCard>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
