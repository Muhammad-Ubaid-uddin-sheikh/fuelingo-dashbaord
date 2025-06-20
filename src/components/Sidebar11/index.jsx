import { Heading, Img } from "./..";
import React from "react";
import { Outlet, Link } from "react-router-dom";
import { MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";
import { NavLink } from "react-router-dom";
import './index.css'
import CustomizedDialogs from "components/modal/Modal";

export default function Sidebar11({ ...props }) {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <Sidebar
      {...props}
      id="sidebar0id"
      collapsedWidth="80px !important"
      collapsed={collapsed}
      rootStyles={{ [`.${sidebarClasses.container}`]: { gap: 66 } }}
      className={`${props.className} flex flex-col  gap-[4.13rem] top-[0.00rem] sm:gap-[2.06rem] !sticky overflow-auto md:hidden`}
    >
<div style={{display:'flex',alignItems:'center',gap:5,marginTop:'1em'}}>
  
  <Img src="images/logo.png" alt="Sidebar Logo" className="h-[2.00rem] object-contain" />
  <Heading size="headingxl" as="h1" className="tracking-[0.00rem] md:text-[1.63rem] sm:text-[1.50rem]">
  Fuelingo
          </Heading>

  </div>      <Menu
        menuItemStyles={{
          button: {
            padding: "0.38rem",
            gap: "0.63rem",
            color: "#000000",
            fontWeight: 500,
            fontSize: "1.25rem",
            borderRadius: "5px",
            // [`&:hover, &.ps-active`]: {
            //   color: "#ffffff",
            //   backgroundColor: "#ea352b !important",
            //   boxShadow: "0 2px 4px 0 #0000003f",
            // },
          },
        }}
        rootStyles={{ ["&>ul"]: { gap: "20rem" } }}
        className="flex w-full flex-col self-stretch"
      >
        <div className="flex flex-col gap-[0.50rem]">
          <MenuItem
            icon={
              <Img
                src="images/img_linear_settings_black_900_01.svg"
                alt="Settings Icon"
                className="h-[1.25rem] w-[1.25rem] rounded-[5px]"
              />
            }
          >
           <Link to="/admin-dashboard">Dashboard</Link>
          </MenuItem>
          
           <NavLink
           
           end className={({ isActive }) => (isActive ? 'active-link' : 'navlinkLinkatag')} to="/admin-fuel-prices" 
           
           >   <Img
              
           src="images/img_linear_business_white_a700_01.svg"
           alt="Settings Icon"
           className="h-[1.25rem] w-[1.25rem] rounded-[5px]"
         />  Fuel Prices

         
           </NavLink>
          
          <MenuItem
            icon={<Img src="images/img_linear_users.svg" alt="Users Icon" className="h-[1.25rem] w-[1.25rem]" />}
          >
            <Link to="/admin-all-feedbacks">Feedbacks</Link>
          </MenuItem>
        </div>
        <div className="flex flex-col gap-[0.50rem]">
          {/* <MenuItem
            icon={
              <Img src="images/img_language_svgrepo_com.svg" alt="Language Icon" className="h-[1.25rem] w-[1.25rem]" />
            }
          >
            Language: En
          </MenuItem> */}
          <MenuItem
            icon={
              <Img
                src="images/img_linear_arrows.svg"
                alt="Logout Icon"
                className="h-[1.25rem] w-[1.25rem] rounded-[5px]"
              />
            }
          >
          <CustomizedDialogs/>
          </MenuItem>
        </div>
      </Menu>
    </Sidebar>
  );
}
