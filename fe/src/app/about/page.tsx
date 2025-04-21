"use client";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import { useEffect, useState } from "react";


export default function About() {
  const[isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4 space-y-12">
        <div
            className={`transform transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
            }`}
          >
            <h1 className="text-4xl font-bold text-center mb-4">About BYTE</h1>
            <p className="text-lg text-gray-700 text-center max-w-2xl">
              Welcome to Byte, a vibrant community dedicated to helping junior professionals in the creative field find their dream jobs. Connect with employers, showcase your talents, afefdfgdsgsfdgfdgbdsgdsbvsdb  and take the next step in your career      journey with us. Join our network of talented individuals and innovative companies today.                   
            </p>
          </div>

          <div
            className={`transform transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
            }`}
          >
            <h1 className="text-4xl font-bold text-center mb-4">Vision</h1>
            <p className="text-lg text-gray-700 text-center max-w-2xl">
              Our vision is to create unparalleled economic opportunities for every junior creative professional worldwide, empowering them to achieve their career goals and contribute to the global workforce.
            </p>
          </div>

          <div
            className={`transform transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
            }`}
          >
            <h1 className="text-4xl font-bold text-center mb-4">Mission</h1>
            <p className="text-lg text-gray-700 text-center max-w-2xl">
              Our mission is simple: to connect junior creative professionals with opportunities that inspire and enable them to grow, thrive, and succeed in their careers. 
            </p>
          </div>

          <div
            className={`transform transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
            }`}
          >
            <h1 className="text-4xl font-bold text-center mb-4">Who are we?</h1>
            <p className="text-lg text-gray-700 text-center max-w-2xl">
              Byte started as an idea in 2025, born out of a desire to help junior creative professionals find meaningful job opportunities. Officially launched in 2024, BYTE ksjnfjdsnfjdn has quickly grown into a dynamic platform, connecting talented individuals with innovative companies. Under visionary leadership, Byte continues to expand, offering a range of kung binasa mo to say haiii nani daisuki services including job listings, career resources, and networking opportunities to support the next generation of creative professionals.
            </p>

          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
    
  );
}