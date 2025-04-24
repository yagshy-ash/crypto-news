
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-card/80 border-t border-border mt-12 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="text-crypto-blue text-2xl font-bold flex items-center mb-3">
              <span className="text-primary mr-1">Crypto</span>Chronicle
            </div>
            <p className="text-muted-foreground text-sm max-w-md">
              Your trusted source for cryptocurrency news, analysis, and insights. Stay informed with the latest developments in the world of digital assets.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-medium mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-muted-foreground hover:text-primary text-sm">Home</Link></li>
                <li><Link to="/" className="text-muted-foreground hover:text-primary text-sm">News Archive</Link></li>
                <li><Link to="/" className="text-muted-foreground hover:text-primary text-sm">Categories</Link></li>
                <li><Link to="/" className="text-muted-foreground hover:text-primary text-sm">About Us</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Categories</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-muted-foreground hover:text-primary text-sm">Bitcoin</Link></li>
                <li><Link to="/" className="text-muted-foreground hover:text-primary text-sm">Ethereum</Link></li>
                <li><Link to="/" className="text-muted-foreground hover:text-primary text-sm">DeFi</Link></li>
                <li><Link to="/" className="text-muted-foreground hover:text-primary text-sm">NFTs</Link></li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h3 className="font-medium mb-4">Subscribe</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Stay updated with our newsletter
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-secondary text-foreground px-3 py-2 rounded-l-md w-full text-sm"
                />
                <button className="bg-primary hover:bg-primary/80 text-primary-foreground px-4 py-2 rounded-r-md transition-colors text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {year} Crypto Chronicle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
