import { useState } from 'react';
import { ShoppingCart, Info } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Product, Plan, formatPrice } from '@/data/products';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, plan: Plan) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [selectedPlan, setSelectedPlan] = useState<Plan>(product.plans[0]);

  const handleAddToCart = () => {
    onAddToCart(product, selectedPlan);
  };

  const getAccountTypeBadge = (type: string) => {
    if (type.toLowerCase().includes('private')) {
      return <Badge className="bg-purple-500 hover:bg-purple-600 text-white">Private</Badge>;
    } else if (type.toLowerCase().includes('sharing')) {
      return <Badge className="bg-blue-500 hover:bg-blue-600 text-white">Sharing</Badge>;
    } else if (type.toLowerCase().includes('family') || type.toLowerCase().includes('fam')) {
      return <Badge className="bg-green-500 hover:bg-green-600 text-white">Family</Badge>;
    } else if (type.toLowerCase().includes('individual') || type.toLowerCase().includes('ind')) {
      return <Badge className="bg-orange-500 hover:bg-orange-600 text-white">Individual</Badge>;
    }
    return <Badge variant="secondary">{type}</Badge>;
  };

  return (
    <Card className="bg-background border-primary shadow-md opacity-0 scale-95 animate-fadeInCard hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105">
      <CardHeader className="pb-3">
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 bg-card rounded-lg flex items-center justify-center p-2 shadow-sm">
            <ImageWithFallback
              src={product.logo}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
  <h3 className="text-xl font-bold text-center text-foreground">{product.name}</h3>
  <p className="text-sm text-muted-foreground text-center mt-2 min-h-[40px]">
          {product.description}
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Plan Selector */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Pilih Paket</label>
          <Select
            value={`${selectedPlan.type}-${selectedPlan.duration}`}
            onValueChange={(value) => {
              const plan = product.plans.find(
                p => `${p.type}-${p.duration}` === value
              );
              if (plan) setSelectedPlan(plan);
            }}
          >
            <SelectTrigger className="bg-card border-primary">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {product.plans.map((plan, index) => (
                <SelectItem 
                  key={index} 
                  value={`${plan.type}-${plan.duration}`}
                >
                  <div className="flex justify-between items-center w-full">
                    <span>{plan.type} - {plan.duration}</span>
                    <span className="ml-4 font-semibold text-primary">
                      {formatPrice(plan.price)}
                    </span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Selected Plan Details */}
  <div className="bg-card p-4 rounded-lg border border-primary">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">Tipe Akun:</span>
            {getAccountTypeBadge(selectedPlan.type)}
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">Durasi:</span>
            <Badge variant="outline" className="border-primary text-primary">
              {selectedPlan.duration}
            </Badge>
          </div>
          <div className="flex justify-between items-center pt-2 border-t border-border">
            <span className="font-semibold text-foreground">Harga:</span>
            <span className="text-2xl font-bold text-primary">
              {formatPrice(selectedPlan.price)}
            </span>
          </div>
        </div>

        {/* Note if exists */}
        {selectedPlan.note && (
          <div className="flex items-start gap-2 bg-blue-50 border border-blue-200 rounded-lg p-3">
            <Info className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
            <p className="text-xs text-blue-700">{selectedPlan.note}</p>
          </div>
        )}
      </CardContent>

      <CardFooter>
        <Button
          onClick={handleAddToCart}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-200 hover:scale-105"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Tambah ke Keranjang
        </Button>
      </CardFooter>
    </Card>
  );
}
