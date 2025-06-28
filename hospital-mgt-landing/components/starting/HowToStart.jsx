import Link from "next/link";

const steps = [
  {
    number: 1,
    icon: "👤",
    title: "Sign up for free account",
    description:
      "Let's discuss your project idea to get an understanding of the final goals.",
  },
  {
    number: 2,
    icon: "🔍",
    title: "Define the features",
    description:
      "After creating account you can add your clinic's detail like list of departments, services, prices, users, contact info, etc",
  },
  {
    number: 3,
    icon: "👥",
    title: "Onboard your users",
    description:
      "Your users (administrators, doctors, nurses, lab workers) will get emails with invitations to sign up, complete their accounts, add their schedules, etc.",
  },
  {
    number: 4,
    icon: "🎯",
    title: "Enjoy 7 days free trial",
    description:
      "HMS doesn't require installation or upfront costs. You can use the system absolutely free to test how well it suits your clinic.",
  },
  {
    number: 5,
    icon: "💳",
    title: "Make your first payment",
    description:
      "HMS distributed on a software as a service model. Your credit card will be charged every months as long as you use HMS. You can cancel at any time.",
  },
  {
    number: 6,
    icon: "📧",
    title: "Get regular updates and support",
    description:
      "HMS provides frequent updates, new features, and fixes. You can always contact our support team directly within the system for assistance, ensuring your needs are our top priority.",
  },
];

const HowToStartSection = () => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            HMS - how to start
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Starting with HMS is effortless - no complex installations or
            lengthy setup processes. Simply register, complete a quick 10-minute
            onboarding, and your clinic is ready to operate. Our user-friendly
            interface ensures your team can quickly adapt, allowing you to
            streamline operations and enhance patient care from day one.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            {/* Progress Line */}
            {/* <div className="absolute top-16 left-0 right-0 h-0.5 bg-blue-200">
              <div className="h-full bg-blue-600 w-5/6"></div>
            </div> */}

            {/* Steps Grid */}
            <div className="grid grid-cols-3 gap-8 mb-12">
              {steps.slice(0, 3).map((step, index) => (
                <div key={step.number} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                      <span className="text-xl font-bold">{step.number}</span>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                      <span className="text-xl">{step.icon}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-8">
              {steps.slice(3, 6).map((step, index) => (
                <div key={step.number} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                      <span className="text-xl font-bold">{step.number}</span>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                      <span className="text-xl">{step.icon}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center">
                    <span className="font-bold">{step.number}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-16 bg-blue-200 mx-auto mt-4"></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                      <span className="text-sm">{step.icon}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <div className="bg-white rounded-2xl p-8 lg:p-12 ">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to get started?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of healthcare providers who have already
              transformed their operations with HMS.
            </p>
            <Link
              href="https://hospital-mgt-seven.vercel.app/register"
              target="_blank"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
            >
              START YOUR FREE TRIAL
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowToStartSection;