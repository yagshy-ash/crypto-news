
import React from 'react';
import { Link } from 'react-router-dom';
import type { NewsItem } from '../data/mockNews';

interface NewsCardProps {
  news: NewsItem;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col animate-fade-in">
      {news.imageUrl && (
        <div className="h-48 overflow-hidden">
          <img
            src={news.imageUrl}
            alt={news.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
            news.category === 'Bitcoin' ? 'bg-amber-500/10 text-amber-500' :
            news.category === 'Ethereum' ? 'bg-indigo-500/10 text-indigo-500' :
            news.category === 'DeFi' ? 'bg-crypto-green/10 text-crypto-green' :
            news.category === 'NFT' ? 'bg-crypto-purple/10 text-crypto-purple' :
            news.category === 'Regulation' ? 'bg-crypto-blue/10 text-crypto-blue' :
            news.category === 'CBDC' ? 'bg-crypto-orange/10 text-crypto-orange' :
            'bg-gray-500/10 text-gray-500'
          }`}>
            {news.category}
          </span>
          <span className="text-xs text-muted-foreground">{news.date}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{news.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">{news.description}</p>
        <Link 
          to={`/news/${news.id}`} 
          className="inline-flex items-center text-primary font-medium text-sm hover:text-primary/80 transition-colors"
        >
          Read More 
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
