import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    // Add logic to update the app's language here
  };

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="text-crypto-blue text-3xl font-bold flex items-center">
            <span className="text-primary mr-1">Crypto</span>Media TM
          </div>
        </Link>
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Bitcoin</Link>
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Ethereum</Link>
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">DeFi</Link>
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">NFTs</Link>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-primary hover:bg-primary/80 text-primary-foreground font-medium rounded-md px-4 py-2 transition-colors text-sm">Subscribe</button>
          <div className="relative">
            <select
              value={language}
              onChange={(e) => handleLanguageChange(e.target.value)}
              className="bg-card border border-border text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="en">English</option>
              <option value="ru">Русский</option>
              <option value="tm">Türkmençe</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
