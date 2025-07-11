import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Star } from "lucide-react"

export default function GalleryPage() {
  const galleryImages = [
    {
      src: "/logo.png?height=400&width=600",
      title: "Premium Charcoal in 20kg Bags",
      category: "Charcoal",
    },
    {
      src: "/logo.png?height=400&width=600",
      title: "Hardwood Timber Logs",
      category: "Hardwood",
    },
    {
      src: "/logo.png?height=400&width=600",
      title: "Container Loading Process",
      category: "Logistics",
    },
    {
      src: "/logo.png?height=400&width=600",
      title: "BBQ Charcoal Quality Check",
      category: "Charcoal",
    },
    {
      src: "/logo.png?height=400&width=600",
      title: "Furniture-Grade Wood Selection",
      category: "Hardwood",
    },
    {
      src: "/logo.png?height=400&width=600",
      title: "Export Packaging Standards",
      category: "Logistics",
    },
    {
      src: "/logo.png?height=400&width=600",
      title: "Industrial Charcoal Production",
      category: "Charcoal",
    },
    {
      src: "/logo.png?height=400&width=600",
      title: "Seasoned Firewood Stacks",
      category: "Hardwood",
    },
    {
      src: "/logo.png?height=400&width=600",
      title: "Quality Control Process",
      category: "Logistics",
    },
  ]

  const testimonials = [
    {
      name: "Ahmed Al-Rashid",
      company: "Middle East Trading Co.",
      country: "UAE",
      rating: 5,
      text: "GAMSAWA has been our reliable supplier for over 2 years. Their charcoal quality is consistently excellent and delivery is always on time.",
    },
    {
      name: "Chen Wei",
      company: "Asian Import Solutions",
      country: "Singapore",
      rating: 5,
      text: "Outstanding service and premium quality hardwood. The team is professional and always responsive to our requirements.",
    },
    {
      name: "Kwame Asante",
      company: "West Africa Distributors",
      country: "Ghana",
      rating: 5,
      text: "Best charcoal supplier in the region. Their packaging and logistics are top-notch. Highly recommended for bulk orders.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery & Testimonials</h1>
          <p className="text-xl">See our products in action and hear from our satisfied customers</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Product Gallery</h2>
            <p className="text-lg text-gray-600">Real photos of our premium charcoal and hardwood products</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image src={image.src || "/placeholder.svg"} alt={image.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="secondary"
                      className={`${
                        image.category === "Charcoal"
                          ? "bg-green-600 text-white"
                          : image.category === "Hardwood"
                            ? "bg-amber-600 text-white"
                            : "bg-blue-600 text-white"
                      }`}
                    >
                      {image.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-800">{image.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Customer Testimonials</h2>
            <p className="text-lg text-gray-600">What our international clients say about us</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 border-green-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-green-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                    <p className="text-sm text-gray-500">{testimonial.country}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section Placeholder */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">See Our Process</h2>
            <p className="text-lg text-gray-600">Watch how we ensure quality from sourcing to shipping</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-600">Charcoal Production Process Video</p>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Premium Charcoal Production</h3>
                  <p className="text-gray-600 text-sm">
                    See how we produce our high-quality charcoal from selection to packaging
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-600">Export Packaging Process Video</p>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Export Packaging Standards</h3>
                  <p className="text-gray-600 text-sm">
                    Our meticulous packaging process ensuring products arrive in perfect condition
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
