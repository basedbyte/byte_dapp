import Image from "next/image";
import Navbar from "../components/homePage/navbar";

import Onboarding from "../components/homePage/frontPage";
import Features from "../components/homePage/featurePage";
import HowPage from "@/components/homePage/howPage";
import Talents from "@/components/homePage/talentsPage";
import Jobs from "@/components/homePage/jobsPage";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>

      <main className="flex-grow flex flex-col items-center justify-center">
        <div className="w-full flex justify-center px-8 sm:px-20 py-15">
          <div className="w-full max-w-7xl flex flex-col items-center font-[family-name:var(--font-geist-sans)]">
            <Onboarding />
          </div>
        </div>
        <div className="w-full flex justify-center px-8 sm:px-20 py-5 bg-[#F1F2F4]">
          <div className="w-full max-w-7xl flex flex-col items-center font-[family-name:var(--font-geist-sans)]">
            <Features />
          </div>
        </div>
        <div className="w-full flex justify-center px-8 sm:px-20 pb-20">
          <div className="w-full max-w-7xl flex flex-col items-center font-[family-name:var(--font-geist-sans)]">
            <HowPage />
          </div>
        </div>
        <div className="w-full flex justify-center px-8 sm:px-20 py-10 bg-[#F1F2F4]">
          <div className="w-full max-w-7xl flex flex-col items-center font-[family-name:var(--font-geist-sans)]">
            <Talents />
          </div>
        </div>
        <div className="w-full flex justify-center px-8 sm:px-20 pb-10">
          <div className="w-full max-w-7xl flex flex-col items-center font-[family-name:var(--font-geist-sans)]">
            <Jobs />
          </div>
        </div>
      </main>
    </div>
  );
}
