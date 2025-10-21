import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Main Footer Content */}
      <div className="bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Left Section - About */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div className="text-green-700">
                <div className="font-bold text-base leading-tight">
                  DEMO
                </div>
                <div className="text-sm font-semibold">
                  INTERNATIONAL SCHOOL
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              DEMO International School, established in 0000, envisions
              the cultivation of young minds into truly global citizens within a
              nurturing and compassionate atmosphere.
            </p>

            {/* View More Button */}
            <Link
              to="/about"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg transition-colors self-start shadow-md inline-block text-center"
            >
              VIEW MORE
            </Link>

            {/* Social Media */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4">Follow Us On</h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-12 h-12 border-2 border-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 hover:border-green-600 hover:text-white transition"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 border-2 border-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 hover:border-green-600 hover:text-white transition"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 border-2 border-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 hover:border-green-600 hover:text-white transition"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 border-2 border-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 hover:border-green-600 hover:text-white transition"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Middle Section - Quick Links */}
          <div className="bg-blue-700 text-white p-8 rounded-lg lg:col-span-1">
            <h3 className="text-xl font-bold mb-1">Quick Links</h3>
            <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
            <ul className="space-y-3">
              <li>
                <a
                  href="#admission-process"
                  className="flex items-center gap-2 hover:text-yellow-400 transition"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Admission Process
                </a>
              </li>
              <li>
                <a
                  href="#fee-payment"
                  className="flex items-center gap-2 hover:text-yellow-400 transition"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Fee Payment
                </a>
              </li>
              <li>
                <a
                  href="#newsletter"
                  className="flex items-center gap-2 hover:text-yellow-400 transition"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Newsletter
                </a>
              </li>
              <li>
                <a
                  href="#fee-structure"
                  className="flex items-center gap-2 hover:text-yellow-400 transition"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Fee Structure
                </a>
              </li>
              <li>
                <a
                  href="#work-with-us"
                  className="flex items-center gap-2 hover:text-yellow-400 transition"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Work With Us
                </a>
              </li>
              <li>
                <a
                  href="#job-openings"
                  className="flex items-center gap-2 hover:text-yellow-400 transition"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Job Openings
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section - Connect with us */}
          <div className="bg-blue-700 text-white p-8 rounded-lg lg:col-span-1">
            <h3 className="text-xl font-bold mb-1">Connect with us</h3>
            <div className="w-12 h-1 bg-yellow-400 mb-6"></div>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <p className="text-sm">
                  375, Green Valley Rd, Sunshine Complex, Midtown, Demo City,
                  Westland – 700068, India.
                </p>
              </div>

              {/* Admission Inquiry */}
              <div>
                <p className="font-semibold mb-2">
                  Admission Inquiry Number & Email
                </p>
                <div className="space-y-2">
                  <a
                    href="tel:+918336815657"
                    className="flex items-center gap-2 hover:text-yellow-400 transition"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">+91 00000 00000</span>
                  </a>
                  <a
                    href="mailto:admissions@scis.co.in"
                    className="flex items-center gap-2 hover:text-yellow-400 transition"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">admissions@demo.co.in</span>
                  </a>
                </div>
              </div>

              {/* School Contact */}
              <div>
                <p className="font-semibold mb-2">
                  School Contact Numbers & Email
                </p>
                <div className="space-y-2">
                  <a
                    href="tel:03340072000"
                    className="flex items-center gap-2 hover:text-yellow-400 transition"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">000 0000 0000</span>
                  </a>
                  <a
                    href="tel:03340072444"
                    className="flex items-center gap-2 hover:text-yellow-400 transition"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">000 0000 0000</span>
                  </a>
                  <a
                    href="tel:03340005310"
                    className="flex items-center gap-2 hover:text-yellow-400 transition"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">000 0000 0000</span>
                  </a>
                  <a
                    href="mailto:info@scis.co.in"
                    className="flex items-center gap-2 hover:text-yellow-400 transition"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">info@demo.co.in</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t-4 border-yellow-400">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2025 Demo International School. All Rights Reserved. |
            Designed by{" "}
            <a href="#" className="text-blue-600 hover:underline">
              NextGenCodexHUB
            </a>
          </p>
          <div className="flex gap-4">
            <a
              href="#inquire"
              className="text-green-600 font-semibold hover:underline"
            >
              Inquire
            </a>
            <a
              href="#visit"
              className="text-green-600 font-semibold hover:underline"
            >
              Visit
            </a>
            <a
              href="#apply"
              className="text-green-600 font-semibold hover:underline"
            >
              Apply
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-14 h-14 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
