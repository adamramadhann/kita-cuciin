"use client"

import L from "leaflet";
import "leaflet/dist/leaflet.css"; 
import { Instagram, MapPin, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"


// delete (L.Icon.Default.prototype as any)._getIconUrl;
delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

function ContactSection() {
  const [isMounted, setIsMounted] = useState(false);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!isMounted) return;

    const handleResize = () => {
      setTimeout(() => {
        if (mapRef.current) {
          mapRef.current.invalidateSize();
        }
      }, 200);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMounted]);

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
      icons: <MapPin  className="w-6 h-6 text-primary" />,
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
            {/* {isMounted && ( */}
              <MapContainer
                ref={mapRef}
                center={[-6.4015, 106.7934]}
                zoom={12}
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%" }}
                // className="z-0"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles courtesy of CartoDB'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[-6.4015, 106.7934]}>
                  <Popup>Lokasi Kami</Popup>
                </Marker>
              </MapContainer>
            {/* )} */}
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



export default ContactSection