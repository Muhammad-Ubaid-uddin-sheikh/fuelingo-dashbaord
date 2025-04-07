import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button, Heading, Img } from "components";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between absolute p-2 w-[95%] text-white z-50">
      <div className="ml-2">
        <div onClick={()=>navigate('/')} style={{display:'flex',alignItems:'center',gap:5,marginTop:'1em',marginLeft:'2em',cursor:'pointer'}}>
  
  <Img src="images/logo.png" alt="Sidebar Logo" className="h-[4.00rem] object-contain" />
  <Heading size="headingxl" as="h1" className="tracking-[0.00rem] md:text-[3.63rem] sm:text-[1.50rem]">
  Fuelingo
          </Heading>

  </div>
      </div>
      <nav className="mr-2">
        <ul className="flex list-none m-0 p-0 gap-5">
          {/* <Button 
              onClick={() => navigate('/sign-in')} 
              shape="round" 
              className="min-w-[100px] sm:px-1 text-[15px] bg-white text-black rounded-full"
            >
              Sign in
          </Button> */}
          {/* <Button
            onClick={() => navigate("/become-a-seller")}
            shape="round"
            className="min-w-[140px] sm:px-1 text-[15px] bg-white text-black rounded-full"
          >
            Become a Partner
          </Button> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
