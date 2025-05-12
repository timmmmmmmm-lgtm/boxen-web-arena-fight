
import React from "react";
import { Card } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <div className="relative bg-primary overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80')", 
          opacity: 0.3 
        }} 
      />
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Willkommen bei BoxFan</h1>
            <p className="text-xl mb-8">Deine zentrale Plattform für alle Box-News, Events und Community-Interaktion.</p>
            <div className="space-x-4">
              <button className="bg-destructive text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors">
                Live-Ergebnisse
              </button>
              <button className="bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors">
                Eventkalender
              </button>
            </div>
          </div>
          
          {!isMobile && (
            <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4">
              <div className="text-center p-2 bg-destructive text-white rounded mb-4">
                <h3 className="font-bold">Live jetzt</h3>
              </div>
              <div className="flex justify-between items-center mb-6">
                <div className="text-center">
                  <img 
                    src="https://via.placeholder.com/80" 
                    alt="Boxer 1" 
                    className="w-20 h-20 rounded-full mx-auto mb-2 object-cover"
                  />
                  <p className="font-bold">Max Müller</p>
                  <p className="text-sm text-muted-foreground">28-0-0</p>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold">VS</div>
                  <div className="text-xs text-muted-foreground mt-2">Runde 8/12</div>
                </div>
                
                <div className="text-center">
                  <img 
                    src="https://via.placeholder.com/80" 
                    alt="Boxer 2" 
                    className="w-20 h-20 rounded-full mx-auto mb-2 object-cover"
                  />
                  <p className="font-bold">Leon Schmidt</p>
                  <p className="text-sm text-muted-foreground">22-2-1</p>
                </div>
              </div>
              <button className="w-full bg-primary text-white py-2 rounded font-medium hover:bg-opacity-90 transition-colors">
                Zum Liveticker
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
