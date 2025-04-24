
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

// Mock price data (in a real app, this would come from an API)
const mockPrices = [
  { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', price: 83245.67, change: 2.45 },
  { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', price: 4521.89, change: -1.23 },
  { id: 'solana', name: 'Solana', symbol: 'SOL', price: 198.45, change: 5.67 },
  { id: 'cardano', name: 'Cardano', symbol: 'ADA', price: 0.89, change: -0.45 },
];

const LivePrices = () => {
  return (
    <div className="py-8 bg-card/50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Live Crypto Prices</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {mockPrices.map((coin) => (
            <Card key={coin.id} className="overflow-hidden hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">{coin.name}</span>
                  <span className="text-sm text-muted-foreground">{coin.symbol}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">
                    ${coin.price.toLocaleString()}
                  </span>
                  <div className={`flex items-center ${coin.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {coin.change >= 0 ? (
                      <TrendingUp className="w-4 h-4 mr-1" />
                    ) : (
                      <TrendingDown className="w-4 h-4 mr-1" />
                    )}
                    <span className="font-medium">
                      {coin.change > 0 ? '+' : ''}{coin.change}%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LivePrices;
