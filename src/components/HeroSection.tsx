
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-card to-background overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-30" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3336&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4) contrast(1.2) saturate(0.8)',
        }}
      ></div>
      <div 
        className="absolute inset-0 z-10 bg-gradient-to-t from-background via-transparent to-transparent"
      ></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
            Your Gateway to the <span className="text-crypto-blue">Crypto</span> World
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl">
            Stay updated with the latest news, trends, and insights from the cryptocurrency ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary hover:bg-primary/80 text-primary-foreground px-6 py-3 rounded-md font-medium transition-colors">
              Latest News
            </button>
            <button className="bg-secondary hover:bg-secondary/80 text-foreground px-6 py-3 rounded-md font-medium transition-colors">
              Market Analysis
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-0 right-0 transform translate-y-1/4 translate-x-1/4 opacity-60">
          <svg width="400" height="400" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary/20" />
            <path d="M50 5 L50 95 M5 50 L95 50" stroke="currentColor" strokeWidth="2" className="text-primary/20" />
            <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary/30" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
