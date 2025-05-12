
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

// Dummy events data
const eventsData = [
  {
    id: 1,
    title: "Boxnacht Berlin",
    location: "Mercedes-Benz Arena, Berlin",
    date: "2023-06-15",
    time: "20:00",
    description: "Eine spektakuläre Boxnacht mit mehreren Titelkämpfen und Nachwuchstalenten.",
    mainEvent: "Schmidt vs. Müller",
    image: "https://via.placeholder.com/600x400",
  },
  {
    id: 2,
    title: "Fight Night München",
    location: "Olympiahalle, München",
    date: "2023-06-22",
    time: "19:30",
    description: "Die größte Boxveranstaltung des Jahres in Süddeutschland mit internationaler Beteiligung.",
    mainEvent: "Wagner vs. Hoffmann",
    image: "https://via.placeholder.com/600x400",
  },
  {
    id: 3,
    title: "Boxgala Hamburg",
    location: "Barclays Arena, Hamburg",
    date: "2023-07-05",
    time: "20:00",
    description: "Traditionsreiche Boxgala mit spannenden Kämpfen in verschiedenen Gewichtsklassen.",
    mainEvent: "Fischer vs. König",
    image: "https://via.placeholder.com/600x400",
  },
];

const UpcomingEvents = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {eventsData.map((event) => (
          <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2">
                <div className="font-bold">{event.mainEvent}</div>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="line-clamp-2 hover:text-primary transition-colors">
                <Link to={`/events/${event.id}`}>{event.title}</Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 line-clamp-2">{event.description}</p>
              <div className="flex items-center text-sm text-muted-foreground mb-1">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{event.date} um {event.time} Uhr</span>
              </div>
              <div className="text-sm text-muted-foreground">
                <span>{event.location}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Link 
                to={`/events/${event.id}`} 
                className="w-full bg-primary text-white py-2 rounded text-center hover:bg-opacity-90 transition-colors"
              >
                Details anzeigen
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Link to="/events" className="inline-block bg-primary text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors">
          Alle Events
        </Link>
      </div>
    </div>
  );
};

export default UpcomingEvents;
