
import React from "react";
import { Card } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <div className="relative bg-primary overflow-hidden">
      {/* Darkened background image with a black overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('/lovable-uploads/b67844d6-58b8-4d26-b556-9806dd95ba1d.png')", 
          opacity: 0.5
        }} 
      />
      
      {/* Additional dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-sport-light">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-sport-light text-shadow">WILLKOMMEN BEI BOXFAN</h1>
            <p className="text-xl mb-8 text-sport-light">Deine zentrale Plattform für alle Box-News, Events und Community-Interaktion.</p>
            <div className="space-x-4">
              <Button variant="secondary" className="text-sport-light">
                Live-Ergebnisse
              </Button>
              <Button variant="outline" className="bg-transparent text-sport-light border-sport-light hover:bg-sport-light/10">
                Eventkalender
              </Button>
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
                    src="/lovable-uploads/952baa56-eaec-4f25-95b6-912b72057dde.png" 
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
                    src="/lovable-uploads/952baa56-eaec-4f25-95b6-912b72057dde.png" 
                    alt="Boxer 2" 
                    className="w-20 h-20 rounded-full mx-auto mb-2 object-cover"
                  />
                  <p className="font-bold">Leon Schmidt</p>
                  <p className="text-sm text-muted-foreground">22-2-1</p>
                </div>
              </div>
              <Button className="w-full" variant="secondary">
                Zum Liveticker
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
