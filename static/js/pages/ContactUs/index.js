import React, { useState, useRef } from 'react';
import axios from 'axios';
import './style.scss';
import ReCAPTCHA from 'react-google-recaptcha';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';

const CAPTCHA_KEY = '6LcgJfEmAAAAAIHjxJq0P3aHGUGKbsSjK0S6xwMz'

export const ContactUs = () => {
  const captchaRef = useRef(null)
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isRecaptchaChecked, setIsRecaptchaChecked] = useState(false);

// const Map = withScriptjs(
//     withGoogleMap(() => (
//       <GoogleMap
//         defaultZoom={15}
//         defaultCenter={{ lat: 40.8886, lng: 29.1768 }} // Center the map on the desired coordinates
//       >
//         <Marker position={{ lat: 40.8886, lng: 29.1768 }} /> // Add a marker at the desired coordinates
//       </GoogleMap>
//     ))
//   );

  const handleRecaptchaChange = (value) => {
    // value will be null if the checkbox is unchecked, or a string containing the reCAPTCHA response if checked
    const isRecaptchaChecked = value !== null;
    setIsRecaptchaChecked(isRecaptchaChecked)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('https://app.vortic-united.com/api/authentication/save-contact-form', {
        firstName,
        lastName,
        email,
        message,
      });
      
      console.log(response); // Optionally handle the response here
      
      // Clear form inputs
      setFirstName('');
      setLastName('');
      setEmail('');
      setMessage('');
      captchaRef.current.reset();
      toast.success('Your request was sent!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    } catch (error) {
      console.error(error);
    }
  };

  const isFormValid = firstName && lastName && email && isRecaptchaChecked;

  return (
    <section className='ContactUs'>
      <div className='ContactUs__first'>
        <div className='wrapper'>
          <h1>Contacts Us</h1>
        </div>
      </div>
      <div className='ContactUs__second'>
        <form className='ContactUs__second--form' onSubmit={handleSubmit}>
          <h2>Reach out for inquiries, questions, or further information</h2>
            <div className='nameRow'>
              <input
                type='text'
                placeholder='First Name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type='text'
                placeholder='Last Name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <input
              type='email'
              placeholder='Email'
              className='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder='How can we help you?'
              className='textarea'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div style={{marginTop: '16px'}}>
              <ReCAPTCHA sitekey={CAPTCHA_KEY} ref={captchaRef} onChange={handleRecaptchaChange} />
            </div>
            <button type='submit' className={`full-button ${!isFormValid ? 'disabled' : ''}`}>
              Send message
            </button>
        </form>
      </div>
      {/* <Map
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '400px' }} />}
        mapElement={<div style={{ height: '100%' }} />}
        /> */}
        <ToastContainer />
    </section>
  );
};
