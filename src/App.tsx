import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import { DoctorsPage } from "./pages/DoctorsPage";
import AboutPage from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { DepartmentsSection } from "./components/DepartmentsSection";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "services":
        return <ServicesPage />;
      case "departments":
        return (
          <div className="pt-16">
            <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-50 to-blue-50">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Our Medical Departments
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive medical care across multiple specialties with world-class facilities and expert physicians.
                </p>
              </div>
            </section>
            <DepartmentsSection />
          </div>
        );
      case "about":
        return <AboutPage />;
      case "doctors":
        return <DoctorsPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={handleNavigation} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigation} />
    </div>
  );
}
