import React, { useState, useEffect, useRef } from "react";
import slide1 from "../../assets/school1.jpg";
import slide2 from "../../assets/school2.avif";
import slide3 from "../../assets/school3.webp";
import { Target, Crosshair } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSections, setVisibleSections] = useState({
    welcome: false,
    whyChoose: false,
  });

  const welcomeRef = useRef(null);
  const whyChooseRef = useRef(null);

  const slides = [
    {
      id: 1,
      image: slide1,
      title: "WHERE LEARNING IS A LIFELONG ADVENTURE",
      subtitle: "Building futures through play and education",
    },
    {
      id: 2,
      image: slide2,
      title: "EMPOWERING YOUNG MINDS",
      subtitle: "Encouraging curiosity, creativity, and confidence",
    },
    {
      id: 3,
      image: slide3,
      title: "EXCELLENCE IN EDUCATION",
      subtitle: "Inspiring every student to reach their full potential",
    },
  ];

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === welcomeRef.current) {
              setVisibleSections((prev) => ({ ...prev, welcome: true }));
            }
            if (entry.target === whyChooseRef.current) {
              setVisibleSections((prev) => ({ ...prev, whyChoose: true }));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (welcomeRef.current) observer.observe(welcomeRef.current);
    if (whyChooseRef.current) observer.observe(whyChooseRef.current);

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      {/* Original Slider */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[80vh] lg:h-screen overflow-hidden bg-gray-900">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover select-none"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6">
              <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 animate-fade-in leading-tight">
                {slide.title}
              </h1>
              <p className="text-xs xs:text-sm sm:text-lg md:text-xl lg:text-2xl max-w-xs sm:max-w-md md:max-w-2xl animate-fade-in">
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white w-6 sm:w-8"
                  : "bg-white/50 hover:bg-white/75 w-2 sm:w-3"
              }`}
            />
          ))}
        </div>
      </div>

      {/* New School Welcome Section */}
      <div
        ref={welcomeRef}
        className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 lg:px-24 bg-white"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
          {/* Left Side - Logo and Images */}
          <div
            className={`flex flex-col items-center transition-all duration-1000 ${
              visibleSections.welcome
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            {/* School Logo */}
            <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-blue-700 rounded-full flex items-center justify-center mb-6 sm:mb-8 shadow-2xl">
              <div
                className="text-yellow-400 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                style={{ fontFamily: "Comic Sans MS, cursive" }}
              >
                DEMO
              </div>
            </div>

            {/* Image Grid */}
            <div className="w-full space-y-3 sm:space-y-4">
              {/* Top Image */}
              <div className="w-full h-32 sm:h-40 md:h-48 bg-gray-200 rounded-xl sm:rounded-2xl overflow-hidden border-2 sm:border-3 md:border-4 border-blue-400 shadow-lg">
                <img
                  src={slide1}
                  alt="Student"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Image - Classroom */}
              <div className="w-full h-48 sm:h-60 md:h-72 lg:h-80 bg-gray-200 rounded-xl sm:rounded-2xl overflow-hidden border-2 sm:border-3 md:border-4 border-green-500 shadow-lg">
                <img
                  src={slide2}
                  alt="Classroom"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div
            className={`flex flex-col transition-all duration-1000 delay-300 ${
              visibleSections.welcome
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Welcome To <span className="text-blue-600">DEMO</span>{" "}
              <span className="text-yellow-500">International School</span>
            </h1>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6 sm:mb-8 text-justify">
              DEMO International School, established in 0000, envisions
              the cultivation of young minds into truly global citizens within a
              nurturing and compassionate atmosphere. The pulsating vitality
              permeates through the students and teachers, creating a vibrant
              and dynamic learning environment. Today, the institution has
              indubitably etched its presence, not only in the city but
              throughout the nation, emerging as one of the foremost new-age
              schools, commanding admiration and respect.
            </p>

            {/* Vision */}
            <div className="mb-5 sm:mb-6">
              <div className="flex items-start gap-3 sm:gap-4 mb-2 sm:mb-3">
                <div className="bg-blue-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-1 sm:mt-2">
                  Vision
                </h2>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify ml-12 sm:ml-14 md:ml-16">
                Learning is not merely an acquisition of knowledge; it is a
                priceless treasure that accompanies its possessor throughout
                their journey. South City International, aims to foster an
                invigorating and collaborative learning environment.
              </p>
            </div>

            {/* Mission */}
            <div className="mb-6 sm:mb-8">
              <div className="flex items-start gap-3 sm:gap-4 mb-2 sm:mb-3">
                <div className="bg-orange-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <Crosshair className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-1 sm:mt-2">
                  Mission
                </h2>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify ml-12 sm:ml-14 md:ml-16">
                At DEMO International School, our mission is to cultivate
                a harmonious and inspiring environment where every student is
                nurtured to unleash their utmost intellectual capacity and reach
                their full potential.
              </p>
            </div>

            {/* View More Button */}
            <Link
              to="/about"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg transition-colors self-start shadow-md inline-block text-center text-sm sm:text-base"
            >
              VIEW MORE
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose SCIS Section */}
      <div
        ref={whyChooseRef}
        className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 lg:px-24 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Left Side - Content */}
          <div
            className={`flex flex-col transition-all duration-1000 ${
              visibleSections.whyChoose
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 text-gray-800">
              WHY CHOOSE DEMO?
            </h2>

            <div className="space-y-3 sm:space-y-4">
              {[
                "CCTV Secured 3.59-acre campus with 70% open space",
                "1:17 Teacher Student Ratio with An Experiential Pedagogical Approach",
                "Experienced, dedicated, involved and self motivated teachers",
                "Globally relevant curriculum with Indian roots in value and culture",
                "Technology driven learning",
                "Future-ready education with AI, STEM and Robotics",
                "Emphasis on creative thinking, problem-solving and critical thinking, through project and application based learning",
                "Foreign Language programs and cultural exchange initiatives",
                "Robust sports program with diverse opportunities",
                "Personalized career guidance and internship support",
                "Active parent teacher communication & Parent Partnership Programs",
                "Dedicated support for students with special needs",
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-2.5 sm:gap-3 transition-all duration-700 ${
                    visibleSections.whyChoose
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="mt-0.5 sm:mt-1 flex-shrink-0">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Circular Image */}
          <div
            className={`flex justify-center items-center transition-all duration-1000 delay-500 ${
              visibleSections.whyChoose
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 sm:border-6 md:border-8 border-blue-400">
                <img
                  src={slide3}
                  alt="School Campus"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative sun icon */}
              <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 md:bottom-6 md:left-6 lg:bottom-8 lg:left-8 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;