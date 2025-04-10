import React from 'react'
import Imgage from '../../Assests/Images/responsiveCardicon.png'
import HomeColumnBetter from "../../components/HomeColumnBetter";
import './styles.css'
import { Img } from "../../components";
import Squareimg from './realtime.svg'
import Optimize from './routeomtiize.svg'
import History from './History.svg'
import CardRepair from './FuelingoIcons-04.svg'
const CardResponsive = () => {
  return (
    <div className='btn-card'>
    <div className="flex gap-[35px] self-stretch md:flex-col w-[91%] m-auto">
    {/* <div className="relative h-[350px] w-full rounded-[26px] border border-solid border-black-900_26 bg-indigo-300  bg-cover bg-no-repeat px-[41px] md:px-5 md:pt-5"> */}
        {/* <div className="absolute  left-0 right-0 m-auto h-[709px]  md:h-auto" style={{top:0}}> */}
          <img src={Imgage} alt="main" className='w-[100%] h-[23em] object-contain'  style={{borderRadius:'27px'}} />
         
        {/* </div> */}
      {/* </div> */}
      <div className="flex w-full flex-col gap-[35px] pt-4">
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
  )
}

export default CardResponsive