import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowLeft, Phone } from "lucide-react"
import Link from "next/link"

const serviceDetails = {
  sofa: {
    title: "Cuci Sofa Premium",
    description: "Layanan pembersihan sofa profesional dengan teknologi steam cleaning terdepan",
    process: [
      "Inspeksi kondisi sofa dan jenis kain",
      "Pre-treatment untuk noda membandel",
      "Steam cleaning dengan suhu optimal",
      "Aplikasi anti bakteri dan deodorizer",
      "Proses pengeringan cepat",
      "Quality check dan finishing",
    ],
    benefits: [
      "Menghilangkan 99.9% bakteri dan tungau",
      "Warna kain kembali cerah",
      "Tekstur sofa lebih lembut",
      "Aroma segar tahan lama",
      "Aman untuk anak dan hewan peliharaan",
    ],
    pricing: "Mulai dari Rp 150.000 per seat",
    duration: "2-3 jam per sofa",
  },
  ac: {
    title: "Service AC Lengkap",
    description: "Perawatan menyeluruh AC untuk performa optimal dan udara bersih",
    process: [
      "Pembongkaran unit indoor AC",
      "Pembersihan evaporator dan filter",
      "Cuci kompresor dan kondensor",
      "Pengecekan sistem kelistrikan",
      "Pengisian freon sesuai spesifikasi",
      "Test running dan quality assurance",
    ],
    benefits: [
      "AC lebih dingin dan hemat listrik",
      "Udara lebih bersih dan sehat",
      "Mengurangi bau tidak sedap",
      "Memperpanjang usia AC",
      "Garansi service 30 hari",
    ],
    pricing: "Mulai dari Rp 100.000 per unit",
    duration: "1-2 jam per unit",
  },
  karpet: {
    title: "Cuci Karpet & Gorden",
    description: "Pembersihan profesional karpet dan gorden dengan hasil seperti baru",
    process: [
      "Vacuum menyeluruh untuk debu dan kotoran",
      "Pre-treatment noda dengan chemical khusus",
      "Deep cleaning dengan mesin ekstraksi",
      "Aplikasi color protection",
      "Deodorizer untuk aroma segar",
      "Proses pengeringan optimal",
    ],
    benefits: [
      "Warna karpet kembali cerah",
      "Tekstur lembut seperti baru",
      "Bebas dari tungau dan alergen",
      "Tahan noda lebih lama",
      "Layanan antar jemput gratis",
    ],
    pricing: "Mulai dari Rp 80.000 per m²",
    duration: "1-2 hari (termasuk pengeringan)",
  },
  paket: {
    title: "Paket Hemat Kombo",
    description: "Kombinasi layanan cuci sofa dan service AC dengan harga spesial",
    process: [
      "Konsultasi kebutuhan layanan",
      "Penjadwalan yang fleksibel",
      "Eksekusi layanan sofa dan AC bersamaan",
      "Quality check menyeluruh",
      "Garansi untuk kedua layanan",
      "Follow up kepuasan pelanggan",
    ],
    benefits: [
      "Hemat hingga 20% dari harga normal",
      "Satu kali kunjungan untuk dua layanan",
      "Tim teknisi berpengalaman",
      "Konsultasi gratis perawatan rutin",
      "Prioritas booking untuk service berikutnya",
    ],
    pricing: "Mulai dari Rp 200.000 (hemat 20%)",
    duration: "3-4 jam untuk kedua layanan",
  },
}

export default function DetailPage({ params }: { params: { id: string } }) {
  const service = serviceDetails[params.id as keyof typeof serviceDetails]

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Beranda
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">{service.title}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{service.description}</p>
        </div>

        {/* Before After Images */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Hasil Sebelum & Sesudah</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-red-600">Sebelum</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="/images/mattress-before.png"
                  alt="Kondisi sebelum dibersihkan"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <p className="text-center text-sm text-muted-foreground mt-2">
                  Kondisi kotor dengan noda dan debu menumpuk
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-green-600">Sesudah</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="/images/mattress-after.png"
                  alt="Kondisi setelah dibersihkan"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <p className="text-center text-sm text-muted-foreground mt-2">
                  Bersih, segar, dan seperti baru kembali
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Process & Benefits */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Proses Pembersihan</CardTitle>
              <CardDescription>Tahapan detail yang kami lakukan</CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3">
                {service.process.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-sm">{step}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Keuntungan Layanan</CardTitle>
              <CardDescription>Manfaat yang Anda dapatkan</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Pricing & CTA */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Informasi Harga & Durasi</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div>
              <p className="text-3xl font-bold text-primary mb-2">{service.pricing}</p>
              <p className="text-muted-foreground">Durasi: {service.duration}</p>
            </div>
            <div className="space-y-3">
              <Button size="lg" className="w-full">
                <Phone className="w-4 h-4 mr-2" />
                Hubungi WhatsApp untuk Konsultasi
              </Button>
              <p className="text-sm text-muted-foreground">
                Konsultasi gratis • Estimasi harga akurat • Jadwal fleksibel
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
