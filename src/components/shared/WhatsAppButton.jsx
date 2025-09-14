"use client"

import { MessageCircle } from "lucide-react";
import { useState } from "react"

function WhatsAppButton() {
    const [showTooltip, setShowTooltip] = useState(false)
    const waNumber = "62895405448445";
    const waMessage = "Halo, saya ingin bertanya tentang jasa cuci nya";
    const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;
  
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          <button
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse hover:animate-none"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onClick={() => window.open(waLink, "_blank")}
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


  export default WhatsAppButton