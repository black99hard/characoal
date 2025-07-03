import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GAMSAWA NIG. LTD - Premium Charcoal & Hardwood Export",
  description:
    "Leading Nigerian exporter of premium charcoal and hardwood products. Supplying quality BBQ charcoal, industrial charcoal, timber logs, and furniture-grade wood to global markets.",
  keywords:
    "charcoal export, hardwood export, Nigeria, BBQ charcoal, industrial charcoal, timber logs, firewood, furniture wood",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
