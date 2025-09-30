// Frontend/src/components/Signup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [otp, setOtp] = useState("");
  const [showOtpField, setShowOtpField] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOtpChange = (e) => setOtp(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (!formData.email) {
      setMessage("Please enter an email");
      return;
    }
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/api/send-otp", {
        email: formData.email,
      });
      if (res.status === 200) {
        setShowOtpField(true);
        setMessage("OTP sent — check your email.");
      } else {
        setMessage("Failed to send OTP. Try again.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Server error. Check backend or connection.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (!otp) {
      setMessage("Please enter the OTP");
      return;
    }
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/api/verify-otp", {
        email: formData.email,
        otp,
      });
      if (res.status === 200) {
        setMessage("");
        alert(`Welcome, ${formData.name || "guest"}!`);
        navigate("/home"); // adjust if your route is different
      } else {
        setMessage("Invalid OTP. Try again.");
      }
    } catch (err) {
      console.error(err);
      setMessage("OTP verification failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-hero">
      <div className="signup-card" role="region" aria-label="Sign in card">
        <div className="card-left">
          <div className="brand">
            <h1>SmartDine</h1>
          </div>

          <form
            onSubmit={showOtpField ? handleVerifyOtp : handleSubmit}
            className="signup-form-inner"
            aria-live="polite"
          >
            <h2>Sign In</h2>

            {!showOtpField && (
              <>
                <label className="label">Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Your name"
                />

                <label className="label">Email</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </>
            )}

            {showOtpField && (
              <>
                <label className="label">Enter OTP</label>
                <input
                  name="otp"
                  value={otp}
                  onChange={handleOtpChange}
                  type="text"
                  placeholder="6-digit OTP"
                  maxLength={6}
                  inputMode="numeric"
                  required
                />
              </>
            )}

            {message && <div className="message">{message}</div>}

            <button type="submit" className="signup-btn" disabled={loading}>
              {loading ? "Please wait..." : showOtpField ? "Verify OTP" : "Sign In"}
            </button>
          </form>
        </div>

        <div className="card-right" aria-hidden="true">
          <img src="/images/signup-food.jpg" alt="Delicious food" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
