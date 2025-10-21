import React, { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Touch = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    dateOfBirth: "",
    gender: "",
    classApplying: "",
    parentsName: "",
    phoneNumber: "",
    whatsappNumber: "",
    email: "",
    schoolTourRequired: "No",
    scheduleTour: "",
    tourTimeSlot: "",
    sourceOfInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-2 sm:p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid lg:grid-cols-2">
          {/* Left Section - Contact Info */}
          <div className="bg-blue-700 text-white p-6 sm:p-8 lg:p-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
              Connect with us
            </h1>
            <p className="text-base sm:text-lg mb-6 lg:mb-8">We'd love to hear from you!</p>

            <div className="flex items-start gap-3 mb-6 lg:mb-8">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0" />
              <div className="text-sm sm:text-base">
                <p className="font-semibold">
                  375, Green Valley Rd, Sunshine Complex, Midtown, Demo City, Westland
                </p>
                <p>India, West Bengal</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
              <div>
                <h3 className="font-semibold mb-3 text-sm sm:text-base">
                  Admission Inquiry Number & Email
                </h3>
                <div className="flex items-center gap-2 mb-2 text-sm">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+91 00000 00000</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="break-all">admissions@demo.co.in</span>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3 text-sm sm:text-base">
                  School Contact Numbers & Email
                </h3>
                <div className="flex items-center gap-2 mb-2 text-sm">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>000 0000 0000</span>
                </div>
                <div className="flex items-center gap-2 mb-2 text-sm">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>000 0000 0000</span>
                </div>
                <div className="flex items-center gap-2 mb-2 text-sm">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>000 0000 0000</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="break-all">info@DEMO.co.in</span>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="p-3 sm:p-4">
                <h3 className="text-gray-800 font-bold mb-1 text-sm sm:text-base">
                  DEMO International School
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-2">
                  375, Green Valley Rd, Sunshine Complex, Midtown, Demo City,
                  Westland – 700068, India.
                </p>
                <a href="#" className="text-blue-600 text-xs sm:text-sm hover:underline">
                  View larger map
                </a>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 h-48 sm:h-56 lg:h-64 flex items-center justify-center text-gray-600 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-10 left-10 w-32 h-32 border-2 border-gray-400 rounded"></div>
                  <div className="absolute top-20 right-20 w-24 h-24 border-2 border-gray-400 rounded"></div>
                  <div className="absolute bottom-10 left-1/3 w-20 h-20 border-2 border-gray-400 rounded"></div>
                </div>
                <MapPin className="w-12 h-12 sm:w-16 sm:h-16 text-red-600 z-10 drop-shadow-lg" />
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="p-6 sm:p-8 lg:p-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
              Get In Touch
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 lg:mb-8">
              Drop us your details for a quick response.
            </p>

            <div className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2 text-xs sm:text-sm font-medium">
                    Student's Name*
                  </label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter student's name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 text-xs sm:text-sm font-medium">
                    Date of Birth*{" "}
                    <span className="text-gray-400 text-xs">
                      Eg. 14/01/2005
                    </span>
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2 text-xs sm:text-sm font-medium">
                    Gender*
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 text-xs sm:text-sm font-medium">
                    Class Applying for*
                  </label>
                  <select
                    name="classApplying"
                    value={formData.classApplying}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="">Select</option>
                    <option value="nursery">Nursery</option>
                    <option value="kg">KG</option>
                    <option value="1">Class 1</option>
                    <option value="2">Class 2</option>
                    <option value="3">Class 3</option>
                    <option value="4">Class 4</option>
                    <option value="5">Class 5</option>
                    <option value="6">Class 6</option>
                    <option value="7">Class 7</option>
                    <option value="8">Class 8</option>
                    <option value="9">Class 9</option>
                    <option value="10">Class 10</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2 text-xs sm:text-sm font-medium">
                    Parents' Name*
                  </label>
                  <input
                    type="text"
                    name="parentsName"
                    value={formData.parentsName}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter parent's name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 text-xs sm:text-sm font-medium">
                    Phone Number*
                  </label>
                  <div className="flex gap-2">
                    <select className="px-2 sm:px-3 py-2 border border-gray-300 rounded-md bg-white text-xs sm:text-sm">
                      <option>🇮🇳 +91</option>
                    </select>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="flex-1 px-3 sm:px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2 text-xs sm:text-sm font-medium">
                    WhatsApp Number*
                  </label>
                  <div className="flex gap-2">
                    <select className="px-2 sm:px-3 py-2 border border-gray-300 rounded-md bg-white text-xs sm:text-sm">
                      <option>🇮🇳 +91</option>
                    </select>
                    <input
                      type="tel"
                      name="whatsappNumber"
                      value={formData.whatsappNumber}
                      onChange={handleChange}
                      className="flex-1 px-3 sm:px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter WhatsApp number"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 text-xs sm:text-sm font-medium">
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter email address"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2 text-xs sm:text-sm font-medium">
                    School Tour Required*
                  </label>
                  <select
                    name="schoolTourRequired"
                    value={formData.schoolTourRequired}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 text-xs sm:text-sm font-medium">
                    Schedule School Tour
                  </label>
                  <input
                    type="date"
                    name="scheduleTour"
                    value={formData.scheduleTour}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2 text-xs sm:text-sm font-medium">
                    School Tour Time Slot
                  </label>
                  <select
                    name="tourTimeSlot"
                    value={formData.tourTimeSlot}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="">Select</option>
                    <option value="morning">Morning (9 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 3 PM)</option>
                    <option value="evening">Evening (3 PM - 5 PM)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 text-xs sm:text-sm font-medium">
                    Source of Information*
                  </label>
                  <select
                    name="sourceOfInfo"
                    value={formData.sourceOfInfo}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="">Select</option>
                    <option value="website">Website</option>
                    <option value="social-media">Social Media</option>
                    <option value="friend">Friend/Relative</option>
                    <option value="advertisement">Advertisement</option>
                    <option value="newspaper">Newspaper</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-center pt-4">
                <button
                  onClick={handleSubmit}
                  className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-12 sm:px-16 rounded-md transition duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Touch;