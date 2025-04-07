  import React from 'react'
  import './Login.css'
  import image from '../../Assests/Images/Frame 1321314421.png'

import { useNavigate } from 'react-router-dom';


  const Login = () => {
    const navigation = useNavigate()
    return (
        <div className='main'>
          <div className='box' >
          <div className='Logindiv' >
            <div className='addtion-div-for-signin'>
              <h2 className='AdminCss'>Login</h2>
              <h5 className='Label'>Email</h5>
              <input className='input' placeholder='Type your email'/>
              <h5 className='label2'>Password</h5>
              <input className='input'placeholder='Type your password'/>
            
          
              <div className='btndiv'><button onClick={()=>navigation('/Admindashboard')} className='loginBtn'>Sign In</button></div> 
              </div>
            </div>
          <div className='imgDiv'>
              <img className='img' src={image}></img>
          </div>
          </div>
          </div>
    
      
    )
  }

  export default Login