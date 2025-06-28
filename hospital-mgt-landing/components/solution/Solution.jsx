"use client";
import p1 from "../../asset/hospital/p.png";
import p2 from "../../asset/hospital/p2.png";
import ap from "../../asset/hospital/ap.png";  
import ap2 from "../../asset/hospital/ap2.png";
import fd from "../../asset/hospital/fd.png";
import fd2 from "../../asset/hospital/fd2.png";
import ph from "../../asset/hospital/ph.png";
import ph2 from "../../asset/hospital/ph2.png";


import { useState } from "react";
import Image from "next/image";

const solutionTabs = [
  {
    id: "ehr",
    label: "Electronic health record",
    icon: "🔍",
    content: {
      title: "Electronic health record",
      description:
        "Streamline patient care with our advanced Electronic Medical Record (EMR) system. Access comprehensive patient profiles, manage visit workflows, and seamlessly document diagnoses, treatments, and prescriptions - all in one user-friendly EMR solution designed to enhance your clinic's efficiency and patient outcomes.",
      images: [
        p1,
        p2,
        ],
    },
  },
  // {
  //   id: "scheduler",
  //   label: "Scheduler",
  //   icon: "📅",
  //   content: {
  //     title: "Advanced Scheduling System",
  //     description:
  //       "Optimize your clinic's appointment management with our intelligent scheduling system. Reduce no-shows, manage multiple providers, and provide patients with easy online booking capabilities while maintaining full control over your calendar.",
  //     images: [
  //       "/placeholder.svg?height=300&width=400",
  //       "/placeholder.svg?height=300&width=400",
  //     ],
  //   },
  // },
  {
    id: "invoices",
    label: "Invoices",
    icon: "📄",
    content: {
      title: "Comprehensive Billing & Invoicing",
      description:
        "Automate your billing processes with our integrated invoicing system. Generate professional invoices, track payments, manage insurance claims, and maintain detailed financial records with ease.",
      images: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
      ],
    },
  },
  {
    id: "administration",
    label: "Hospital administration",
    icon: "🏥",
    content: {
      title: "Hospital Administration Suite",
      description:
        "Manage your entire hospital operation from a single dashboard. Track bed occupancy, manage staff schedules, monitor department performance, and generate comprehensive reports for better decision-making.",
      images: [
        fd,
        fd2,
      ],
    },
  },
  {
    id: "appointments",
    label: "Appointments",
    icon: "📅",
    content: {
      title: "Smart Appointment Management",
      description:
        "Enhance your appointment scheduling, reduce patient wait times, and improve clinic efficiency with our smart appointment management system. ",
      images: [
        ap,
        ap2,
      ],
    },
  },
  {
    id: "pharmacy",
    label: "Pharmacy",
    icon: "💊",
    content: {
      title: "Integrated Pharmacy Management",
      description:
        "Streamline your pharmacy operations with inventory management, prescription tracking, drug interaction alerts, and automated reorder points. Ensure patient safety while optimizing your medication management workflow.",
      images: [
        ph,
        ph2,
        ],
    },
  },
  {
    id: "lab",
    label: "Lab management",
    icon: "🧪",
    content: {
      title: "Laboratory Information System",
      description:
        "Manage your laboratory operations efficiently with sample tracking, result management, quality control, and seamless integration with EMR systems. Reduce turnaround times and improve accuracy.",
      images: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
      ],
    },
  },
];

const SolutionsSection = () => {
  const [activeTab, setActiveTab] = useState("ehr");

  const activeContent = solutionTabs.find(
    (tab) => tab.id === activeTab
  )?.content;

  return (
    <section className=" bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-32">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            All-in-one HMS and EMR solution
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our HMS is designed to revolutionize healthcare, addressing daily
            challenges with innovative digital workflows that go beyond
            replicating old systems, transforming clinics with modern, efficient
            processes.
          </p>
        </div>

        {/* Desktop Tabs */}
        <div className="hidden lg:block">
          <div className="flex justify-center mb-8">
            <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
              {solutionTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{tab.icon}</span>
                    <span>{tab.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          {activeContent && (
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {activeContent.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {activeContent.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeContent.images.map((image, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${activeContent.title} Screenshot ${index + 1}`}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Mobile Accordion */}
        <div className="lg:hidden space-y-4">
          {solutionTabs.map((tab) => (
            <div
              key={tab.id}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setActiveTab(activeTab === tab.id ? "" : tab.id)}
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
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
                <div className="px-6 py-6 bg-white">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {tab.content.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {tab.content.description}
                  </p>
                  <div className="space-y-4">
                    {tab.content.images.map((image, index) => (
                      <div
                        key={index}
                        className="bg-gray-100 rounded-lg overflow-hidden"
                      >
                        <Image
                          src={image}
                          alt={`${tab.content.title} Screenshot ${index + 1}`}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default SolutionsSection;
