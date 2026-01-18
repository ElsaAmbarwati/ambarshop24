import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/ui/accordion';

export function FAQSection() {
  const faqs = [
    {
      question: 'Bagaimana cara memesan?',
      answer: 'Pilih produk yang Anda inginkan, tambahkan ke keranjang, lalu klik checkout. Anda akan diarahkan ke WhatsApp untuk konfirmasi pesanan dan pembayaran.'
    },
    {
      question: 'Berapa lama akun akan dikirim setelah pembayaran?',
      answer: 'Akun akan langsung dikirim maksimal 5-15 menit setelah pembayaran dikonfirmasi. Proses sangat cepat!'
    },
    {
      question: 'Metode pembayaran apa saja yang tersedia?',
      answer: 'Kami menerima pembayaran melalui Transfer Bank (BCA, BRI, Mandiri), E-Wallet (GoPay, OVO, Dana), dan QRIS.'
    },
    {
      question: 'Apa perbedaan Private dan Sharing?',
      answer: 'Private: Akun khusus untuk Anda sendiri dengan email & password yang bisa diubah. Sharing: Akun dibagikan dengan pengguna lain (dari seller), tidak bisa mengubah email/password tetapi tetap bisa digunakan penuh.'
    },
    {
      question: 'Apakah ada garansi?',
      answer: 'Ya! Kami memberikan garansi penggantian akun dalam 24 jam jika terjadi masalah seperti akun tidak bisa diakses atau bermasalah.'
    },
    {
      question: 'Bagaimana jika akun bermasalah?',
      answer: 'Langsung hubungi kami melalui WhatsApp dengan menyertakan bukti pembelian. Kami akan segera cek dan mengganti akun Anda jika memang bermasalah.'
    },
    {
      question: 'Apakah akun bisa diperpanjang?',
      answer: 'Ya, Anda bisa memesan kembali untuk perpanjangan. Hubungi kami di WhatsApp untuk informasi perpanjangan akun yang sama.'
    },
    {
      question: 'Apakah aman membeli di AmbarShop24?',
      answer: 'Sangat aman! Kami sudah melayani ribuan pelanggan dengan kepuasan tinggi. Semua akun dijamin original dan bergaransi.'
    }
  ];

  return (
  <section id="faq" className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Pertanyaan <span className="text-primary">Umum (FAQ)</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Temukan jawaban untuk pertanyaan yang sering diajukan
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background border border-primary rounded-lg px-6 shadow-sm"
            >
              <AccordionTrigger className="text-left hover:text-primary font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center bg-background border border-primary rounded-lg p-8">
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Masih punya pertanyaan?
          </h3>
          <p className="text-muted-foreground mb-4">
            Jangan ragu untuk menghubungi kami melalui WhatsApp
          </p>
          <a
            href="https://wa.me/6282254146816"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg transition-all"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Hubungi via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
