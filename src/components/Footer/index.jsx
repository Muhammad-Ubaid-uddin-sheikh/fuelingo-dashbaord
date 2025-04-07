import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import './footer.css'
import { NavLink } from "react-router-dom";
import { Heading, Img } from "components";
// import Footerimg from '../../assets/images/image 1.png'
export default function Footer({ ...props }) {
  const [userEmail, setuserEmail] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
const navigate  = useNavigate()
  const handleInputChange = (event) => {
    setuserEmail(event.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://washta-email-931279e22f38.herokuapp.com/email', { userEmail:userEmail });
      console.log('Response:', response.data);
      // Agar response me koi specific data hai jo aap handle karna chahte hain, toh yaha par handle karein.
    } catch (error) {
      console.error('Error posting email:', error);
      // Agar koi error aata hai toh use handle karein.
    }
  };
  return (
    <footer style={{background:'black',paddingTop:'25px',paddingBottom:'25px'}} {...props}>
      <div className="container-xs flex flex-col gap-[84px] md:gap-[63px] md:p-5 sm:gap-[42px]" style={{width:'90%'}}>
        <div className="flex items-start justify-between gap-5 md:flex-col">
          <div className="flex w-[28%] flex-col gap-5 md:w-full">
            {/* <img src={Footerimg} alt="footerlogo" className="w-[210px]" /> */}
            <div style={{display:'flex',alignItems:'center',gap:5,marginTop:'1em'}}>
            {/* <Link to='/'> */}
  <Img src="images/logo.png" alt="Sidebar Logo" className="h-[4.00rem] object-contain cursor-pointer" onClick={()=>navigate('/')} />
  {/* </Link> */}
  <h2 onClick={()=>navigate('/')}  className="text-[white] font-light font-[NeueMontreal] cursor-pointer text-[2em]">
  Fuelingo
          </h2>


  </div>
           <h2 className="text-[white] font-light font-[NeueMontreal]">
              If you don&#39;t find an answer to your question, contact us, and our team will get in touch with you.
              </h2>
          </div>
          <div className="flex flex-col gap-3.5">
          <h2 className="text-[white] font-medium font-[NeueMontreal]">
              Links
              </h2>
            <Link to='/'>
            <a  rel="noreferrer">
            <h2 className="font-light font-[NeueMontreal] text-[white]">Home</h2>
            </a>
            </Link>
          </div>
          <div className="footerclassName">
            {/* <Text size="20px" as="p" className="text-center" > */}
              <p className="font-light font-[NeueMontreal] text-[white]" >
              Join our newsletter to stay up to date on features and releases.
              </p>
             
            {/* </Text> */}
            {/* <div className='suscribe-btn-din'>
            <form style={{display:'contents'}} >
      <input
      color="white"
        type="text"
        value={userEmail}
        onChange={handleInputChange}
        required
        placeholerColor={'white'}
        placeholder="Enter Text"
        style={{ marginRight: '10px', textAlign: 'left',border:'none',color:'white',padding:'14px 10px',paddingLeft:'20px',placeholder:'white',}}
      />
      <button onClick={handleSubmit} type="submit" style={{ textAlign: 'left',
    border: '1px solid white',
    padding: '7px 20px',
    borderRadius: '35px',
    background: 'white',marginRight:'10px' }}>Subscribe</button>
    </form>
    </div>
     */}
          </div>
        </div>
        <div className="flex items-center justify-between gap-5 md:flex-col">
        <h2 className="text-[white] font-light font-[NeueMontreal]">
        © 2025 Fuelingo. All rights reserved.
              </h2>
          {/* <Text size="20px" as="p" className="self-end">
            © 2024 Washta. All rights reserved.
          </Text> */}
          <ul className="flex flex-wrap items-center gap-[25px]">
            <li>
            <p className="paragraphp lipara">
            <NavLink to='/PrivacyPolicy' className="text-[white] font-medium font-[NeueMontreal]"> Privacy Policy </NavLink> 
              </p>
              {/* <a href="#" className="self-end">
                <Text size="20px" as="p">Privacy Policy</Text>
              </a> */}
            </li>
            <li>
              
            <p className="paragraphp lipara">
            <NavLink to='/PrivacyPolicy' className="text-[white] font-medium font-[NeueMontreal]">  Terms of Service </NavLink> 
           
              </p>
              {/* <a href="#" className="self-start">
                <Text size="20px" as="p">Terms of Service</Text>
              </a> */}
            </li>
            <li>
            <p className="paragraphp lipara">
            <NavLink to='/PrivacyPolicy' className="text-[white] font-medium font-[NeueMontreal]">  Cookies Settings </NavLink> 
           
              </p>
              {/* <a href="#" className="self-end">
                <Text size="20px" as="p">Cookies Settings</Text>
              </a> */}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
