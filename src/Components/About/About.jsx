import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import Touch from '../Contact/Touch';
import Footer from '../Footer/Footer.jsx';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gray-100 overflow-hidden">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-start">
            {/* Left Side - School Building Image with curved edge */}
            <div className="relative">
              <div className="relative overflow-hidden" style={{ clipPath: 'polygon(0 0, 85% 0, 100% 100%, 0 100%)' }}>
                <img 
                  src="https://images.unsplash.com/photo-1562774053-701939374585?w=900&h=700&fit=crop" 
                  alt="South City International School Building"
                  className="w-full h-[600px] object-cover"
                />
              </div>
              
              {/* Green overlay at bottom */}
              <div className="absolute bottom-0 left-0 w-2/3 h-32 bg-green-600" style={{ clipPath: 'polygon(0 0, 100% 0, 70% 100%, 0 100%)' }}></div>
              
              {/* About Us label */}
              <div className="absolute bottom-8 left-8 bg-green-600 text-white px-8 py-4 font-bold text-xl">
                ABOUT US
              </div>
            </div>

            {/* Right Side - Two Images with decorative shapes */}
            <div className="relative lg:pl-16 pt-8 lg:pt-0">
              {/* Decorative plus sign */}
              <div className="absolute top-8 right-16 text-6xl text-gray-300 font-light">+</div>
              
              {/* Top Image - Playground with curved border */}
              <div className="relative mb-8 mr-8">
                <div className="relative overflow-hidden rounded-tl-[100px] rounded-tr-3xl rounded-bl-3xl rounded-br-3xl shadow-2xl border-4 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1587616211892-e5e9bc1d2472?w=600&h=350&fit=crop" 
                    alt="School Playground"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>

              {/* Decorative circle */}
              <div className="absolute right-8 top-1/2 w-16 h-16 border-4 border-gray-300 rounded-full"></div>

              {/* Bottom Image - Classroom with curved border */}
              <div className="relative ml-12">
                <div className="relative overflow-hidden rounded-tl-3xl rounded-tr-[100px] rounded-bl-3xl rounded-br-3xl shadow-2xl border-4 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=350&fit=crop" 
                    alt="Learning Activities"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>

              {/* Decorative green swoosh lines */}
              <div className="absolute bottom-0 right-0 text-green-500 opacity-40">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 10C20 30, 30 20, 40 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M20 10C30 30, 40 20, 50 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M30 10C40 30, 50 20, 60 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>

              {/* Play button triangle */}
              <div className="absolute left-0 bottom-16 w-0 h-0 border-t-[20px] border-t-transparent border-l-[30px] border-l-gray-400 border-b-[20px] border-b-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden sticky top-4">
              {/* Decorative Image */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-pink-400 rounded-3xl transform rotate-3 opacity-30"></div>
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl border-4 border-pink-400">
                  <img 
                    src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop" 
                    alt="Teacher and student"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-yellow-400 p-6 mt-4">
                <h3 className="text-xl font-bold mb-4">South City International School</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                    <p>375, Prince Anwar Shah Road, Kolkata, India, West Bengal</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    <p>033 4007 2000</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    <p>033 4007 2444</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    <p>033 4000 5310</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    <p>info@scis.co.in</p>
                  </div>
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg mt-6 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-12">
            {/* Vision & Mission Header */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Vision & Mission</h2>
              <div className="w-24 h-1 bg-yellow-400 mb-8"></div>
            </div>

            {/* About Section */}
            <section className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">About US</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  South City International School, located in the heart of Kolkata, is a premier institution known for its commitment to holistic education and academic excellence. It is housed in a 5 storied building comprising a built-up area of 127000 sq.ft.(approx.) and a campus area of 3.6 acres. Established with the vision of nurturing global citizens, the school follows an international curriculum -IGCSE (Cambridge) and is also affiliated to the CISCE.
                </p>
                <p>
                  The campus is equipped with state-of-the-art infrastructure designed to support modern learning. Spacious, air-conditioned classrooms are enhanced with advanced audio-visual teaching aids. The school boasts fully equipped science laboratories, two well equipped libraries, computer labs, and an auditorium for cultural events.
                </p>
                <p>
                  Sports and co-curricular activities are given significant importance, with multi-sports facilities and well-maintained playground. The school also houses a music room, dance room, art studio, and robotics lab, ensuring an all-rounded development environment. With its world-class amenities and dedicated faculty, South City International School stands as a beacon of quality education in the region.
                </p>
                <p>
                  It has been 16 years since the inception of the school and the school is running successfully with the assistance and cooperation from all stakeholders.
                </p>
              </div>
            </section>

            {/* Vision Section */}
            <section className="bg-white rounded-lg shadow-md p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Vision</h3>
                  <p className="text-gray-700 leading-relaxed">
                    South City International school is committed to delivering a transformative education that equips students for a dynamic world. Our collaborative environment ignites a passion for growth, enabling students to become proactive leaders. With excellence as our guide, we aim to redefine knowledge ecosystems and shape a better future for all.
                  </p>
                </div>
                <div className="order-1 md:order-2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full transform rotate-12 opacity-20"></div>
                    <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl border-4 border-blue-500">
                      <img 
                        src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&h=400&fit=crop" 
                        alt="Student playing chess"
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Mission Section */}
            <section className="bg-white rounded-lg shadow-md p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full transform -rotate-12 opacity-20"></div>
                    <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl border-4 border-purple-500">
                      <img 
                        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&h=400&fit=crop" 
                        alt="Students in uniforms"
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our Mission is to inspire students to discover their potential through lifelong learning in a dynamic and supportive environment. We foster creativity, critical thinking, and curiosity, providing an exceptional education that cultivates success, confidence, and compassion, making a positive impact in communities and beyond.
                  </p>
                </div>
              </div>
            </section>

            {/* Image Gallery Preview */}
            <section className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Campus</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop" 
                    alt="Playground"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&h=300&fit=crop" 
                    alt="Classroom activity"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Touch />
      <Footer />
    </div>
    
  );
  
};

export default About;