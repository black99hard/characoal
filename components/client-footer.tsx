"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/i18n"

export default function ClientFooter() {
  const { language } = useLanguage()
  const t = (key: keyof typeof import("@/lib/i18n").translations.en) => getTranslation(language, key)

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-400">MEYS</h3>
            <p className="text-gray-300 mb-4">
              Premium charcoal and hardwood supplier serving global markets with quality and reliability.
            </p>
            <p className="text-sm text-gray-400">RC: 2004612</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">{t("quickLinks")}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-green-400 transition-colors">
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-green-400 transition-colors">
                  {t("products")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-green-400 transition-colors">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-green-400 transition-colors">
                  {t("gallery")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-green-400 transition-colors">
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">{t("ourProducts")}</h4>
            <ul className="space-y-2 text-gray-300">
              <li>{t("premiumCharcoal")}</li>
              <li>{t("bbqCharcoal")}</li>
              <li>{t("industrialCharcoal")}</li>
              <li>{t("timberLogs")}</li>
              <li>{t("firewood")}</li>
              <li>{t("furnitureWood")}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">{t("contactInfo")}</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <Phone className="h-5 w-5 text-green-400 mt-0.5" />
                <span className="text-gray-300">+234 805 812 6215</span>
              </div>
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <Mail className="h-5 w-5 text-green-400 mt-0.5" />
                <span className="text-gray-300">info@gamsawanig.com</span>
              </div>
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <MapPin className="h-5 w-5 text-green-400 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Block A, Lasfa Multibiz Plaza, CBN Roundabout, Shop 30 M.M Way, Bauchi 740102, Nigeria
                </span>
              </div>
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <MessageCircle className="h-5 w-5 text-green-400 mt-0.5" />
                <Link
                  href="https://wa.me/2348058126215"
                  target="_blank"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  {t("chatWhatsApp")}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 MEYS - {t("allRightsReserved")}
            </p>
            <div className="flex space-x-6 rtl:space-x-reverse mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                {t("termsConditions")}
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                {t("privacyPolicy")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
