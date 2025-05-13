"use client";
import { Upload } from "lucide-react";
import React, { useRef, useState } from "react";

interface ProfileProps {
  mode: "login" | "signup";
  onViewChange: (view: "main" | "more-options") => void;
}

const initialSkills = [
  "Frontend",
  "Backend",
  "UI/UX Design",
  "Writing",
  "Content",
];

const Profile = ({ mode, onViewChange }: ProfileProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [skills, setSkills] = useState<string[]>(initialSkills);
  const [skillInput, setSkillInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const handleSkillInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSkillInput(e.target.value);
  };

  const handleAddSkill = () => {
    const trimmed = skillInput.trim();
    if (trimmed && !skills.includes(trimmed)) {
      setSkills([...skills, trimmed]);
      setSkillInput("");
    }
  };

  const handleSkillKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddSkill();
    }
  };

  const handleRemoveSkill = (skill: string) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  return (
    <div className="flex flex-col w-full h-full">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 sm:p-6 md:p-8 w-full flex flex-col h-full"
      >
        <div className="flex flex-row justify-between items-start mb-6">
          <div className="flex-1">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">
              Finish Your Profile
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Just one step closer to unlocking high-level earnings
            </p>
          </div>
          <div className="flex-shrink-0">
            <input
              type="file"
              id="file-input"
              ref={fileInputRef}
              className="hidden"
            />
            <label
              htmlFor="file-input"
              className="cursor-pointer w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-50 flex items-center justify-center hover:bg-green-100 transition"
            >
              <Upload size={24} className="text-green-600" />
            </label>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="First name"
            className="border border-gray-200 rounded-md px-3 py-2.5 focus:outline-none focus:ring-1 focus:ring-green-300 text-gray-800 text-sm"
            required
          />
          <input
            type="text"
            placeholder="Lastname"
            className="border border-gray-200 rounded-md px-3 py-2.5 focus:outline-none focus:ring-1 focus:ring-green-300 text-gray-800 text-sm"
            required
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="flex items-center border border-gray-200 rounded-md px-3 py-2.5 bg-white">
            <span className="text-gray-400 mr-2 text-sm">@</span>
            <input
              type="text"
              placeholder="Username"
              className="flex-1 outline-none bg-transparent text-gray-800 text-sm"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Bio"
            className="border border-gray-200 rounded-md px-3 py-2.5 focus:outline-none focus:ring-1 focus:ring-green-300 text-gray-800 text-sm"
          />
        </div>
        
        <input
          type="text"
          placeholder="Select skills..."
          value={skillInput}
          onChange={handleSkillInputChange}
          onKeyDown={handleSkillKeyDown}
          className="border border-gray-200 rounded-md px-3 py-2.5 w-full mb-4 focus:outline-none focus:ring-1 focus:ring-green-300 text-gray-800 text-sm"
        />
        
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="flex items-center bg-white border border-gray-200 rounded-full pl-3 pr-1 py-1"
            >
              <span className="text-gray-800 text-xs">{skill}</span>
              <button
                type="button"
                onClick={() => handleRemoveSkill(skill)}
                className="ml-2 w-5 h-5 flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors"
                aria-label={`Remove ${skill}`}
              >
                ×
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddSkill}
            className="flex items-center bg-white border border-gray-200 rounded-full px-3 py-1 text-green-600 hover:text-green-700 text-xs font-medium"
          >
            + ADD MORE
          </button>
        </div>
        
        <div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold rounded-md py-3 hover:bg-green-700 transition text-sm"
          >
            Create Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;