
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { User, Star, MessageCircle } from "lucide-react";

// Dummy community members
const communityMembers = [
  {
    id: 1,
    username: "BoxFan123",
    name: "Michael Schmidt",
    avatar: "https://via.placeholder.com/150",
    joinDate: "2022-01-15",
    posts: 127,
    favoriteBoxer: "Max Schmidt",
    level: "Experte",
  },
  {
    id: 2,
    username: "RingWarrior",
    name: "Lisa Müller",
    avatar: "https://via.placeholder.com/150",
    joinDate: "2022-03-22",
    posts: 98,
    favoriteBoxer: "Felix Wagner",
    level: "Enthusiast",
  },
  {
    id: 3,
    username: "KnockoutKing",
    name: "Thomas Fischer",
    avatar: "https://via.placeholder.com/150",
    joinDate: "2022-02-08",
    posts: 156,
    favoriteBoxer: "Michael Johnson",
    level: "Experte",
  },
  {
    id: 4,
    username: "BoxingFever",
    name: "Julia Wagner",
    avatar: "https://via.placeholder.com/150",
    joinDate: "2022-04-30",
    posts: 76,
    favoriteBoxer: "Leon Schulz",
    level: "Amateur",
  },
  {
    id: 5,
    username: "RingMaster",
    name: "Kevin König",
    avatar: "https://via.placeholder.com/150",
    joinDate: "2022-01-03",
    posts: 203,
    favoriteBoxer: "Tim Fischer",
    level: "Veteran",
  },
  {
    id: 6,
    username: "PunchPerfect",
    name: "Sandra Wolf",
    avatar: "https://via.placeholder.com/150",
    joinDate: "2022-03-17",
    posts: 87,
    favoriteBoxer: "Sarah Wagner",
    level: "Amateur",
  },
];

// Dummy discussions
const discussions = [
  {
    id: 1,
    title: "Wer wird der nächste deutsche Boxweltmeister?",
    author: "BoxFan123",
    date: "2023-05-08",
    comments: 34,
    excerpt: "Nach den jüngsten Erfolgen deutscher Boxer stellt sich die Frage: Wer hat das Potenzial, der nächste deutsche Weltmeister zu werden? Lasst uns diskutieren!",
  },
  {
    id: 2,
    title: "Techniken zum Verbessern der Schlagkraft",
    author: "RingWarrior",
    date: "2023-05-06",
    comments: 28,
    excerpt: "Ich trainiere seit einigen Monaten Boxen und würde gerne meine Schlagkraft verbessern. Habt ihr Tipps und Übungen, die mir helfen könnten?",
  },
  {
    id: 3,
    title: "Analyse des letzten Titelkampfs",
    author: "KnockoutKing",
    date: "2023-05-04",
    comments: 42,
    excerpt: "Der Titelkampf am vergangenen Wochenende hat viele überrascht. Lasst uns die Taktiken beider Boxer analysieren und darüber diskutieren, was den Unterschied gemacht hat.",
  },
  {
    id: 4,
    title: "Die besten Box-Dokumentationen",
    author: "BoxingFever",
    date: "2023-05-02",
    comments: 19,
    excerpt: "Ich bin auf der Suche nach guten Box-Dokumentationen. Kennt ihr sehenswerte Filme oder Serien, die die Geschichte des Boxens oder einzelner Boxer beleuchten?",
  },
];

const CommunityPage = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Community</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Willkommen in der Boxing-Community</CardTitle>
                <CardDescription>
                  Tausche dich mit anderen Box-Fans aus, teile deine Meinung und bleibe mit Gleichgesinnten in Kontakt.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Unsere Community ist der Ort, an dem Boxfans zusammenkommen, um über aktuelle Ereignisse zu diskutieren, 
                  Meinungen auszutauschen und ihre Leidenschaft für den Boxsport zu teilen.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <div className="bg-accent p-4 rounded text-center">
                    <User className="h-6 w-6 mx-auto mb-2" />
                    <div className="text-2xl font-bold">2,543</div>
                    <div className="text-sm text-muted-foreground">Mitglieder</div>
                  </div>
                  <div className="bg-accent p-4 rounded text-center">
                    <MessageCircle className="h-6 w-6 mx-auto mb-2" />
                    <div className="text-2xl font-bold">18,721</div>
                    <div className="text-sm text-muted-foreground">Beiträge</div>
                  </div>
                  <div className="bg-accent p-4 rounded text-center">
                    <Star className="h-6 w-6 mx-auto mb-2" />
                    <div className="text-2xl font-bold">5,129</div>
                    <div className="text-sm text-muted-foreground">Diskussionen</div>
                  </div>
                </div>
                <div className="bg-primary/10 p-4 rounded flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Werde Teil unserer Community</h3>
                    <p className="text-sm text-muted-foreground">Erstelle ein Profil und tausche dich mit anderen Box-Fans aus.</p>
                  </div>
                  <button className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors">
                    Registrieren
                  </button>
                </div>
              </CardContent>
            </Card>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Aktuelle Diskussionen</h2>
              <div className="space-y-4">
                {discussions.map((discussion) => (
                  <Card key={discussion.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg hover:text-primary transition-colors">
                        <Link to={`/community/discussions/${discussion.id}`}>{discussion.title}</Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm line-clamp-2">{discussion.excerpt}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        <span>{discussion.author}</span>
                      </div>
                      <span>{discussion.date}</span>
                      <div className="flex items-center">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        <span>{discussion.comments} Kommentare</span>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-6">
                <Link to="/community/discussions" className="inline-block bg-primary text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors">
                  Alle Diskussionen
                </Link>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Aktive Mitglieder</h2>
            <div className="space-y-4">
              {communityMembers.slice(0, 4).map((member) => (
                <Card key={member.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <img 
                        src={member.avatar} 
                        alt={member.username}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-medium hover:text-primary transition-colors">
                          <Link to={`/community/members/${member.id}`}>{member.username}</Link>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {member.level} • {member.posts} Beiträge
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link to="/community/members" className="inline-block bg-primary text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors">
                Alle Mitglieder
              </Link>
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Community-Statistiken</h2>
            <Card>
              <CardContent className="p-4">
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Beliebteste Gewichtsklasse</div>
                    <div className="font-medium">Schwergewicht</div>
                    <div className="w-full bg-muted h-2 rounded-full mt-1">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "65%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Beliebtester Boxer</div>
                    <div className="font-medium">Max Schmidt</div>
                    <div className="w-full bg-muted h-2 rounded-full mt-1">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "78%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Aktivste Diskussion</div>
                    <div className="font-medium">Wer wird der nächste deutsche Boxweltmeister?</div>
                    <div className="w-full bg-muted h-2 rounded-full mt-1">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "92%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CommunityPage;
