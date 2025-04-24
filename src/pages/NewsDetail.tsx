
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockNews, NewsItem } from '../data/mockNews';
import Loader from '../components/Loader';

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      const foundArticle = mockNews.find(item => item.id === Number(id));
      setArticle(foundArticle || null);
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [id]);
  
  if (loading) {
    return <Loader />;
  }
  
  if (!article) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Article not found</h2>
        <p className="text-muted-foreground mb-6">The article you're looking for doesn't exist or has been removed.</p>
        <Link to="/" className="bg-primary hover:bg-primary/80 text-primary-foreground px-6 py-3 rounded-md font-medium transition-colors inline-block">
          Return to Home
        </Link>
      </div>
    );
  }
  
  return (
    <div>
      {article.imageUrl && (
        <div className="w-full h-[40vh] relative overflow-hidden">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent"></div>
        </div>
      )}
      
      <div className="container mx-auto px-4 py-8 -mt-32 relative z-10">
        <Link 
          to="/" 
          className="inline-flex items-center text-primary mb-6 hover:text-primary/80 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Back to Home
        </Link>
        
        <div className="bg-card border border-border rounded-lg p-6 md:p-10 shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <span className={`text-sm font-medium px-3 py-1 rounded-full ${
              article.category === 'Bitcoin' ? 'bg-amber-500/10 text-amber-500' :
              article.category === 'Ethereum' ? 'bg-indigo-500/10 text-indigo-500' :
              article.category === 'DeFi' ? 'bg-crypto-green/10 text-crypto-green' :
              article.category === 'NFT' ? 'bg-crypto-purple/10 text-crypto-purple' :
              article.category === 'Regulation' ? 'bg-crypto-blue/10 text-crypto-blue' :
              article.category === 'CBDC' ? 'bg-crypto-orange/10 text-crypto-orange' :
              'bg-gray-500/10 text-gray-500'
            }`}>
              {article.category}
            </span>
            <span className="text-sm text-muted-foreground">{article.date}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{article.title}</h1>
          
          <div className="prose prose-invert max-w-none">
            {article.content && article.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          
          <div className="border-t border-border mt-10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <span className="text-sm text-muted-foreground">Share this article:</span>
              <div className="flex gap-3 mt-2">
                <button className="text-muted-foreground hover:text-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
                <button className="text-muted-foreground hover:text-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </button>
                <button className="text-muted-foreground hover:text-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </button>
              </div>
            </div>
            
            <Link 
              to="/" 
              className="inline-flex items-center bg-primary hover:bg-primary/80 text-primary-foreground px-6 py-2 rounded-md font-medium transition-colors text-sm"
            >
              More Articles
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
