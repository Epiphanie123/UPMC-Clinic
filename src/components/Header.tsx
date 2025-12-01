import { Button } from "./ui/button";
import { Menu, Phone } from "lucide-react";

interface HeaderProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export function Header({ currentPage = "home", onNavigate }: HeaderProps) {
  const handleNavClick = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  const navItems = [
    { name: "Home", key: "home" },
    { name: "Services", key: "services" },
    { name: "Departments", key: "departments" },
    { name: "About", key: "about" },
    { name: "Doctors", key: "doctors" },
    { name: "Contact", key: "contact" }
  ];

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <button 
                onClick={() => handleNavClick("home")}
                className="flex items-center hover:opacity-80 transition-opacity"
              >
                <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <span className="ml-2 text-xl font-semibold text-gray-900">
                  umurinzi Petros Medical Center
                </span>
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.key)}
                  className={`transition-colors ${
                    currentPage === item.key
                      ? "text-emerald-600 font-medium"
                      : "text-gray-700 hover:text-emerald-600"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 text-emerald-600">
              <Phone className="w-4 h-4" />
              <span className="font-medium">+250 795 161 628 </span>
             </div>
            
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}