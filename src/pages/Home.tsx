
import React, { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import NewsCard from '../components/NewsCard';
import CategoryFilter from '../components/CategoryFilter';
import Loader from '../components/Loader';
import LivePrices from '../components/LivePrices';
import { mockNews, NewsItem } from '../data/mockNews';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";

const ITEMS_PER_PAGE = 6;

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    // Simulate loading from an API
    const timer = setTimeout(() => {
      setNews(mockNews);
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const filteredNews = selectedCategory === 'All' 
    ? news 
    : news.filter(item => item.category === selectedCategory);
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedNews = filteredNews.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when changing category
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <div>
      <HeroSection />
      <LivePrices />
      
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Latest News</h2>
        
        <CategoryFilter 
          selectedCategory={selectedCategory} 
          onSelectCategory={handleCategorySelect} 
        />
        
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {paginatedNews.map(item => (
                <NewsCard key={item.id} news={item} />
              ))}
              
              {paginatedNews.length === 0 && (
                <div className="col-span-full text-center py-12">
                  <p className="text-muted-foreground">No articles found in this category.</p>
                </div>
              )}
            </div>

            {totalPages > 1 && (
              <Pagination className="mt-8">
                <PaginationContent>
                  {currentPage > 1 && (
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => handlePageChange(currentPage - 1)} 
                        className="cursor-pointer"
                      />
                    </PaginationItem>
                  )}
                  
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <PaginationItem key={index + 1}>
                      <PaginationLink
                        onClick={() => handlePageChange(index + 1)}
                        isActive={currentPage === index + 1}
                        className="cursor-pointer"
                      >
                        {index + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  
                  {currentPage < totalPages && (
                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => handlePageChange(currentPage + 1)} 
                        className="cursor-pointer"
                      />
                    </PaginationItem>
                  )}
                </PaginationContent>
              </Pagination>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
