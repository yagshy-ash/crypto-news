
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="text-crypto-blue text-3xl font-bold flex items-center">
            <span className="text-primary mr-1">Crypto</span>Chronicle
          </div>
        </Link>
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Bitcoin</Link>
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Ethereum</Link>
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">DeFi</Link>
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">NFTs</Link>
        </div>
        <div className="flex items-center">
          <button className="bg-primary hover:bg-primary/80 text-primary-foreground font-medium rounded-md px-4 py-2 transition-colors text-sm">Subscribe</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
