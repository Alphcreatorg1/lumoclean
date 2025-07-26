import React from 'react';

export default function App() {
  return (
    <div className="app">
      <header>
        <h1>LumoClean</h1>
        <p>Professional Solar Panel Cleaning Services</p>
      </header>
      <main>
        <section>
          <h2>Why Clean Your Solar Panels?</h2>
          <p>Improve efficiency. Save money. Extend panel life.</p>
        </section>
        <section>
          <h2>Request a Quote</h2>
          <form name="quoteForm" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="quoteForm" />
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} LumoClean</p>
      </footer>
    </div>
  );
}