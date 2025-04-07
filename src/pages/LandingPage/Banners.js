import React from 'react';
import './styles.css'; 
import LeftImage from './LeftPhone.png'
import RightImage from './RightPhone.png'
import { Button, Text} from "../../components";
import CustomButton from 'components/CustomButton/CustomButton';
import { useNavigate } from 'react-router-dom';
const Banners = ({togglePopup}) => {
  const navigation = useNavigate()
  return (
    <div className="section">
      <div className="left">
      <div className="flex flex-col gap-1 self-stretch" style={{width:'100%'}}>
                    <h2  className="md:w-full font-[NeueMontreal] text-[60px] md:text-[35px]">
                    Optimize Your Drive with Accurate Fuel Tracking
                    </h2>
                   <p  className="w-[71%] text-[#000000] md:w-full font-[NeueMontreal] font-light  text-[18px] md:text-[16px] leading-[1.5] pl-[0.5em]">
                   Track, Analyze, and Save with Real-Time Fuel Insights for Your Vehicle
                   </p>
                  
                  </div>
                  <div className='buttondiv pl-[0.5em]' style={{paddingTop:'30px'}}>

                <CustomButton handleClick={()=>navigation('/signup')} background='red' className="w-[27%] md:w-[35%] h-[2.5em]" textButton="Signup"/>
                 
                  </div>
      </div>
      <div className="right">
        {/* Phone image on the right */}
        <img src={LeftImage} alt="user" className='imageEdit classadd'   />
        <img src={RightImage} alt="user"  className='imageEdit'  />
      </div>
    </div>
  );
}

export default Banners;
