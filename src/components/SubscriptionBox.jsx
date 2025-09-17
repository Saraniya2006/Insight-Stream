import React, { useState } from 'react';
import '/src/styles/subscriptionbox.css';

const SubscriptionBox = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setMessage('Invalid email address.');
      setIsError(true);
      return;
    }
    setMessage('Thank you for subscribing!');
    setIsError(false);
    setEmail('');
  };

  return (
    <div className="subscription-box">
      <h3>Stay Updated with Breaking News</h3>
      <form onSubmit={handleSubscribe} className="subscription-form">
        <input
          type="email"
          className="email-input"
          placeholder="Enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="subscribe-button">Subscribe</button>
      </form>
      {message && (
        <div className={`subscription-message ${isError ? 'error' : 'success'}`}>
          {message}
        </div>
      )}
    </div>
  );
};

export default SubscriptionBox;
