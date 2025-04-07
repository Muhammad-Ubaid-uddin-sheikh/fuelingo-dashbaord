import { Helmet } from "react-helmet";
import LoginSection from "./LoginSection";
import React from "react";

export default function AdminLoginPage() {
  return (
    <>
      <Helmet>
        <title>Admin Login - Secure Access to Dashboard</title>
        <meta
          name="description"
          content="Log in to the admin panel to manage user accounts, view analytics, and maintain the system. Secure and user-friendly interface for administrators."
        />
      </Helmet>
      <div className="w-full  py-[7.75rem] lg:py-[2.00rem] md:py-[1.25rem] sm:py-[1.00rem]">
        {/* login section */}
        <LoginSection />
      </div>
    </>
  );
}
