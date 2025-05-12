
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-accent mt-10">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">BoxFan</h3>
            <p className="text-muted-foreground">
              Die zentrale Informationsplattform für Box-Fans und aktive Boxer.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary transition-colors">Startseite</Link></li>
              <li><Link to="/news" className="hover:text-primary transition-colors">Nachrichten</Link></li>
              <li><Link to="/events" className="hover:text-primary transition-colors">Events</Link></li>
              <li><Link to="/rankings" className="hover:text-primary transition-colors">Ranglisten</Link></li>
              <li><Link to="/community" className="hover:text-primary transition-colors">Community</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Gewichtsklassen</h3>
            <ul className="space-y-2">
              <li><Link to="/rankings/heavyweight" className="hover:text-primary transition-colors">Schwergewicht</Link></li>
              <li><Link to="/rankings/cruiserweight" className="hover:text-primary transition-colors">Cruisergewicht</Link></li>
              <li><Link to="/rankings/middleweight" className="hover:text-primary transition-colors">Mittelgewicht</Link></li>
              <li><Link to="/rankings/welterweight" className="hover:text-primary transition-colors">Weltergewicht</Link></li>
              <li><Link to="/rankings/lightweight" className="hover:text-primary transition-colors">Leichtgewicht</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li><Link to="/impressum" className="hover:text-primary transition-colors">Impressum</Link></li>
              <li><Link to="/datenschutz" className="hover:text-primary transition-colors">Datenschutz</Link></li>
              <li><Link to="/kontakt" className="hover:text-primary transition-colors">Kontakt</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} BoxFan. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
