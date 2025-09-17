"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "../ui/button"
import { Menu, Phone, X } from "lucide-react"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80 // Adjust based on your header height
      const elementPosition = element.offsetTop - headerHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      })
    }
    setIsMenuOpen(false) // Close mobile menu after clicking
  }

  // Handle link click
  const handleLinkClick = (e, sectionId) => {
    e.preventDefault()
    scrollToSection(sectionId)
  }

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['beranda', 'layanan', 'testimoni', 'kontak']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call once to set initial active section

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsMenuOpen(false)
    }

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [isMenuOpen])

  const navItems = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'layanan', label: 'Layanan' },
    { id: 'testimoni', label: 'Testimoni' },
    { id: 'kontak', label: 'Kontak' }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-[500000] bg-background/95 backdrop-blur-sm border-b border-border transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <img 
              src="/images/logo.png" 
              alt="Kita Cucin Logo" 
              className="w-12 h-12 rounded-full transition-transform group-hover:scale-105" 
            />
            <span className="text-xl font-bold text-primary transition-colors group-hover:text-primary/80">
              KITA CUCIiN
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleLinkClick(e, item.id)}
                className={`relative text-foreground hover:text-primary transition-all duration-300 font-medium group ${
                  activeSection === item.id ? 'text-primary' : ''
                }`}
              >
                {item.label}
                {/* Active indicator */}
                <span 
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="hover:scale-105 transition-transform duration-200"
              asChild
            >
              <Link href="tel:+6281234567890">
                <Phone className="w-4 h-4 mr-2" />
                Hubungi Kami
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-accent rounded-md transition-colors duration-200" 
            onClick={(e) => {
              e.stopPropagation()
              setIsMenuOpen(!isMenuOpen)
            }}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 transition-transform duration-200 rotate-0" />
            ) : (
              <Menu className="w-6 h-6 transition-transform duration-200" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-96 opacity-100 mt-4 pb-4 border-t border-border pt-4' 
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleLinkClick(e, item.id)}
                className={`text-foreground hover:text-primary duration-300 font-medium py-2 px-4 rounded-md hover:bg-accent transform transition-transform ${
                  isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                } ${activeSection === item.id ? 'text-primary bg-accent' : ''}`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
                }}
              >
                {item.label}
              </a>
            ))}
            
            <Button 
              variant="outline" 
              size="sm" 
              className={`w-fit bg-transparent hover:scale-105 transition-all duration-300 mt-2 transform ${
                isMenuOpen ? 'translate-x-0' : '-translate-x-full'
              }`}
              style={{
                transitionDelay: isMenuOpen ? `${navItems.length * 50}ms` : '0ms'
              }}
              asChild
            >
              <Link href="tel:+6281234567890">
                <Phone className="w-4 h-4 mr-2" />
                Hubungi Kami
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header