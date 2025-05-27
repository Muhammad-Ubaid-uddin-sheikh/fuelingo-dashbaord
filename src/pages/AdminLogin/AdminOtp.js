import React, { useState, useRef, useEffect } from 'react';
// import { Button } from 'components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import './Login.css'
import CustomButton from 'components/CustomButton/CustomButton';
const AdminOtp = ({ email }) => {
  const [otp, setOTP] = useState(['', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // State to hold error message
  const otpBoxes = Array.from({ length: 4 }, (_, index) => index);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (index, value) => {
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);

      // Move focus to the next input box
      if (value.length === 1 && index < 3) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    const otpValue = otp.join('');
    const payload = {
      otp: otpValue,
      email: email
    };
  
    try {
      const response = await axios.post(
        'https://backend.fuelingo.ae/api/admin/verifyOTP',
        payload,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
  
      const { accessToken, refreshToken, admin } = response.data;
  
      // Save tokens and admin info in localStorage
      localStorage.setItem('adminToken', accessToken);
      localStorage.setItem('refreshTokenAdmin', refreshToken);
      localStorage.setItem('adminInfo', JSON.stringify(admin));
  
      // ✅ Check if token is saved successfully
      const savedToken = localStorage.getItem('adminToken');
      if (savedToken) {
        console.log('accessToken, refreshToken, admin',accessToken, refreshToken, admin)
        toast.success('Sign in successful!');
        navigate('/admin-dashboard');
      } else {
        toast.error('Token save failed. Please try again.');
      }
  
    } catch (error) {
      console.log(payload);
      setError(error.response?.data?.msg || 'An error occurred.');
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="otp-container fade-in">
      <h2 className='AdminCss pb-4'>Enter your verification code</h2>
      <p className='paragraph-otp'> Enter 4 digit verification code sent to your registered Email Verification. </p>
      <div className="otp-input-container">
        {otpBoxes.map(index => (
          <input
            key={index}
            ref={el => inputRefs.current[index] = el}
            className="otp-input"
            type="text"
            value={otp[index]}
            maxLength={1}
            onChange={(e) => handleChange(index, e.target.value)}
          />
        ))}
             

      </div>
      {error && <p className='error-paragrhp pb-5'>{error}</p>}
      {/* <p className='paragraph-otp addtionopara'>Resend Code</p> */}
      <CustomButton textButton="Submit" height="40px" background="red" loading={loading} handleClick={handleSubmit} className="min-w-[100%] sm:px-1" >
      </CustomButton>
      
      
      <ToastContainer/>
    </div>
  );
};

export default AdminOtp;
