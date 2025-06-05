import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; // Make sure your styles are applied here

const Success = () => {
  return (
    <div className="success-container">
      <div className="success-card">
        <h1>Reservation Confirmed! 🎉</h1>
        <p>
          Thank you for choosing SmartDine!
          We've received your reservation and look forward to serving you!
        </p>
        <Link to="/home" className="success-btn">Back to Home</Link>
      </div>
    </div>
  );
};

export default Success;
