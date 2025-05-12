
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

// Dummy news data - expanded version of the data in LatestNews component
const newsData = [
  {
    id: 1,
    title: "Tyson vs. Jones Jr.: Der Kampf der Legenden endet unentschieden",
    excerpt: "Im mit Spannung erwarteten Showkampf zwischen Mike Tyson und Roy Jones Jr. gab es keinen Sieger. Die Richter werteten den Kampf als Unentschieden.",
    image: "https://via.placeholder.com/600x400",
    date: "2023-05-10",
    author: "Michael Sportreporter",
    category: "International",
  },
  {
    id: 2,
    title: "Neuer WM-Titel für deutsches Boxtalent",
    excerpt: "Der aufstrebende deutsche Boxer Max Meier sichert sich in einem spektakulären Kampf den WM-Titel im Mittelgewicht.",
    image: "https://via.placeholder.com/600x400",
    date: "2023-05-08",
    author: "Lisa Boxexpertin",
    category: "National",
  },
  // Additional news items
  {
    id: 3,
    title: "Skandal beim Hauptkampf: Disqualifikation nach verbotenem Schlag",
    excerpt: "Der Titelkampf endete abrupt, nachdem der Herausforderer wegen eines verbotenen Schlags disqualifiziert wurde.",
    image: "https://via.placeholder.com/600x400",
    date: "2023-05-05",
    author: "Thomas Ringside",
    category: "International",
  },
  {
    id: 4,
    title: "Newcomer überrascht die Boxwelt mit K.O. in der ersten Runde",
    excerpt: "Der junge Boxer setzte ein beeindruckendes Statement, indem er seinen erfahrenen Gegner bereits nach 45 Sekunden auf die Matte schickte.",
    image: "https://via.placeholder.com/600x400",
    date: "2023-05-03",
    author: "Julia Ringsidereporterin",
    category: "International",
  },
  {
    id: 5,
    title: "Lokaler Boxclub veranstaltet Charity-Event für kranke Kinder",
    excerpt: "Boxen für den guten Zweck: Der Boxclub München sammelte über 50.000 Euro für die Kinderkrebshilfe.",
    image: "https://via.placeholder.com/600x400",
    date: "2023-05-01",
    author: "Peter Lokalsport",
    category: "Lokal",
  },
  {
    id: 6,
    title: "Rückkampf bestätigt: Die Revanche des Jahres steht fest",
    excerpt: "Nach dem umstrittenen ersten Kampf werden die beiden Rivalen im September erneut in den Ring steigen.",
    image: "https://via.placeholder.com/600x400",
    date: "2023-04-28",
    author: "Sandra Boxreporterin",
    category: "International",
  },
];

const NewsPage = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Boxnachrichten</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Featured news item */}
          <Card className="md:col-span-2 lg:col-span-3 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-video md:aspect-auto md:h-full relative overflow-hidden">
                <img 
                  src="https://via.placeholder.com/800x500" 
                  alt="Featured News"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-destructive font-medium mb-2">Top-Meldung</div>
                <h2 className="text-2xl font-bold mb-4">Historisches Comeback: Boxlegende kehrt nach 10 Jahren in den Ring zurück</h2>
                <p className="text-muted-foreground mb-6">
                  Die Box-Community ist elektrisiert: Eine der größten Legenden des Sports hat ihr Comeback angekündigt.
                  Nach einer Dekade Abwesenheit vom Profiboxen wird der ehemalige Weltmeister für einen letzten großen Kampf in den Ring zurückkehren.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Heute, 08:30 Uhr</span>
                  <Link 
                    to="/news/featured" 
                    className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors"
                  >
                    Weiterlesen
                  </Link>
                </div>
              </div>
            </div>
          </Card>
          
          {/* News grid */}
          {newsData.map((news) => (
            <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded">
                  {news.category}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2 hover:text-primary transition-colors">
                  <Link to={`/news/${news.id}`}>{news.title}</Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3">{news.excerpt}</p>
              </CardContent>
              <CardFooter className="flex justify-between text-sm text-muted-foreground">
                <span>{news.author}</span>
                <span>{news.date}</span>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center">
          <button className="bg-primary text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors">
            Mehr Nachrichten laden
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default NewsPage;
