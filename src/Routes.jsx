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
import UserManagement from "pages/userManagement/UserManagement";
import ServiceProvider from "pages/userManagement/ServiceProvider";
import Community from "pages/Community/Community";
import PendingApplications from "pages/application/Pending";
import ApprovedApplications from "pages/application/Approved";
import RejectedApplications from "pages/application/Rejected";

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
      path: "user-management/customer",
      element: (
        <ProtectedRoute>
          <UserManagement />
        </ProtectedRoute>
      ),
    },
    {
      path: "user-management/service-provider",
      element: (
        <ProtectedRoute>
          <ServiceProvider />
        </ProtectedRoute>
      ),
    },
    {
      path: "applications/pending",
      element: (
        <ProtectedRoute>
          < PendingApplications />
        </ProtectedRoute>
      ),
    },
    {
      path: "applications/approved",
      element: (
        <ProtectedRoute>
          <ApprovedApplications />
        </ProtectedRoute>
      ),
    },
    {
      path: "applications/rejected",
      element: (
        <ProtectedRoute>
          <RejectedApplications />
        </ProtectedRoute>
      ),
    },
    {
      path: "community",
      element: (
        <ProtectedRoute>
          <Community />
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
