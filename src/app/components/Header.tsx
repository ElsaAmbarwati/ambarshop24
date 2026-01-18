import { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  onNavigate: (section: string) => void;
}

export function Header({ cartCount, onCartClick, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Kategori', id: 'categories' },
    { label: 'Tentang', id: 'about' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Kontak', id: 'contact' }
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavClick('home')}>
            <h1 className="text-2xl font-bold text-primary-foreground">
              <span className="font-pacifico">AmbarShop</span><span className="text-background font-pacifico">24</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-primary-foreground hover:text-background transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Cart Button */}
          <div className="flex items-center space-x-4">
            <Button
              onClick={onCartClick}
              variant="ghost"
              className="relative hover:bg-background/20 text-primary-foreground"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-background text-primary hover:bg-background">
                  {cartCount}
                </Badge>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-primary-foreground"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-background/20">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-primary-foreground hover:text-background transition-colors duration-200 text-left py-2"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
