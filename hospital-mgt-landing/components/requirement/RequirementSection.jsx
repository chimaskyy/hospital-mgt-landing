"use client";

import { useState } from "react";

const requirementTabs = [
  {
    id: "cloud",
    label: "Cloud solution",
    icon: "☁️",
    content: {
      title: "Revolutionize clinic operations with cloud-based HMS",
      description:
        "Elevate your clinic's operations with our cloud-based Hospital Management System (HMS) solution. Access and manage patient records, schedules, lab results, and billing from anywhere, at any time. Our secure cloud infrastructure ensures real-time data updates, enhances collaboration, and eliminates the need for costly on-premise hardware. With automatic backups and updates, your clinic remains efficient and up-to-date without the hassle of manual maintenance. Simplify your day-to-day operations, improve patient care, and enjoy the flexibility and reliability of a cloud-based HMS designed for modern healthcare needs.",
    },
  },
  {
    id: "clinic",
    label: "Clinic management",
    icon: "🏥",
    content: {
      title: "Comprehensive Clinic Management Solutions",
      description:
        "Transform your clinic operations with our integrated management platform. Streamline patient flow, optimize resource allocation, and enhance staff productivity with tools designed specifically for modern healthcare facilities. From appointment scheduling to inventory management, our solution provides everything you need to run an efficient clinic.",
    },
  },
  {
    id: "emr",
    label: "EMR",
    icon: "📋",
    content: {
      title: "Advanced Electronic Medical Records",
      description:
        "Experience the power of our comprehensive EMR system that puts patient information at your fingertips. Create detailed patient profiles, track medical history, manage prescriptions, and generate reports with ease. Our EMR solution is designed to improve clinical workflows while ensuring compliance with healthcare regulations.",
    },
  },
  {
    id: "patient",
    label: "Patient experience",
    icon: "👥",
    content: {
      title: "Enhanced Patient Experience Platform",
      description:
        "Deliver exceptional patient care with our patient-centric features. Enable online appointment booking, provide secure patient portals, and facilitate seamless communication between patients and healthcare providers. Improve satisfaction scores and build lasting patient relationships.",
    },
  },
  {
    id: "security",
    label: "Data security",
    icon: "🔒",
    content: {
      title: "Enterprise-Grade Data Security",
      description:
        "Protect sensitive patient information with our robust security framework. Our platform implements end-to-end encryption, multi-factor authentication, role-based access controls.",
    },
  },
];

const RequirementsSection = () => {
  const [activeTab, setActiveTab] = useState("cloud");

  const activeContent = requirementTabs.find(
    (tab) => tab.id === activeTab
  )?.content;

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Healthcare requirements at the core of our advanced system
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our HMS delivers key advantages: efficient operations, enhanced
            patient care, secure cloud access, and seamless integration -
            designed to modernize and elevate the healthcare experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Sidebar Tabs */}
          <div className="hidden lg:block">
            <div className="space-y-2">
              {requirementTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-6 py-4 rounded-lg transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">{tab.icon}</span>
                    <span className="font-medium">{tab.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Content */}
          <div className="hidden lg:block lg:col-span-3">
            {activeContent && (
              <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">
                      {
                        requirementTabs.find((tab) => tab.id === activeTab)
                          ?.icon
                      }
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {activeContent.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {activeContent.description}
                </p>
              </div>
            )}
          </div>

          {/* Mobile Accordion */}
          <div className="lg:hidden col-span-full space-y-4">
            {requirementTabs.map((tab) => (
              <div
                key={tab.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() =>
                    setActiveTab(activeTab === tab.id ? "" : tab.id)
                  }
                  className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">{tab.icon}</span>
                      <span className="font-medium text-gray-900">
                        {tab.label}
                      </span>
                    </div>
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                        activeTab === tab.id ? "rotate-180" : ""
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

                {activeTab === tab.id && (
                  <div className="px-6 py-6 border-t border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {tab.content.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {tab.content.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RequirementsSection;