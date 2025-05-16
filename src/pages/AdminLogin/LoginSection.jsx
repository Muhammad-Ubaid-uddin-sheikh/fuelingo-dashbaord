import React, { useState } from 'react';
import './Login.css';
import image from '../../Assests/Images/Frame 1321314421.png';
import { useNavigate } from 'react-router-dom';
import { AdminLoginAPi } from '../../api/ApiHandler';
import { CircularProgress } from '@mui/material';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigation = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await AdminLoginAPi('/admin/adminLogin', formData);
      if (response) {
        console.log('Login success:', response);
      
        localStorage.setItem('adminToken', response.admin.token);
        localStorage.setItem('adminEmail', response.admin.email);
          navigation('/admin-dashboard');
      }

    } catch (err) {
      console.error('Login failed:', err);
      setError('Invalid email or password!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='main'>
      <div className='box'>
        <div className='Logindiv'>
          <div className='addtion-div-for-signin'>
            <h2 className='AdminCss'>Login</h2>

            <h5 className='Label'>Email</h5>
            <input
              name="email"
              type='email'
             className='input !bg-[#f1f2f5] !py-[12px] !px-[14px] !rounded-[10px]'
              placeholder='Type your email'
              value={formData.email}
              onChange={handleChange}
            />

            <h5 className='label2'>Password</h5>
            <input
              name="password"
              type='password'
              className='input !bg-[#f1f2f5] !py-[12px] !px-[14px] !rounded-[10px]'
              placeholder='Type your password'
              value={formData.password}
              onChange={handleChange}
            />

            {error && <div className="error-message">{error}</div>}

            <div className='btndiv'>
              <button
                onClick={handleLogin}
                className='loginBtn'
                disabled={loading}
                style={{ position: 'relative', height: '40px' }}
              >
                {loading ? (
                  <CircularProgress
                    size={24}
                    style={{
                      color: 'white',
                      position: 'absolute',
                      top: '20%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  />
                ) : (
                  'Sign In'
                )}
              </button>
            </div>
          </div>
        </div>

        <div className='imgDiv'>
          <img className='img' src={image} alt="Login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
