import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, UserCheck, Calendar, ClipboardCheck, CheckCircle, Phone, Mail, Download, ArrowRight } from 'lucide-react';

const AdmissionProcess = () => {
  const steps = [
    {
      id: 1,
      title: "Inquiry & Registration",
      description: "Visit our school or register online through our admission portal. Fill out the preliminary inquiry form with basic student information.",
      icon: FileText,
      color: "blue",
      details: [
        "Submit online inquiry form",
        "Receive confirmation email",
        "Get registration number"
      ]
    },
    {
      id: 2,
      title: "Application Submission",
      description: "Complete the detailed admission application form and submit required documents including birth certificate, previous school records, and photographs.",
      icon: ClipboardCheck,
      color: "green",
      details: [
        "Fill complete application form",
        "Upload necessary documents",
        "Pay registration fee"
      ]
    },
    {
      id: 3,
      title: "Interaction & Assessment",
      description: "Schedule an interaction session for the student and parents with our admission team. Age-appropriate assessment will be conducted.",
      icon: UserCheck,
      color: "purple",
      details: [
        "Parent-student interaction",
        "Student assessment test",
        "Campus tour"
      ]
    },
    {
      id: 4,
      title: "Document Verification",
      description: "Original documents will be verified including birth certificate, transfer certificate, and previous academic records.",
      icon: CheckCircle,
      color: "orange",
      details: [
        "Verify original documents",
        "Check academic records",
        "Confirm medical records"
      ]
    },
    {
      id: 5,
      title: "Admission Confirmation",
      description: "Upon successful completion of all steps, admission will be confirmed. Complete the fee payment and collect the admission kit.",
      icon: Calendar,
      color: "pink",
      details: [
        "Receive admission letter",
        "Complete fee payment",
        "Collect admission kit"
      ]
    }
  ];

  const documents = [
    "Birth Certificate (Original + 2 copies)",
    "Transfer Certificate from previous school",
    "Mark sheets of previous classes",
    "Aadhar Card copy of student and parents",
    "Recent passport size photographs (4 copies)",
    "Address proof (Electricity bill/Rental agreement)",
    "Medical fitness certificate",
    "Caste certificate (if applicable)"
  ];

  const importantDates = [
    { event: "Admission Open", date: "December 1, 2024" },
    { event: "Last Date for Application", date: "March 15, 2025" },
    { event: "Interaction & Assessment", date: "January - March 2025" },
    { event: "Final Admission List", date: "March 30, 2025" },
    { event: "Academic Session Begins", date: "April 10, 2025" }
  ];

  const colorClasses = {
    blue: "bg-blue-100 text-blue-600 border-blue-300",
    green: "bg-green-100 text-green-600 border-green-300",
    purple: "bg-purple-100 text-purple-600 border-purple-300",
    orange: "bg-orange-100 text-orange-600 border-orange-300",
    pink: "bg-pink-100 text-pink-600 border-pink-300"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admission Process</h1>
          <p className="text-xl md:text-2xl mb-8">Your Journey to Excellence Starts Here</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg shadow-lg transition transform hover:scale-105 flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Call: 000 0000 0000
            </button>
            <button className="bg-yellow-400 text-gray-800 hover:bg-yellow-500 font-bold py-3 px-8 rounded-lg shadow-lg transition transform hover:scale-105 flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Download Brochure
            </button>
          </div>
        </div>
      </div>

      {/* Step-by-Step Process */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Step-by-Step Admission Process</h2>
          <p className="text-lg text-gray-600">Follow these simple steps to secure your child's admission</p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="relative">
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-12 top-24 w-1 h-full bg-gray-300 -z-10"></div>
                )}

                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-2xl transition-shadow">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Step Number & Icon */}
                    <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-2">
                      <div className={`w-24 h-24 rounded-full flex items-center justify-center ${colorClasses[step.color]} border-4 shadow-lg flex-shrink-0`}>
                        <Icon className="w-10 h-10" />
                      </div>
                      <div className="flex items-center justify-center w-10 h-10 bg-gray-800 text-white rounded-full font-bold text-lg md:hidden">
                        {step.id}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="hidden md:flex items-center gap-3 mb-2">
                            <span className="bg-gray-800 text-white px-4 py-1 rounded-full text-sm font-bold">
                              Step {step.id}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-800 mb-2">{step.title}</h3>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                      
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          Key Activities:
                        </h4>
                        <ul className="space-y-2">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-gray-700">
                              <ArrowRight className="w-4 h-4 text-green-600 flex-shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Documents Required Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Documents Required</h2>
            <p className="text-lg text-gray-600">Please keep the following documents ready for submission</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {documents.map((doc, index) => (
              <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg hover:bg-blue-50 transition-colors">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{doc}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg max-w-4xl mx-auto">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Note:</span> All documents should be attested. Original documents will be verified and returned immediately after verification.
            </p>
          </div>
        </div>
      </div>

      {/* Important Dates */}
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
              <Calendar className="w-8 h-8 text-purple-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Important Dates</h2>
            <p className="text-lg text-gray-600">Mark your calendar with these important admission dates</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {importantDates.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center font-bold text-purple-600">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">{item.event}</h3>
                  </div>
                  <div className="bg-purple-100 text-purple-700 px-6 py-2 rounded-full font-semibold sm:ml-auto">
                    {item.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help with Admission?</h2>
          <p className="text-xl mb-8">Our admission team is here to assist you</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Phone className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p>000 0000 0000</p>
              <p>000 0000 0000</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Mail className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p>info@demo.co.in</p>
              <p>admissions@demo.co.in</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Calendar className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p>Mon - Sat</p>
              <p>9:00 AM - 4:00 PM</p>
            </div>
          </div>

          <Link 
            to="/admissionsapplynow"
            className="inline-block bg-yellow-400 text-gray-800 hover:bg-yellow-500 font-bold py-4 px-12 rounded-lg shadow-lg transition transform hover:scale-105"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcess;