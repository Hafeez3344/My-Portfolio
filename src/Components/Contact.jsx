import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from "react-icons/fa";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    to_name: "Hafeez Rahman", // Your name
    message: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_jaw01kk", // Your EmailJS service ID
        "template_fp9utuc", // Your EmailJS template ID
        formData,
        "4fgAXGqkIwB9BvBHA" // Your EmailJS user ID
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent successfully!");
          setFormData({ from_name: "", message: "", email: "" }); // Clear the form after submission
        },
        (error) => {
          console.log("Error sending email:", error.text);
          alert("Failed to send the message, please try again.");
        }
      );
  };

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
              Let's Talk
            </h3>
            <p>I'm open to discussing web development projects or partnership opportunities.</p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-green-400 mr-2" />
              <a href="mailto:hafeez.rahman4455@gmail.com" className="hover:underline">
                hafeez.rahman4455@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block text-green-400 mr-2" />
              <span>+92 3009328856</span>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-green-400 mr-2" />
              <span>Lahore, Pakistan</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="from_name">Your Name</label>
                <input
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-800 border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-800 border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-800 border-gray-600 focus:outline-none focus:border-green-400"
                  rows="5"
                  placeholder="Enter Your Message"
                  required
                />
              </div>
              <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
