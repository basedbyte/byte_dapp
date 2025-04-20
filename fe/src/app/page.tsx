"use client";
import Image from "next/image";
import Navbar from "../../components/onboarding/navbar";
import Onboarding from "../../components/onboarding/frontPage";
import Features from "../../components/onboarding/featurePage";
import HowPage from "../../components/onboarding/howPage";
import Talents from "../../components/onboarding/talentsPage";
import Jobs from "../../components/onboarding/jobsPage";
import Footer from "../../components/onboarding/footer";
import Cards from "../../components/onboarding/cardPage";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen ">
      <div className="sticky top-0 z-10 font-[family-name:var(--font-poppins)]">
        <Navbar />
      </div>

      <main className="flex-grow flex flex-col items-center justify-center font-[family-name:var(--font-poppins)]">
        <div className="w-full flex justify-center px-8 sm:px-20 py-15">
          <div className="w-full max-w-7xl flex flex-col items-center">
            <Onboarding />
          </div>
        </div>
        <div className="w-full flex justify-center px-8 sm:px-20 py-5 bg-[#F1F2F4]">
          <div className="w-full max-w-7xl flex flex-col items-center">
            <Features />
          </div>
        </div>
        <div className="w-full flex justify-center px-8 sm:px-20 pb-20">
          <div className="w-full max-w-7xl flex flex-col items-center">
            <HowPage />
          </div>
        </div>
        <div className="w-full flex justify-center px-8 sm:px-20 py-10 bg-[#F1F2F4]">
          <div className="w-full max-w-7xl flex flex-col items-center">
            <Talents />
          </div>
        </div>
        <div className="w-full flex justify-center px-8 sm:px-20 pb-10">
          <div className="w-full max-w-7xl flex flex-col items-center">
            <Jobs />
          </div>
        </div>
        <div className="w-full flex justify-center px-8 sm:px-20 pb-10">
          <div className="w-full max-w-7xl flex flex-col items-center">
            <Cards />
          </div>
        </div>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}
