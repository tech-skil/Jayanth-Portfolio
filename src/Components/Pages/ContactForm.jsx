import React, { useState } from "react";
import { Mail, User, MessageSquare, Send, Phone, MapPin } from "lucide-react";
import contact from "../../assets/images/contacts.png";
import { div } from "framer-motion/client";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setShowSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setShowSuccess(false), 3000);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (  
    <div className="container mx-auto">
    <div className="max-w-[90%] container mx-auto pt-2 mb-[10rem]">
      <div className="text-center  mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have a question or want to work together? I'd love to hear from you!
        </p>
      </div>

      <div className="bg-white  mx-auto rounded-2xl shadow-xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Left Section with SVG Animation */}
          <div className="w-full lg:w-5/12 bg-purple-700 p-8 lg:p-12">
            <div className="relative h-full min-h-[300px] overflow-hidden">
              {/* Laptop SVG - Centered positioning */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px]">
                <svg
                  viewBox="0 0 800 600"
                  className="w-full h-full"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {/* Background circles */}
                  <g className="opacity-20">
                    <circle
                      cx="400"
                      cy="300"
                      r="200"
                      className="fill-purple-600"
                    />
                    <circle
                      cx="400"
                      cy="300"
                      r="150"
                      className="fill-purple-500"
                    />
                  </g>

                  {/* Floating elements */}
                  <g className="animate-bounce">
                    <circle
                      cx="250"
                      cy="150"
                      r="20"
                      className="fill-purple-400/50"
                    />
                    <circle
                      cx="550"
                      cy="200"
                      r="15"
                      className="fill-blue-400/50"
                    />
                    <circle
                      cx="500"
                      cy="450"
                      r="25"
                      className="fill-green-400/50"
                    />
                  </g>

                  {/* Connection lines */}
                  <path
                    d="M250,150 Q400,300 550,200"
                    className="stroke-purple-300/30 stroke-2 fill-none"
                  >
                    <animate
                      attributeName="d"
                      values="M250,150 Q400,300 550,200;M250,160 Q400,310 550,210;M250,150 Q400,300 550,200"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </path>

                  {/* Laptop */}
                  <g transform="translate(0, 50)">
                    <rect
                      x="300"
                      y="250"
                      width="200"
                      height="120"
                      rx="10"
                      className="fill-gray-800"
                    />
                    <rect
                      x="310"
                      y="150"
                      width="180"
                      height="120"
                      rx="5"
                      className="fill-gray-700"
                    >
                      <animate
                        attributeName="opacity"
                        values="1;0.8;1"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </rect>

                    {/* Screen content */}
                    <g>
                      <rect
                        x="320"
                        y="160"
                        width="100"
                        height="8"
                        rx="2"
                        className="fill-blue-400"
                      >
                        <animate
                          attributeName="width"
                          values="0;100;80;100"
                          dur="3s"
                          repeatCount="indefinite"
                        />
                      </rect>
                      <rect
                        x="320"
                        y="175"
                        width="140"
                        height="8"
                        rx="2"
                        className="fill-purple-400"
                      >
                        <animate
                          attributeName="width"
                          values="0;140;120;140"
                          dur="3s"
                          repeatCount="indefinite"
                        />
                      </rect>
                      <rect
                        x="320"
                        y="190"
                        width="80"
                        height="8"
                        rx="2"
                        className="fill-green-400"
                      >
                        <animate
                          attributeName="width"
                          values="0;80;60;80"
                          dur="3s"
                          repeatCount="indefinite"
                        />
                      </rect>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-7/12 p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors
                ${
                  errors.name
                    ? "border-red-500 focus:ring-red-200"
                    : "border-gray-300 focus:ring-purple-200 focus:border-purple-500"
                }`}
                    placeholder="John Doe"
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors
                ${
                  errors.email
                    ? "border-red-500 focus:ring-red-200"
                    : "border-gray-300 focus:ring-purple-200 focus:border-purple-500"
                }`}
                    placeholder="john@example.com"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Phone Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number (Optional)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500 transition-colors"
                    placeholder="+1 (234) 567-8900"
                  />
                </div>
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-gray-400" />
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors
                ${
                  errors.message
                    ? "border-red-500 focus:ring-red-200"
                    : "border-gray-300 focus:ring-purple-200 focus:border-purple-500"
                }`}
                    placeholder="Your message here..."
                  />
                </div>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full sm:w-auto px-6 py-3 bg-purple-600 text-white rounded-lg font-medium
              flex items-center justify-center space-x-2
              transform transition-all duration-200
              ${
                isSubmitting
                  ? "opacity-75 cursor-not-allowed"
                  : "hover:bg-purple-700 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
              }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
};

export default ContactForm;
