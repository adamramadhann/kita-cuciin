"use client"

import { Bed, Car, ChartBarIncreasing, CheckCircle, Droplets, Package, Sofa } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import Link from "next/link"

// Services Section Component
export function ServicesSection() {
    const services = [
      {
        id: "sofa",
        icon: Sofa,
        title: "Cuci Sofa Premium",
        description: "Pembersihan mendalam untuk semua jenis sofa dengan teknologi steam cleaning",
        features: ["Deep cleaning", "Anti bakteri", "Cepat kering", "Wangi tahan lama"],
      },
      {
        id: "kasur",
        icon: Bed,
        title: "Cuci Kasur & Dipan",
        description: "Membersihkan kasur dan dipan dari debu, tungau, serta bakteri untuk tidur lebih sehat",
        features: ["Anti tungau", "Vacuum steril", "Steam cleaning", "Wangi segar"],
      },
      {
        id: "mobil",
        icon: Car,
        title: "Cuci Interior Mobil",
        description: "Detailing interior mobil termasuk jok, dashboard, door trim, dan karpet",
        features: ["Steam cleaning", "Anti bakteri", "Leather care", "Cepat kering"],
      },
      {
        id: "aksesoris",
        icon: Package,
        title: "Cuci Aksesoris Rumah Tangga",
        description: "Perawatan berbagai aksesoris rumah tangga dari karpet, gorden, hingga stroller",
        features: ["Stain removal", "Deodorizer", "Pick up service", "Color protection"],
      },
      {
        id: "kursi",
        icon: ChartBarIncreasing,
        title: "Cuci Kursi Kantor & Makan",
        description: "Membersihkan kursi kantor dan kursi makan agar tetap nyaman dan higienis",
        features: ["Vacuum steril", "Anti noda", "Cepat kering", "Wangi segar"],
      },
      // {
      //   id: "ac",
      //   icon: Wind,
      //   title: "Service AC Lengkap",
      //   description: "Pembersihan dan perawatan AC untuk performa optimal dan udara bersih",
      //   features: ["Bongkar pasang", "Cuci evaporator", "Isi freon", "Garansi service"],
      // },
      {
        id: "karpet",
        icon: Droplets,
        title: "Cuci Karpet & Gorden",
        description: "Layanan pembersihan karpet dan gorden dengan hasil seperti baru",
        features: ["Stain removal", "Deodorizer", "Color protection", "Pick up service"],
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
              <Card key={index} className="hover-lift relative h-[450px] border-border/50 bg-background">
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
                </CardContent>
                  <div className="text-center absolute bottom-5 left-1/2 -translate-x-1/2">
                    <Link href={`/detail/${service.id}`} className="bg-black text-white px-5 py-2 rounded-md text-sm">Lihat Detail</Link>
                  </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
  }