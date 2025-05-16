
// import React, { useEffect, useState } from "react";
// import {Img } from "../../components";
// import HomeColumnBetter from "../../components/HomeColumnBetter";
// import History from './History.svg'
// import Ellise from './Heroverly.png'
// import Imgage from '../../Assests/Images/updateImage.png'
// import CardRepair from './FuelingoIcons-04.svg'
// import Squareimg from './realtime.svg'
// import './styles.css'
// import gsap from 'gsap';
// import Optimize from './routeomtiize.svg'
// import Banners from "./Banners";
// import Header from "pages/header/Header";
// import CustomButton from "components/CustomButton/CustomButton";
// import Footer from "components/Footer";
// import { useNavigate } from "react-router-dom";
// import CardResponsive from "./cardResponsive";
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// export default function Home1Page() {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
// const navigation = useNavigate()
//   const togglePopup = () => {
//     setIsPopupOpen(!isPopupOpen);
//   };
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     // Animate the text to move up when it comes into view during scroll
//     gsap.fromTo(
//       ".animate-scroll-up", // Class for the element to animate
//       {
//         y: 100, // Start position: below the screen
//         opacity: 0, // Start with the text hidden
//       },
//       {
//         scrollTrigger: {
//           trigger: ".animate-scroll-up", // Element that triggers the animation
//           start: "top 80%", // Trigger the animation when the top of the element hits 80% of the viewport height
//           end: "top 50%", // End animation when top reaches 50% of the viewport height
//           scrub: true, // Smooth scroll effect
//         },
//         y: 0, // End position: the text moves to its normal position
//         opacity: 1, // End with the text fully visible
//         duration: 1.5, // Duration of the animation
//         ease: "power3.out", // Easing for smooth transition
//       }
//     );
//   }, []);
//   return (
//     <>
//       {/* <Helmet>
//         <title>Washta APP</title>
//         <meta name="description" content="Web site created using create-react-app" />
//       </Helmet> */}
// <Header/>
//       {/* home main section */}
//       <div className="w-full bg-white-A700" style={{position:'relative'}}>
        
//         <div className="flex flex-col items-end">
//           {/* hero image section */}
//           <Img src={Ellise} alt="image" object className=" h-[200px]w-[100%] object-cover absolute" style={{position:'absolute',width:'70%'}} />
//           <div className="relative  flex flex-col items-center gap-[124px] self-stretch md:gap-[93px] sm:gap-[62px]">
            
//             <Banners/>
            
//             <div className="container-xs flex flex-col items-center gap-[16px] md:gap-16 md:p-5 sm:gap-[43px]">
//               {/* features section */}
//               <div className="flex w-[94%] flex-col items-center gap-[10px] px-[7px] pt-[7px] md:w-full md:gap-[75px] sm:gap-[50px]">
//               {/* <h2  className="animate-3d-text md:w-full font-[NeueMontreal] text-[44px] md:text-[35px]  text-center">
//               How It Works
//   </h2>              */}
//   <h2 className="animate-scroll-up md:w-full font-[NeueMontreal] text-[44px] md:text-[35px] text-center">
//           How It Works
//         </h2>
//   <p  className="animate-scroll-up w-[71%] text-[#000000] md:w-full font-[NeueMontreal] font-light text-[18px]  md:text-[16px] leading-[1.5] pl-[0.5em] text-center">
//   Download Fuelingo, add your vehicle details, and effortlessly track fuel efficiency in real-time. Analyze performance, optimize your driving habits, and save on fuel costs. Easily find trusted car repair services nearby and stay updated with timely reminders for refills and maintenance—all in one simple, user-friendly app!               </p>
//               </div>
//               <CardResponsive/>
//               <div className="card-name-btn mt-[8em]">
//   <div className="flex flex-row justify-between items-start w-[100%] m-auto pt-[4em] gap-[2em] md:flex-col relative">
    
//     <div style={{position:'absolute',width:'30%'}} className="top-[-3em] left-[-4em]">
//     <HomeColumnBetter 
      
//         image={Squareimg}
//         text="Real-Time Fuel Average Tracking"
//         text1="Get accurate fuel consumption stats while you drive, helping you understand your car’s efficiency on the go."
//         className="flex flex-col items-start justify-center rounded-[26px] border border-solid border-black-900_7f p-[25px] sm:p-5"
//       />
//       </div>
//       <div style={{position:'absolute',width:'30%'}} className="top-[-3em] right-[-4em]">
//       <HomeColumnBetter 
//     image={Optimize}
//     text="Historical Data & Trends"
//     text1="Access your car’s fuel performance history and analyze trends over time."
//     className="flex flex-col items-start justify-center rounded-[26px] border border-solid border-black-900_7f p-[25px] sm:p-5"
//       />
//       </div>
//     <div className="w-[100%] md:w-full flex justify-center">
//       <Img
//         src={Imgage}
//         alt="main"
//         className="h-[34em] w-full  object-contain  "
//         style={{ borderRadius: "27px" }}
//       />
//     </div>
//     <div style={{position:'absolute',width:'30%'}} className="bottom-[-5em] right-[-4em]">
//       <HomeColumnBetter 
//     image={History}
//     // style={{marginTop:'-10em'}}
//     text="Route Optimization"
//     text1="Compare routes to find the most fuel-efficient path to your destination."
//     className="flex flex-col items-start justify-center rounded-[26px] border border-solid border-black-900_7f p-[25px] sm:p-5"
//       />
//       </div>
//       <div style={{position:'absolute',width:'30%'}} className="bottom-[-5em] left-[-4em]">
//       <HomeColumnBetter 
   
//     // style={{marginTop:'-10em'}}
//     image={CardRepair}
//         text="Car Repair & Service Finder"
//         text1="Easily locate trusted repair shops and compare prices, ratings, and reviews."
//         className="flex flex-col items-start justify-center rounded-[26px] border border-solid border-black-900_7f p-[25px] sm:p-5"
//       />
//       </div>
   
//   </div>
// </div>

//               <CustomButton className="w-[13%] md:w-[30%] h-[2.5em] mt-2 " background='red'  textButton="Signup" handleClick={()=>navigation('/signup')}/>
//             </div>
           
           
//     <div className="flex w-[94%] flex-col items-center gap-[10px] px-[7px] pt-[7px] md:w-full md:gap-[75px] sm:gap-[50px]">
//     <h2 className="animate-scroll-up text-[44px] md:text-[35px] font-[NeueMontreal] text-center">
//     Why Choose Us  <span className="text-[#EA352B]">?</span>
//   </h2>             
               
//   <p  className="w-[71%] text-[#000000] md:w-full font-[NeueMontreal] font-light text-[18px] md:text-[16px] leading-[1.5] pl-[0.5em] text-center">
//   Welcome to Fuelingo, the ultimate tool to help you monitor your car’s fuel efficiency effortlessly. Whether you’re a daily commuter, road trip enthusiast, or business fleet manager, our app empowers you to make smarter decisions about your vehicle’s performance and fuel consumption.
//                </p>
//               </div>
    
//             {/* faq section */}
//             <div className="container-xs px-36 md:p-5 md:px-5">
//               <div className="flex items-center justify-center gap-2.5 rounded-[26px] bg-[#EA352B] p-[50px] md:flex-col md:p-5">
//                 <div className="flex flex-1 flex-col items-start gap-1 pt-[5px] md:self-stretch">
//                 <h2  className="md:w-full font-[NeueMontreal] text-[30px] md:text-[25px]">
//                 Get Notified When Our App Launches! 
//   </h2>         
                 
//   <p  className="w-[71%] text-[white] md:w-full font-[NeueMontreal] font-light text-[18px] md:text-[15px] leading-[1.5]">
//   If you don&#39;t find an answer to your question, contact us, and our team will get in touch with
//                     you.
//                </p>
            
//                 </div>
                
//                 <CustomButton background='red' className="w-[13%] md:w-[30%] bg-[black] h-[2.5em]"  textButton="Signup" handleClick={()=>navigation('/signup')}/>
//               </div>
//             </div>
//             {isPopupOpen && (
//               <div>
//                  {/* <Popup  Cross={togglePopup}/> */}
//                 </div>
       
//       )}
//             {/* footer section */}
//             <Footer className="flex items-center justify-center self-stretch bg-indigo-300 py-[46px] md:py-5" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
import React, { useEffect, useState } from "react";
import { Img } from "../../components";
import HomeColumnBetter from "../../components/HomeColumnBetter";
import History from './History.svg';
import Ellise from './Heroverly.png';
import Imgage from '../../Assests/Images/updateImage.png';
import CardRepair from './FuelingoIcons-04.svg';
import Squareimg from './realtime.svg';
import './styles.css';
import gsap from 'gsap';
import Optimize from './routeomtiize.svg';
import Banners from "./Banners";
import Header from "pages/header/Header";
import CustomButton from "components/CustomButton/CustomButton";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";
import CardResponsive from "./cardResponsive";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Home1Page() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigation = useNavigate();
  
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Scroll-based animation for text and features
    gsap.fromTo(
      ".animate-scroll-up", // Class for the element to animate
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".animate-scroll-up",
          start: "top 80%",
          end: "top 50%",
          scrub: 0.5,
        },
      }
    );
    
    // Background fade-in effect
    gsap.fromTo(
      ".fade-in", // Class for the element to fade in
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".fade-in",
          start: "top 90%",
          end: "top 60%",
          scrub: true,
        },
      }
    );

    // Features up movement animation
    gsap.fromTo(
      ".feature-item", // Class for feature cards
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".feature-item",
          start: "top 80%",
          end: "top 60%",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      ".feature-item2", // Class for feature cards
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".feature-item2",
          start: "top 80%",
          end: "top 60%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <>
      <Header />
      <div className="w-full bg-white-A700" style={{ position: 'relative' }}>
        <div className="flex flex-col items-end">
         
           <Img src={Ellise} alt="image" object className="h-[200px]w-[100%] object-cover absolute" style={{position:'absolute',width:'70%'}} />
          <div className="relative flex flex-col items-center gap-[124px] self-stretch md:gap-[93px] sm:gap-[62px]">
            <Banners />

            <div className="container-xs flex flex-col items-center gap-[16px] md:gap-16 md:p-5 sm:gap-[43px]">
              <div className="flex w-[94%] flex-col items-center gap-[10px] px-[7px] pt-[7px] md:w-full md:gap-[75px] sm:gap-[50px]">
                <h2 className="animate-scroll-up md:w-full font-[NeueMontreal] text-[44px] md:text-[35px] text-center">
                  How It Works
                </h2>
                <p className="animate-scroll-up w-[71%] text-[#000000] md:w-full font-[NeueMontreal] font-light text-[18px] md:text-[16px] leading-[1.5] pl-[0.5em] text-center">
                  Download Fuelingo, add your vehicle details, and effortlessly track fuel efficiency in real-time. Analyze performance, optimize your driving habits, and save on fuel costs. Easily find trusted car repair services nearby and stay updated with timely reminders for refills and maintenance—all in one simple, user-friendly app!
                </p>
              </div>
              <CardResponsive />
              <div className="card-name-btn mt-[8em]">
                <div className="flex flex-row justify-between items-start w-[100%] m-auto pt-[4em] gap-[2em] md:flex-col relative">
                  <div style={{ position: 'absolute', width: '30%' }} className="top-[-3em] left-[-4em] feature-item">
                    <HomeColumnBetter
                      image={Squareimg}
                      text="Real-Time Fuel Average Tracking"
                      text1="Get accurate fuel consumption stats while you drive, helping you understand your car’s efficiency on the go."
                      className="flex flex-col items-start justify-center rounded-[26px] border border-solid border-black-900_7f p-[25px] sm:p-5"
                    />
                  </div>
                  <div style={{ position: 'absolute', width: '30%' }} className="top-[-3em] right-[-4em] feature-item">
                    <HomeColumnBetter 
                      image={Optimize} 
                      text="Historical Data & Trends" 
                      text1="Access your car’s fuel performance history and analyze trends over time."
                      className="flex flex-col items-start justify-center rounded-[26px] border border-solid border-black-900_7f p-[25px] sm:p-5"
                    />
                  </div>
                  <div className="w-[100%] md:w-full flex justify-center">
                    <Img
                      src={Imgage}
                      alt="main"
                      className="h-[34em] w-full object-contain fade-in"
                      style={{ borderRadius: "27px" }}
                    />
                  </div>
                  <div style={{ position: 'absolute', width: '30%' }} className="bottom-[-5em] right-[-4em] feature-item2">
                    <HomeColumnBetter 
                      image={History}
                      text="Route Optimization"
                      text1="Compare routes to find the most fuel-efficient path to your destination."
                      className="flex flex-col items-start justify-center rounded-[26px] border border-solid border-black-900_7f p-[25px] sm:p-5"
                    />
                  </div>
                  <div style={{ position: 'absolute', width: '30%' }} className="bottom-[-5em] left-[-4em] feature-item2">
                    <HomeColumnBetter 
                      image={CardRepair}
                      text="Car Repair & Service Finder"
                      text1="Easily locate trusted repair shops and compare prices, ratings, and reviews."
                      className="flex flex-col items-start justify-center rounded-[26px] border border-solid border-black-900_7f p-[25px] sm:p-5"
                    />
                  </div>
                </div>
              </div>

              <CustomButton className="w-[13%] md:w-[30%] h-[2.5em] mt-2" background="red" textButton="Signup" handleClick={() => navigation('/signup')} />
            </div>

            <div className="flex w-[94%] flex-col items-center gap-[10px] px-[7px] pt-[7px] md:w-full md:gap-[75px] sm:gap-[50px]">
              <h2 className="animate-scroll-up text-[44px] md:text-[35px] font-[NeueMontreal] text-center">
                Why Choose Us <span className="text-[#EA352B]">?</span>
              </h2>
              <p className="w-[71%] text-[#000000] md:w-full font-[NeueMontreal] font-light text-[18px] md:text-[16px] leading-[1.5] pl-[0.5em] text-center">
                Welcome to Fuelingo, the ultimate tool to help you monitor your car’s fuel efficiency effortlessly. Whether you’re a daily commuter, road trip enthusiast, or business fleet manager, our app empowers you to make smarter decisions about your vehicle’s performance and fuel consumption.
              </p>
            </div>

            <div className="container-xs px-36 md:p-5 md:px-5">
              <div className="flex items-center justify-center gap-2.5 rounded-[26px] bg-[#EA352B] p-[50px] md:flex-col md:p-5">
                <div className="flex flex-1 flex-col items-start gap-1 pt-[5px] md:self-stretch">
                  <h2 className="md:w-full font-[NeueMontreal] text-[30px] md:text-[25px]">
                    Get Notified When Our App Launches!
                  </h2>
                  <p className="w-[71%] text-[white] md:w-full font-[NeueMontreal] font-light text-[18px] md:text-[15px] leading-[1.5]">
                    If you don't find an answer to your question, contact us, and our team will get in touch with you.
                  </p>
                </div>

                <CustomButton background="red" className="w-[13%] md:w-[30%] bg-[black] h-[2.5em]" textButton="Signup" handleClick={() => navigation('/signup')} />
              </div>
            </div>

            {isPopupOpen && (
              <div>
                {/* <Popup Cross={togglePopup}/> */}
              </div>
            )}

            <Footer className="flex items-center justify-center self-stretch bg-indigo-300 py-[46px] md:py-5" />
          </div>
        </div>
      </div>
    </>
  );
}
