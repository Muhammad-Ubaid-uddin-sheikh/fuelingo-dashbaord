import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import AdminLogin from "pages/AdminLogin";
import Admindashboard from "pages/Admindashboard";
import AdminFuelPrices from "pages/AdminFuelPrices";
import AdminAllFeedbacks from "pages/AdminAllFeedbacks";
import Index from "pages/LandingPage/Index";
import PrivPolicy from "pages/Privacy";
import SignUp from "pages/Signup/SignUp";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Index/> },
    
    {
      path: "adminlogin",
      element: <AdminLogin />,
    },
    {
      path: "admindashboard",
      element: <Admindashboard />,
    },
    {
      path: "adminfuelprices",
      element: <AdminFuelPrices />,
    },
    {
      path: "adminallfeedbacks",
      element: <AdminAllFeedbacks />,
    },
    {
      path: "signup",
      element: <SignUp />,
    },
    {
      path: "PrivacyPolicy",
      element: <PrivPolicy />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
