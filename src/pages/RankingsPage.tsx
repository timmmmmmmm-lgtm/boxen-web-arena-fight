
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Link } from "react-router-dom";

// Dummy rankings data for different weight classes
const rankings = {
  heavyweight: [
    { rank: 1, name: "Max Schmidt", record: "32-0-0", lastFight: "2023-04-15", country: "Deutschland" },
    { rank: 2, name: "Michael Johnson", record: "28-1-0", lastFight: "2023-03-22", country: "USA" },
    { rank: 3, name: "Ivan Petrov", record: "26-2-0", lastFight: "2023-02-18", country: "Russland" },
    { rank: 4, name: "Carlos Rodriguez", record: "24-2-1", lastFight: "2023-05-01", country: "Mexiko" },
    { rank: 5, name: "David Thompson", record: "22-0-0", lastFight: "2023-01-30", country: "Großbritannien" },
    { rank: 6, name: "Ahmed Hassan", record: "21-1-0", lastFight: "2023-03-12", country: "Ägypten" },
    { rank: 7, name: "Toni Müller", record: "20-2-0", lastFight: "2023-04-08", country: "Deutschland" },
    { rank: 8, name: "Zhang Wei", record: "19-0-0", lastFight: "2023-02-25", country: "China" },
    { rank: 9, name: "John Anderson", record: "18-3-1", lastFight: "2023-03-05", country: "USA" },
    { rank: 10, name: "Paulo Costa", record: "17-2-0", lastFight: "2023-04-22", country: "Brasilien" },
  ],
  cruiserweight: [
    { rank: 1, name: "Tim Fischer", record: "30-0-0", lastFight: "2023-05-06", country: "Deutschland" },
    { rank: 2, name: "Robert Adams", record: "28-1-0", lastFight: "2023-04-18", country: "USA" },
    { rank: 3, name: "Victor Orlov", record: "27-1-0", lastFight: "2023-03-11", country: "Russland" },
    { rank: 4, name: "Marco Rossi", record: "24-3-0", lastFight: "2023-02-19", country: "Italien" },
    { rank: 5, name: "Chris Wilson", record: "23-2-0", lastFight: "2023-04-29", country: "Großbritannien" },
    { rank: 6, name: "Jan König", record: "22-1-1", lastFight: "2023-05-06", country: "Deutschland" },
    { rank: 7, name: "Omar Farooq", record: "21-0-0", lastFight: "2023-03-25", country: "Ägypten" },
    { rank: 8, name: "Hiroshi Tanaka", record: "20-1-0", lastFight: "2023-01-28", country: "Japan" },
    { rank: 9, name: "Brandon Williams", record: "19-2-0", lastFight: "2023-04-01", country: "USA" },
    { rank: 10, name: "Sergio Lopez", record: "18-3-0", lastFight: "2023-02-04", country: "Mexiko" },
  ],
  middleweight: [
    { rank: 1, name: "Felix Wagner", record: "29-0-0", lastFight: "2023-04-22", country: "Deutschland" },
    { rank: 2, name: "James Miller", record: "27-1-0", lastFight: "2023-03-18", country: "USA" },
    { rank: 3, name: "Aleksei Sokolov", record: "26-1-1", lastFight: "2023-05-06", country: "Russland" },
    { rank: 4, name: "Paul Hoffmann", record: "25-2-0", lastFight: "2023-04-22", country: "Deutschland" },
    { rank: 5, name: "Antoine Dubois", record: "24-0-0", lastFight: "2023-02-11", country: "Frankreich" },
    { rank: 6, name: "Sam Taylor", record: "22-3-0", lastFight: "2023-03-04", country: "Großbritannien" },
    { rank: 7, name: "Giuseppe Verdi", record: "21-1-0", lastFight: "2023-01-21", country: "Italien" },
    { rank: 8, name: "Miguel Hernandez", record: "20-2-1", lastFight: "2023-04-08", country: "Mexiko" },
    { rank: 9, name: "Markus Schwarz", record: "19-1-0", lastFight: "2023-03-11", country: "Deutschland" },
    { rank: 10, name: "Kenji Yamamoto", record: "18-1-0", lastFight: "2023-02-25", country: "Japan" },
  ],
  welterweight: [
    { rank: 1, name: "Thomas Weiß", record: "28-0-0", lastFight: "2023-05-06", country: "Deutschland" },
    { rank: 2, name: "Terence Brown", record: "27-0-0", lastFight: "2023-04-15", country: "USA" },
    { rank: 3, name: "Antonio Morales", record: "26-1-0", lastFight: "2023-03-11", country: "Mexiko" },
    { rank: 4, name: "Kevin Schröder", record: "25-1-0", lastFight: "2023-02-18", country: "Deutschland" },
    { rank: 5, name: "Billy Thompson", record: "24-2-0", lastFight: "2023-04-01", country: "Großbritannien" },
    { rank: 6, name: "Dimitri Popov", record: "23-1-0", lastFight: "2023-01-28", country: "Russland" },
    { rank: 7, name: "Jean Dupont", record: "22-2-1", lastFight: "2023-03-25", country: "Frankreich" },
    { rank: 8, name: "Ricardo Silva", record: "21-3-0", lastFight: "2023-02-11", country: "Brasilien" },
    { rank: 9, name: "Dennis Meyer", record: "20-0-0", lastFight: "2023-05-06", country: "Deutschland" },
    { rank: 10, name: "Yoshiro Sato", record: "19-2-0", lastFight: "2023-04-08", country: "Japan" },
  ],
  lightweight: [
    { rank: 1, name: "Leon Schulz", record: "27-0-0", lastFight: "2023-04-22", country: "Deutschland" },
    { rank: 2, name: "Ryan Carter", record: "26-1-0", lastFight: "2023-05-06", country: "USA" },
    { rank: 3, name: "Luis Martinez", record: "25-1-0", lastFight: "2023-03-18", country: "Mexiko" },
    { rank: 4, name: "Vasily Kuznetsov", record: "24-2-0", lastFight: "2023-02-25", country: "Russland" },
    { rank: 5, name: "Daniel Schmidt", record: "23-0-0", lastFight: "2023-04-08", country: "Deutschland" },
    { rank: 6, name: "Harry Wilson", record: "22-1-1", lastFight: "2023-01-21", country: "Großbritannien" },
    { rank: 7, name: "Pierre Lefebvre", record: "21-2-0", lastFight: "2023-03-04", country: "Frankreich" },
    { rank: 8, name: "Marco Bianchi", record: "20-1-0", lastFight: "2023-02-11", country: "Italien" },
    { rank: 9, name: "Jose Gonzalez", record: "19-3-0", lastFight: "2023-04-01", country: "Spanien" },
    { rank: 10, name: "Tobias Wolf", record: "18-0-0", lastFight: "2023-03-11", country: "Deutschland" },
  ],
};

const RankingsPage = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Box-Ranglisten</h1>
        
        <Tabs defaultValue="heavyweight" className="w-full">
          <TabsList className="w-full justify-start mb-6 overflow-x-auto flex-nowrap">
            <TabsTrigger value="heavyweight">Schwergewicht</TabsTrigger>
            <TabsTrigger value="cruiserweight">Cruisergewicht</TabsTrigger>
            <TabsTrigger value="middleweight">Mittelgewicht</TabsTrigger>
            <TabsTrigger value="welterweight">Weltergewicht</TabsTrigger>
            <TabsTrigger value="lightweight">Leichtgewicht</TabsTrigger>
          </TabsList>
          
          {Object.entries(rankings).map(([weightClass, boxers]) => (
            <TabsContent key={weightClass} value={weightClass} className="space-y-6">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-16">Rang</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Bilanz</TableHead>
                      <TableHead>Letzter Kampf</TableHead>
                      <TableHead>Herkunft</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {boxers.map((boxer) => (
                      <TableRow key={boxer.rank} className={boxer.rank <= 3 ? "bg-primary/10" : ""}>
                        <TableCell className="font-medium">{boxer.rank}</TableCell>
                        <TableCell>
                          <Link to={`/boxers/${boxer.name.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-primary transition-colors">
                            {boxer.name}
                          </Link>
                        </TableCell>
                        <TableCell>{boxer.record}</TableCell>
                        <TableCell>{boxer.lastFight}</TableCell>
                        <TableCell>{boxer.country}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              <div className="bg-accent p-4 rounded">
                <h3 className="font-medium mb-2">Über diese Rangliste</h3>
                <p className="text-sm text-muted-foreground">
                  Diese Rangliste wird monatlich aktualisiert und basiert auf den Ergebnissen der letzten Kämpfe, 
                  sowie den offiziellen Ranglisten der wichtigsten Box-Verbände (WBA, WBC, IBF, WBO).
                </p>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default RankingsPage;
