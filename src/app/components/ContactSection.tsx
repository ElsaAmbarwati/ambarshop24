import { useState } from 'react';
import { Mail, Phone, MessageCircle, Send } from 'lucide-react';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `*Pesan dari Website AmbarShop24*\n\nNama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/6282254146816?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
  <section id="contact" className="py-16 bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">
            Hubungi Kami via WhatsApp
          </h2>
          <p className="text-lg text-primary-foreground/90">
            Ada pertanyaan? Klik tombol WhatsApp di bawah untuk langsung terhubung dengan kami: 0822-5414-6816
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-background border-none shadow-xl">
              <CardHeader>
                <CardTitle className="text-primary">Informasi Kontak</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href="https://wa.me/6282254146816"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-background rounded-lg hover:bg-primary/10 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="h-6 w-6 text-background" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <p className="font-semibold text-foreground">0822-5414-6816</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/ambarshop24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-background rounded-lg hover:bg-primary/10 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="h-6 w-6 text-background" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Instagram</p>
                    <p className="font-semibold text-foreground">@ambarshop24</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-background rounded-lg">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-background" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold text-foreground">ambarshop24@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-background rounded-lg">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-background" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Jam Operasional</p>
                    <p className="font-semibold text-foreground">08:00 - 22:00 WIB</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <Card className="bg-white/95 border-none shadow-xl">
              <CardHeader>
                <CardTitle className="text-[#FF69B4]">Metode Pembayaran</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Transfer Bank</p>
                    <div className="flex flex-wrap gap-2">
                      <div className="px-3 py-1 bg-blue-50 text-blue-700 rounded text-sm font-semibold">BCA</div>
                      <div className="px-3 py-1 bg-blue-50 text-blue-700 rounded text-sm font-semibold">BRI</div>
                      <div className="px-3 py-1 bg-blue-50 text-blue-700 rounded text-sm font-semibold">Mandiri</div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">E-Wallet</p>
                    <div className="flex flex-wrap gap-2">
                      <div className="px-3 py-1 bg-green-50 text-green-700 rounded text-sm font-semibold">GoPay</div>
                      <div className="px-3 py-1 bg-purple-50 text-purple-700 rounded text-sm font-semibold">OVO</div>
                      <div className="px-3 py-1 bg-blue-50 text-blue-700 rounded text-sm font-semibold">Dana</div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Lainnya</p>
                    <div className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm font-semibold inline-block">QRIS</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/95 border-none shadow-xl">
            <CardHeader>
              <CardTitle className="text-[#FF69B4]">Kirim Pesan</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Masukkan nama Anda"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="border-[#FFB6C1] focus:ring-[#FF69B4]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="border-[#FFB6C1] focus:ring-[#FF69B4]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tulis pesan Anda di sini..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="border-[#FFB6C1] focus:ring-[#FF69B4]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Kirim Pesan via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
