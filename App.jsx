import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [participants, setParticipants] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for duplicate email
    const exists = participants.some(
      (p) => p.email.toLowerCase() === email.toLowerCase()
    );

    if (exists) {
      setMessage("❌ Participant already registered!");
      return;
    }

    // Add new participant
    const newParticipant = { name, email };
    setParticipants([...participants, newParticipant]);

    // Confirmation message
    setMessage(`✅ Registration successful for ${name}!`);

    // Reset form
    setName("");
    setEmail("");
  };

  return (
    <div className="container">
      <h1>🎉 Workshop Registration</h1>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>

      {message && <p className="message">{message}</p>}

      <h2>📋 Registered Participants</h2>
      <ul>
        {participants.map((p, index) => (
          <li key={index}>
            {p.name} ({p.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
