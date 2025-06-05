import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [otp, setOtp] = useState("");
  const [showOtpField, setShowOtpField] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/send-otp", {
        email: formData.email, // ✅ use actual user email
      });

      if (response.status === 200) {
        alert("OTP sent to your email!");
        setShowOtpField(true);
      } else {
        alert("Failed to send OTP. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Server error. Please check your connection.");
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/verify-otp", {
        email: formData.email,
        otp: otp,
      });

      if (response.status === 200) {
        alert(`Welcome, ${formData.name}! You have successfully signed in.`);
        navigate("/home");
      } else {
        alert("Invalid OTP. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("OTP verification failed.");
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={showOtpField ? handleVerifyOtp : handleSubmit}>
        <h2>Sign In</h2>

        {!showOtpField && (
          <>
            <div className="input-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </>
        )}

        {showOtpField && (
          <div className="input-group">
            <label>Enter OTP</label>
            <input
              type="text"
              name="otp"
              value={otp}
              onChange={handleOtpChange}
              required
              maxLength={6}
            />
          </div>
        )}

        <button type="submit" className="signup-btn">
          {showOtpField ? "Verify OTP" : "Sign In"}
        </button>
      </form>
    </div>
  );
};

export default Signup;
