import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('en');
  const { t } = useTranslation();

  const handleLanguageChange = (lng: string) => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
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
          <Link to="/" className="text-foreground hover:text-primary transition-colors">{t('links.home')}</Link>
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">{t('links.bitcoin')}</Link>
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">{t('links.etherium')}</Link>
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">DeFi</Link>
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">NFTs</Link>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-primary hover:bg-primary/80 text-primary-foreground font-medium rounded-md px-4 py-2 transition-colors text-sm">{t('navbar.subscribe')}</button>
          <div className="relative">
            <select
              value={language || 'en'}
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
