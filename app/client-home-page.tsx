"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Globe, Shield, Truck, Leaf } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/i18n"

export default function ClientHomePage() {
  const { language } = useLanguage()
  const t = (key: keyof typeof import("@/lib/i18n").translations.en) => getTranslation(language, key)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-green-900/90 to-green-700/90">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/logo.jpg?height=1080&width=1920')",
            filter: "brightness(0.3)",
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">GAMSAWA NIG. LTD</h1>
          <p className="text-xl md:text-2xl mb-8 font-light">{t("tagline")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
              <Link href="/contact">
                {t("requestQuote")}
                <ArrowRight className="ml-2 rtl:mr-2 rtl:ml-0 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white hover:text-green-800 text-lg px-8 py-3 bg-transparent"
            >
              <Link href="/products">{t("viewProducts")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{t("whyChoose")}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t("trustedPartner")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t("qualityAssured")}</h3>
                <p className="text-gray-600">{t("qualityDesc")}</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Globe className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t("globalExport")}</h3>
                <p className="text-gray-600">{t("globalDesc")}</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Truck className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t("timelyDelivery")}</h3>
                <p className="text-gray-600">{t("timelyDesc")}</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t("sustainable")}</h3>
                <p className="text-gray-600">{t("sustainableDesc")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{t("ourProducts")}</h2>
            <p className="text-xl text-gray-600">{t("productsDesc")}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gray-200 relative">
                <Image
                  src="/logo.jpg?height=256&width=400"
                  alt="Premium Charcoal Products"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-green-800">{t("charcoalProducts")}</h3>
                <p className="text-gray-600 mb-4">{t("charcoalDesc")}</p>
                <Button asChild className="bg-green-600 hover:bg-green-700">
                  <Link href="/products#charcoal">{t("viewCharcoal")}</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gray-200 relative">
                <Image
                  src="/logo.jpg?height=256&width=400"
                  alt="Premium Hardwood Products"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-green-800">{t("hardwoodProducts")}</h3>
                <p className="text-gray-600 mb-4">{t("hardwoodDesc")}</p>
                <Button asChild className="bg-green-600 hover:bg-green-700">
                  <Link href="/products#hardwood">{t("viewHardwood")}</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">{t("readyToOrder")}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{t("ctaDesc")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Link href="/contact">{t("getQuoteNow")}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-800 text-lg px-8 py-3 bg-transparent"
            >
              <Link href="https://wa.me/2348058126215" target="_blank">
                {t("whatsAppUs")}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
