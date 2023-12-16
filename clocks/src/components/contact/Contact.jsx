import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (!formData.name || !formData.email || !formData.message) {
      setSubmissionStatus('error');
      setTimeout(() => {
        setSubmissionStatus(null);
      }, 3000);
      return; 
    }

    try {
      const response = { ok: true };

      if (response.ok) {
        console.log('Form Data:', formData);
        setSubmissionStatus('success');
        setFormData({
          name: '',
          email: '',
          message: '',
        });

        setTimeout(() => {
          setSubmissionStatus(null);
        }, 3000);
      } else {
        setSubmissionStatus('error');

        setTimeout(() => {
          setSubmissionStatus(null);
        }, 3000);
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
      setSubmissionStatus('error');

      setTimeout(() => {
        setSubmissionStatus(null);
      }, 3000);
    }
  };

  return (
    <div>
      <div className="contact-container">
        <h1>Get in Touch</h1>
        <p>
          Feel free to reach out to us if you have any questions or inquiries about our custom clocks.
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleInputChange}></textarea>

          <button className="contact-submit-button" type="submit">Submit</button>
        </form>
        {submissionStatus === 'success' && (
          <p className="submission-success">Message sent successfully!</p>
        )}
        {submissionStatus === 'error' && (
          <p className="submission-error">Please enter valid information in all fields.</p>
        )}
      </div>
    </div>
  );
};

export default Contact;
