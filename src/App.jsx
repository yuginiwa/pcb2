import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Phone, Mail, MapPin, Star, Award, Users, Building, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react'
import './App.css'

// Import the provided images
import paulImage from './assets/520236017_122095060790959485_2356275996645847879_n.jpg'
import smdcBrandImage from './assets/519696396_122094990338959485_7804547488950299679_n.jpg'
import goldResidencesImage from './assets/525245420_1702422090444753_5575514502865139848_n.jpg'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-smdc-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">PB</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Paul Christian Buhay</h1>
                <p className="text-sm text-gray-600">SMDC Property Manager</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#about" className="text-gray-700 hover:text-smdc-blue transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-smdc-blue transition-colors">Services</a>
              <a href="#properties" className="text-gray-700 hover:text-smdc-blue transition-colors">Properties</a>
              <a href="#contact" className="text-gray-700 hover:text-smdc-blue transition-colors">Contact</a>
            </div>
            <Button className="bg-smdc-blue hover:bg-blue-700">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-smdc-blue/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-smdc-blue/10 text-smdc-blue border-smdc-blue/20">
                  <Award className="w-3 h-3 mr-1" />
                  SMDC Gold Residences Manager
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Your Trusted
                  <span className="text-smdc-blue block">Real Estate</span>
                  Partner
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Specializing in SMDC properties with over 5 years of experience in helping families find their perfect home. From luxury condominiums to affordable housing solutions.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-smdc-blue hover:bg-blue-700 text-lg px-8 py-4">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-smdc-blue text-smdc-blue hover:bg-smdc-blue hover:text-white text-lg px-8 py-4">
                  View Properties
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-smdc-blue">500+</div>
                  <div className="text-sm text-gray-600">Properties Sold</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-smdc-blue">98%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-smdc-blue">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src={paulImage} 
                  alt="Paul Christian Buhay - SMDC Property Manager" 
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-smdc-blue rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4 text-white fill-current" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Top Performer</div>
                      <div className="text-xs text-gray-600">SMDC 2024</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-8 -left-8 w-32 h-32 bg-smdc-blue/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 right-8 w-24 h-24 bg-gold/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Paul Christian Buhay?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As a dedicated SMDC property manager, I bring expertise, integrity, and personalized service to every real estate transaction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-smdc-blue transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-smdc-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-smdc-blue" />
                </div>
                <CardTitle>SMDC Expertise</CardTitle>
                <CardDescription>
                  Deep knowledge of SMDC properties, pricing, and market trends across all residential segments.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-smdc-blue transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-smdc-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-smdc-blue" />
                </div>
                <CardTitle>Client-Focused Service</CardTitle>
                <CardDescription>
                  Personalized approach to understand your needs and find the perfect property that fits your lifestyle and budget.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-smdc-blue transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-smdc-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-smdc-blue" />
                </div>
                <CardTitle>Proven Track Record</CardTitle>
                <CardDescription>
                  Consistently recognized as a top performer with hundreds of successful transactions and satisfied clients.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Services</h2>
            <p className="text-xl text-gray-600">Comprehensive real estate solutions for all your property needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Property Sales", desc: "Buy or sell SMDC properties with expert guidance" },
              { title: "Investment Consulting", desc: "Strategic advice for real estate investments" },
              { title: "Property Management", desc: "Complete management services for your properties" },
              { title: "Market Analysis", desc: "Detailed market insights and property valuations" }
            ].map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section id="properties" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured SMDC Properties</h2>
            <p className="text-xl text-gray-600">Discover premium residential developments across the Philippines</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={goldResidencesImage} 
                alt="SMDC Gold Residences" 
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <div>
                <Badge className="bg-gold/10 text-gold border-gold/20 mb-4">
                  Featured Property
                </Badge>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">SMDC Gold Residences</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Experience luxury living with premium amenities, strategic location, and exceptional value. 
                  1-bedroom units with balcony starting from competitive prices.
                </p>
              </div>
              
              <div className="space-y-3">
                {[
                  "Prime location with easy access to business districts",
                  "World-class amenities and facilities",
                  "Flexible payment terms available",
                  "Professional property management services"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-smdc-blue" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-smdc-blue hover:bg-blue-700">
                Learn More About This Property
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SMDC Brand Section */}
      <section className="py-20 bg-gradient-to-r from-smdc-blue to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Partnered with SMDC</h2>
              <p className="text-xl opacity-90">
                SM Development Corporation (SMDC) is the leading real estate developer in the Philippines, 
                known for creating life-centered communities that empower individuals and families.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold">100,000+</div>
                  <div className="opacity-80">Homes Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">20+</div>
                  <div className="opacity-80">Years of Excellence</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={smdcBrandImage} 
                alt="SMDC - The leading real estate developer in the Philippines" 
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Ready to find your dream property? Let's start the conversation.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-smdc-blue/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-smdc-blue" />
                    </div>
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-gray-600">+63 XXX XXX XXXX</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-smdc-blue/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-smdc-blue" />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-gray-600">paul.buhay@smdc.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-smdc-blue/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-smdc-blue" />
                    </div>
                    <div>
                      <div className="font-semibold">Office Location</div>
                      <div className="text-gray-600">SMDC Sales Office, Philippines</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-4">Why Work With Me?</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Free property consultation and market analysis</li>
                  <li>• Exclusive access to SMDC pre-selling units</li>
                  <li>• Flexible payment schemes and financing assistance</li>
                  <li>• End-to-end support from inquiry to turnover</li>
                </ul>
              </div>
            </div>

            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>I'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-smdc-blue focus:border-transparent"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-smdc-blue focus:border-transparent"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-smdc-blue focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-smdc-blue focus:border-transparent"
                      placeholder="+63 XXX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea 
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-smdc-blue focus:border-transparent"
                      placeholder="Tell me about your property needs..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-smdc-blue hover:bg-blue-700 py-3">
                    Send Message
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-smdc-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">PB</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Paul Christian Buhay</h3>
                <p className="text-gray-400">SMDC Property Manager</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted partner in finding the perfect SMDC property. 
              Experience the good life with premium residential developments.
            </p>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-500">
                © 2024 Paul Christian Buhay. All rights reserved. | SMDC Property Manager
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

