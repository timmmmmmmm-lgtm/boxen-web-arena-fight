
import React from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MainLayout from "@/components/layouts/MainLayout";
import HeroSection from "@/components/sections/HeroSection";
import LatestNews from "@/components/sections/LatestNews";
import UpcomingEvents from "@/components/sections/UpcomingEvents";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <MainLayout>
      <HeroSection />
      
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="news" className="w-full">
          <TabsList className="w-full justify-start mb-6 bg-sidebar">
            <TabsTrigger value="news" className="text-white hover:text-white data-[state=active]:text-white">Neueste Nachrichten</TabsTrigger>
            <TabsTrigger value="events" className="text-white hover:text-white data-[state=active]:text-white">Kommende Events</TabsTrigger>
            <TabsTrigger value="rankings" className="text-white hover:text-white data-[state=active]:text-white">Ranglisten</TabsTrigger>
          </TabsList>
          
          <TabsContent value="news" className="space-y-6">
            <LatestNews />
          </TabsContent>
          
          <TabsContent value="events" className="space-y-6">
            <UpcomingEvents />
          </TabsContent>
          
          <TabsContent value="rankings" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Schwergewicht Rangliste</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Top Boxer im Schwergewicht</p>
                  <div className="space-y-2">
                    {[1, 2, 3, 4, 5].map((rank) => (
                      <div key={rank} className="flex justify-between border-b pb-2">
                        <span className="font-bold">{rank}.</span>
                        <span>Boxer Name {rank}</span>
                        <span className="text-muted-foreground">32-0-0</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Mittelgewicht Rangliste</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Top Boxer im Mittelgewicht</p>
                  <div className="space-y-2">
                    {[1, 2, 3, 4, 5].map((rank) => (
                      <div key={rank} className="flex justify-between border-b pb-2">
                        <span className="font-bold">{rank}.</span>
                        <span>Boxer Name {rank}</span>
                        <span className="text-muted-foreground">28-1-0</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Index;
