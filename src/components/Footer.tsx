import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Clock } from "lucide-react";

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNavClick = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="ml-2 text-xl font-semibold">Umurinzi Petros Medical center</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Providing exceptional healthcare with compassion and expertise for over 25 years. 
              Your health and wellbeing are our top priorities.
            </p>
            <div className="flex space-x-4">
              <a href="https://web.facebook.com/profile.php?id=61576362847751&_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/UmurinziPetros" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/umurinzipetrosmedicalcenter" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/umurinzi-petros-medical-center" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><button onClick={() => handleNavClick("about")} className="text-gray-300 hover:text-emerald-400 transition-colors">About Us</button></li>
              <li><button onClick={() => handleNavClick("doctors")} className="text-gray-300 hover:text-emerald-400 transition-colors">Our Doctors</button></li>
              <li><button onClick={() => handleNavClick("services")} className="text-gray-300 hover:text-emerald-400 transition-colors">Services</button></li>
              <li><button onClick={() => handleNavClick("departments")} className="text-gray-300 hover:text-emerald-400 transition-colors">Departments</button></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">News & Events</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">internal medecine</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Surgery </a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">pulmology</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Neurology</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Orthopedics</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Pediatrics</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                
                
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <div className="text-gray-300">+250 795 161 628</div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <div className="text-gray-300">umurinzipetros@gmail.com</div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  Emergency: 24/7<br />
                  General: Mon-Fri 8AM-6PM
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              Â©umurinzi petros medical center. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                HIPAA Notice
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}