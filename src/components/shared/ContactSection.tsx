"use client";

import dynamic from "next/dynamic";
import { Instagram, MapPin, Phone } from "lucide-react";

const MapLeaflet = dynamic(() => import("./MapLeaflet"), {
  ssr: false,
});

function ContactSection() {
  const dataContact = [
    {
      icons: <Phone className="w-6 h-6 text-primary" />,
      title: "Telepon & WhatsApp",
      subTitle: "0895-4054-48445",
      paragraft: "Tersedia 24/7 untuk konsultasi",
      href: "https://wa.me/62895405448445",
    },
    {
      icons: <Instagram className="w-6 h-6 text-primary" />,
      title: "Instagram",
      subTitle: "@kitacuciin7",
      paragraft: "Follow untuk tips & promo terbaru",
      href: "https://instagram.com/kitacuciin7",
    },
    {
      icons: <MapPin className="w-6 h-6 text-primary" />,
      title: "Area Layanan",
      subTitle: "Jakarta, Bogor, Depok, Tangerang, Bekasi",
      paragraft: "Melayani area Jabodetabek",
      href: "https://maps.google.com/?q=Jakarta",
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
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Maps */}
          <div className="w-full lg:flex-1 h-[380px] rounded-lg overflow-hidden shadow-md">
            <MapLeaflet />
          </div>

          {/* Contact Info */}
          <div className="w-full lg:flex-1">
            <div className="space-y-6 w-full">
              {dataContact.map((val, i) => (
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

export default ContactSection;
