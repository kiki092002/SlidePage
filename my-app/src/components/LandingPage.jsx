import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add validation or auth here later
    navigate("/app/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="flex flex-col lg:flex-row items-center max-w-5xl w-full shadow-md rounded-lg overflow-hidden">
        {/* Left Section */}
        <div className="flex flex-col items-center justify-center p-10 bg-[#f7f3eb] w-full lg:w-1/2 text-center">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkEvFT3f-8CyF8OWV_OgDtdhjp0MpOBGNfkTK2wksqrmdWQtvxDNPWpKA7G_ojUJ7bYu6QwvqTg9qLnlyDKfacXx68nOM_jMvyhXiyS_JqRpnY3lRLgSZdYx9noVV-jzTYtcNZ5XAbeIeX07bVgj4gPzsPNYJ9oTt09PT8pt-l8_q4xPvMky8v86nxOmgJrDQDBIHBAT00MviIm0vbvxZ8JRDco1ZqlYhN8GSWNp1L1hKrxhxrs5LICOxai4gIqWtZeGYjj5koYwc"
            alt="Students studying"
            className="w-full max-w-xs mx-auto mb-6"
          />
          <h1 className="text-3xl md:text-4xl font-extrabold text-black leading-snug">
            Unlock Your <br />
            Academic <br />
            Potential with <br />
            <span className="text-[#1a8cff]">SlideSage</span>
          </h1>
          <p className="mt-6 text-sm text-black max-w-sm">
            Transform your presentation slides into powerful study tools.
            SlideSage helps you learn smarter, not harder.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 bg-white p-10">
          <form className="flex flex-col space-y-4" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-[#1a8cff] text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              Log In
            </button>
            <p className="text-center text-gray-500">Or continue with</p>
            <div className="flex justify-center gap-4">
              <button
                type="button"
                className="bg-gray-100 px-6 py-2 rounded-lg font-semibold"
              >
                Google
              </button>
              <button
                type="button"
                className="bg-gray-100 px-6 py-2 rounded-lg font-semibold"
              >
                LinkedIn
              </button>
            </div>
            <p className="text-center text-sm text-gray-500">
              Don’t have an account?{" "}
              <a href="#" className="text-[#1a8cff] hover:underline">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
