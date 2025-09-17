"use client";

import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, Phone, X, ChevronLeft, ChevronRight, BrushCleaning } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function DetailPage({ params }: { params: { id: string } }) {
  const serviceDetails = {
    sofa: {
      title: "Cuci Sofa Premium",
      description:
        "Layanan pembersihan sofa berbagai jenis (sofa biasa, stool, bench, L, reclining, dll) agar lebih higienis, bebas tungau, dan kembali nyaman digunakan.",
      process: [
        "Vakum Debu - Jika kondisi barang sangat berdebu (biasanya sudah dibiarkan lama & tidak terpakai)",
        "Pencucian - Menghilangkan noda & membunuh bakteri/virus dengan sabun khusus yang aman untuk kulit",
        "Vakum Noda - Mengangkat kotoran & noda",
        "Penetralan - Menetralkan pH untuk memastikan sisa chemical tidak tersisa",
        "Pembilasan - Pembilasan dilakukan berulang sampai air bekas noda hilang",
        "Ekstrak Sisa Noda - Membersihkan seluruh sisa kotoran, bakteri, virus, dan sisa chemical",
        "Pengeringan - Pengeringan hanya 30% akan kering 4-8 jam di suhu ruangan dengan ventilasi yang cukup/ dibiarkan di ruangan terbuka",
        "Bersih & Wangi - Hasil akhir bersih dan wangi"
      ],
      benefits: [
        "Menghilangkan bakteri dan tungau",
        "Warna kain lebih cerah",
        "Sofa terasa lebih bersih dan lembut",
        "Aroma segar tahan lama",
        "Aman untuk anak dan hewan peliharaan",
      ],
      pricing: "Mulai dari Rp 40.000 per seat",
      duration: "2-3 jam per sofa",
      beforeAfterImages: [
        {
          before: "/images/sofa-before.png",
          after: "/images/sofa-after.png"
        }
      ]
    },
  
    karpet: {
      title: "Cuci Karpet & Tangga",
      description:
        "Pembersihan karpet rumah dan karpet tangga secara mendalam agar kembali bersih, cerah, dan bebas tungau.",
      process: [
        "Vakum Debu - Jika kondisi barang sangat berdebu (biasanya sudah dibiarkan lama & tidak terpakai)",
        "Pencucian - Menghilangkan noda & membunuh bakteri/virus dengan sabun khusus yang aman untuk kulit",
        "Vakum Noda - Mengangkat kotoran & noda",
        "Penetralan - Menetralkan pH untuk memastikan sisa chemical tidak tersisa",
        "Pembilasan - Pembilasan dilakukan berulang sampai air bekas noda hilang",
        "Ekstrak Sisa Noda - Membersihkan seluruh sisa kotoran, bakteri, virus, dan sisa chemical",
        "Pengeringan - Pengeringan hanya 30% akan kering 4-8 jam di suhu ruangan dengan ventilasi yang cukup/ dibiarkan di ruangan terbuka",
        "Bersih & Wangi - Hasil akhir bersih dan wangi"
      ],
      benefits: [
        "Warna karpet kembali cerah",
        "Bebas tungau & debu halus",
        "Aroma segar lebih lama",
        "Tekstur karpet lembut kembali",
      ],
      pricing: "Mulai dari Rp 18.000 – Rp 20.000 per m²",
      duration: "1 hari (termasuk pengeringan)",
      beforeAfterImages: [
        {
          before: "/images/karpet-before.png",
          after: "/images/karpet-after.png"
        }
      ]
    },
  
    kasur: {
      title: "Cuci Kasur & Dipan",
      description:
        "Membersihkan kasur dan dipan dari debu, tungau, serta bakteri agar tidur lebih sehat dan nyaman.",
      process: [
        "Vakum Debu - Jika kondisi barang sangat berdebu (biasanya sudah dibiarkan lama & tidak terpakai)",
        "Pencucian - Menghilangkan noda & membunuh bakteri/virus dengan sabun khusus yang aman untuk kulit",
        "Vakum Noda - Mengangkat kotoran & noda",
        "Penetralan - Menetralkan pH untuk memastikan sisa chemical tidak tersisa",
        "Pembilasan - Pembilasan dilakukan berulang sampai air bekas noda hilang",
        "Ekstrak Sisa Noda - Membersihkan seluruh sisa kotoran, bakteri, virus, dan sisa chemical",
        "Pengeringan - Pengeringan hanya 30% akan kering 4-8 jam di suhu ruangan dengan ventilasi yang cukup/ dibiarkan di ruangan terbuka",
        "Bersih & Wangi - Hasil akhir bersih dan wangi"
      ],
      benefits: [
        "Kasur lebih higienis dan bebas tungau",
        "Tidur lebih sehat dan nyaman",
        "Aroma segar lebih lama",
      ],
      pricing: "Mulai dari Rp 95.000 – Rp 275.000",
      duration: "2-3 jam per kasur",
      beforeAfterImages: [
        {
          before: "/images/mattress-before.png",
          after: "/images/mattress-after.png"
        }
      ]
    },
  
    mobil: {
      title: "Cuci Interior Mobil",
      description:
        "Detailing interior mobil termasuk jok, dashboard, door trim, plafon, dan karpet agar lebih bersih dan nyaman.",
      process: [
        "Vakum Debu - Jika kondisi barang sangat berdebu (biasanya sudah dibiarkan lama & tidak terpakai)",
        "Pencucian - Menghilangkan noda & membunuh bakteri/virus dengan sabun khusus yang aman untuk kulit",
        "Vakum Noda - Mengangkat kotoran & noda",
        "Penetralan - Menetralkan pH untuk memastikan sisa chemical tidak tersisa",
        "Pembilasan - Pembilasan dilakukan berulang sampai air bekas noda hilang",
        "Ekstrak Sisa Noda - Membersihkan seluruh sisa kotoran, bakteri, virus, dan sisa chemical",
        "Pengeringan - Pengeringan hanya 30% akan kering 4-8 jam di suhu ruangan dengan ventilasi yang cukup/ dibiarkan di ruangan terbuka",
        "Bersih & Wangi - Hasil akhir bersih dan wangi"
      ],
      benefits: [
        "Interior mobil lebih segar & higienis",
        "Bebas debu & tungau",
        "Aroma wangi lebih lama",
      ],
      pricing: "Mulai dari Rp 280.000 – Rp 450.000",
      duration: "3-4 jam per mobil",
      beforeAfterImages: [
        {
          before: "/images/bangku-mobil-before.png",
          after: "/images/bangku-mobil-after.png"
        }
      ]
    },
  
    aksesories: {
      title: "Cuci Aksesoris Rumah Tangga",
      description:
        "Perawatan berbagai aksesoris rumah tangga mulai dari stroller, gorden, car seat, hingga bantal & guling.",
      process: [
        "Vakum Debu - Jika kondisi barang sangat berdebu (biasanya sudah dibiarkan lama & tidak terpakai)",
        "Pencucian - Menghilangkan noda & membunuh bakteri/virus dengan sabun khusus yang aman untuk kulit",
        "Vakum Noda - Mengangkat kotoran & noda",
        "Penetralan - Menetralkan pH untuk memastikan sisa chemical tidak tersisa",
        "Pembilasan - Pembilasan dilakukan berulang sampai air bekas noda hilang",
        "Ekstrak Sisa Noda - Membersihkan seluruh sisa kotoran, bakteri, virus, dan sisa chemical",
        "Pengeringan - Pengeringan hanya 30% akan kering 4-8 jam di suhu ruangan dengan ventilasi yang cukup/ dibiarkan di ruangan terbuka",
        "Bersih & Wangi - Hasil akhir bersih dan wangi"
      ],
      benefits: [
        "Aksesoris kembali bersih & higienis",
        "Bebas tungau & kotoran",
        "Aroma segar lebih lama",
      ],
      pricing: "Mulai dari Rp 7.000 – Rp 95.000 per item",
      duration: "1 hari (termasuk pengeringan)",
      beforeAfterImages: [
        {
          before: "/images/aksesories-before.png",
          after: "/images/aksesories-after.png"
        }
      ]
    },
  
    kursi: {
      title: "Cuci Kursi Kantor & Makan",
      description:
        "Layanan pencucian kursi kantor dan kursi makan agar lebih higienis, bebas noda, dan nyaman digunakan kembali.",
      process: [
        "Vakum Debu - Jika kondisi barang sangat berdebu (biasanya sudah dibiarkan lama & tidak terpakai)",
        "Pencucian - Menghilangkan noda & membunuh bakteri/virus dengan sabun khusus yang aman untuk kulit",
        "Vakum Noda - Mengangkat kotoran & noda",
        "Penetralan - Menetralkan pH untuk memastikan sisa chemical tidak tersisa",
        "Pembilasan - Pembilasan dilakukan berulang sampai air bekas noda hilang",
        "Ekstrak Sisa Noda - Membersihkan seluruh sisa kotoran, bakteri, virus, dan sisa chemical",
        "Pengeringan - Pengeringan hanya 30% akan kering 4-8 jam di suhu ruangan dengan ventilasi yang cukup/ dibiarkan di ruangan terbuka",
        "Bersih & Wangi - Hasil akhir bersih dan wangi"
      ],
      benefits: [
        "Kursi lebih bersih & higienis",
        "Bebas tungau & kotoran",
        "Aroma segar lebih lama",
      ],
      pricing: "Rp 50.000 per kursi",
      duration: "2-3 jam per kursi",
      beforeAfterImages: [
        {
          before: "/images/kursi-before.png",
          after: "/images/kursi-after.png"
        }
      ]
    },
  };

  const service = serviceDetails[params.id as keyof typeof serviceDetails];
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

const openPreview = (index: number) => {
  setPreviewIndex(index);
};
  
  if (!service) {
    notFound();
  }
 
  const closePreview = () => {
    setPreviewIndex(null);
  };

  const nextImage = () => {
    setPreviewIndex((prev) => {
      if (prev === null) return 0;
      return prev >= service.beforeAfterImages.length - 1 ? 0 : prev + 1;
    });
  };

  const prevImage = () => {
    setPreviewIndex((prev) => {
      if (prev === null) return 0;
      return prev <= 0 ? service.beforeAfterImages.length - 1 : prev - 1;
    });
  };

  const handleWhatsAppClick = () => {
    const message = `Halo, saya tertarik dengan layanan ${service.title}. Bisakah saya mendapat informasi lebih lanjut?`;
    const whatsappUrl = `https://wa.me/62895405448445?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  useEffect(() => {
    if (previewIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [previewIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 relative overflow-hidden">
      {/* Batik Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="batik" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="3" fill="#8B4513" opacity="0.3"/>
              <circle cx="60" cy="40" r="2" fill="#D2691E" opacity="0.4"/>
              <circle cx="40" cy="60" r="4" fill="#CD853F" opacity="0.2"/>
              <circle cx="80" cy="80" r="2" fill="#DEB887" opacity="0.3"/>
              <circle cx="100" cy="20" r="3" fill="#8B4513" opacity="0.2"/>
              <circle cx="20" cy="100" r="2" fill="#D2691E" opacity="0.3"/>
              <path d="M10,10 Q30,30 50,10 Q70,30 90,10" stroke="#8B4513" strokeWidth="1" fill="none" opacity="0.2"/>
              <path d="M10,50 Q30,70 50,50 Q70,70 90,50" stroke="#CD853F" strokeWidth="1" fill="none" opacity="0.2"/>
              <path d="M10,90 Q30,110 50,90 Q70,110 90,90" stroke="#DEB887" strokeWidth="1" fill="none" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#batik)"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Back Button */}
        <Link 
          href="/#layanan" 
          className="inline-flex items-center text-amber-700 hover:text-amber-600 mb-8 bg-white/70 px-4 py-2 rounded-full shadow-sm backdrop-blur-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Beranda
        </Link>

        {/* Header Section */}
        <div className="text-center mb-12 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{service.title}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">{service.description}</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Process */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center"> 
              Proses Pembersihan
            </h2>
            <div className="space-y-4">
              {service.process.map((step, index) => (
                <div key={index} className="flex items-start p-3 rounded-lg bg-amber-50/50">
                  <span className="bg-amber-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold mr-4 mt-0.5 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-gray-700 text-sm leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Benefits */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center"> 
              Keuntungan Layanan
            </h2>
            <div className="space-y-4">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start p-3 rounded-lg bg-green-50/50">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Before After Gallery */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 mb-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8 flex items-center justify-center">
            Bukti Hasil Sebelum & Sesudah
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.beforeAfterImages.map((imageSet, index) => (
              <div key={index} className="space-y-4">
                <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-4">
                  <h3 className="text-center font-semibold text-red-700 mb-3">Sebelum</h3>
                  <img
                    src={imageSet.before}
                    alt={`Kondisi sebelum ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform shadow-md"
                    onClick={() => openPreview(index)}
                  />
                </div>
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-4">
                  <h3 className="text-center font-semibold text-green-700 mb-3">Sesudah</h3>
                  <img
                    src={imageSet.after}
                    alt={`Kondisi sesudah ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform shadow-md"
                    onClick={() => openPreview(index)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 shadow-xl text-white">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 flex items-center justify-center"> 
              Pesan Sekarang Juga!
            </h2>
            <div className="mb-6">
              <p className="text-4xl font-bold mb-2">{service.pricing}</p>
              <p className="text-amber-100">Durasi pengerjaan: {service.duration}</p>
            </div>
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg hover:shadow-xl mb-4 w-full md:w-auto"
            >
              <Phone className="w-5 h-5 mr-3" />
              Hubungi WhatsApp Kami
            </Button>
            <div className="mt-4 text-amber-100 text-sm">
              ✓ Konsultasi gratis &nbsp; ✓ Estimasi harga akurat &nbsp; ✓ Jadwal fleksibel
            </div>
          </div>
        </div>
      </div>

  
      {previewIndex !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closePreview}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="max-w-5xl max-h-full grid md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="text-center">
              <h3 className="text-white text-lg font-semibold mb-4">Sebelum</h3>
              <img
                src={service.beforeAfterImages[previewIndex].before}
                alt="Sebelum"
                className="max-w-full max-h-96 object-contain rounded-lg shadow-lg"
              />
            </div>
            {/* After */}
            <div className="text-center">
              <h3 className="text-white text-lg font-semibold mb-4">Sesudah</h3>
              <img
                src={service.beforeAfterImages[previewIndex].after}
                alt="Sesudah"
                className="max-w-full max-h-96 object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
            {previewIndex + 1} dari {service.beforeAfterImages.length}
          </div>
        </div>
      )}
    </div>
  );
}