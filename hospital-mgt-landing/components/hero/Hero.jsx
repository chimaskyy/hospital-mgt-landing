"use client";
import Doctor from "@/asset/doctor.png"; // Adjust the path as necessary
import Link from "next/link";

const HeroSection = ({ onShowSignUp }) => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden ">
      {/* Background Image positioned to the right */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 opacity-10 z-10"></div>{" "}
        {/* Overlay */}
        <img
          src={Doctor.src} // Try adding .src if using Next.js Image optimization
          alt="Healthcare Professional"
          className="absolute right-0 h-full w-auto object-cover opacity-30" // Changed positioning
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                HMS
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold mt-2">
                Hospital Management System
              </h2>
            </div>

            <p className="text-lg lg:text-xl text-blue-100 leading-relaxed">
              Revolutionize your healthcare facility with our all-in-one
              hospital management solution – easy setup, instant access, and
              comprehensive care management.
            </p>

            <div className="border-t border-blue-400 pt-6">
              <p className="text-lg font-medium mb-4">
                Sign up for a 7-day free trial and try it for yourself!
              </p>

              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  <span className="text-blue-100">
                    Start using HMS now – no credit card or upfront payment
                    required.
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  <span className="text-blue-100">
                    Immediate access to the application instance and basic
                    training.
                  </span>
                </div>
                {/* <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  <span className="text-blue-100">
                    Proudly made in Europe. Compliant with your local
                    regulations.
                  </span>
                </div> */}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">
                Make your clinic digital in 1 day for free!
              </h3>

              <Link
                href="https://hospital-mgt-seven.vercel.app/register"
                target="_blank"
                className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
              >
                START FREE TRIAL
              </Link>
            </div>
          </div>

          {/* Made in EU Badge */}
          {/* <div className="lg:flex lg:justify-end">
            <div className="inline-flex items-center bg-blue-700 bg-opacity-50 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <div className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center">
                    <div className="flex space-x-1">
                      {[...Array(12)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 h-1 bg-blue-600 rounded-full"
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-blue-200">MADE IN</div>
                  <div className="text-2xl font-bold">EU</div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
