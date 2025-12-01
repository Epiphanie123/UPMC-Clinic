import { Stethoscope, Activity, Baby, Microscope, HeartPulse, Hospital, Wind, ScanLine, Syringe, ClipboardCheck } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "General Medicine",
    description: "Primary care consultations for adults with a focus on accurate diagnosis and treatment."
  },
  {
    icon: Activity,
    title: "Internal Medicine",
    description: "Comprehensive care for chronic diseases and complex adult medical conditions."
  },
  {
    icon: Wind,
    title: "Pulmonology",
    description: "Specialized care for respiratory illnesses such as asthma, COPD, and lung infections."
  },
  {
    icon: Baby,
    title: "Pediatrics",
    description: "Full medical care for infants, children, and adolescents."
  },
  {
    icon: Syringe,
    title: "Minor Surgery",
    description: "Safe and efficient minor surgical procedures performed by trained professionals."
  },
  {
    icon: Microscope,
    title: "Laboratory",
    description: "Accurate laboratory testing with fast turnaround time for diagnosis support."
  },
  {
    icon: ScanLine,
    title: "Spirometry",
    description: "Lung function testing to evaluate breathing capacity and detect respiratory diseases."
  },
  {
    icon: HeartPulse,
    title: "Electrocardiogram (ECG)",
    description: "Cardiac testing to monitor heart rhythm and identify abnormalities."
  },
  {
    icon: Hospital,
    title: "Hospitalisation",
    description: "Comfortable inpatient care with close medical monitoring and support."
  },
  {
    icon: ClipboardCheck,
    title: "Chester Step Test",
    description: "Fitness assessment including certification for work or sports."
  }
];

export function ServicesSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How Can We Help You Today?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our full range of medical services designed to support your health with compassion and professionalism.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <div
                key={index}
                className="text-center group hover:bg-emerald-50 p-6 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  <IconComponent className="w-8 h-8" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      
    </section>
  );
}
