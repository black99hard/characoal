"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/i18n"
import LanguageSwitcher from "./language-switcher"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { language, changeLanguage } = useLanguage()

  const t = (key: keyof typeof import("@/lib/i18n").translations.en) => getTranslation(language, key)

  const navItems = [
    { href: "/", label: t("home") },
    { href: "/products", label: t("products") },
    { href: "/about", label: t("about") },
    { href: "/gallery", label: t("gallery") },
    { href: "/contact", label: t("contact") },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-green-800">
            {language === "ar" ? "جامساوا نيجيريا المحدودة" : "GAMSAWA NIG. LTD"}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-gray-700 hover:text-green-600 transition-colors ${
                  pathname === item.href ? "text-green-600 font-semibold" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
            <LanguageSwitcher currentLang={language} onLanguageChange={changeLanguage} />
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href="tel:+2348058126215">
                <Phone className="h-4 w-4 mr-2 rtl:ml-2 rtl:mr-0" />
                {t("callNow")}
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-gray-700 hover:text-green-600 transition-colors ${
                    pathname === item.href ? "text-green-600 font-semibold" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2">
                <LanguageSwitcher currentLang={language} onLanguageChange={changeLanguage} />
              </div>
              <Button asChild className="bg-green-600 hover:bg-green-700 w-fit">
                <Link href="tel:+2348058126215">
                  <Phone className="h-4 w-4 mr-2 rtl:ml-2 rtl:mr-0" />
                  {t("callNow")}
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
