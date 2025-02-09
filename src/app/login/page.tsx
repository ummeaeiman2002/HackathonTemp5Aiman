"use client";
import { useState } from "react";
import Image from "next/image";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let isValid = true;
    const errorMessages = {
      email: "",
      password: "",
    };

    // Validate email
    if (!email) {
      isValid = false;
      errorMessages.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      isValid = false;
      errorMessages.email = "Invalid email format";
    }

    // Validate password
    if (!password) {
      isValid = false;
      errorMessages.password = "Password is required";
    } else if (password.length < 6) {
      isValid = false;
      errorMessages.password = "Password must be at least 6 characters long";
    }

    setErrors(errorMessages);

    if (isValid) {
      console.log("Form submitted successfully");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="flex w-full max-w-4xl shadow-lg bg-white rounded-lg overflow-hidden">
        {/* Left Side: Image */}
        <div className="hidden md:block w-1/2">
          <Image
            src={"/register/a.jpg"}
            alt="Login"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full md:w-1/2 p-8">
          {/* Logo */}
          <div className="text-center mb-6">
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Welcome Back
          </h2>

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200 font-semibold"
            >
              Login
            </button>
          </form>

          {/* Forgot Password & Register Links */}
          <div className="text-center mt-6 space-y-2">
            <a
              href="/forgot-password"
              className="text-sm text-blue-500 hover:underline"
            >
              Forgot Password?
            </a>
            <p>
              Don’t have an account?{" "}
              <a
                href="/register"
                className="text-sm text-blue-500 hover:underline"
              >
                Register
              </a>
            </p>
          </div>

         
        </div>
      </div>
    </div>
  );
}
