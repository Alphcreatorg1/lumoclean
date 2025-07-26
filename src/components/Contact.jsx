import React from 'react';

export default function Contact() {
  return (
    <div className="page">
      <h2>Contact Us</h2>
      <form className="form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
      <p className="footer">© 2025 LumoClean · Melbourne, Australia</p>
    </div>
  );
}