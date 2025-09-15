import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowLeft, Phone } from "lucide-react"
import Link from "next/link"

const serviceDetails = {
  sofa: {
    title: "Cuci Sofa Premium",
    description:
      "Layanan pembersihan sofa berbagai jenis (sofa biasa, stool, bench, L, reclining, dll) agar lebih higienis, bebas tungau, dan kembali nyaman digunakan.",
    process: [
      "Inspeksi kondisi sofa dan jenis kain",
      "Vacuum menyeluruh untuk debu dan kotoran",
      "Pre-treatment untuk noda membandel",
      "Pencucian dengan mesin ekstraksi & vakum",
      "Aplikasi anti bakteri dan deodorizer",
      "Proses pengeringan optimal",
    ],
    benefits: [
      "Menghilangkan bakteri dan tungau",
      "Warna kain lebih cerah",
      "Sofa terasa lebih bersih dan lembut",
      "Aroma segar tahan lama",
      "Aman untuk anak dan hewan peliharaan",
    ],
    pricing: "Mulai dari Rp 40.000 per seat",
    beforeImage: "/images/sofa-before.png",
    afterImage: "/images/sofa-after.png",
    duration: "2-3 jam per sofa",
  },

  karpet: {
    title: "Cuci Karpet & Tangga",
    description:
      "Pembersihan karpet rumah dan karpet tangga secara mendalam agar kembali bersih, cerah, dan bebas tungau.",
    process: [
      "Vacuum menyeluruh untuk debu dan kotoran",
      "Pre-treatment noda dengan chemical khusus",
      "Deep cleaning dengan mesin ekstraksi",
      "Aplikasi anti bakteri dan deodorizer",
      "Proses pengeringan optimal",
    ],
    benefits: [
      "Warna karpet kembali cerah",
      "Bebas tungau & debu halus",
      "Aroma segar lebih lama",
      "Tekstur karpet lembut kembali",
    ],
    pricing: "Mulai dari Rp 18.000 – Rp 20.000 per m²",
    beforeImage: "/images/karpet-before.png",
    afterImage: "/images/karpet-after.png",
    duration: "1 hari (termasuk pengeringan)",
  },

  kasur: {
    title: "Cuci Kasur & Dipan",
    description:
      "Membersihkan kasur dan dipan dari debu, tungau, serta bakteri agar tidur lebih sehat dan nyaman.",
    process: [
      "Vacuum menyeluruh untuk debu dan tungau",
      "Pre-treatment noda dengan chemical khusus",
      "Pencucian dengan mesin ekstraksi",
      "Aplikasi anti bakteri dan deodorizer",
      "Proses pengeringan cepat",
    ],
    benefits: [
      "Kasur lebih higienis dan bebas tungau",
      "Tidur lebih sehat dan nyaman",
      "Aroma segar lebih lama",
    ],
    pricing: "Mulai dari Rp 95.000 – Rp 275.000",
    beforeImage: "/images/mattress-before.png",
    afterImage: "/images/mattress-after.png",
    duration: "2-3 jam per kasur",
  },

  mobil: {
    title: "Cuci Interior Mobil",
    description:
      "Detailing interior mobil termasuk jok, dashboard, door trim, plafon, dan karpet agar lebih bersih dan nyaman.",
    process: [
      "Vacuum menyeluruh untuk debu dan kotoran",
      "Pembersihan jok & door trim",
      "Deep cleaning dashboard & plafon",
      "Pencucian karpet mobil",
      "Aplikasi anti bakteri dan deodorizer",
      "Proses pengeringan optimal",
    ],
    benefits: [
      "Interior mobil lebih segar & higienis",
      "Bebas debu & tungau",
      "Aroma wangi lebih lama",
    ],
    pricing: "Mulai dari Rp 280.000 – Rp 450.000",
    beforeImage: "/images/bangku-mobil-before.png",
    afterImage: "/images/bangku-mobil-after.png",
    duration: "3-4 jam per mobil",
  },

  aksesories: {
    title: "Cuci Aksesoris Rumah Tangga",
    description:
      "Perawatan berbagai aksesoris rumah tangga mulai dari stroller, gorden, car seat, hingga bantal & guling.",
    process: [
      "Vacuum menyeluruh untuk debu dan kotoran",
      "Pre-treatment noda dengan chemical khusus",
      "Deep cleaning sesuai jenis bahan",
      "Aplikasi anti bakteri dan deodorizer",
      "Proses pengeringan optimal",
    ],
    benefits: [
      "Aksesoris kembali bersih & higienis",
      "Bebas tungau & kotoran",
      "Aroma segar lebih lama",
    ],
    pricing: "Mulai dari Rp 7.000 – Rp 95.000 per item",
    beforeImage: "/images/aksesories-before.png",
    afterImage: "/images/aksesories-after.png",
    duration: "1 hari (termasuk pengeringan)",
  },

  kursi: {
    title: "Cuci Kursi Kantor & Makan",
    description:
      "Layanan pencucian kursi kantor dan kursi makan agar lebih higienis, bebas noda, dan nyaman digunakan kembali.",
    process: [
      "Vacuum menyeluruh untuk debu dan kotoran",
      "Pre-treatment noda dengan chemical khusus",
      "Deep cleaning dengan mesin ekstraksi",
      "Aplikasi anti bakteri dan deodorizer",
      "Proses pengeringan cepat",
    ],
    benefits: [
      "Kursi lebih bersih & higienis",
      "Bebas tungau & kotoran",
      "Aroma segar lebih lama",
    ],
    pricing: "Rp 50.000 per kursi",
    beforeImage: "/images/kursi-before.png",
    afterImage: "/images/kursi-after.png",
    duration: "2-3 jam per kursi",
  },
};


export default function DetailPage({ params }: { params: { id: string } }) {
  const service = serviceDetails[params.id as keyof typeof serviceDetails]

  console.log("ini data service detailny: ", service)

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
                  src={service.beforeImage}
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
                   src={service.afterImage}
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
