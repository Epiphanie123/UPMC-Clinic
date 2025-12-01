export default function AboutPage() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <h3 className="text-xl font-semibold text-emerald-700 mb-3">
              Spirometry (Lung Function Test)
            </h3>
            <p className="text-gray-600">
              Comprehensive lung function testing to assess airflow, detect
              respiratory diseases, and monitor treatment progress.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <h3 className="text-xl font-semibold text-emerald-700 mb-3">
              Fitness-to-Work Certification
            </h3>
            <p className="text-gray-600">
              Medical fitness assessment for work readiness, safety clearance,
              and compliance with health standards.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <h3 className="text-xl font-semibold text-emerald-700 mb-3">
              Cardio-Pulmonary Assessment
            </h3>
            <p className="text-gray-600">
              Full evaluation of heart and lung health for early diagnosis
              and preventive care.
            </p>
          </div>

          {/* Service 4 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <h3 className="text-xl font-semibold text-emerald-700 mb-3">
              Laboratory Testing
            </h3>
            <p className="text-gray-600">
              Accurate and reliable lab investigations to support
              diagnosis and treatment decisions.
            </p>
          </div>

          {/* Service 5 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <h3 className="text-xl font-semibold text-emerald-700 mb-3">
              Occupational Health Screening
            </h3>
            <p className="text-gray-600">
              Workplace-focused medical checks for employee wellness
              and safety compliance.
            </p>
          </div>

          {/* Service 6 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <h3 className="text-xl font-semibold text-emerald-700 mb-3">
              Immunization & Preventive Care
            </h3>
            <p className="text-gray-600">
              Vaccinations and preventive services to protect individuals
              and strengthen community health.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
