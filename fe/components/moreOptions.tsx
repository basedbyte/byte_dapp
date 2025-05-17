import React, { useState } from "react";
import { Eye, EyeOff, ChevronLeft, UserRound, Lock, Check } from "lucide-react";
import Image from "next/image";

interface MoreOptionsViewProps {
  mode: "login" | "signup";
  onViewChange: (view: "main" | "wallet") => void;
  formData: { username: string; password: string };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showPassword: boolean;
  onTogglePassword: (e: React.MouseEvent) => void;
  onBack: () => void;
}

const MoreOptionsView = ({
  mode,
  formData, 
  onInputChange,
  showPassword,
  onTogglePassword,
  onViewChange,
  onBack,
}: MoreOptionsViewProps) => {
  const [errorMessageUsername, setErrorMessageUsername] = useState("");
  const [errorMessagePassword, setErrorMessagePassword] = useState("");
  const [touched, setTouched] = useState({ username: false, password: false });

  // Validate fields and set error messages
  const validate = (field?: string) => {
    let usernameError = "";
    let passwordError = "";

    if (!formData.username) {
      usernameError = "Username is required";
    }

    if (!formData.password) {
      passwordError = "Password is required";
    } else if (formData.password.length < 6) {
      passwordError = "Password must be at least 6 characters";
    }

    // Only set error for the field being validated, or all if not specified
    if (!field || field === "username") setErrorMessageUsername(usernameError);
    if (!field || field === "password") setErrorMessagePassword(passwordError);

    return { usernameError, passwordError };
  };

  // On blur, mark field as touched and validate that field
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validate(name);
  };

  // On submit, mark all as touched and validate all
  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ username: true, password: true });
    validate();
  };

  // On input, if field is touched, re-validate that field
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(e);
    if (touched[e.target.name as "username" | "password"]) {
      validate(e.target.name);
    }
  };

  return (
    <>
      <div className="self-start mb-4 ml-6">
        <button onClick={onBack} className="flex items-center text-gray-600 hover:text-green-600">
          <ChevronLeft size={20} />
        </button>
      </div>

      <div className="mb-10 ">
        <div className="w-14 h-14 flex items-center justify-center">
          <Image src="/assets/footerAssets/Vector (1).png" width={64} height={64} alt="BYTE logo" />
        </div>
      </div>

      <h2 className="text-xl sm:text-2xl font-bold md:text-3xl text-black text-center mb-10">
        {mode === "login" ? "Log in to your account" : "Create a new account"}
      </h2>

      <div className="w-full">
        <form method="POST" action="#">
          <div className="relative w-[90%] mx-auto mb-8">
            <div className={`flex flex-nowrap items-center border rounded-md overflow-hidden ${touched.username && errorMessageUsername ? "border-red-300" : "border-green-300"}`}>
              <div className="px-2 sm:px-3 py-3 flex-shrink-0">
                <UserRound size={16} className="text-gray-500" />
              </div>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Username"
                className={`flex-1 min-w-0 outline-none px-2 sm:px-3 py-2 text-black h-[50px] sm:h-[60px] border-l ${touched.username && errorMessageUsername ? "border-l-red-300" : "border-l-green-300"}`}
                onBlur={handleBlur}
              />
              {/* Show check icon if touched and no error */}
              {touched.username && !errorMessageUsername && (
                <div className="flex-shrink-0 pr-2 sm:pr-3">
                  <Check size={16} className="text-green-500" />
                </div>
              )}
            </div>
            {touched.username && errorMessageUsername && (
              <span className="absolute text-red-500 text-xs sm:text-sm -bottom-6 left-0">{errorMessageUsername}</span>
            )}
          </div>

          <div className="relative w-[90%] mx-auto mb-8">
            <div className={`flex flex-nowrap items-center border rounded-md overflow-hidden ${touched.password && errorMessagePassword ? "border-red-300" : "border-green-300"}`}>
              <div className="px-2 sm:px-3 py-3 flex-shrink-0">
                <Lock size={16} className="text-gray-500" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                className={`flex-1 min-w-0 outline-none px-2 sm:px-3 py-2 text-black h-[50px] sm:h-[60px] border-l ${touched.password && errorMessagePassword ? "border-l-red-300" : "border-l-green-300"}`}
                onBlur={handleBlur}
              />
              <button 
                type="button" 
                className="flex-shrink-0 px-2 sm:px-3" 
                onClick={onTogglePassword} 
                tabIndex={-1}
              >
                {showPassword ? (
                  <EyeOff size={16} className="text-gray-500" />
                ) : (
                  <Eye size={16} className="text-gray-500" />
                )}
              </button>
              {/* Show check icon if touched and no error */}
              {touched.password && !errorMessagePassword && (
                <div className="flex-shrink-0 pr-2 sm:pr-3">
                  <Check size={16} className="text-green-500" />
                </div>
              )}
            </div>
            {touched.password && errorMessagePassword && (
              <span className="absolute text-red-500 text-xs sm:text-sm -bottom-6 left-0">{errorMessagePassword}</span>
            )}
          </div>   
          <div className="w-[90%] mx-auto mt-6">
            <button className="bg-green-600 text-white w-full py-3 rounded-md hover:bg-green-700 transition" onClick={handleContinue}>
              Continue
            </button> 
          </div>
        </form>

        <div className="w-[90%] mx-auto flex items-center justify-center my-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-4 text-gray-500 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <div className="w-[90%] mx-auto">
          <button className="flex items-center justify-center w-full border border-gray-300 rounded-md py-2 px-4 hover:bg-green-100 transition text-black" onClick={() => onViewChange("wallet")}>
            Connect Wallet
          </button>
        </div>
      </div>
    </>
  );
};

export default MoreOptionsView;