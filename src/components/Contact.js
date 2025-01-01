import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState(""); // State for form submission status

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from redirecting
    const form = e.target;

    const formData = new FormData(form); // Capture form data
    const payload = Object.fromEntries(formData.entries()); // Convert form data to JSON

    try {
      const response = await fetch("https://formspree.io/f/mvggwggj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus("success");
        form.reset(); // Reset form fields after successful submission
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }

    // Automatically clear status after 3 seconds
    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">Get in Touch</h2>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10">
          {/* Contact Info */}
          <div className="w-full lg:w-1/3 card shadow-md rounded-lg p-8 text-left">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <p className="mb-4">📍 <strong>Location:</strong> New Delhi, India</p>
            <p className="mb-4">
              📧 <strong>Email:</strong>{" "}
              <a
                href="mailto:utkarshgupta2255@gmail.com"
                className="text-blue-500 hover:underline"
              >
                utkarsh2255.iimt@gmail.com
              </a>
            </p>
            <p className="mb-4">📞 <strong>Phone:</strong> +91 90122 36502</p>
            <p>
              🌐 <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/utkarsh-gupta-b17a44192"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                linkedin.com/in/utkarsh-gupta
              </a>
            </p>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/3 card shadow-md rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-left font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-left font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-left font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Send Message
              </button>
            </form>
            {/* Toast Notifications */}
            {status === "success" && (
              <div className="mt-4 text-green-500">Message sent successfully!</div>
            )}
            {status === "error" && (
              <div className="mt-4 text-red-500">
                Something went wrong. Please try again.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
