import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ContactSection from "@/components/shared/ContactSection"
import InfoSection from "@/components/shared/InfoSection"
import Header from "@/components/shared/Header"
import WhatsAppButton from "@/components/shared/WhatsAppButton"
import {
  Menu,
  X,
  Phone,
  Sparkles,
  Shield,
  Clock,
  Wind,
  Bed,
  Zap,
  CreditCard,
  Award,
  MapPin,
  Sofa,
  Droplets,
  CheckCircle,
  Star,
  Instagram,
  MessageCircle,
  Car,
  Package,
  ChartBarIncreasing,
} from "lucide-react"
import Image from "next/image" 
import dynamic from "next/dynamic";
import { ServicesSection } from "@/components/shared/ServiceSection"

// Hero Section Component
function HeroSection() {
  const waNumber = "62895405448445";
  const waMessage = "Halo, saya ingin bertanya tentang jasa cuci nya";
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;
  return (
    <section
      id="beranda"
      className="pt-32 pb-24 bg-gradient-to-br from-background to-card min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Layanan Cuci <span className="text-primary">Sofa & AC</span> Profesional
            </h1>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Dapatkan layanan pembersihan sofa dan AC terbaik dengan teknologi modern dan tenaga ahli berpengalaman.
              Rumah bersih, keluarga sehat!
            </p>

            <div className="flex flex-col mb-10 gap-3">
              {/* Tombol WhatsApp */}
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full"
              >
                <Phone className="w-5 h-5 mr-2" />
                0895-4054-48445
              </a>

              {/* Tombol Instagram */}
              <a
                href="https://instagram.com/Kitacuciin7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center border-2 border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-transparent w-full"
              >
                <Instagram className="w-5 h-5 mr-2" />
                Kitacuciin7
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <Sparkles className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Hasil Maksimal</p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Aman & Terpercaya</p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Layanan Cepat</p>
              </div>
            </div>
          </div>

          <div className="relative animate-float">
            <div className="aspect-square relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8">
              <Image
                fill
                src="/modern-clean-living-room-with-sofa-and-ac.png"
                alt="Ruang tamu bersih dengan sofa dan AC"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-2xl shadow-lg">
              <p className="text-sm font-medium">100% Puas</p>
              <p className="text-xs opacity-90">Garansi Kualitas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Pricing Section Component
function PricingSection() {
  const waNumber = "62895405448445";
  const waMessage = "Halo, saya ingin bertanya tentang jasa cuci nya";
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;
  const pricingData = {
    kasur: [
      { size: "Kasur 200", price: "275k" },
      { size: "Kasur 180", price: "255k" },
      { size: "Kasur 160", price: "235k" },
      { size: "Kasur 140", price: "195k" },
      { size: "Kasur 120", price: "175k" },
      { size: "Kasur 100", price: "160k" },
      { size: "Kasur 90", price: "150k" },
      { size: "Dipan 200", price: "175k" },
      { size: "Dipan 180", price: "155k" },
      { size: "Dipan 160", price: "145k" },
      { size: "Dipan 140", price: "125k" },
      { size: "Dipan 120", price: "115k" },
      { size: "Dipan 100", price: "105k" },
      { size: "Dipan 90", price: "95k" },
      { size: "Headboard only", price: "75k" },
    ],
    sofa: [
      { item: "Sofa biasa", price: "60rb/seat" },
      { item: "Sofa stool", price: "40rb/seat" },
      { item: "Bench", price: "80rb/seat" },
      { item: "Sofa panjang", price: "160rb/seat" },
      { item: "Sofa single", price: "75rb/seat" },
      { item: "Sofa bed", price: "205rb/seat" },
      { item: "Sofa L biasa", price: "285rb/seat" },
      { item: "Sofa L king", price: "335rb/seat" },
      { item: "Sofa bed L", price: "335rb/seat" },
      { item: "Reclining/Lazy chair", price: "100rb/seat" },
    ],
    mobil: [
      { item: "Mobil 2 baris", price: "350k" },
      { item: "Mobil 3 baris", price: "450k" },
      { item: "Plafon", price: "280k" },
    ],
    aksesoris: [
      { item: "Karpet", price: "20rb/m²" },
      { item: "Karpet tangga", price: "18rb/tangga" },
      { item: "Matras/cover bed", price: "35rb/m²" },
      { item: "Gorden biasa", price: "10rb/m²" },
      { item: "Gorden&viltrase", price: "15rb/m²" },
      { item: "Stroller", price: "60rb/pcs" },
      { item: "Car seat", price: "45rb/pcs" },
      { item: "Baby box+matras", price: "95rb/pcs" },
      { item: "Bantal/Guling", price: "10rb/pcs" },
      { item: "Bean bag", price: "45rb/pcs" },
      { item: "Viltrase", price: "7rb/m²" },
    ],
    kursi: [
      { item: "Kursi kantor", price: "50rb/pcs" },
      { item: "Kursi makan", price: "50rb/pcs" },
    ],
  }

  const categories = [
    {
      name: "Kasur",
      icon: "🛏️",
      color: "blue",
      items: pricingData.kasur.map((item) => ({ name: item.size, price: item.price })),
      note: "Kasur latex +30rb/pcs",
    },
    {
      name: "Sofa",
      icon: "🛋️",
      color: "purple",
      items: pricingData.sofa.map((item) => ({ name: item.item, price: item.price })),
      note: "Harga per dudukan",
    },
    {
      name: "Mobil",
      icon: "🚗",
      color: "cyan",
      items: pricingData.mobil.map((item) => ({ name: item.item, price: item.price })),
      note: "Termasuk jok, door trim, dashboard & karpet",
    },
    {
      name: "Aksesoris",
      icon: "🧸",
      color: "violet",
      items: pricingData.aksesoris.map((item) => ({ name: item.item, price: item.price })),
      note: "Harga tergantung ukuran & jenis bahan",
    },
    {
      name: "Kursi",
      icon: "🪑",
      color: "orange",
      items: pricingData.kursi.map((item) => ({ name: item.item, price: item.price })),
      note: "Harga per pcs",
    },
  ];
  

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: { gradient: "from-blue-500 to-blue-600", bg: "#3b82f6" },
      purple: { gradient: "from-purple-500 to-purple-600", bg: "#8b5cf6" },
      cyan: { gradient: "from-cyan-500 to-cyan-600", bg: "#06b6d4" },
      violet: { gradient: "from-violet-500 to-violet-600", bg: "#8b5cf6" },
      pink: { gradient: "from-pink-500 to-pink-600", bg: "#ec4899" },
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
    <div className="container mx-auto px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <Sparkles className="w-4 h-4" />
          Daftar Harga Terbaru
        </div>
        <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-900 via-blue-700 to-indigo-600 bg-clip-text text-transparent mb-4">
          KITA CUCIIN PRICE LIST 2025
        </h2>
        <p className="text-gray-600 italic text-base md:text-lg">Harga sudah termasuk cuci & vakum</p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full"></div>
      </div>
  
      {/* Loop kategori */}
      <div className="space-y-12 max-w-5xl mx-auto">
        {categories.map((category, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            {/* Header kategori */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{category.icon}</span>
              <h3 className="text-xl font-bold text-gray-800">{category.name}</h3>
            </div>
            {category.note && (
              <p className="text-sm text-gray-500 mb-6">{category.note}</p>
            )} 
            {/* Table harga */}
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white">
                    <th className="px-4 py-2 text-left font-medium">No</th>
                    <th className="px-4 py-2 text-left font-medium">Nama Barang / Barang Yang Dicuciin</th>
                    <th className="px-4 py-2 text-right font-medium">Harga</th>
                  </tr>
                </thead>
                <tbody>
                  {category.items.map((item, i) => (
                    <tr
                      key={i}
                      className="border-t border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-4 py-2 text-gray-600">{i + 1}</td>
                      <td className="px-4 py-2 text-gray-800">{item.name}</td>
                      <td className="px-4 py-2 text-right font-semibold text-red-600">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
  
      {/* Contact Section */}
      <div className="mt-12 text-center">
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-5 h-5 text-yellow-500 fill-current" />
            <h3 className="text-lg md:text-xl font-bold text-gray-800">Hubungi Kami Sekarang</h3>
            <Star className="w-5 h-5 text-yellow-500 fill-current" />
          </div>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            Dapatkan layanan cuci terbaik untuk furniture Anda
          </p>
          <div className="flex flex-col gap-3">
              {/* Tombol WhatsApp */}
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full"
              >
                <Phone className="w-5 h-5 mr-2" />
                0895-4054-48445
              </a>

              {/* Tombol Instagram */}
              <a
                href="https://instagram.com/Kitacuciin7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center border-2 border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-transparent w-full"
              >
                <Instagram className="w-5 h-5 mr-2" />
                Kitacuciin7
              </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

// Testimonials Section Component
function TestimonialsSection() {
  const testimonials = [
    {
      inisial: "IS",
      name: "Ibu Sarah",
      location: "Jakarta Selatan",
      rating: 5,
      comment:
        "Pelayanan sangat memuaskan! Sofa saya yang sudah kotor dan berbau kini kembali seperti baru. Tim sangat profesional dan ramah.",
      service: "Cuci Sofa",
    },
    {
      inisial: "BA",
      name: "Bapak Ahmad",
      location: "Tangerang",
      rating: 5,
      comment:
        "sangat di rekomendasikan karena sofa di rumah saya jadi jauh lebih bersih bahkan hampir terlihatat baru dam wangi yang menghidupkan ruangan saya",
      service: "Cuci Sofa",
    },
    {
      inisial: "IM",
      name: "Ibu Maya",
      location: "Bekasi",
      rating: 5,
      comment:
        "Harga terjangkau dengan hasil yang maksimal. Kasur anak saya yang terkena noda susu sudah bersih total. Terima kasih!",
      service: "Cuci Kasur",
    },
  ]

  return (
    <section id="testimoni" className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">Testimoni Pelanggan</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Dengar langsung dari pelanggan yang puas dengan layanan kami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background h-[380px] relative border-border/50 hover-lift">
              <CardContent className="p-6">
                <span className="w-14 h-14 text-base mb-3 flex items-center justify-center rounded-full bg-blue-400 text-white" >{testimonial.inisial}</span>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 text-sm md:text-base italic">{testimonial.comment}</p>
                <div className="absolute bottom-5 w-full pt-4">
                  <p className="font-semibold text-foreground text-sm md:text-base">{testimonial.name}</p>
                  <p className="text-muted-foreground text-xs md:text-sm">{testimonial.location}</p>
                  <Badge variant="secondary" className="mt-2 text-xs">
                    {testimonial.service}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}  


// Footer Component
function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image width={40} height={40}  src="/images/logo.png" alt="Kita Cuciin Logo" className="w-10 h-10 rounded-full" />
              <span className="text-xl font-bold">KITA CUCIIN</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Layanan cuci sofa dan AC profesional dengan teknologi modern untuk rumah yang bersih dan sehat.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Cuci Sofa Premium</li>
              <li>Service AC Lengkap</li>
              <li>Cuci Kasur & Matras</li>
              <li>Cuci Karpet & Gorden</li>
              <li>Paket Hemat Kombo</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Kontak</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>📱 0895-4054-48445</li>
              <li>📧 Instagram: @kitacuciin7</li>
              <li>📍 Area Jabodetabek</li>
              <li>🕒 Tersedia 24/7</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 Kita Cucin. Semua hak dilindungi. | Kita Cuciin, Bersih dan Nyaman untuk Anda
          </p>
        </div>
      </div>
    </footer>
  )
}

// WhatsApp Button Component


// Main Page Component
export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <InfoSection />
      <PricingSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
