
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

// Dummy news data
const newsData = [
  {
    id: 1,
    title: "Tyson vs. Jones Jr.: Der Kampf der Legenden endet unentschieden",
    excerpt: "Im mit Spannung erwarteten Showkampf zwischen Mike Tyson und Roy Jones Jr. gab es keinen Sieger. Die Richter werteten den Kampf als Unentschieden.",
    image: "/lovable-uploads/3d737b37-14f1-410a-9068-89e5aa6a3f05.png",
    date: "2023-05-10",
    author: "Michael Sportreporter",
  },
  {
    id: 2,
    title: "Neuer WM-Titel für deutsches Boxtalent",
    excerpt: "Der aufstrebende deutsche Boxer Max Meier sichert sich in einem spektakulären Kampf den WM-Titel im Mittelgewicht.",
    image: "/lovable-uploads/952baa56-eaec-4f25-95b6-912b72057dde.png",
    date: "2023-05-08",
    author: "Lisa Boxexpertin",
  },
  {
    id: 3,
    title: "Skandal beim Hauptkampf: Disqualifikation nach verbotenem Schlag",
    excerpt: "Der Titelkampf endete abrupt, nachdem der Herausforderer wegen eines verbotenen Schlags disqualifiziert wurde.",
    image: "/lovable-uploads/b67844d6-58b8-4d26-b556-9806dd95ba1d.png",
    date: "2023-05-05",
    author: "Thomas Ringside",
  },
];

const LatestNews = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {newsData.map((news) => (
          <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={news.image} 
                alt={news.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
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
      
      <div className="text-center mt-8">
        <Link to="/news" className="inline-block bg-primary text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors">
          Alle Nachrichten
        </Link>
      </div>
    </div>
  );
};

export default LatestNews;
