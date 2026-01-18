import { Sparkles } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface HeroSectionProps {
  onShopNow: () => void;
}

export function HeroSection({ onShopNow }: HeroSectionProps) {
  return (
  <section className="relative bg-primary overflow-hidden">
  <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Sparkles className="h-16 w-16 text-white animate-pulse" />
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Aplikasi Premium Terbaik
          </h1>
          
          <p className="text-base sm:text-xl lg:text-2xl text-foreground mb-4">
            dengan <span className="font-bold text-primary-foreground">Harga Terjangkau</span>
          </p>
          
          <p className="text-sm sm:text-lg text-foreground mb-8 max-w-2xl mx-auto">
            Dapatkan akses ke aplikasi streaming dan editing favorit Anda dengan harga yang sangat terjangkau. 
            Garansi 24 jam!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-xl mx-auto">
            <Button
              onClick={onShopNow}
              size="lg"
              className="transition-transform duration-200 hover:scale-105 hover:shadow-lg w-full sm:w-auto"
            >
              Mulai Belanja
            </Button>
            <Button
              onClick={onShopNow}
              size="lg"
              variant="outline"
              className="transition-transform duration-200 hover:scale-105 hover:shadow-lg w-full sm:w-auto"
            >
              Lihat Produk
            </Button>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 sm:mt-16">
            <div className="bg-background/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="text-foreground font-semibold mb-2">Proses Cepat</h3>
              <p className="text-foreground text-sm">Akun langsung dikirim setelah pembayaran</p>
            </div>
            
            <div className="bg-background/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-2">🔒</div>
              <h3 className="text-foreground font-semibold mb-2">Aman & Terpercaya</h3>
              <p className="text-foreground text-sm">Garansi penggantian dalam 24 jam</p>
            </div>
            
            <div className="bg-background/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-2">💰</div>
              <h3 className="text-foreground font-semibold mb-2">Harga Terjangkau</h3>
              <p className="text-foreground text-sm">Harga terbaik dengan kualitas premium</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative waves */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
