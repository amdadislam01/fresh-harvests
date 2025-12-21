import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';

const AuthModal = ({ isOpen, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg p-8 w-full max-w-md relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-light"
        >
          <RxCross2 />
        </button>
 
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 rubik-font">
          {isSignup ? 'Register' : 'Login'}
        </h2>

        <form className="space-y-6">
          {isSignup && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>

                
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full pl-4 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />

            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <div className="relative">
              
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-4 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
             
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                className="w-full pl-4 pr-12 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>
          </div>

          {!isSignup && (
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-orange-500 hover:underline">
                Forgot Password
              </a>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-md transition duration-200 shadow-md rubik-font cursor-pointer"
          >
            {isSignup ? 'Register' : 'Login'}
          </button>
        </form>

        <div className="my-6 text-center text-gray-500 text-sm">
          Or {isSignup ? 'Sign up' : 'Sign in'} with
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-3 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition">
            <FcGoogle size={24} />
            <span className="text-gray-700 font-medium rubik-font">Google</span>
          </button>
          <button className="flex items-center justify-center gap-3 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition">
            <BsFacebook size={24} className="text-blue-600" />
            <span className="text-gray-700 font-medium rubik-font">Facebook</span>
          </button>
        </div>

        <div className="mt-8 text-center text-sm text-gray-600">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{' '}
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="text-orange-500 font-medium hover:underline rubik-font cursor-pointer"
          >
            {isSignup ? 'Login' : 'Sign up'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
