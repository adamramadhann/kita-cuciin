"use client"

import { useState } from "react"
import { Button } from "../ui/button"
import { Menu, Phone, X } from "lucide-react"

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

  export default Header