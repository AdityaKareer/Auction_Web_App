import React, { useState } from 'react';
import './css/contactus.css';


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        // Form data was successfully saved in the database
        console.log('Form data submitted successfully!');
      } else {
        // Handle errors
        console.error('Form data submission failed.');
      }
    } catch (error) {
      console.error('An error occurred while submitting the form:', error);
    }
  };
  
  return (
    <div className='body'>
    <div className="contact-us"> <center>
       <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d482636.98479849385!2d72.27885488906252!3d19.08125320000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8866a456c9f%3A0x8d1745d15baac575!2sDon%20Bosco%20Institute%20of%20Technology%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1696844233627!5m2!1sen!2sin"
      width="700"
      height="350"

      style={{ border: '0' }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      
    ></iframe>
    
    </center>
      {/* <h2>Contact Us</h2> */}
      <form onSubmit={handleSubmit}>
        <center>
          <p className='para'>Feedback form</p>
          <br></br>
          <div className='form2'>

          
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          </div>
        </div>
        </center>
        <center><button type="submit">Submit</button></center>
      </form>
    </div>
    </div>
  );
};

export default ContactUs;
