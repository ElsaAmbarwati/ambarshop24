import { Shield, Clock, CreditCard } from 'lucide-react';

export function HowToOrder() {
  const steps = [
    {
      number: 1,
      icon: '🔍',
      title: 'Pilih Produk',
      description: 'Browse dan pilih aplikasi premium yang Anda inginkan dari katalog kami'
    },
    {
      number: 2,
      icon: '🛒',
      title: 'Tambah ke Keranjang',
      description: 'Pilih tipe akun dan durasi, lalu tambahkan ke keranjang belanja'
    },
    {
      number: 3,
      icon: '💬',
      title: 'Checkout',
      description: 'Klik checkout dan konfirmasi pesanan Anda melalui WhatsApp'
    },
    {
      number: 4,
      icon: '💳',
      title: 'Bayar',
      description: 'Transfer ke rekening yang diberikan dan kirim bukti pembayaran'
    },
    {
      number: 5,
      icon: '✉️',
      title: 'Terima Akun',
      description: 'Akun akan dikirim maksimal 5-15 menit setelah pembayaran dikonfirmasi'
    },
    {
      number: 6,
      icon: '✅',
      title: 'Selesai',
      description: 'Login dan nikmati aplikasi premium Anda!'
    }
  ];

  return (
  <section id="about" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Cara <span className="text-primary">Pemesanan</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Proses pemesanan mudah dan cepat, hanya 6 langkah!
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-background border border-primary rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-background font-bold shadow-lg">
                {step.number}
              </div>
              <div className="text-4xl mb-4 mt-2">{step.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
              <Clock className="h-8 w-8 text-background" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Proses Cepat
            </h3>
            <p className="text-muted-foreground">
              Akun dikirim dalam 5-15 menit setelah pembayaran dikonfirmasi
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
              <Shield className="h-8 w-8 text-background" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Garansi 24 Jam
            </h3>
            <p className="text-muted-foreground">
              Jaminan penggantian akun jika terjadi masalah dalam 24 jam
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
              <CreditCard className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#4A4A4A] mb-2">
              Pembayaran Mudah
            </h3>
            <p className="text-gray-600">
              Tersedia berbagai metode pembayaran: Transfer, E-Wallet, QRIS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
