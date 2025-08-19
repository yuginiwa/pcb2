import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Phone, Mail, MapPin, Star, Award, Users, Building, CheckCircle, ArrowRight, MessageCircle, Clock, Shield, FileText, ExternalLink, Menu, X } from 'lucide-react'
import './App.css'

// Import the provided images
import paulImage from './assets/520236017_122095060790959485_2356275996645847879_n.jpg'
import smdcBrandImage from './assets/519696396_122094990338959485_7804547488950299679_n.jpg'
import goldResidencesImage from './assets/525245420_1702422090444753_5575514502865139848_n.jpg'

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeForm, setActiveForm] = useState('inquiry')

  return (
    <div className="min-h-screen bg-white">
      {/* Trust Bar */}
      <div className="bg-gray-900 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>Licensed Real Estate Professional</span>
              </div>
              <span className="text-gray-400">|</span>
              <span>PRC License: 123456</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span>Office Hours: Mon-Fri 9AM-6PM</span>
              <span className="text-gray-400">|</span>
              <span>Emergency: +63 917 123 4567</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-smdc-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">PB</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Paul Christian Buhay</h1>
                <p className="text-sm text-gray-600">Licensed Real Estate Broker</p>
                <p className="text-xs text-gray-500">SMDC Accredited Partner</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-smdc-blue transition-colors font-medium">About</a>
              <a href="#services" className="text-gray-700 hover:text-smdc-blue transition-colors font-medium">Services</a>
              <a href="#properties" className="text-gray-700 hover:text-smdc-blue transition-colors font-medium">Properties</a>
              <a href="#testimonials" className="text-gray-700 hover:text-smdc-blue transition-colors font-medium">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-smdc-blue transition-colors font-medium">Contact</a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" className="border-smdc-blue text-smdc-blue hover:bg-smdc-blue hover:text-white">
                <Phone className="w-4 h-4 mr-2" />
                +63 917 123 4567
              </Button>
              <Button className="bg-smdc-blue hover:bg-blue-700">
                <MessageCircle className="w-4 h-4 mr-2" />
                Free Consultation
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <a href="#about" className="text-gray-700 hover:text-smdc-blue transition-colors font-medium">About</a>
                <a href="#services" className="text-gray-700 hover:text-smdc-blue transition-colors font-medium">Services</a>
                <a href="#properties" className="text-gray-700 hover:text-smdc-blue transition-colors font-medium">Properties</a>
                <a href="#testimonials" className="text-gray-700 hover:text-smdc-blue transition-colors font-medium">Testimonials</a>
                <a href="#contact" className="text-gray-700 hover:text-smdc-blue transition-colors font-medium">Contact</a>
                <div className="pt-4 space-y-2">
                  <Button variant="outline" className="w-full border-smdc-blue text-smdc-blue hover:bg-smdc-blue hover:text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    +63 917 123 4567
                  </Button>
                  <Button className="w-full bg-smdc-blue hover:bg-blue-700">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Free Consultation
                  </Button>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Badge className="bg-green-100 text-green-800 border-green-200">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Licensed & Accredited
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                    <Award className="w-3 h-3 mr-1" />
                    Top Performer 2024
                  </Badge>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Find Your Dream Home with
                  <span className="text-smdc-blue block">Trusted Expertise</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  As a licensed real estate broker with 5+ years of experience, I specialize in SMDC properties 
                  and help families find their perfect home through personalized service and market expertise.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-smdc-blue hover:bg-blue-700 text-lg px-8 py-4">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Schedule Free Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-smdc-blue text-smdc-blue hover:bg-smdc-blue hover:text-white text-lg px-8 py-4">
                  View Available Properties
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-smdc-blue">500+</div>
                  <div className="text-sm text-gray-600">Properties Sold</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-smdc-blue">98%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-smdc-blue">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src={paulImage} 
                  alt="Paul Christian Buhay - Licensed Real Estate Broker" 
                  className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white fill-current" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Licensed Broker</div>
                      <div className="text-xs text-gray-600">PRC #123456</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Licensed & Insured</h3>
              <p className="text-sm text-gray-600">PRC Licensed Real Estate Broker</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">SMDC Accredited</h3>
              <p className="text-sm text-gray-600">Official Partner Developer</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Award Winner</h3>
              <p className="text-sm text-gray-600">Top Performer 2024</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">500+ Clients</h3>
              <p className="text-sm text-gray-600">Satisfied Families</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Paul Christian Buhay?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              I'm a dedicated real estate professional committed to helping families find their perfect home 
              through honest, transparent service and deep market knowledge.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border hover:border-smdc-blue transition-colors shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-smdc-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-smdc-blue" />
                </div>
                <CardTitle>SMDC Market Expertise</CardTitle>
                <CardDescription>
                  Deep understanding of SMDC properties, pricing trends, and market dynamics across all residential segments.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border hover:border-smdc-blue transition-colors shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-smdc-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-smdc-blue" />
                </div>
                <CardTitle>Personalized Service</CardTitle>
                <CardDescription>
                  One-on-one consultation to understand your specific needs, budget, and lifestyle requirements.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border hover:border-smdc-blue transition-colors shadow-sm">
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
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Real Estate Services</h2>
            <p className="text-lg text-gray-600">Professional services tailored to your property needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Property Sales", 
                desc: "Expert guidance for buying and selling SMDC properties",
                icon: Building
              },
              { 
                title: "Investment Consulting", 
                desc: "Strategic advice for real estate investment decisions",
                icon: Award
              },
              { 
                title: "Property Management", 
                desc: "Complete management services for your properties",
                icon: Users
              },
              { 
                title: "Market Analysis", 
                desc: "Detailed market insights and property valuations",
                icon: CheckCircle
              }
            ].map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border">
                <CardHeader>
                  <div className="w-12 h-12 bg-smdc-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-6 h-6 text-smdc-blue" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section id="properties" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured SMDC Properties</h2>
            <p className="text-lg text-gray-600">Discover premium residential developments across the Philippines</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={goldResidencesImage} 
                alt="SMDC Gold Residences - Premium residential development" 
                className="w-full rounded-2xl shadow-lg"
                loading="lazy"
              />
            </div>
            <div className="space-y-6">
              <div>
                <Badge className="bg-gold/10 text-gold border-gold/20 mb-4">
                  Featured Property
                </Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SMDC Gold Residences</h3>
                <p className="text-gray-600 mb-6">
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
                    <CheckCircle className="w-5 h-5 text-smdc-blue flex-shrink-0" />
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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">Real testimonials from satisfied families</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Santos",
                role: "Homeowner",
                location: "Quezon City",
                content: "Paul helped us find our dream home in SMDC Gold Residences. His expertise and patience made the entire process smooth and stress-free.",
                rating: 5
              },
              {
                name: "Roberto Cruz",
                role: "Investor",
                location: "Makati",
                content: "As a first-time investor, I appreciated Paul's guidance. He explained everything clearly and helped me make informed decisions.",
                rating: 5
              },
              {
                name: "Ana Martinez",
                role: "Property Buyer",
                location: "Taguig",
                content: "Paul's knowledge of the SMDC market is impressive. He found us a property that perfectly fits our budget and lifestyle needs.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border shadow-sm">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardDescription className="text-gray-700 italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role} • {testimonial.location}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SMDC Partnership Section */}
      <section className="py-20 bg-gradient-to-r from-smdc-blue to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Official SMDC Partner</h2>
              <p className="text-lg opacity-90">
                SM Development Corporation (SMDC) is the leading real estate developer in the Philippines, 
                known for creating life-centered communities that empower individuals and families.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-2xl font-bold">100,000+</div>
                  <div className="opacity-80">Homes Delivered</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">20+</div>
                  <div className="opacity-80">Years of Excellence</div>
                </div>
              </div>
              <div className="pt-4">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-smdc-blue">
                  Learn More About SMDC
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
            <div>
              <img 
                src={smdcBrandImage} 
                alt="SMDC - The leading real estate developer in the Philippines" 
                className="w-full rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600">Ready to find your dream property? Let's start the conversation.</p>
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
                      <div className="text-gray-600">+63 917 123 4567</div>
                      <div className="text-sm text-gray-500">Mon-Fri 9AM-6PM</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-smdc-blue/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-smdc-blue" />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-gray-600">paul.buhay@smdc.com</div>
                      <div className="text-sm text-gray-500">Response within 24 hours</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-smdc-blue/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-smdc-blue" />
                    </div>
                    <div>
                      <div className="font-semibold">Office Location</div>
                      <div className="text-gray-600">SMDC Sales Office, Philippines</div>
                      <div className="text-sm text-gray-500">By appointment only</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-smdc-blue/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-smdc-blue" />
                    </div>
                    <div>
                      <div className="font-semibold">Business Hours</div>
                      <div className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</div>
                      <div className="text-gray-600">Saturday: 9:00 AM - 3:00 PM</div>
                      <div className="text-sm text-gray-500">Sunday: Closed</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h4 className="font-semibold text-gray-900 mb-4">Why Work With Me?</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-smdc-blue mt-0.5 flex-shrink-0" />
                    <span>Free property consultation and market analysis</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-smdc-blue mt-0.5 flex-shrink-0" />
                    <span>Exclusive access to SMDC pre-selling units</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-smdc-blue mt-0.5 flex-shrink-0" />
                    <span>Flexible payment schemes and financing assistance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-smdc-blue mt-0.5 flex-shrink-0" />
                    <span>End-to-end support from inquiry to turnover</span>
                  </li>
                </ul>
              </div>
            </div>

            <Card className="p-8 border shadow-sm">
              <CardHeader className="px-0 pt-0">
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>I'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="flex space-x-2 mb-6">
                  <Button 
                    variant={activeForm === 'inquiry' ? 'default' : 'outline'}
                    onClick={() => setActiveForm('inquiry')}
                    className="flex-1"
                  >
                    Property Inquiry
                  </Button>
                  <Button 
                    variant={activeForm === 'consultation' ? 'default' : 'outline'}
                    onClick={() => setActiveForm('consultation')}
                    className="flex-1"
                  >
                    Free Consultation
                  </Button>
                </div>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input 
                        id="firstName"
                        type="text" 
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-smdc-blue focus:border-transparent transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input 
                        id="lastName"
                        type="text" 
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-smdc-blue focus:border-transparent transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input 
                      id="email"
                      type="email" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-smdc-blue focus:border-transparent transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input 
                      id="phone"
                      type="tel" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-smdc-blue focus:border-transparent transition-colors"
                      placeholder="+63 917 123 4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea 
                      id="message"
                      rows="4"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-smdc-blue focus:border-transparent transition-colors"
                      placeholder={activeForm === 'inquiry' ? "Tell me about your property needs..." : "What would you like to discuss in our consultation?"}
                    ></textarea>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>By submitting this form, you agree to our <a href="#privacy" className="text-smdc-blue hover:underline">Privacy Policy</a> and <a href="#terms" className="text-smdc-blue hover:underline">Terms of Service</a>.</p>
                  </div>
                  <Button type="submit" className="w-full bg-smdc-blue hover:bg-blue-700 py-3">
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
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-smdc-blue rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">PB</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Paul Christian Buhay</h3>
                  <p className="text-gray-400">Licensed Real Estate Broker</p>
                  <p className="text-sm text-gray-500">SMDC Accredited Partner</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted partner in finding the perfect SMDC property. 
                Experience the good life with premium residential developments.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <MapPin className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#properties" className="text-gray-400 hover:text-white transition-colors">Properties</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#disclaimer" className="text-gray-400 hover:text-white transition-colors">Disclaimer</a></li>
                <li><a href="#sitemap" className="text-gray-400 hover:text-white transition-colors">Sitemap</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">
                © 2024 Paul Christian Buhay. All rights reserved. | Licensed Real Estate Broker
              </p>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <span className="text-sm text-gray-500">PRC License: 123456</span>
                <span className="text-sm text-gray-500">|</span>
                <span className="text-sm text-gray-500">SMDC Accredited Partner</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App