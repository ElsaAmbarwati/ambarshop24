import { X, Trash2, ShoppingBag, MessageCircle } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/app/components/ui/sheet';
import { Button } from '@/app/components/ui/button';
import { Separator } from '@/app/components/ui/separator';
import { Badge } from '@/app/components/ui/badge';
import { formatPrice } from '@/data/products';

export interface CartItem {
  productId: number;
  productName: string;
  productLogo: string;
  planType: string;
  planDuration: string;
  price: number;
  quantity: number;
  note?: string;
}

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (productId: number, planType: string, planDuration: string) => void;
  onUpdateQuantity: (productId: number, planType: string, planDuration: string, quantity: number) => void;
  onCheckout: () => void;
}

export function ShoppingCart({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onUpdateQuantity,
  onCheckout
}: ShoppingCartProps) {
  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckout = () => {
    if (items.length === 0) return;

    // Create WhatsApp message
    let message = '🛍️ *Pesanan dari AmbarShop24*\n\n';
    message += `Total Item: ${totalItems}\n\n`;
    message += '*Detail Pesanan:*\n';
    
    items.forEach((item, index) => {
      message += `\n${index + 1}. ${item.productName}\n`;
      message += `   • Tipe: ${item.planType}\n`;
      message += `   • Durasi: ${item.planDuration}\n`;
      message += `   • Jumlah: ${item.quantity}x\n`;
      message += `   • Harga: ${formatPrice(item.price * item.quantity)}\n`;
      if (item.note) {
        message += `   • Note: ${item.note}\n`;
      }
    });
    
    message += `\n*Total Pembayaran: ${formatPrice(totalPrice)}*\n\n`;
    message += 'Mohon konfirmasi pesanan ini. Terima kasih! 🙏';

    const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/6282254146816?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    onCheckout();
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
  <SheetContent className="w-full sm:max-w-lg bg-background">
        <SheetHeader>
    <SheetTitle className="flex items-center gap-2 text-primary">
            <ShoppingBag className="h-6 w-6" />
            Keranjang Belanja
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full mt-6">
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto pr-2 space-y-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
                <p className="text-gray-500">Keranjang Anda masih kosong</p>
                <Button
                  onClick={onClose}
                  className="mt-4 bg-primary hover:bg-primary/80"
                >
                  Mulai Belanja
                </Button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={`${item.productId}-${item.planType}-${item.planDuration}`}
                  className="bg-card rounded-lg p-4 border border-primary"
                >
                  <div className="flex gap-4">
                    {/* Product Logo */}
                    <div className="w-16 h-16 bg-background rounded-lg flex items-center justify-center p-2 flex-shrink-0">
                      <img
                        src={item.productLogo}
                        alt={item.productName}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground mb-1">
                        {item.productName}
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {item.planType}
                        </Badge>
                        <Badge variant="outline" className="text-xs border-primary text-primary">
                          {item.planDuration}
                        </Badge>
                      </div>
                      {item.note && (
                        <p className="text-xs text-muted-foreground mb-2">{item.note}</p>
                      )}
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-primary">
                          {formatPrice(item.price)}
                        </span>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() =>
                              onUpdateQuantity(
                                item.productId,
                                item.planType,
                                item.planDuration,
                                Math.max(1, item.quantity - 1)
                              )
                            }
                            className="h-7 w-7 p-0 border-primary"
                          >
                            -
                          </Button>
                          <span className="w-8 text-center font-semibold">
                            {item.quantity}
                          </span>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() =>
                              onUpdateQuantity(
                                item.productId,
                                item.planType,
                                item.planDuration,
                                item.quantity + 1
                              )
                            }
                            className="h-7 w-7 p-0 border-primary"
                          >
                            +
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() =>
                        onRemoveItem(item.productId, item.planType, item.planDuration)
                      }
                      className="text-destructive hover:text-destructive-foreground hover:bg-destructive/10"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Subtotal */}
                  {item.quantity > 1 && (
                    <div className="mt-3 pt-3 border-t border-border">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Subtotal:</span>
                        <span className="font-semibold text-primary">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Cart Summary */}
          {items.length > 0 && (
            <div className="pt-4 border-t border-primary mt-4">
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Total Item:</span>
                  <span className="font-semibold">{totalItems}</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-foreground">
                    Total Pembayaran:
                  </span>
                  <span className="text-2xl font-bold text-primary">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
              </div>

              <Button
                onClick={handleCheckout}
                className="w-full bg-primary text-primary-foreground text-lg py-6 hover:bg-primary/80"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Checkout via WhatsApp
              </Button>

              <p className="text-xs text-center text-muted-foreground mt-3">
                Anda akan diarahkan ke WhatsApp untuk konfirmasi pesanan
              </p>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
