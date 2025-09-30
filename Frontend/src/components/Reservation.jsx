import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const [order, setOrder] = useState("");
  const [partySize, setPartySize] = useState(1); // 🚀 Added party size

  const navigate = useNavigate();

  const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0];

  const handleReservation = async (e) => {
    e.preventDefault();

    if (partySize < 1 || partySize > 10) {
      toast.error("Party size must be between 1 and 10 members.");
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/reservations/send",
        { firstName, lastName, email, phone, date, time, order, partySize },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success(data.message);
      setFirstName("");
      setLastName("");
      setPhone("");
      setEmail("");
      setTime("");
      setDate("");
      setOrder("");
      setPartySize(1); // Reset party size
      navigate("/success");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="/reservation.png" alt="res" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>MAKE A RESERVATION</h1>
            <p>For Further Questions, Please Call</p>
            <form onSubmit={handleReservation}>
              <div>
  <input
    type="text"
    placeholder="First Name"
    value={firstName}
    onChange={(e) => setFirstName(e.target.value)}
    minLength="2"
    maxLength="10"
    required
  />
  <input
    type="text"
    placeholder="Last Name"
    value={lastName}
    onChange={(e) => setLastName(e.target.value)}
    minLength="2"
    maxLength="10"
    required
  />
</div>

              <div>
                <input
                  type="date"
                  placeholder="Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={tomorrow}
                  required
                />
                <input
                  type="time"
                  placeholder="Time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="email_tag"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                  required
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Party Size (1-10)"
                  min="1"
                  max="10"
                  value={partySize}
                  onChange={(e) => setPartySize(Number(e.target.value))}
                  required
                />
                <input
                  type="text"
                  placeholder="Order"
                  value={order}
                  onChange={(e) => setOrder(e.target.value)}
                  required
                />
              </div>
              <button type="submit">
                RESERVE NOW{" "}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
