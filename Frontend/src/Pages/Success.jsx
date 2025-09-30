import { Link } from "react-router-dom";
import "./Success.css";

export default function Success() {
  return (
    <div
      className="success-page"
      style={{
        backgroundImage: "url('/images/reservation.jpg')", // ✅ from public/images
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      {/* Dark overlay */}
      <div className="overlay"></div>

      {/* Centered card */}
      <div className="success-card">
        <h1>Reservation Confirmed! 🎉</h1>
        <p>
          Thank you for choosing <strong>SmartDine</strong>! <br />
          We’ve received your reservation and look forward to serving you.
        </p>
        <Link to="/" className="btn btn-custom">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
