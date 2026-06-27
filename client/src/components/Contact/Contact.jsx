import "./Contact.css";
import { useState } from "react";
import axios from "axios";

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaBriefcase,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/contact",
        formData
      );

      setStatus(response.data.message);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      console.error("Contact Form Error:", error);

      if (error.response) {
        console.log("Status:", error.response.status);
        console.log("Data:", error.response.data);
      }

      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="contact" id="contact">

      <div className="contact-title">
        <span>GET IN TOUCH</span>

        <h1>Contact Me</h1>

        <p>
          Interested in working together or have an opportunity?
          I'd love to hear from you.
        </p>
      </div>

      <div className="contact-container">

        {/* Left Side */}

        <div className="contact-info">

          <div className="info-card">
            <FaEnvelope className="info-icon" />

            <div>
              <h3>Email</h3>
              <p>yourmail@gmail.com</p>
            </div>
          </div>

          <div className="info-card">
            <FaMapMarkerAlt className="info-icon" />

            <div>
              <h3>Location</h3>
              <p>Bangalore, India</p>
            </div>
          </div>

          <div className="info-card">
            <FaBriefcase className="info-icon" />

            <div>
              <h3>Availability</h3>
              <p>Open for Internships</p>
            </div>
          </div>

        </div>

        {/* Right Side */}

        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">
            <FaPaperPlane />
            Send Message
          </button>

          {status && <p className="status">{status}</p>}

        </form>

      </div>

    </section>
  );
}

export default Contact;