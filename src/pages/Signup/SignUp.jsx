import Footer from 'components/Footer'
import Header from 'pages/header/Header'
import React, { useEffect } from 'react'
import SignupForm from './Form'
import Gif from '../../Assests/Images/Get in touch.gif'
const SignUp = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
  return (
    <>
         <Header/>
   
         <div className="w-full bg-white-A700" style={{position:'relative'}}>
        
        <div className="flex flex-col items-end">
          {/* hero image section */}
         
          <div className="relative w-[90%] mt-36 mb-40 m-auto  flex  items-center gap-[124px]">

          <div className="w-full lg:w-1/2"><img className='w-[50em] h-[35em] object-contain' src={Gif}/></div>
          <div className="w-full lg:w-1/2"> <SignupForm/></div>
           
          </div>
          <Footer className="flex items-center justify-center self-stretch bg-indigo-300 py-[46px] md:py-5" />
        </div>
      </div>
        </>
  )
}

export default SignUp