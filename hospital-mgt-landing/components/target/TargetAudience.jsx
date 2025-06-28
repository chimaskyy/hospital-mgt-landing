const TargetAudienceSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            HMS for health facilities of all sizes and specialties
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Use the hospital management system built to cover the varying needs
            of numerous specialties in both large clinic chains and individual
            practices run by solo practitioners.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-lg">
          {/* Hospitals and Clinics */}
          <div className="bg-white p-8 lg:p-12">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Hospitals and clinics
              </h3>
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Choose HMS to support the diverse and growing healthcare needs in
              large and small hospitals, public and private clinics, dentistry,
              beauty medical clinics, etc.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Improve clinic's workflow",
                "Keep records organised and compliant",
                "Streamline patient management",
                "Maintain appointment scheduling for large-scale clinics",
                "Foster a good clinic-patient relationship",
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            {/* <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200">
              CLINIC PLAN
            </button> */}
          </div>

          {/* Individual Practitioners */}
          <div className="bg-blue-600 p-8 lg:p-12 text-white">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Individual practitioners
              </h3>
            </div>

            <p className="text-blue-100 mb-8 leading-relaxed">
              Widen your solo practice experience with advanced EMR, scheduling,
              and management tools to provide exceptional personalized care for
              your patients.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Admit more patients in less time",
                "Streamline patient management",
                "Access patient records from anywhere",
                "Monitor and control your individual schedule",
                "Achieve more without hiring additional personnel",
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-white rounded flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-blue-100">{item}</span>
                </div>
              ))}
            </div>

            {/* <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200">
              INDIVIDUAL PLAN
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TargetAudienceSection;
