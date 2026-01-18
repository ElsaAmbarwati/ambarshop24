import { useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { Header } from '@/app/components/Header';
import { HeroSection } from '@/app/components/HeroSection';
import { ProductCatalog } from '@/app/components/ProductCatalog';
import { HowToOrder } from '@/app/components/HowToOrder';
import { FAQSection } from '@/app/components/FAQSection';
import { ContactSection } from '@/app/components/ContactSection';
import { Footer } from '@/app/components/Footer';
import { ShoppingCart, CartItem } from '@/app/components/ShoppingCart';
import { Product, Plan } from '@/data/products';
import { Button } from '@/app/components/ui/button';
import { Toaster, toast } from 'sonner';

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll to show/hide scroll-to-top button
  const handleScroll = () => {
    setShowScrollTop(window.scrollY > 500);
  };

  // Add scroll event listener
  useState(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const handleAddToCart = (product: Product, plan: Plan) => {
    const existingItemIndex = cartItems.findIndex(
      (item) =>
        item.productId === product.id &&
        item.planType === plan.type &&
        item.planDuration === plan.duration
    );

    if (existingItemIndex >= 0) {
      // Update quantity
      const newItems = [...cartItems];
      newItems[existingItemIndex].quantity += 1;
      setCartItems(newItems);
      toast.success('Jumlah item ditambahkan!', {
        description: `${product.name} - ${plan.type} (${plan.duration})`
      });
    } else {
      // Add new item
      const newItem: CartItem = {
        productId: product.id,
        productName: product.name,
        productLogo: product.logo,
        planType: plan.type,
        planDuration: plan.duration,
        price: plan.price,
        quantity: 1,
        note: plan.note
      };
      setCartItems([...cartItems, newItem]);
      toast.success('Ditambahkan ke keranjang!', {
        description: `${product.name} - ${plan.type} (${plan.duration})`
      });
    }
  };

  const handleRemoveItem = (productId: number, planType: string, planDuration: string) => {
    setCartItems(
      cartItems.filter(
        (item) =>
          !(
            item.productId === productId &&
            item.planType === planType &&
            item.planDuration === planDuration
          )
      )
    );
    toast.info('Item dihapus dari keranjang');
  };

  const handleUpdateQuantity = (
    productId: number,
    planType: string,
    planDuration: string,
    quantity: number
  ) => {
    if (quantity < 1) return;

    const newItems = cartItems.map((item) => {
      if (
        item.productId === productId &&
        item.planType === planType &&
        item.planDuration === planDuration
      ) {
        return { ...item, quantity };
      }
      return item;
    });
    setCartItems(newItems);
  };

  const handleCheckout = () => {
    setCartOpen(false);
    toast.success('Terima kasih!', {
      description: 'Pesanan Anda akan segera kami proses'
    });
  };

  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToProducts = () => {
    const element = document.getElementById('categories');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-right" richColors />
      
      {/* Header */}
      <Header
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setCartOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Main Content */}
      <main>
        <div id="home">
          <HeroSection onShopNow={scrollToProducts} />
        </div>
        
        <ProductCatalog onAddToCart={handleAddToCart} />
        
        <HowToOrder />
        
        <FAQSection />
        
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Shopping Cart */}
      <ShoppingCart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveItem}
        onUpdateQuantity={handleUpdateQuantity}
        onCheckout={handleCheckout}
      />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-gradient-to-br from-[#FF69B4] to-[#FFB6C1] hover:from-[#FF1493] hover:to-[#FF69B4] shadow-lg"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
}
