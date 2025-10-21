import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Clock, DollarSign, Shirt, Calendar, CheckCircle, AlertCircle, Download, Phone, Mail } from 'lucide-react';

const Admissions = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const feeStructure = [
    { grade: "Nursery - UKG", admissionFee: "₹25,000", annualFee: "₹1,20,000", quarterlyFee: "₹30,000", total: "₹1,45,000" },
    { grade: "Class 1 - 5", admissionFee: "₹30,000", annualFee: "₹1,50,000", quarterlyFee: "₹37,500", total: "₹1,80,000" },
    { grade: "Class 6 - 8", admissionFee: "₹35,000", annualFee: "₹1,80,000", quarterlyFee: "₹45,000", total: "₹2,15,000" },
    { grade: "Class 9 - 10", admissionFee: "₹40,000", annualFee: "₹2,00,000", quarterlyFee: "₹50,000", total: "₹2,40,000" },
    { grade: "Class 11 - 12", admissionFee: "₹45,000", annualFee: "₹2,25,000", quarterlyFee: "₹56,250", total: "₹2,70,000" }
  ];

  const timings = [
    { grade: "Nursery - UKG", timing: "8:30 AM - 12:30 PM", days: "Monday to Friday", breaks: "10:30 AM - 11:00 AM (Snack Break)" },
    { grade: "Class 1 - 5", timing: "8:00 AM - 2:00 PM", days: "Monday to Friday", breaks: "10:30 AM - 11:00 AM (Recess), 12:30 PM - 1:00 PM (Lunch)" },
    { grade: "Class 6 - 10", timing: "7:45 AM - 2:30 PM", days: "Monday to Friday", breaks: "10:30 AM - 11:00 AM (Recess), 12:30 PM - 1:00 PM (Lunch)" },
    { grade: "Class 11 - 12", timing: "7:30 AM - 3:00 PM", days: "Monday to Friday", breaks: "10:30 AM - 11:00 AM (Recess), 12:30 PM - 1:00 PM (Lunch)" }
  ];

  const uniformDetails = [
    {
      type: "Summer Uniform (April - September)",
      boys: ["White shirt with school monogram", "Grey shorts/trousers", "Black belt", "White socks", "Black shoes"],
      girls: ["White shirt with school monogram", "Grey skirt/trousers", "Black belt", "White socks", "Black shoes"]
    },
    {
      type: "Winter Uniform (October - March)",
      boys: ["White shirt with school monogram", "Grey trousers", "Green V-neck sweater/blazer", "School tie", "Black belt", "Grey socks", "Black shoes"],
      girls: ["White shirt with school monogram", "Grey skirt/trousers", "Green V-neck sweater/blazer", "School tie", "Black belt", "Grey socks", "Black shoes"]
    },
    {
      type: "Sports Uniform",
      boys: ["Green polo t-shirt with school logo", "White track pants", "White sports shoes", "White socks"],
      girls: ["Green polo t-shirt with school logo", "White track pants", "White sports shoes", "White socks"]
    }
  ];

  const upcomingEvents = [
    { title: "Admission Open House", date: "January 15, 2025", time: "10:00 AM - 1:00 PM", description: "Visit our campus, meet teachers, and learn about our curriculum.", color: "blue" },
    { title: "Parent-Student Interaction", date: "Jan 20 - Feb 15, 2025", time: "By Appointment", description: "One-on-one sessions with admission counselors.", color: "green" },
    { title: "Assessment Test", date: "Feb 20 - Mar 10, 2025", time: "9:00 AM onwards", description: "Age-appropriate assessment for students.", color: "purple" },
    { title: "Admission Result", date: "March 30, 2025", time: "Online", description: "Results published on website and sent via email/SMS.", color: "orange" },
    { title: "Document Verification", date: "April 1 - 5, 2025", time: "9:00 AM - 3:00 PM", description: "Verification of original documents for selected candidates.", color: "pink" },
    { title: "Academic Session Begins", date: "April 10, 2025", time: "7:30 AM", description: "New academic session 2025-26 begins with orientation.", color: "red" }
  ];

  const colorClasses = {
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600",
    purple: "from-purple-500 to-purple-600",
    orange: "from-orange-500 to-orange-600",
    pink: "from-pink-500 to-pink-600",
    red: "from-red-500 to-red-600"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions 2025-26</h1>
          <p className="text-xl md:text-2xl mb-8">Join Our Legacy of Excellence</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#fee-structure" className="bg-white text-green-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg shadow-lg transition transform hover:scale-105">
              View Fee Structure
            </a>
            <a href="#school-timing" className="bg-yellow-400 text-gray-800 hover:bg-yellow-500 font-bold py-3 px-8 rounded-lg shadow-lg transition transform hover:scale-105">
              Check Timings
            </a>
          </div>
        </div>
      </div>

      {/* Fee Structure */}
      <div id="fee-structure" className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <DollarSign className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Fee Structure</h2>
          <p className="text-lg text-gray-600">Academic Year 2025-26</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Grade</th>
                  <th className="px-6 py-4 text-right font-semibold">Admission Fee</th>
                  <th className="px-6 py-4 text-right font-semibold">Annual Fee</th>
                  <th className="px-6 py-4 text-right font-semibold">Quarterly Fee</th>
                  <th className="px-6 py-4 text-right font-semibold">Total (Year 1)</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((fee, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition`}>
                    <td className="px-6 py-4 font-semibold text-gray-800">{fee.grade}</td>
                    <td className="px-6 py-4 text-right text-gray-700">{fee.admissionFee}</td>
                    <td className="px-6 py-4 text-right text-gray-700">{fee.annualFee}</td>
                    <td className="px-6 py-4 text-right text-gray-700">{fee.quarterlyFee}</td>
                    <td className="px-6 py-4 text-right font-bold text-green-600">{fee.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
            <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              Fee Includes:
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Textbooks and study materials</li>
              <li>• Library and laboratory access</li>
              <li>• Sports and extracurricular activities</li>
              <li>• Student insurance</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
            <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-yellow-600" />
              Additional Charges:
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Transport: ₹20,000 - ₹35,000 (based on distance)</li>
              <li>• Uniform: ₹8,000 - ₹12,000 (one-time)</li>
              <li>• Meals: ₹18,000 per annum (optional)</li>
              <li>• Exam fees: As per board requirements</li>
            </ul>
          </div>
        </div>
      </div>

      {/* School Timing */}
      <div id="school-timing" className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">School Timing</h2>
            <p className="text-lg text-gray-600">Daily Schedule for Different Grades</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {timings.map((timing, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
                <h3 className="text-xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-blue-300">{timing.grade}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-700">Timing</p>
                      <p className="text-2xl font-bold text-blue-600">{timing.timing}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-700">School Days</p>
                      <p className="text-gray-800">{timing.days}</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="font-semibold text-gray-700 mb-1">Break Timings:</p>
                    <p className="text-sm text-gray-600">{timing.breaks}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
            <h3 className="font-bold text-gray-800 mb-3">Important Notes:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• School gates open 15 minutes before start time</li>
              <li>• Students should reach at least 10 minutes early</li>
              <li>• Saturday: Special activity classes (9:00 AM - 12:00 PM)</li>
              <li>• Second Saturday of every month is a holiday</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Uniform */}
      <div id="uniform" className="bg-gradient-to-br from-purple-50 to-pink-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
              <Shirt className="w-8 h-8 text-purple-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">School Uniform</h2>
            <p className="text-lg text-gray-600">Dress code for all students</p>
          </div>

          <div className="space-y-8">
            {uniformDetails.map((uniform, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-purple-300">{uniform.type}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-blue-600 mb-4">Boys</h4>
                    <ul className="space-y-3">
                      {uniform.boys.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-pink-600 mb-4">Girls</h4>
                    <ul className="space-y-3">
                      {uniform.girls.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div id="upcoming-events" className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <Calendar className="w-8 h-8 text-orange-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-600">Mark your calendar for important admission events</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1">
                <div className={`bg-gradient-to-r ${colorClasses[event.color]} text-white p-6`}>
                  <Calendar className="w-8 h-8 mb-3" />
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-sm opacity-90">{event.date}</p>
                  <p className="text-sm opacity-90">{event.time}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join Us?</h2>
          <p className="text-xl mb-8">Contact our admission team for more information</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Phone className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p>000 0000 0000</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Mail className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p>admissions@demo.co.in</p>
            </div>
          </div>

          <Link to="/admission-form" className="inline-block bg-yellow-400 text-gray-800 hover:bg-yellow-500 font-bold py-4 px-12 rounded-lg shadow-lg transition transform hover:scale-105">
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Admissions;