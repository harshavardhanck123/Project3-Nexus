import React, { useState } from 'react';
import axios from '../services/api';


const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/feedback', { name, email, feedback });
      setMessage('Feedback submitted successfully!');
    } catch (error) {
      setMessage('Failed to submit feedback.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="feedback-form">
      <h3>Feedback Form</h3>
      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
      />
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required 
      />
      <textarea 
        placeholder="Feedback" 
        value={feedback} 
        onChange={(e) => setFeedback(e.target.value)} 
        required 
      ></textarea>
      <button type="submit">Submit</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default FeedbackForm;
