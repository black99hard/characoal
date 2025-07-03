import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Globe, Clock, Leaf, Award, Users } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Quality",
      description: "We maintain the highest standards in sourcing, processing, and packaging our products",
    },
    {
      icon: Users,
      title: "Trust",
      description: "Building long-term partnerships with our clients through reliability and transparency",
    },
    {
      icon: Clock,
      title: "Speed",
      description: "Efficient processing and timely delivery to meet your business deadlines",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Committed to environmentally responsible sourcing and production practices",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About GAMSAWA NIG. LTD</h1>
          <p className="text-xl">Your trusted partner for premium charcoal and hardwood exports</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    GAMSAWA NIG. LTD is a registered export company (RC-2004612) based in Bauchi, Nigeria. We specialize
                    in the sourcing and supply of clean, high-quality charcoal and hardwood to international buyers.
                  </p>
                  <p>
                    With strict attention to quality, packaging, and timely shipping, we aim to become a trusted
                    long-term partner for businesses worldwide. Our commitment to excellence has made us a preferred
                    supplier across the Middle East, Africa, and Asia.
                  </p>
                  <p>
                    We understand the importance of reliable supply chains in today's global market, and we've built our
                    operations around ensuring consistent quality and delivery that our clients can depend on.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <Card className="p-6 border-green-200">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-3">
                      <Award className="h-6 w-6 text-green-600 mr-3" />
                      <h3 className="font-semibold">Company Registration</h3>
                    </div>
                    <p className="text-gray-600">RC-2004612</p>
                  </CardContent>
                </Card>

                <Card className="p-6 border-green-200">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-3">
                      <Globe className="h-6 w-6 text-green-600 mr-3" />
                      <h3 className="font-semibold">Export Markets</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Middle East
                      </Badge>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Africa
                      </Badge>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Asia
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 border-green-200">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-3">
                      <Shield className="h-6 w-6 text-green-600 mr-3" />
                      <h3 className="font-semibold">Specialization</h3>
                    </div>
                    <p className="text-gray-600">Premium charcoal and hardwood export</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow border-green-200">
                <CardContent className="pt-6">
                  <value.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-green-800">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-8 border-green-200">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-green-800 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide the global market with premium quality charcoal and hardwood products while maintaining the
                  highest standards of sustainability, reliability, and customer service. We strive to be the preferred
                  partner for businesses seeking consistent, high-quality natural products from Nigeria.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-green-200">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-green-800 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To become the leading exporter of premium charcoal and hardwood products from Nigeria, recognized
                  globally for our commitment to quality, sustainability, and customer satisfaction. We envision a
                  future where GAMSAWA NIG. LTD is synonymous with excellence in natural product exports.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
