
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, MapPin } from "lucide-react";

// Dummy events data - expanded version
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
    category: "National",
    fights: [
      { fighters: "Max Schmidt vs. Leon Müller", weightClass: "Schwergewicht", rounds: 12, title: "Deutscher Meistertitel" },
      { fighters: "Tim Fischer vs. Jan König", weightClass: "Mittelgewicht", rounds: 10, title: "-" },
      { fighters: "Sarah Wagner vs. Lisa Bauer", weightClass: "Leichtgewicht (Frauen)", rounds: 10, title: "Europameistertitel" },
    ]
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
    category: "National",
    fights: [
      { fighters: "Felix Wagner vs. Paul Hoffmann", weightClass: "Halbschwergewicht", rounds: 12, title: "WBO International" },
      { fighters: "Markus Schwarz vs. Thomas Weiß", weightClass: "Weltergewicht", rounds: 8, title: "-" },
      { fighters: "Nina Klein vs. Laura Groß", weightClass: "Federgewicht (Frauen)", rounds: 8, title: "-" },
    ]
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
    category: "National",
    fights: [
      { fighters: "Tim Fischer vs. Jan König", weightClass: "Cruisergewicht", rounds: 12, title: "IBF Europameistertitel" },
      { fighters: "Kevin Schröder vs. Dennis Meyer", weightClass: "Supermittelgewicht", rounds: 10, title: "-" },
      { fighters: "Stefanie Wolf vs. Claudia Fuchs", weightClass: "Weltergewicht (Frauen)", rounds: 10, title: "WBA Continental" },
    ]
  },
  {
    id: 4,
    title: "WBC Championship Night",
    location: "MGM Grand, Las Vegas, USA",
    date: "2023-07-15",
    time: "20:00",
    description: "Einer der größten Box-Events des Jahres mit mehreren WM-Kämpfen.",
    mainEvent: "Johnson vs. Martinez",
    image: "https://via.placeholder.com/600x400",
    category: "International",
    fights: [
      { fighters: "Michael Johnson vs. Carlos Martinez", weightClass: "Schwergewicht", rounds: 12, title: "WBC Weltmeistertitel" },
      { fighters: "Robert Adams vs. Hassan Ali", weightClass: "Mittelgewicht", rounds: 12, title: "WBC Interim-Weltmeistertitel" },
      { fighters: "David Garcia vs. Liu Zhang", weightClass: "Leichtgewicht", rounds: 10, title: "-" },
    ]
  },
  {
    id: 5,
    title: "Nachwuchs-Turnier Berlin",
    location: "Verti Music Hall, Berlin",
    date: "2023-07-22",
    time: "18:00",
    description: "Auftritt der besten deutschen Nachwuchsboxer mit großem Potential.",
    mainEvent: "Mehrere Nachwuchskämpfe",
    image: "https://via.placeholder.com/600x400",
    category: "Nachwuchs",
    fights: [
      { fighters: "Diverse Nachwuchsboxer", weightClass: "Verschiedene", rounds: "Verschiedene", title: "-" },
    ]
  },
  {
    id: 6,
    title: "Lokalderby Köln",
    location: "Lanxess Arena, Köln",
    date: "2023-07-29",
    time: "19:00",
    description: "Das große Kölner Lokalderby zwischen den beiden besten Boxern der Stadt.",
    mainEvent: "Meier vs. Schmidt",
    image: "https://via.placeholder.com/600x400",
    category: "Lokal",
    fights: [
      { fighters: "Lukas Meier vs. Tobias Schmidt", weightClass: "Mittelgewicht", rounds: 10, title: "Stadtmeisterschaft Köln" },
      { fighters: "Diverse lokale Boxer", weightClass: "Verschiedene", rounds: "Verschiedene", title: "-" },
    ]
  }
];

const EventsPage = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Box-Events</h1>
        
        <Tabs defaultValue="all" className="w-full mb-8">
          <TabsList className="w-full justify-start mb-6">
            <TabsTrigger value="all">Alle Events</TabsTrigger>
            <TabsTrigger value="upcoming">Kommende Events</TabsTrigger>
            <TabsTrigger value="national">National</TabsTrigger>
            <TabsTrigger value="international">International</TabsTrigger>
            <TabsTrigger value="local">Lokal</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded">
                      {event.category}
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
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
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
          </TabsContent>
          
          <TabsContent value="upcoming" className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              {eventsData.map((event) => (
                <Card key={event.id} className="overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-4">
                    <div className="md:col-span-1 aspect-video md:aspect-square relative overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:col-span-3 p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold">{event.title}</h3>
                        <span className="bg-primary text-white text-xs px-2 py-1 rounded">
                          {event.category}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-4">{event.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <div className="flex items-center text-sm mb-1">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{event.date} um {event.time} Uhr</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        <div>
                          <div className="font-medium mb-1">Hauptkampf:</div>
                          <div className="text-sm bg-accent p-2 rounded">
                            {event.mainEvent}
                          </div>
                        </div>
                      </div>
                      <Link 
                        to={`/events/${event.id}`} 
                        className="bg-primary text-white px-4 py-1 rounded text-sm hover:bg-opacity-90 transition-colors"
                      >
                        Details anzeigen
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="national" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventsData
                .filter(event => event.category === "National")
                .map((event) => (
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
                      <CardTitle className="line-clamp-2">{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 line-clamp-2">{event.description}</p>
                      <div className="flex items-center text-sm text-muted-foreground mb-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{event.date} um {event.time} Uhr</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2" />
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
          </TabsContent>
          
          <TabsContent value="international" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventsData
                .filter(event => event.category === "International")
                .map((event) => (
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
                      <CardTitle className="line-clamp-2">{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 line-clamp-2">{event.description}</p>
                      <div className="flex items-center text-sm text-muted-foreground mb-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{event.date} um {event.time} Uhr</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2" />
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
          </TabsContent>
          
          <TabsContent value="local" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventsData
                .filter(event => event.category === "Lokal")
                .map((event) => (
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
                      <CardTitle className="line-clamp-2">{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 line-clamp-2">{event.description}</p>
                      <div className="flex items-center text-sm text-muted-foreground mb-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{event.date} um {event.time} Uhr</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2" />
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
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default EventsPage;
