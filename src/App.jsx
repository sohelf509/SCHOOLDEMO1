import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import AdmissionForm from './Components/Admissions/AdmissionFrom.jsx';
import AdmissionProcess from './Components/Admissions/AdmissionProcess.jsx';
import Admissions from './Components/Admissions/Admissions.jsx'; // Add this import

// Import other pages as you create them
// import WhyUs from './Components/WhyUs/WhyUs.jsx';
// import News from './Components/News/News.jsx';
// import Alumni from './Components/Alumni/Alumni.jsx';
// import Contact from './Components/Contact/Contact.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/admissionsapplynow" element={<AdmissionForm />} />
        <Route path="/admission-process" element={<AdmissionProcess />} />
        {/* Add these routes as you create the pages */}
        {/* <Route path="/why-us" element={<WhyUs />} /> */}
        {/* <Route path="/news" element={<News />} /> */}
        {/* <Route path="/alumni" element={<Alumni />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;