import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link if using React Router
import axios from '../services/api';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/feedback', { name, email, feedback });
      setMessage('Feedback submitted successfully!');
      setName('');
      setEmail('');
      setFeedback('');
    } catch (error) {
      setMessage('Failed to submit feedback.');
    }
  }

  const scrollToFeedback = () => {
    document.getElementById('feedback').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="feedback-page">
      {/* Hero Section */}
      <section id="hero" className="hero bg-gray-300 text-gray-800 py-56">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h1 className="text-4xl font-bold mb-4">We Value Your Feedback</h1>
          <p className="text-lg mb-6">
            Share your thoughts and suggestions with us. Your feedback helps us improve our services and provide better solutions.
          </p>
          <button onClick={scrollToFeedback}  className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300">
            Give Feedback
          </button>
        </div>
      </section>

      {/* Feedback Section */}
      <section id="feedback" className="feedback bg-gray-200 py-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center px-6">
          {/* Feedback Form */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">Feedback Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="text" 
                placeholder="Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
                className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <textarea 
                placeholder="Feedback" 
                value={feedback} 
                onChange={(e) => setFeedback(e.target.value)} 
                required 
                className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500 h-32 resize-none"
              ></textarea>
              <button 
                type="submit" 
                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                Submit
              </button>
              {message && <p className="text-center mt-4 text-lg font-medium">{message}</p>}
            </form>
          </div>

          {/* Additional Content */}
          <div className="lg:w-1/2 lg:pl-8 mt-10 lg:mt-0">
            <h2 className="text-3xl font-semibold mb-4">Why Your Feedback Matters</h2>
            <p className="text-lg mb-4">
              Your insights and experiences help us understand what we are doing well and where we need to improve. 
              We are committed to using your feedback to enhance our services and provide better solutions tailored to your needs.
            </p>
            <p className="text-lg">
              Thank you for taking the time to share your thoughts. Your contribution is invaluable to us and helps drive our continuous improvement.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeedbackForm;
