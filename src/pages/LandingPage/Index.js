
import React, { useEffect, useState } from "react";
import {Img } from "../../components";
import HomeColumnBetter from "../../components/HomeColumnBetter";
import History from './History.svg'
import Ellise from './Heroverly.png'
import Imgage from '../../Assests/Images/img.png'
import CardRepair from './FuelingoIcons-04.svg'
import Squareimg from './realtime.svg'
import './styles.css'
import Optimize from './routeomtiize.svg'
import Banners from "./Banners";
import Header from "pages/header/Header";
import CustomButton from "components/CustomButton/CustomButton";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";
import CardResponsive from "./cardResponsive";

export default function Home1Page() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
const navigation = useNavigate()
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      {/* <Helmet>
        <title>Washta APP</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet> */}
<Header/>
      {/* home main section */}
      <div className="w-full bg-white-A700" style={{position:'relative'}}>
        
        <div className="flex flex-col items-end">
          {/* hero image section */}
          <Img src={Ellise} alt="image" object className=" h-[200px]w-[100%] object-contain" style={{position:'absolute',width:'70%'}} />
          <div className="relative  flex flex-col items-center gap-[124px] self-stretch md:gap-[93px] sm:gap-[62px]">
            
            <Banners/>
            
            <div className="container-xs flex flex-col items-center gap-[16px] md:gap-16 md:p-5 sm:gap-[43px]">
              {/* features section */}
              <div className="flex w-[94%] flex-col items-center gap-[10px] px-[7px] pt-[7px] md:w-full md:gap-[75px] sm:gap-[50px]">
              <h2  className="md:w-full font-[NeueMontreal] text-[44px] md:text-[35px]  text-center">
              How It Works
  </h2>             
               
  <p  className="w-[71%] text-[#000000] md:w-full font-[NeueMontreal] font-light text-[18px]  md:text-[16px] leading-[1.5] pl-[0.5em] text-center">
  Download Fuelingo, add your vehicle details, and effortlessly track fuel efficiency in real-time. Analyze performance, optimize your driving habits, and save on fuel costs. Easily find trusted car repair services nearby and stay updated with timely reminders for refills and maintenance—all in one simple, user-friendly app!               </p>
              </div>
              <CardResponsive/>
              <div className="card-name-btn">


            
              <div className="flex gap-[45px] self-stretch md:flex-col w-[91%] m-auto pt-[4em]">
                 <div className="flex w-full flex-col gap-[35px]">
                  {[...Array(1)].map((d, index) => (
                    <HomeColumnBetter
                      image={Squareimg}
                      text="  Real-Time Fuel Average Tracking:                      "
                      text1=" Get accurate fuel consumption stats while you drive, helping you understand your car’s efficiency on the go.                "
                      key={"listbetter" + index}
                      className="flex flex-1 flex-col items-start justify-center rounded-[26px] border border-solid border-black-900_7f p-[25px] sm:p-5"
                    />
                  ))}
                   <HomeColumnBetter
                      image={Optimize}
                      text=" Route Optimization"
                      text1="Compare routes to find the most fuel-efficient path to your destination. Save time, fuel, and money with smarter navigation. "
                      key={"listbetter"}
                      className="flex flex-1 flex-col items-start justify-center rounded-[26px] border border-solid border-black-900_7f p-[25px] sm:p-5"
                    />
                </div>
                <div className="relative h-[629px] w-full rounded-[26px] border border-solid border-black-900_26 bg-red-500 bg-[url(/public/images/img_frame_1171276568.png)] bg-cover bg-no-repeat px-[41px] md:px-5 md:pt-5">
                  <div className="absolute  left-0 right-0 m-auto h-[665px]  md:h-auto">
                    <Img src={Imgage} alt="main" className="h-[630px] w-full object-cover" style={{borderRadius:'27px'}} />
                   
                  </div>
                </div>
                <div className="flex w-full flex-col gap-[35px]">
                  {[...Array(1)].map((d, index) => (
                    <HomeColumnBetter
                      image={History}
                      text="Historical Data & Trends"
                      text1=" Access your car’s fuel performance history and analyze trends over time to keep your vehicle in peak condition."
                      key={"listautomated" + index}
                      className="flex flex-1 flex-col items-start justify-center rounded-[26px] border border-solid border-black-900_7f p-[25px] sm:p-5"
                    />
                  ))}
                   <HomeColumnBetter
                      image={CardRepair}
                      text=" Car Repair & Service Finder:"
                      text1="Easily locate trusted repair shops and service providers in your area. Compare prices, ratings, and reviews to get the best deals for your car's maintenance and repairs."
                      key={"listbetter"}
                      className="flex flex-1 flex-col items-start justify-center rounded-[26px] border border-solid border-black-900_7f p-[25px] sm:p-5"
                    />
                </div> 
              </div>
              </div>
              <CustomButton className="w-[13%] md:w-[30%] h-[2.5em] mt-2 " background='red'  textButton="Signup" handleClick={()=>navigation('/signup')}/>
            </div>
           
           
    <div className="flex w-[94%] flex-col items-center gap-[10px] px-[7px] pt-[7px] md:w-full md:gap-[75px] sm:gap-[50px]">
    <h2 className="text-[44px] md:text-[35px] font-[NeueMontreal] text-center">
    Why Choose Us  <span className="text-[#EA352B]">?</span>
  </h2>             
               
  <p  className="w-[71%] text-[#000000] md:w-full font-[NeueMontreal] font-light text-[18px] md:text-[16px] leading-[1.5] pl-[0.5em] text-center">
  Welcome to Fuelingo, the ultimate tool to help you monitor your car’s fuel efficiency effortlessly. Whether you’re a daily commuter, road trip enthusiast, or business fleet manager, our app empowers you to make smarter decisions about your vehicle’s performance and fuel consumption.
               </p>
              </div>
    
            {/* faq section */}
            <div className="container-xs px-36 md:p-5 md:px-5">
              <div className="flex items-center justify-center gap-2.5 rounded-[26px] bg-[#EA352B] p-[50px] md:flex-col md:p-5">
                <div className="flex flex-1 flex-col items-start gap-1 pt-[5px] md:self-stretch">
                <h2  className="md:w-full font-[NeueMontreal] text-[30px] md:text-[25px]">
                Get Notified When Our App Launches! 
  </h2>         
                 
  <p  className="w-[71%] text-[white] md:w-full font-[NeueMontreal] font-light text-[18px] md:text-[15px] leading-[1.5]">
  If you don&#39;t find an answer to your question, contact us, and our team will get in touch with
                    you.
               </p>
            
                </div>
                {/* <Button onClick={togglePopup} shape="round" className="min-w-[150px] md:p-5 sm:px-5" style={{fontSize:'15px'}}>
                Notify me
                </Button> */}
                <CustomButton background='red' className="w-[13%] md:w-[30%] bg-[black] h-[2.5em]"  textButton="Signup" handleClick={()=>navigation('/signup')}/>
              </div>
            </div>
            {isPopupOpen && (
              <div>
                 {/* <Popup  Cross={togglePopup}/> */}
                </div>
       
      )}
            {/* footer section */}
            <Footer className="flex items-center justify-center self-stretch bg-indigo-300 py-[46px] md:py-5" />
          </div>
        </div>
      </div>
    </>
  );
}
