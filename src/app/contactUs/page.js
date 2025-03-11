"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    messageType: "",
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    // If sending to backend, replace console.log with a fetch request
    // fetch("/api/contact", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // }).then(response => response.json())
    //   .then(data => console.log("Success:", data))
    //   .catch(error => console.error("Error:", error));
  };

  return (
    <div className="max-w-[100%] mx-auto p-6 bg-[#F7FAFC] rounded-lg">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
        Contact Us
      </h2>
      <p className="text-center text-gray-600 mb-6">
        We would like to hear from you! Please choose the type of message you
        want to send.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Message Type */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Message Type<span className="text-red-500">*</span>
          </label>
          <select
            name="messageType"
            value={formData.messageType}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="suggestion">I have a suggestion</option>
            <option value="feedback">I want to give feedback</option>
            <option value="advertising">I want advertising</option>
            <option value="business">I have business inquiries</option>
            <option value="copyright">About copyright</option>
            <option value="complaint">I have a complaint</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Name Field */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Message Field */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-[30%] bg-[#2B6CB0] text-white font-semibold p-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
