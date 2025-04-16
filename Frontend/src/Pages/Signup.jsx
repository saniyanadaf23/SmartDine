import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [otp, setOtp] = useState("");
  const [showOtpField, setShowOtpField] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const generateOtp = () => {
    // Simulating an OTP generation - In real case, you'd send this via backend
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otp);
    alert(`Your OTP is: ${otp}`); // Just for simulation/demo
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateOtp();
    setShowOtpField(true);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (otp === generatedOtp) {
      alert(`Welcome, ${formData.name}! You have successfully signed in.`);
      navigate("/home");
    } else {
      alert("Invalid OTP. Please try again.");
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

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
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
