
import React from "react";
import { Card } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <div className="relative bg-primary overflow-hidden">
      {/* Darkened background image with a black overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('/lovable-uploads/b67844d6-58b8-4d26-b556-9806dd95ba1d.png')", 
          opacity: 0.3
        }} 
      />
      
      {/* Additional dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white text-shadow">WILLKOMMEN BEI BOXFAN</h1>
            <p className="text-xl mb-8 text-white">Deine zentrale Plattform für alle Box-News, Events und Community-Interaktion.</p>
            <div className="space-x-4">
              <Button variant="secondary" className="text-white bg-boxing-red hover:bg-boxing-red/90">
                Live-Ergebnisse
              </Button>
              <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                Eventkalender
              </Button>
            </div>
          </div>
          
          {!isMobile && (
            <div className="bg-background/90 backdrop-blur-sm rounded-lg p-4">
              <div className="text-center p-2 bg-destructive text-white rounded mb-4">
                <h3 className="font-bold text-white">Live jetzt</h3>
              </div>
              <div className="flex justify-between items-center mb-6">
                <div className="text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-2">
                    <AvatarImage 
                      src="/lovable-uploads/a4ed57fc-65a1-4a87-89f0-6df8abcb7d0f.png" 
                      alt="Max Müller" 
                      className="object-cover"
                    />
                    <AvatarFallback>MM</AvatarFallback>
                  </Avatar>
                  <p className="font-bold text-sport-dark">Max Müller</p>
                  <p className="text-sm text-muted-foreground">28-0-0</p>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-sport-dark">VS</div>
                  <div className="text-xs text-muted-foreground mt-2">Runde 8/12</div>
                </div>
                
                <div className="text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-2">
                    <AvatarImage 
                      src="/lovable-uploads/764f5b4d-c463-433d-9f28-1ac8e8fb9aa3.png" 
                      alt="Leon Schmidt" 
                      className="object-cover"
                    />
                    <AvatarFallback>LS</AvatarFallback>
                  </Avatar>
                  <p className="font-bold text-sport-dark">Leon Schmidt</p>
                  <p className="text-sm text-muted-foreground">22-2-1</p>
                </div>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white" variant="default">
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
