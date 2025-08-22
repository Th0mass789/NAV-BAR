import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBasket, User, Home, Info, Briefcase, FolderOpen, Mail } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { name: 'Accueil', href: '#', icon: Home },
    { name: 'À propos', href: '#', icon: Info },
    { name: 'Services', href: '#', icon: Briefcase },
    { name: 'Portfolio', href: '#', icon: FolderOpen },
    { name: 'Contact', href: '#', icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gradient-to-r from-slate-900/95 via-blue-900/95 to-blue-800/95 backdrop-blur-md shadow-2xl' 
          : 'bg-gradient-to-r from-slate-900 via-blue-900 to-blue-800 shadow-xl'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Logo */}
            <div className="flex-shrink-0 z-50">
              <img 
                src="http://webambiance.fr/wp-content/uploads/2025/07/D81CCAD1-CAEB-4D68-B58F-1B034216F1D3-1.png" 
                alt="Logo" 
                className="h-12 w-auto md:h-16 lg:h-18 transition-all duration-300 hover:scale-105"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group relative flex items-center gap-2 px-4 py-2 text-white font-medium transition-all duration-300 hover:text-gray-200"
                >
                  <item.icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                  <span className="relative">
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Panier */}
              <a
                href="#"
                className="relative p-2 text-white hover:text-blue-200 transition-all duration-300 hover:scale-110 group"
                title="Panier"
              >
                <ShoppingBasket className="w-6 h-6 transition-transform duration-300 group-hover:animate-pulse" />
              </a>

              {/* Connexion */}
              <a
                href="#"
                className="group flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <User className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                <span>Connexion</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center space-x-3 lg:hidden">
              {/* Mobile Panier */}
              <a
                href="#"
                className="relative p-2 text-white hover:text-blue-200 transition-all duration-300"
                title="Panier"
              >
                <ShoppingBasket className="w-5 h-5" />
              </a>

              {/* Hamburger menu */}
              <button
                onClick={toggleMenu}
                className="p-2 text-white hover:text-blue-200 transition-colors duration-300 z-50 relative"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 relative">
                  <Menu className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
                  <X className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`lg:hidden transition-all duration-500 ease-in-out ${
            isMenuOpen 
              ? 'max-h-96 opacity-100 py-4' 
              : 'max-h-0 opacity-0 py-0 overflow-hidden'
          }`}>
            <div className="bg-gradient-to-b from-blue-900/90 to-slate-900/90 backdrop-blur-lg rounded-xl mx-2 shadow-2xl border border-white/10">
              {menuItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-6 py-4 text-white hover:bg-white/10 transition-all duration-300 border-b border-white/5 last:border-b-0 group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <item.icon className="w-5 h-5 text-blue-400 transition-transform duration-300 group-hover:scale-110" />
                  <span className="font-medium transition-colors duration-300 group-hover:text-blue-200">
                    {item.name}
                  </span>
                </a>
              ))}
              
              {/* Mobile Connexion Button */}
              <div className="p-4">
                <a
                  href="#"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105"
                >
                  <User className="w-4 h-4" />
                  <span>Connexion</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={closeMenu}
        />
      )}

    </div>
  );
}

export default App;