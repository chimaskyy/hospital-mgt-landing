"use client";

import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "Which countries is HMS available in?",
    answer:
      "HMS is available globally and can be accessed from any country with internet connectivity. Our cloud-based solution ensures reliable access worldwide, and we comply with international healthcare data protection standards including GDPR, HIPAA, and other regional regulations.",
  },
  {
    id: 2,
    question: "What do you do with my data?",
    answer:
      "We take data security and privacy very seriously. Your data is encrypted both in transit and at rest, stored in secure data centers with multiple backups. We never share, sell, or use your patient data for any purpose other than providing our services. We are fully compliant with HIPAA, GDPR, and other applicable data protection regulations.",
  },
  {
    id: 3,
    question: "What are our plans for future product development?",
    answer:
      "We continuously invest in product development based on customer feedback and industry trends. Our roadmap includes AI-powered diagnostic assistance, enhanced telemedicine capabilities, advanced analytics and reporting, mobile applications for patients and providers, and integration with emerging healthcare technologies.",
  },
  {
    id: 4,
    question: "Why should you choose HMS?",
    answer:
      "HMS offers a comprehensive, user-friendly solution that grows with your practice. Key advantages include: no upfront costs or complex installations, 14-day free trial, 24/7 customer support, regular updates and new features, HIPAA and GDPR compliance, seamless integration capabilities, and a proven track record with thousands of satisfied healthcare providers worldwide.",
  },
  {
    id: 5,
    question: "How much does HMS cost?",
    answer:
      "HMS offers flexible pricing plans to suit different practice sizes and needs. We provide transparent, subscription-based pricing with no hidden fees. Contact our sales team for detailed pricing information tailored to your specific requirements, including volume discounts for larger organizations.",
  },
  {
    id: 6,
    question: "Do you offer training and onboarding support?",
    answer:
      "Yes, we provide comprehensive training and onboarding support including guided setup assistance, video tutorials and documentation, live training sessions, dedicated customer success manager, and ongoing support through multiple channels including phone, email, and live chat.",
  },
];

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            FAQs
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our hospitals management system addresses all the needs of modern
            hospitals and clinics, but here you'll find answers to the most
            frequently asked questions. If you have any additional inquiries,
            don't hesitate to reach out - we're always ready to help.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:bg-gray-50"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                      openFAQ === faq.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {openFAQ === faq.id && (
                <div className="px-6 py-5 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors duration-200">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}
export default FAQSection;
