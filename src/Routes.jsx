import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import AdminLogin from "pages/AdminLogin";
import Admindashboard from "pages/Admindashboard";
import AdminFuelPrices from "pages/AdminFuelPrices";
// import Adminallfeedbacks from "pages/admin-all-feedbacks";
import Index from "pages/LandingPage/Index";
import PrivPolicy from "pages/Privacy";
import SignUp from "pages/Signup/SignUp";
import ProtectedRoute from "components/protectedRoute/ProtectedRoute";
import Adminallfeedbacks from "pages/AdminAllFeedbacks";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Index /> },

    { path: "admin-login", element: <AdminLogin /> },

    {
      path: "admin-dashboard",
      element: (
        <ProtectedRoute>
          <Admindashboard />
        </ProtectedRoute>
      ),
    },
    {
      path: "admin-fuel-prices",
      element: (
        <ProtectedRoute>
          <AdminFuelPrices />
        </ProtectedRoute>
      ),
    },
    {
      path: "admin-all-feedbacks",
      element: (
        <ProtectedRoute>
          <Adminallfeedbacks />
        </ProtectedRoute>
      ),
    },
    { path: "signup", element: <SignUp /> },
    { path: "PrivacyPolicy", element: <PrivPolicy /> },
    { path: "*", element: <NotFound /> },
  ]);

  return element;
};

export default ProjectRoutes;
