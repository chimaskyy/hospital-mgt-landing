"use client"

import Link from "next/link"
import { useState } from "react"

export default function Header({ onShowSignUp, onShowLogin }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center mr-3">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <h1 className="text-xl font-bold text-gray-900">
              <span className="text-blue-600">HMS</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              {/* <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium">
                Product
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button> */}
            </div>
            <a
              href="#pricing"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Pricing
            </a>
            <a
              href="#help"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Help
            </a>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium">
                About
                {/* <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg> */}
              </button>
            </div>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <div className="flex items-center space-x-2 text-sm text-gray-600">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>English</span>
              <svg
                className="w-4 h-4"
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
            </div> */}
            <Link
              href="https://hospital-mgt-seven.vercel.app/register"
              target="_blank"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Log in
            </Link>
            {/* <button
              onClick={onShowLogin}
              className="px-4 py-2 text-blue-600 hover:text-blue-800 font-medium border border-blue-600 rounded-md hover:bg-blue-50"
            >
              LOG IN
            </button> */}
            {/* <button
              onClick={onShowSignUp}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium"
            >
              CONTACT SALES
            </button> */}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="space-y-4">
              <a
                href="#product"
                className="block text-gray-700 hover:text-blue-600 font-medium"
              >
                Product
              </a>
              <a
                href="#pricing"
                className="block text-gray-700 hover:text-blue-600 font-medium"
              >
                Pricing
              </a>
              <a
                href="#help"
                className="block text-gray-700 hover:text-blue-600 font-medium"
              >
                Help
              </a>
              <a
                href="#about"
                className="block text-gray-700 hover:text-blue-600 font-medium"
              >
                About
              </a>
              <div className="pt-4 space-y-2">
                <button
                  onClick={onShowLogin}
                  className="block w-full text-left px-4 py-2 text-blue-600 hover:text-blue-800 font-medium border border-blue-600 rounded-md hover:bg-blue-50"
                >
                  LOG IN
                </button>
                <button
                  onClick={onShowSignUp}
                  className="block w-full text-left px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium"
                >
                  CONTACT SALES
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
