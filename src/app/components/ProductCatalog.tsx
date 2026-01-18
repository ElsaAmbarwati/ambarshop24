import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { ProductCard } from '@/app/components/ProductCard';
import { products, Product, Plan } from '@/data/products';

interface ProductCatalogProps {
  onAddToCart: (product: Product, plan: Plan) => void;
}

export function ProductCatalog({ onAddToCart }: ProductCatalogProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [accountTypeFilter, setAccountTypeFilter] = useState<string>('all');

  const filterProducts = (category: 'all' | 'streaming' | 'editing') => {
    let filtered = category === 'all' ? products : products.filter(p => p.category === category);

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Account type filter
    if (accountTypeFilter !== 'all') {
      filtered = filtered.filter(p =>
        p.plans.some(plan =>
          plan.type.toLowerCase().includes(accountTypeFilter.toLowerCase())
        )
      );
    }

    return filtered;
  };

  const streamingProducts = filterProducts('streaming');
  const editingProducts = filterProducts('editing');
  const allProducts = filterProducts('all');

  return (
  <section id="categories" className="py-10 sm:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-2 sm:mb-4">
            Katalog <span className="text-primary">Produk</span>
          </h2>
          <p className="text-sm sm:text-lg text-foreground">
            Pilih aplikasi premium favorit Anda dengan harga terjangkau
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl mx-auto justify-center">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Cari aplikasi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-primary focus:ring-primary text-foreground bg-background"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-2 w-full">
              <Button
                variant={accountTypeFilter === 'all' ? 'default' : 'outline'}
                onClick={() => setAccountTypeFilter('all')}
                className={`w-full sm:w-auto ${accountTypeFilter === 'all' ? 'bg-primary hover:bg-primary/80' : 'border-primary'}`}
              >
                <Filter className="mr-2 h-4 w-4" />
                Semua
              </Button>
              <Button
                variant={accountTypeFilter === 'private' ? 'default' : 'outline'}
                onClick={() => setAccountTypeFilter('private')}
                className={`w-full sm:w-auto ${accountTypeFilter === 'private' ? 'bg-primary hover:bg-primary/80' : 'border-primary'}`}
              >
                Private
              </Button>
              <Button
                variant={accountTypeFilter === 'sharing' ? 'default' : 'outline'}
                onClick={() => setAccountTypeFilter('sharing')}
                className={`w-full sm:w-auto ${accountTypeFilter === 'sharing' ? 'bg-primary hover:bg-primary/80' : 'border-primary'}`}
              >
                Sharing
              </Button>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-8 bg-background gap-2 max-w-2xl mx-auto justify-center">
            <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Semua Produk ({allProducts.length})
            </TabsTrigger>
            <TabsTrigger value="streaming" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              🎬 Streaming ({streamingProducts.length})
            </TabsTrigger>
            <TabsTrigger value="editing" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              ✨ Editing ({editingProducts.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            {allProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
                {allProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Tidak ada produk yang ditemukan</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="streaming">
            {streamingProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
                {streamingProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Tidak ada produk streaming yang ditemukan</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="editing">
            {editingProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
                {editingProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Tidak ada produk editing yang ditemukan</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
