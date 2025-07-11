import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export default function ProductsPage() {
  const charcoalProducts = [
    {
      name: "Premium Hardwood Charcoal",
      description:
        "High-quality charcoal made from premium hardwood, perfect for BBQ and grilling. Burns longer and hotter than regular charcoal.",
      specs: ["20kg bags", "Low ash content", "Long burning time", "Smokeless"],
      image: "/logo.png?height=300&width=400",
    },
    {
      name: "BBQ Charcoal",
      description:
        "Specially processed charcoal ideal for barbecue and outdoor cooking. Provides consistent heat and excellent flavor.",
      specs: ["5kg, 10kg, 20kg bags", "Quick ignition", "Even heat distribution", "Food-grade quality"],
      image: "/logo.png?height=300&width=400",
    },
    {
      name: "Industrial Use Charcoal",
      description:
        "High-carbon content charcoal for industrial applications, energy production, and manufacturing processes.",
      specs: ["Bulk packaging", "High carbon content", "Low moisture", "Consistent quality"],
      image: "/logo.png?height=300&width=400",
    },
  ]

  const hardwoodProducts = [
    {
      name: "Timber Logs",
      description: "Premium quality timber logs from sustainable forests, suitable for construction and manufacturing.",
      specs: ["Various sizes available", "Kiln-dried options", "Construction grade", "Export quality"],
      image: "/logo.png?height=300&width=400",
    },
    {
      name: "Firewood",
      description: "Seasoned hardwood firewood for heating and energy production. Clean burning with high heat output.",
      specs: ["Seasoned and dried", "Various wood types", "Bulk quantities", "Consistent moisture content"],
      image: "/logo.png?height=300&width=400",
    },
    {
      name: "Furniture-Grade Wood",
      description: "Premium hardwood specifically selected and processed for furniture manufacturing and woodworking.",
      specs: ["Premium grade selection", "Kiln-dried", "Various species", "Custom dimensions"],
      image: "/logo.png?height=300&width=400",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl">Premium charcoal and hardwood products for global export</p>
        </div>
      </section>

      {/* Charcoal Products */}
      <section id="charcoal" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Charcoal Products</h2>
            <p className="text-lg text-gray-600">
              High-quality charcoal for BBQ, industrial use, and energy production
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {charcoalProducts.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 relative">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-green-800">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Specifications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.specs.map((spec, specIndex) => (
                        <Badge key={specIndex} variant="secondary" className="bg-green-100 text-green-800">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                    <Link href="/contact">Request Price</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hardwood Products */}
      <section id="hardwood" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Hardwood Products</h2>
            <p className="text-lg text-gray-600">Premium timber, firewood, and furniture-grade wood</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hardwoodProducts.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 relative">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-green-800">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Specifications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.specs.map((spec, specIndex) => (
                        <Badge key={specIndex} variant="secondary" className="bg-green-100 text-green-800">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                    <Link href="/contact">Request Price</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Custom Specifications?</h2>
          <p className="text-lg mb-6">We can customize our products to meet your specific requirements</p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Contact Us for Custom Orders</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
