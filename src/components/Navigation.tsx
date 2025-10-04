import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [{
    label: 'Home',
    href: '#home'
  }, {
    label: 'About',
    href: '#about'
  }, {
    label: 'Projects',
    href: '#projects'
  }, {
    label: 'Skills',
    href: '#skills'
  }, {
    label: 'Experience',
    href: '#experience'
  }, {
    label: 'Contact',
    href: '#contact'
  }];
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-lg border-b border-border shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button onClick={() => scrollToSection('#home')} className={`font-heading font-bold text-xl transition-colors ${isScrolled ? 'text-foreground' : 'text-slate-50'}`}>
            Youssef Yasser
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <button key={item.label} onClick={() => scrollToSection(item.href)} className={`transition-colors font-medium relative group ${isScrolled ? 'text-foreground hover:text-primary' : 'text-slate-50'}`}>
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>)}
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden">
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(item => <button key={item.label} onClick={() => scrollToSection(item.href)} className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors">
                  {item.label}
                </button>)}
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;