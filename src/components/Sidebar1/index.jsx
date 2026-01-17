import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses } from "react-pro-sidebar"; // SubMenu import kiya
import { LayoutDashboard, Users, AppWindow, FileText, Headphones, LogOut, ChartColumn, CircleUser, SquareChartGantt, ChevronDown } from 'lucide-react';
import { Img } from "components";
import Logo from '../../Assests/Images/fuelingoLogo.png'

export default function Sidebar1() {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={18} />, path: "/admin-dashboard" },
    { 
      name: "User Management", 
      icon: <SquareChartGantt size={18} />, 
      path: "/user-management",
      isSubMenu: true, 
      children: [
         { name: "Customer", path: "/user-management/customer" },
        { name: "Service Provider", path: "/user-management/service-provider" },
      ]
    },
    { name: "Community", icon: <Users size={18} />, path: "/community" },
    { 
      name: "Applications", 
      icon: <AppWindow size={18} />, 
      path: "/applications",
      isSubMenu: true, 
      children: [
        { name: "Pending", path: "/applications/pending" },
        { name: "Approved", path: "/applications/approved" },
        { name: "Rejected", path: "/applications/rejected" },
      ]
    },
    { name: "Reports", icon: <ChartColumn size={18} />, path: "/reports" },
    { name: "Customer Support", icon: <CircleUser size={18} />, path: "/support" },
  ];

  return (
    <Sidebar
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: '#F8F8F8',
          width: '250px',
          borderRight: 'none',
        },
      }}
      className="h-screen sticky top-0 border-r border-gray-100 shadow-sm"
    >
      {/* Logo Section */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: '1em', marginLeft: '1.5em', paddingBottom: '1em' }}>
        <Img src={Logo} alt="Sidebar Logo" className="h-[2.40rem] object-contain" />
      </div>

      <div className="flex flex-col h-[calc(100vh-140px)] justify-between">
        <Menu
          menuItemStyles={{
            button: ({ active, level }) => ({
              backgroundColor: active && level === 0 ? '#FEE2E2' : 'transparent',
              color: active ? '#EA352B' : '#000000bf',
              paddingLeft: level === 0 ? '32px' : '65px', // Sub-menu items ko indent karne ke liye
              margin: level === 0 ? '4px 16px' : '0px 16px',
              borderRadius: '8px',
              padding: '10px 12px',
              fontSize: '16px',
              fontWeight: 500,
              fontFamily: "'NeueMontreal', sans-serif",
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: active ? '#FEE2E2' : '#F9FAFB',
                color: '#EA352B',
              },
            }),
            // Sub-menu ke arrow/chevron ki styling
            subMenuContent: {
              backgroundColor: 'transparent',
              paddingLeft: '20px',
            },
            SubMenuExpandIcon: {
    '& span': {
      width: '8px',  // width aur height barane se 
      height: '8px', // indicator bara ho jayega
      borderRight: '2px solid', // Agar default arrow use kar rahe hain
      borderBottom: '2px solid',
    },
    // Agar icon use ho raha hai toh:
    svg: {
      width: '20px', 
      height: '20px',
    }
  },
          }}
        >
          {menuItems.map((item) => {
            // Check if it's a SubMenu
            if (item.isSubMenu) {
              const isChildActive = item.children.some(child => location.pathname === child.path);
              
              return (
                <SubMenu style={{gap:'10px',fontFamily:"'NeueMontreal', sans-serif"}}
                  key={item.name}
                  label={item.name}
                  icon={item.icon}
                  active={isChildActive || location.pathname.startsWith(item.path)}
                  defaultOpen={location.pathname.startsWith(item.path)}
                >
                  {item.children.map((child) => (
                    <MenuItem
                    style={{gap:'10px',fontFamily:"'NeueMontreal', sans-serif"}}
                      key={child.name}
                      component={<NavLink to={child.path} />}
                      active={location.pathname === child.path}
                    >
                      {child.name}
                    </MenuItem>
                  ))}
                </SubMenu>
              );
            }

            // Normal Menu Item
            return (
              <MenuItem style={{gap:'10px',fontFamily:"'NeueMontreal', sans-serif"}}
                key={item.name}
                component={<NavLink to={item.path} />}
                icon={item.icon}
                active={location.pathname === item.path}
              >
                {item.name}
              </MenuItem>
            );
          })}
        </Menu>

        <Menu
          className="mb-6"
          menuItemStyles={{
            button: {
              color: '#111827',
              paddingLeft: '32px',
              margin: '4px 16px',
              fontSize: '14px',
              fontWeight: 500,
              '&:hover': { color: '#EA352B', backgroundColor: 'transparent' }
            }
          }}
        >
          <MenuItem style={{gap:'10px',fontFamily:"'NeueMontreal', sans-serif",color:'#000000bf',fontSize:'16px'}} icon={<LogOut size={18} />}> Logout </MenuItem>
        </Menu>
      </div>
    </Sidebar>
  );
}