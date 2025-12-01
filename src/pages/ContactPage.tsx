import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar,
  Ambulance,
  Car,
  Bus,
  Navigation
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: [
      "UPMC",
      "Muhanga  District",
      "Muhanga"
    ]
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    details: [
      "Main: +250 795 161 628",
      "Emergency: +250 795 161 628",
      "Appointments: +250 795 161 628"
    ]
  },
  {
    icon: Mail,
    title: "Email",
    details: [
      "umurinzipetros@gmail.com",
      "umurinzipetros@gmail.com",
      
    ]
  },
  {
    icon: Clock,
    title: "Hours",
    details: [
      "Emergency: 24/7",
      "General Services: monday-sunday ",
      
    ]
  }
];

const departments = [
  "internal Medicine",
  "Internal Medecine",
  "Pulmonology",
   "Pediatrics",
  " Minor surgery",
  "Laboratory",
  "Spirometry",
  "Electrocardiogram",
  "Hospitalisation",
  "Chester step test with certificate",
];

const transportationOptions = [
  {
    icon: Car,
    title: "Driving",
    description: "Free parking available in our main parking garage. Valet parking available for patients."
  },
  {
    icon: Bus,
    title: "Public Transit",
    description: "Metro bus lines 12, 34, and 56 stop directly in front of the hospital."
  },
  
];

export function ContactPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Contact Umurinzi Petros Medical Center
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help you with all your healthcare needs. Reach out to us for appointments, information, or emergency care.
          </p>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mb-6">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {info.title}
                    </h3>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Emergency Banner */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-16">
            <div className="flex items-center justify-center space-x-4 text-center">
              <Ambulance className="w-8 h-8 text-red-600" />
              <div>
                <h3 className="text-xl font-semibold text-red-800 mb-2">
                  Emergency Services Available 24/7
                </h3>
                <p className="text-red-700">
                  For life-threatening emergencies,  call +250 795 161 628 or come directly to our Emergency Department.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Get in Touch</CardTitle>
                  <p className="text-gray-600">
                    Send us a message and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a department" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((dept, index) => (
                          <SelectItem key={index} value={dept.toLowerCase().replace(/\s+/g, '-')}>
                            {dept}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Brief description of your inquiry" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please provide details about your inquiry or how we can help you..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Hospital Image and Quick Actions */}
            <div className="space-y-8">
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1519494140681-8b17d830a3e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGNvbnRhY3QlMjByZWNlcHRpb24lMjBkZXNrfGVufDF8fHx8MTc1OTE2OTQ2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt=" reception and contact area"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Appointment
                  </Button>
                  <Button variant="outline" className="w-full border-emerald-600 text-emerald-600">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Main Number
                  </Button>
                  <Button variant="outline" className="w-full border-blue-600 text-blue-600">
                    <Navigation className="w-5 h-5 mr-2" />
                    Get Directions
                  </Button>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle>Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin className="w-12 h-12 mx-auto mb-2" />
                      <p>Interactive map would be embedded here</p>
                      <p>
                        <a
                          href="https://www.google.com/maps/place/2%C2%B004'51.7%22S+29%C2%B046'05.1%22E/@-2.0810278,29.7680833,870m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d-2.0810278!4d29.7680833?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          View on Google Maps
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Getting to Luen Hospital
            </h2>
            <p className="text-lg text-gray-600">
              Multiple transportation options available for your convenience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {transportationOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {option.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {option.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  What are your visiting hours?
                </h3>
                <p className="text-gray-600">
                  General visiting hours are from 8:00 AM to 8:00 PM daily. 
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Do you accept insurance?
                </h3>
                <p className="text-gray-600">
                  We accept most major insurance plans. Please contact our financial services department at (555) 123-4567 to verify your coverage and benefits before your visit.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  How do I request medical records?
                </h3>
                <p className="text-gray-600">
                  Medical records can be requested through our Health Information Management department. You can call +250 795 161 628 
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}