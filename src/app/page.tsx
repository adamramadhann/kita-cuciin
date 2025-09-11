"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
} from "lucide-react"

// Header Component
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/images/logo.png" alt="Kita Cucin Logo" className="w-12 h-12 rounded-full" />
            <span className="text-xl font-bold text-primary">KITA CUCIiN</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#beranda" className="text-foreground hover:text-primary transition-colors">
              Beranda
            </a>
            <a href="#layanan" className="text-foreground hover:text-primary transition-colors">
              Layanan
            </a>
            <a href="#testimoni" className="text-foreground hover:text-primary transition-colors">
              Testimoni
            </a>
            <a href="#kontak" className="text-foreground hover:text-primary transition-colors">
              Kontak
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Phone className="w-4 h-4 mr-2" />
              Hubungi Kami
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-slide-in-left">
            <div className="flex flex-col space-y-4">
              <a href="#beranda" className="text-foreground hover:text-primary transition-colors">
                Beranda
              </a>
              <a href="#layanan" className="text-foreground hover:text-primary transition-colors">
                Layanan
              </a>
              <a href="#testimoni" className="text-foreground hover:text-primary transition-colors">
                Testimoni
              </a>
              <a href="#kontak" className="text-foreground hover:text-primary transition-colors">
                Kontak
              </a>
              <Button variant="outline" size="sm" className="w-fit bg-transparent">
                <Phone className="w-4 h-4 mr-2" />
                Hubungi Kami
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

// Hero Section Component
function HeroSection() {
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

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="text-lg px-8">
                Konsultasi Gratis
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                Lihat Layanan
              </Button>
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
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8">
              <img
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

// Info Section Component
function InfoSection() {
  const [activeTab, setActiveTab] = useState("terms")

  const tabs = [
    { id: "terms", label: "Ketentuan", icon: Award },
    { id: "process", label: "Proses", icon: Sparkles },
    { id: "vision", label: "Visi & Misi", icon: MapPin },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-sky-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Informasi Layanan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ketahui lebih lanjut tentang ketentuan, proses, dan komitmen kami
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8 overflow-x-auto">
          <div className="flex bg-white rounded-lg p-1 shadow-lg min-w-fit">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-md transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab.id ? "bg-blue-600 text-white shadow-md" : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === "terms" && (
            <Card className="bg-white shadow-xl border-0">
              <CardContent className="p-6 md:p-8">
                <div className="text-center mb-8">
                  <Badge className="bg-red-500 text-white px-6 py-2 text-lg font-bold rounded-full">KETENTUAN</Badge>
                </div>

                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                    <Sparkles className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-800 text-sm md:text-base">
                      Hasil pengerjaan tidak bisa dipastikan noda bersih dan hilang 100% seperti baru.
                    </p>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                    <Wind className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-800 text-sm md:text-base">
                      Pengerjaan tidak sampai kering, akan kering 4-8 jam dalam suhu ruangan dengan ventilasi yang cukup
                      atau ruangan yang terbuka (jaminan tidak bau atau berjamur).
                    </p>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                    <Bed className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-800 text-sm md:text-base">
                      Untuk kasur berbahan latex bisa memakai waktu kurang lebih 24 jam untuk kering.
                    </p>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                    <Zap className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-800 text-sm md:text-base">Minimal daya listrik 900 watt.</p>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                    <CreditCard className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-800 text-sm md:text-base">
                      Pembayaran via transfer ke BCA setelah pengerjaan max H+1.
                    </p>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                    <Award className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-800 text-sm md:text-base">
                      Klaim garansi bau maksimal H+3 bisa di proses jika pembayaran sudah di lakukan.
                    </p>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                    <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-800 text-sm md:text-base">
                      Jika lantai marmer atau parkit pengerjaan harus di luar ruangan.
                    </p>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-800 text-sm md:text-base">
                      Pembatalan atau reschedule max. H-1 (akan tetap dikenakan pembayaran minimum order 200.000 jika
                      pembatalan/reschedule di kurang dari 24 jam dari waktu booking).
                    </p>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                    <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-800 text-sm md:text-base">
                      Jika pengerjaan di apartement, pastikan sudah mendapat surat izin dari pihak management untuk
                      memudahkan petugas.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "process" && (
            <Card className="bg-white shadow-xl border-0 overflow-hidden relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-800"></div>
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: "30px 30px",
                  }}
                ></div>
              </div>

              <CardContent className="p-6 md:p-8 relative z-10">
                <div className="text-center mb-8">
                  <div className="inline-block relative">
                    <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-yellow-500 via-yellow-400 to-amber-500 bg-clip-text mb-2">
                      PROSES PENCUCIAN
                    </h3>
                    <div className="w-full h-1 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full"></div>
                  </div>
                  <Badge className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full mt-4 shadow-lg">
                    Dengan metode wet clean extraction
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {[
                    { step: 1, title: "Vakum Debu", icon: "🌪️", bg: "from-blue-500 to-blue-600" },
                    { step: 5, title: "Pembilasan", icon: "💧", bg: "from-cyan-500 to-blue-500" },
                    { step: 2, title: "Pencucian", icon: "🧽", bg: "from-indigo-500 to-blue-600" },
                    { step: 6, title: "Extrak Sisa Noda", icon: "✨", bg: "from-purple-500 to-indigo-600" },
                    { step: 3, title: "Vakum Noda", icon: "🔧", bg: "from-blue-600 to-indigo-600" },
                    { step: 7, title: "Pengeringan", icon: "☀️", bg: "from-yellow-500 to-orange-500" },
                    { step: 4, title: "Penetralan", icon: "🧪", bg: "from-green-500 to-blue-500" },
                    { step: 8, title: "Bersih & Wangi", icon: "🌸", bg: "from-pink-500 to-purple-500" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                      {/* Background gradient overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${item.bg} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      ></div>

                      <div className="relative p-4 flex items-center gap-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${item.bg} text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg`}
                        >
                          {item.step}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xl">{item.icon}</span>
                            <span className="font-semibold text-gray-800 text-sm md:text-base group-hover:text-blue-700 transition-colors">
                              {item.title}
                            </span>
                          </div>
                          <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${item.bg} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500`}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Process Flow Indicator */}
                <div className="mt-8 text-center">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 px-6 py-3 rounded-full">
                    <Sparkles className="w-5 h-5 text-blue-600" />
                    <span className="text-blue-800 font-medium text-sm">
                      8 Langkah Profesional untuk Hasil Maksimal
                    </span>
                    <Sparkles className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "vision" && (
            <Card className="bg-white shadow-xl border-0">
              <CardContent className="p-6 md:p-8">
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <h3 className="text-2xl font-bold text-blue-600">VISI</h3>
                    </div>
                    <p className="text-gray-800 text-base md:text-lg leading-relaxed">
                      Menjadi pilihan utama masyarakat untuk jasa cuci yang berkualitas dan terpercaya, dengan
                      memberikan pelayanan yang prima dan memuaskan pelanggan.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <h3 className="text-2xl font-bold text-blue-600">MISI</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold">1.</span>
                        <p className="text-gray-800 text-sm md:text-base">
                          "Memberikan pelayanan cuci yang berkualitas dan profesional untuk memenuhi kebutuhan
                          pelanggan."
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold">2.</span>
                        <p className="text-gray-800 text-sm md:text-base">
                          "Menggunakan teknologi dan bahan yang aman dan ramah lingkungan untuk menjaga kesehatan dan
                          keselamatan pelanggan."
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold">3.</span>
                        <p className="text-gray-800 text-sm md:text-base">
                          "Membangun hubungan yang baik dengan pelanggan dan meningkatkan kepuasan mereka melalui
                          pelayanan yang prima."
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold">4.</span>
                        <p className="text-gray-800 text-sm md:text-base">
                          "Terus meningkatkan kualitas pelayanan dan inovasi untuk memenuhi kebutuhan pelanggan yang
                          terus berkembang."
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-8 p-6 bg-gradient-to-r from-blue-50 to-sky-50 rounded-lg">
                    <h4 className="text-xl font-bold text-blue-600 mb-2">MOTTO</h4>
                    <p className="text-base md:text-lg text-gray-800 font-semibold">
                      Kita Cuciin, Bersih dan Nyaman untuk Anda
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}

// Pricing Section Component
function PricingSection() {
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
      note: "Berbagai aksesoris rumah tangga",
    },
    {
      name: "Kursi",
      icon: "🪑",
      color: "pink",
      items: pricingData.kursi.map((item) => ({ name: item.item, price: item.price })),
      note: "Kursi kantor & makan",
    },
  ]

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

        <div className="hidden lg:block">
          {/* Desktop Grid Layout - All visible at once */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {categories.map((category, categoryIndex) => {
              const colorClasses = getColorClasses(category.color)

              return (
                <div
                  key={categoryIndex}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 h-fit"
                >
                  <div
                    className={`bg-gradient-to-r ${colorClasses.gradient} p-4`}
                    style={{ backgroundColor: colorClasses.bg }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-xl md:text-2xl">{category.icon}</div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-white" style={{ color: "#ffffff" }}>
                          {category.name}
                        </h3>
                        <p className="text-white/80 text-xs md:text-sm" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                          {category.note}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Items List - Fixed height for desktop */}
                  <div className="divide-y divide-gray-100 max-h-96 overflow-y-auto">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-center justify-between p-3 md:p-4 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex-1 min-w-0 pr-4">
                          <h4 className="font-medium text-gray-900 text-sm md:text-base truncate">{item.name}</h4>
                        </div>
                        <div className="flex-shrink-0">
                          <span className="text-base md:text-lg font-bold text-red-600">{item.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile Layout - Scrollable list */}
        <div className="lg:hidden max-w-4xl mx-auto">
          <div className="space-y-6">
            {categories.map((category, categoryIndex) => {
              const colorClasses = getColorClasses(category.color)

              return (
                <div
                  key={categoryIndex}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                >
                  <div
                    className={`bg-gradient-to-r ${colorClasses.gradient} p-4`}
                    style={{ backgroundColor: colorClasses.bg }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-xl md:text-2xl">{category.icon}</div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-white" style={{ color: "#ffffff" }}>
                          {category.name}
                        </h3>
                        <p className="text-white/80 text-xs md:text-sm" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                          {category.note}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Items List */}
                  <div className="divide-y divide-gray-100 max-h-80 overflow-y-auto">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-center justify-between p-3 md:p-4 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex-1 min-w-0 pr-4">
                          <h4 className="font-medium text-gray-900 text-sm md:text-base truncate">{item.name}</h4>
                        </div>
                        <div className="flex-shrink-0">
                          <span className="text-base md:text-lg font-bold text-red-600">{item.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
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
              <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full">
                <Phone className="w-5 h-5 mr-2" />
                0895-4054-48445
              </Button>
              <Button
                variant="outline"
                className="border-2 border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-transparent w-full"
              >
                <Instagram className="w-5 h-5 mr-2" />
                Kitacuciin7
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Services Section Component
function ServicesSection() {
  const services = [
    {
      id: "sofa",
      icon: Sofa,
      title: "Cuci Sofa Premium",
      description: "Pembersihan mendalam untuk semua jenis sofa dengan teknologi steam cleaning",
      features: ["Deep cleaning", "Anti bakteri", "Cepat kering", "Wangi tahan lama"],
    },
    {
      id: "ac",
      icon: Wind,
      title: "Service AC Lengkap",
      description: "Pembersihan dan perawatan AC untuk performa optimal dan udara bersih",
      features: ["Bongkar pasang", "Cuci evaporator", "Isi freon", "Garansi service"],
    },
    {
      id: "karpet",
      icon: Droplets,
      title: "Cuci Karpet & Gorden",
      description: "Layanan pembersihan karpet dan gorden dengan hasil seperti baru",
      features: ["Stain removal", "Deodorizer", "Color protection", "Pick up service"],
    },
    {
      id: "paket",
      icon: Zap,
      title: "Paket Hemat Kombo",
      description: "Kombinasi layanan cuci sofa + service AC dengan harga spesial",
      features: ["Sofa + AC", "Diskon 20%", "Free konsultasi", "Jadwal fleksibel"],
    },
  ]

  return (
    <section id="layanan" className="py-16 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">Menu Layanan Kami</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Pilih layanan terbaik sesuai kebutuhan Anda dengan kualitas profesional dan hasil memuaskan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover-lift border-border/50 bg-background">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg md:text-xl text-card-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-sm">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <Button className="w-full text-sm">Lihat Detail</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Testimonials Section Component
function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ibu Sarah",
      location: "Jakarta Selatan",
      rating: 5,
      comment:
        "Pelayanan sangat memuaskan! Sofa saya yang sudah kotor dan berbau kini kembali seperti baru. Tim sangat profesional dan ramah.",
      service: "Cuci Sofa",
    },
    {
      name: "Bapak Ahmad",
      location: "Tangerang",
      rating: 5,
      comment:
        "AC di rumah sudah lama tidak dingin, setelah di service sama Kita Cuciin jadi dingin lagi dan hemat listrik. Recommended!",
      service: "Service AC",
    },
    {
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
            <Card key={index} className="bg-background border-border/50 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 text-sm md:text-base italic">"{testimonial.comment}"</p>
                <div className="border-t border-border pt-4">
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

function ContactSection() {
  const dataContack = [
    {
      icons: <Phone className="w-6 h-6 text-primary" />,
      title: "Telepon & WhatsApp",
      subTitle: "0895-4054-48445",
      paragraft: "Tersedia 24/7 untuk konsultasi",
      href: "https://wa.me/62895405448445", // link ke WhatsApp
    },
    {
      icons: <Instagram className="w-6 h-6 text-primary" />,
      title: "Instagram",
      subTitle: "@kitacuciin7",
      paragraft: "Follow untuk tips & promo terbaru",
      href: "https://instagram.com/kitacuciin7", // link ke IG
    },
    {
      icons: <MapPin className="w-6 h-6 text-primary" />,
      title: "Area Layanan",
      subTitle: "Jakarta, Bogor, Depok, Tangerang, Bekasi",
      paragraft: "Melayani area Jabodetabek",
      href: "https://maps.google.com/?q=Jakarta", // link ke Google Maps
    },
  ];

  return (
    <section id="kontak" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Hubungi Kami
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Siap melayani kebutuhan pembersihan Anda dengan layanan terbaik
          </p>
        </div>

        {/* Konten */}
        <div className="flex gap-10">
          <div className="flex-1 h-full"></div>
          <div className="flex-1">
            <div className="space-y-6 w-full">
              {dataContack.map((val, i) => (
                <div
                  key={i}
                  className="flex h-[110px] py-3 items-start gap-4 shadow-md rounded-lg w-full hover:shadow-lg transition"
                >
                  <div className="w-20 h-full bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    {val.icons}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {val.title}
                    </h3>
                    <a
                      href={val.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {val.subTitle}
                    </a>
                    <p className="text-sm text-muted-foreground">
                      {val.paragraft}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src="/images/logo.png" alt="Kita Cuciin Logo" className="w-10 h-10 rounded-full" />
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
function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        <button
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse hover:animate-none"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onClick={() => window.open("https://wa.me/6289540544845", "_blank")}
        >
          <MessageCircle className="w-6 h-6" />
        </button>

        {showTooltip && (
          <div
            className="absolute bottom-full right-0 mb-2 px-3 py-2 rounded-lg shadow-lg whitespace-nowrap text-sm"
            style={{ backgroundColor: "#1f2937", color: "#ffffff" }}
          >
            Hubungi via WhatsApp
            <div
              className="absolute top-full right-4 w-0 h-0"
              style={{
                borderLeft: "4px solid transparent",
                borderRight: "4px solid transparent",
                borderTop: "4px solid #1f2937",
              }}
            ></div>
          </div>
        )}
      </div>
    </div>
  )
}

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
