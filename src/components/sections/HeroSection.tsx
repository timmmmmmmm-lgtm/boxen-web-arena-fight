
import React from "react";
import { Card } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <div className="relative bg-secondary overflow-hidden">
      {/* Hintergrundbild mit dunklem Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('/lovable-uploads/cf24bcd3-2d4e-4458-92ec-a2de0b27e34a.png')", 
          opacity: 0.4
        }} 
      />
      
      {/* Zusätzliches dunkles Overlay für bessere Textlesbarkeit */}
      <div className="absolute inset-0 bg-secondary opacity-80"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-foreground">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white text-shadow">WILLKOMMEN BEI BOXFAN</h1>
            <p className="text-xl mb-8 text-foreground">Deine zentrale Plattform für alle Box-News, Events und Community-Interaktion.</p>
            <div className="space-x-4">
              <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Live-Ergebnisse
              </Button>
              <Button variant="outline" className="bg-transparent text-primary border-primary hover:bg-primary/10">
                Eventkalender
              </Button>
            </div>
          </div>
          
          {!isMobile && (
            <div className="bg-background/90 backdrop-blur-sm rounded-lg p-4">
              <div className="text-center p-2 bg-destructive text-destructive-foreground rounded mb-4">
                <h3 className="font-bold">Live jetzt</h3>
              </div>
              <div className="flex justify-between items-center mb-6">
                <div className="text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-2">
                    <AvatarImage 
                      src="/lovable-uploads/4c4231f6-fc19-479b-a044-8799acabe445.png" 
                      alt="Max Müller" 
                      className="object-cover"
                    />
                    <AvatarFallback>MM</AvatarFallback>
                  </Avatar>
                  <p className="font-bold text-foreground">Max Müller</p>
                  <p className="text-sm text-muted-foreground">28-0-0</p>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground">VS</div>
                  <div className="text-xs text-muted-foreground mt-2">Runde 8/12</div>
                </div>
                
                <div className="text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-2">
                    <AvatarImage 
                      src="/lovable-uploads/aefbd488-46da-40b1-8657-7ab34faa6028.png" 
                      alt="Leon Schmidt" 
                      className="object-cover"
                    />
                    <AvatarFallback>LS</AvatarFallback>
                  </Avatar>
                  <p className="font-bold text-foreground">Leon Schmidt</p>
                  <p className="text-sm text-muted-foreground">22-2-1</p>
                </div>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" variant="default">
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
