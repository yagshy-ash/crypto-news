import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LivePrices = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              order: 'market_cap_desc',
              per_page: 10, // Number of coins to fetch
              page: 1,
              sparkline: false,
            },
          }
        );
        setPrices(response.data);
      } catch (error) {
        console.error('Error fetching live prices:', error);
      }
    };

    fetchPrices();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-8 bg-card/50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Live Crypto Prices</h2>
        <Slider {...sliderSettings}>
          {prices.map((coin) => (
            <Card key={coin.id} className="overflow-hidden hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">{coin.name}</span>
                  <span className="text-sm text-muted-foreground">{coin.symbol.toUpperCase()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">
                    ${coin.current_price.toLocaleString()}
                  </span>
                  <div className={`flex items-center ${coin.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {coin.price_change_percentage_24h >= 0 ? (
                      <TrendingUp className="w-4 h-4 mr-1" />
                    ) : (
                      <TrendingDown className="w-4 h-4 mr-1" />
                    )}
                    <span className="font-medium">
                      {coin.price_change_percentage_24h > 0 ? '+' : ''}{coin.price_change_percentage_24h.toFixed(2)}%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LivePrices;
