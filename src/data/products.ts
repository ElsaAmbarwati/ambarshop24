export interface Plan {
  type: string;
  duration: string;
  price: number;
  note?: string;
}

export interface Product {
  id: number;
  name: string;
  logo: string;
  plans: Plan[];
  category: "streaming" | "editing";
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    category: "streaming",
    description: "Platform streaming film dan serial terbaik dengan konten original berkualitas tinggi",
    plans: [
      { type: "1p1u", duration: "1 bulan", price: 27000 },
      { type: "1p1u", duration: "2 bulan", price: 64000 },
      { type: "1p1u", duration: "1 minggu", price: 15500 },
      { type: "1p1u", duration: "1 hari", price: 10000 },
      { type: "1p2u", duration: "1 bulan", price: 19000 },
      { type: "1p2u", duration: "2 bulan", price: 39000 },
      { type: "1p2u", duration: "1 minggu", price: 14500 },
      { type: "1p2u", duration: "1 hari", price: 7000 }
    ]
  },
  {
    id: 2,
    name: "Spotify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    category: "streaming",
    description: "Streaming musik dengan jutaan lagu dari artis favorit Anda",
    plans: [
      { type: "Individual", duration: "1 bulan", price: 20000 },
      { type: "Individual", duration: "2 bulan", price: 23000 },
      { type: "Family", duration: "1 bulan", price: 16000 },
      { type: "Family", duration: "2 bulan", price: 15000 }
    ]
  },
  {
    id: 3,
    name: "VIU",
  logo: "/logos/viu.svg",
    category: "streaming",
    description: "Platform streaming drama Asia terlengkap dengan subtitle Indonesia",
    plans: [
      { type: "Private", duration: "1 bulan", price: 11500 },
      { type: "Private", duration: "2 bulan", price: 12000 },
      { type: "Sharing", duration: "1 bulan", price: 10700, note: "Akun dari seller only" },
      { type: "Sharing", duration: "2 bulan", price: 11000, note: "Akun dari seller only" }
    ]
  },
  {
    id: 4,
    name: "iQIYI",
  logo: "/logos/iqiyi.svg",
    category: "streaming",
    description: "Platform streaming konten Asia dengan kualitas HD",
    plans: [
      { type: "Private", duration: "1 bulan", price: 27000 },
      { type: "Sharing", duration: "1 bulan", price: 15000, note: "Sharing akun dari seller" }
    ]
  },
  {
    id: 5,
    name: "BStation",
  logo: "/logos/bstation.svg",
    category: "streaming",
    description: "Platform streaming anime dan konten entertainment populer",
    plans: [
      { type: "Sharing", duration: "1 bulan", price: 15000 }
    ]
  },
  {
    id: 6,
    name: "WeTV",
  logo: "/logos/wetv.svg",
    category: "streaming",
    description: "Streaming drama dan variety show Asia terbaru",
    plans: [
      { type: "Private", duration: "1 bulan", price: 41000 },
      { type: "Sharing", duration: "1 bulan", price: 14000 }
    ]
  },
  {
    id: 7,
    name: "YouTube Premium",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg",
    category: "streaming",
    description: "Nikmati YouTube tanpa iklan dan fitur background play",
    plans: [
      { type: "Individual", duration: "1 bulan", price: 14000 },
      { type: "Family", duration: "1 bulan", price: 11500, note: "Hanya butuh email, email seller +1k" },
      { type: "Family", duration: "2 bulan", price: 13000, note: "Hanya butuh email, email seller +1k" }
    ]
  },
  {
    id: 8,
    name: "Loklok",
  logo: "/logos/loklok.svg",
    category: "streaming",
    description: "Platform streaming konten entertainment Asia gratis",
    plans: [
      { type: "Sharing", duration: "1 bulan", price: 14000 }
    ]
  },
  {
    id: 9,
    name: "Disney+",
  logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg",
    category: "streaming",
    description: "Streaming film dan serial Disney, Pixar, Marvel, Star Wars",
    plans: [
      { type: "Sharing", duration: "1 bulan", price: 29000 },
      { type: "Sharing", duration: "1 minggu", price: 20000 },
      { type: "Sharing", duration: "1 hari", price: 14000 }
    ]
  },
  {
    id: 10,
    name: "Canva",
  logo: "/logos/canva.svg",
    category: "editing",
    description: "Desain grafis profesional untuk semua kebutuhan kreatif Anda",
    plans: [
      { type: "Premium", duration: "1 tahun", price: 15000 },
      { type: "Premium", duration: "1 bulan", price: 10000 },
      { type: "Premium", duration: "1 minggu", price: 7000 },
      { type: "Premium", duration: "1 hari", price: 5000 }
    ]
  },
  {
    id: 11,
    name: "PicsArt",
  logo: "/logos/picsart.svg",
    category: "editing",
    description: "Edit foto dan video dengan tools kreatif profesional",
    plans: [
      { type: "Private", duration: "1 bulan", price: 19000 },
      { type: "Sharing", duration: "1 bulan", price: 11500 }
    ]
  },
  {
    id: 12,
    name: "CapCut",
  logo: "/logos/capcut.svg",
    category: "editing",
    description: "Video editor terbaik dengan fitur lengkap dan mudah digunakan",
    plans: [
      { type: "Sharing", duration: "1 bulan", price: 16000 }
    ]
  }
];

export const formatPrice = (price: number): string => {
  return `Rp ${price.toLocaleString('id-ID')}`;
};
