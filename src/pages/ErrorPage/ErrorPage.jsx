import React from "react";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 via-white to-teal-50 px-6">
      <div className="mb-10">
        <svg
          width="240"
          height="240"
          viewBox="0 0 240 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          <circle cx="120" cy="120" r="100" fill="#d0f4de" opacity="0.6" />
          <path
            d="M80 80 L160 160 M160 80 L80 160"
            stroke="#10b981"
            strokeWidth="16"
            strokeLinecap="round"
          />
          <circle cx="80" cy="80" r="20" fill="#f87171" />
          <circle cx="160" cy="160" r="20" fill="#f87171" />
          <text
            x="120"
            y="200"
            textAnchor="middle"
            className="text-3xl font-bold fill-gray-600"
          >
            Lost?
          </text>
        </svg>
      </div>

      <h1 className="text-8xl md:text-9xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
        404
      </h1>

      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
        Page Not Found
      </h2>

      <p className="text-lg text-gray-600 text-center max-w-md mb-8">
        Sorry, the page you are looking for could not be found. It might have been moved or the link is broken.
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => navigate(-1)}
          className="px-8 py-3 bg-white text-emerald-600 border-2 border-emerald-600 rounded-full font-medium hover:bg-emerald-600 hover:text-white transition shadow-lg cursor-pointer"
        >
          ← Go Back
        </button>

        <button
          onClick={() => navigate("/")}
          className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-medium hover:from-emerald-700 hover:to-teal-700 transition shadow-lg cursor-pointer"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;