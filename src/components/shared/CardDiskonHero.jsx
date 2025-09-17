"use client"

import Link from 'next/link'
import React from 'react'

const CardDiskonHero = () => {
  return (
    <div className="lg:hidden mt-8 space-y-4">
        <div className="bg-gradient-to-r from-orange-500/95 to-red-500/95 text-white p-4 rounded-2xl shadow-xl animate-pulse backdrop-blur-sm border border-orange-400/30 max-w-sm mx-auto">
            <div className="flex items-center justify-between">
            <div>
                <div className="bg-gradient-to-r from-yellow-300 to-yellow-400 text-orange-800 text-xs font-bold px-2 py-1 rounded-full mb-1 inline-block shadow-sm">
                PROMO SPESIAL
                </div>
                <div className="text-2xl font-bold drop-shadow-lg">10% OFF</div>
                <div className="text-xs opacity-90 drop-shadow-sm">
                Cuci sofa & kasur
                </div>
            </div>

            {/* WhatsApp Link */}
            <Link
                href={`https://wa.me/62895405448445?text=${encodeURIComponent(
                "✨ Halo Min, saya tertarik dengan promo Diskon 10% ✨, Mohon infonya lebih lanjut ya 🙏😊"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs bg-white/20 backdrop-blur-sm rounded-lg p-2 border border-white/10 text-center cursor-pointer hover:bg-white/30 transition"
            >
                Berlaku hingga<br />akhir bulan
            </Link>
            </div>
        </div>

        {/* Mobile Guarantee Badge */}
        <div className="bg-gradient-to-r from-slate-700/90 to-slate-800/90 text-white p-3 rounded-xl shadow-lg backdrop-blur-md border border-slate-600/30 max-w-xs mx-auto">
            <div className="flex items-center justify-center space-x-3">
            <div className="text-center">
                <p className="text-sm font-medium">100% Puas</p>
                <p className="text-xs opacity-90">Garansi Kualitas</p>
            </div>
            <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default CardDiskonHero