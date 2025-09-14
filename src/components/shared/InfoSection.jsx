"use client"


import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Bed, CreditCard, MapPin, Phone, Sparkles, Wind, Zap } from "lucide-react"

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
                  <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text mb-3">
                    PROSES PENCUCIAN
                  </h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full mx-auto mb-4"></div>
                </div>
  
  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {[
                      { step: 1, title: "Vakum Debu", icon: "🌪️" },
                      { step: 2, title: "Pencucian", icon: "🧽" },
                      { step: 3, title: "Vakum Noda", icon: "🔧" },
                      { step: 4, title: "Penetralan", icon: "🧪" },
                      { step: 5, title: "Pembilasan", icon: "💧" },
                      { step: 6, title: "Extrak Sisa Noda", icon: "✨" },
                      { step: 7, title: "Pengeringan", icon: "☀️" },
                      { step: 8, title: "Bersih & Wangi", icon: "🌸" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="group relative overflow-hidden rounded-xl border border-gray-100 hover:border-blue-500 transition-all duration-300 hover:shadow-lg"
                      >
                        <div className="relative p-6 flex items-center gap-4">
                          {/* Step Number */}
                          <div className="w-12 h-12 border-2 border-gray-300 group-hover:border-blue-500 text-gray-700 rounded-full flex items-center justify-center font-semibold text-base transition-colors duration-300">
                            {item.step}
                          </div>
  
                          {/* Content */}
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-lg">{item.icon}</span>
                              <span className="font-medium text-gray-900 text-base group-hover:text-blue-600 transition-colors">
                                {item.title}
                              </span>
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
                        8 Langkah Profesional untuk Hasil Maksimal, Dengan metode wet clean extraction
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
                            Memberikan pelayanan cuci yang berkualitas dan profesional untuk memenuhi kebutuhan
                            pelanggan.
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-blue-600 font-bold">2.</span>
                          <p className="text-gray-800 text-sm md:text-base">
                            Menggunakan teknologi dan bahan yang aman dan ramah lingkungan untuk menjaga kesehatan dan
                            keselamatan pelanggan.
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-blue-600 font-bold">3.</span>
                          <p className="text-gray-800 text-sm md:text-base">
                            Membangun hubungan yang baik dengan pelanggan dan meningkatkan kepuasan mereka melalui
                            pelayanan yang prima.
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-blue-600 font-bold">4.</span>
                          <p className="text-gray-800 text-sm md:text-base">
                            Terus meningkatkan kualitas pelayanan dan inovasi untuk memenuhi kebutuhan pelanggan yang
                            terus berkembang.
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


  export default InfoSection