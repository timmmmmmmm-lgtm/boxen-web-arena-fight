
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X, Bell, User } from "lucide-react";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

const Header = () => {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b sticky top-0 z-50 bg-background">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="font-bold text-2xl flex items-center">
            <span className="text-primary">Box</span>
            <span className="text-destructive">Fan</span>
          </Link>

          {isMobile ? (
            <>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2"
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
              
              {mobileMenuOpen && (
                <div className="absolute top-16 left-0 right-0 bg-background border-b p-4 z-50">
                  <nav className="flex flex-col space-y-4">
                    <Link to="/" className="hover:text-primary transition-colors">Startseite</Link>
                    <Link to="/news" className="hover:text-primary transition-colors">Nachrichten</Link>
                    <Link to="/events" className="hover:text-primary transition-colors">Events</Link>
                    <Link to="/rankings" className="hover:text-primary transition-colors">Ranglisten</Link>
                    <Link to="/community" className="hover:text-primary transition-colors">Community</Link>
                  </nav>
                </div>
              )}
            </>
          ) : (
            <div className="flex items-center space-x-6">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link to="/" className={navigationMenuTriggerStyle()}>
                      Startseite
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link to="/news" className={navigationMenuTriggerStyle()}>
                      Nachrichten
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Events</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[400px] grid-cols-2 gap-3 p-4">
                        <Link to="/events" className="block p-2 hover:bg-accent rounded">
                          <div className="text-sm font-medium">Alle Events</div>
                          <div className="text-xs text-muted-foreground">Übersicht aller Events</div>
                        </Link>
                        <Link to="/events/upcoming" className="block p-2 hover:bg-accent rounded">
                          <div className="text-sm font-medium">Kommende Events</div>
                          <div className="text-xs text-muted-foreground">Die nächsten Kämpfe</div>
                        </Link>
                        <Link to="/events/past" className="block p-2 hover:bg-accent rounded">
                          <div className="text-sm font-medium">Vergangene Events</div>
                          <div className="text-xs text-muted-foreground">Ergebnisse vergangener Kämpfe</div>
                        </Link>
                        <Link to="/events/calendar" className="block p-2 hover:bg-accent rounded">
                          <div className="text-sm font-medium">Eventkalender</div>
                          <div className="text-xs text-muted-foreground">Kalenderansicht</div>
                        </Link>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link to="/rankings" className={navigationMenuTriggerStyle()}>
                      Ranglisten
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link to="/community" className={navigationMenuTriggerStyle()}>
                      Community
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <div className="flex items-center space-x-2">
                <button className="hover:text-primary transition-colors p-2">
                  <Bell />
                </button>
                <button className="hover:text-primary transition-colors p-2">
                  <User />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
