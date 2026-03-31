import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Badge } from "../components/ui/badge";
import { 
  Calendar, 
  Award, 
  GraduationCap, 
  MapPin,
  Phone,
  Mail,
  Star
} from "lucide-react";

const doctors = [
   {
    name: "Dr. SIBOMANA JEAN PIERRE",
    specialty: "PULMONOLOGY",
    title: "Chief of Pulmonary Medicine",
    image: "https://images.unsplash.com/photo-1734002886107-168181bcd6a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBzbWlsaW5nJTIwbWVkaWNhbCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTkxMjMzNjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    experience: "20+ Years",
    education: "American Thoracic Society: New York, USA",
    certifications: ["Pulmonary and Critical Care FELLOWSHIP (Medicine", "Imperial ARUA Research Seed Fund (London, RW)"],
    specializations: ["BMJ Open Respiratory Research", "Senior consultant internist, Pulmonary and Critical care physician (Medicine)", " Chief Fellow (Pulmonary and Critical Care)"],
    rating: 4.9,
    reviews: 312,
    availability: "Mon, Tue, Thu, Fri"
  },

  {
    name: "Dr. UWAMALIYA MODETSE",
    specialty: "pediatrics",
    title: "Emergency Department Director",
    image: "https://images.unsplash.com/photo-1758691461516-7e716e0ca135?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbCUyMG1lZGljYWx8ZW58MXx8fHwxNzU5MTI2NTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    experience: "10+ Years",
    education: "University of Rwanda School of Medicine",
    certifications: ["Board Certified Pediatrician", "pediatric Emergency Medicine Specialist"],
    specializations: ["Pediatric Emergency Care", "Child Health Advocacy", "Community Pediatrics"],
    rating: 4.9,
    reviews: 145,
    availability: "24/7 Emergency Coverage"
  },
  {
    name: "Dr. SIBOMANA JEAN PIERRE",
    specialty: "PULMONOLOGY",
    title: "Chief of Pulmonary Medicine",
    image: "https://images.unsplash.com/photo-1734002886107-168181bcd6a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBzbWlsaW5nJTIwbWVkaWNhbCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTkxMjMzNjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    experience: "20+ Years",
    education: "American Thoracic Society: New York, USA",
    certifications: ["Pulmonary and Critical Care FELLOWSHIP (Medicine", "Imperial ARUA Research Seed Fund (London, RW)"],
    specializations: ["BMJ Open Respiratory Research", "Senior consultant internist, Pulmonary and Critical care physician (Medicine)", " Chief Fellow (Pulmonary and Critical Care)"],
    rating: 4.9,
    reviews: 312,
    availability: "Mon, Tue, Thu, Fri"
  },
  {
    name: "Dr. James Wilson",
    specialty: "Orthopedic Surgery",
    title: "Orthopedic Surgeon",
    image: "https://images.unsplash.com/photo-1758691461516-7e716e0ca135?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbCUyMG1lZGljYWx8ZW58MXx8fHwxNzU5MTI2NTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    experience: "14+ Years",
    education: "Mayo Clinic College of Medicine",
    certifications: ["Board Certified Orthopedic Surgeon", "Sports Medicine Specialist"],
    specializations: ["Joint Replacement", "Sports Injuries", "Arthroscopic Surgery"],
    rating: 4.7,
    reviews: 156,
    availability: "Mon, Wed, Fri, Sat"
  },
  {
    name: "Dr. ",
    specialty: "Obstetrics & Gynecology",
    title: "Women's Health Specialist",
    image: "https://images.unsplash.com/photo-1734002886107-168181bcd6a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBzbWlsaW5nJTIwbWVkaWNhbCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTkxMjMzNjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    experience: "11+ Years",
    education: "UCLA David Geffen School of Medicine",
    certifications: ["Board Certified OB/GYN", "Maternal-Fetal Medicine Specialist"],
    specializations: ["High-Risk Pregnancy", "Minimally Invasive Surgery", "Fertility Treatment"],
    rating: 4.8,
    reviews: 278,
    availability: "Tue, Wed, Thu, Fri"
  },
  
];

const departments = [
  { name: "Internal Medicine" },
  { name: "  General Medecine" },
  { name: "Pulmonology" },
  { name: "Pediatrics" },
  { name: "Minor Surgery" },
  { name: "Laboratory" },
  { name: "Spirometry" },
  { name: "Electrocardiogram" },
  { name: "Hospitalisation" },
  { name: "Chester Step Test with Certificate" }
];



export function DoctorsPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Expert Medical Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our world-class physicians and specialists are dedicated to providing exceptional care with the latest medical advances and compassionate service.
            </p>
          </div>

          {/* Department Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-2xl font-bold text-emerald-600">{index + 1}</div>
                <div className="text-sm text-gray-600">{dept.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative">
                  <ImageWithFallback
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{doctor.rating}</span>
                    <span className="text-xs text-gray-500">({doctor.reviews})</span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {doctor.name}
                    </h3>
                    <p className="text-emerald-600 font-medium mb-1">{doctor.specialty}</p>
                    <p className="text-sm text-gray-500">{doctor.title}</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Award className="w-4 h-4 mr-2 text-emerald-600" />
                      {doctor.experience}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <GraduationCap className="w-4 h-4 mr-2 text-emerald-600" />
                      {doctor.education}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2 text-emerald-600" />
                      {doctor.availability}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-2">Specializations:</h4>
                    <div className="flex flex-wrap gap-1">
                      {doctor.specializations.map((spec, specIndex) => (
                        <Badge key={specIndex} variant="secondary" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white">
                      Book Appointment
                    </Button>
                    <Button variant="outline" size="sm" className="border-emerald-600 text-emerald-600">
                      <Phone className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Schedule Your Appointment Today
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our patient care coordinators are available to help you schedule an appointment with the right specialist for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
              <Calendar className="w-5 h-5 mr-2" />
              Book Online
            </Button>
            <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-600">
              <Phone className="w-5 h-5 mr-2" />
              Call (+250 795 161 628)
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}