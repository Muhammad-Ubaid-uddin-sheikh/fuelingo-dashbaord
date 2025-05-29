import { Helmet } from "react-helmet";
import { Button, Heading, Img } from "../../components";
import Sidebar1 from "../../components/Sidebar1";
import UserProfile from "../../components/UserProfile";
import UserProfile3 from "../../components/UserProfile3";
import FeedbackSection from "./FeedbackSection";
import FuelPricesSection from "./FuelPricesSection";
import RevenueDashboardSection from "./RevenueDashboardSection";
import React, { Suspense, useEffect, useState } from "react";
import { fetchWithToken } from "api/ApiHandler";
import socket from "api/socket";
import HandleSocketUpdate from '../../helperFunc/HelperFuc'
import { useNavigate } from "react-router-dom";
export default function AdmindashboardPage() {
 
  const [TotalSingup, setTotalSingup] = useState([]);
  const [TotalSubscriber, setSubscriber] = useState([]);
  const [registerVechile, setregisterVechile] = useState([]);
  const [dailyUser, setDailyUser] = useState([]);
  const [fuelPrice , SetFuelPrice] = useState([])
  const [activeSection, setActiveSection] = useState("signups");
  const [userList, setUserList] = useState([]);
  const navigate = useNavigate()
  const signupStatisticsList = [
    {
      type: "signups",
      userImage: "images/img_person_light_sk.svg",
      userStatistic: TotalSingup?.totalCount,
      userStatisticDescription: "Total Signups",
    },
    {
      type: "subscribers",
      userImage: "images/img_image_1.png",
      userStatistic: TotalSubscriber?.totalCount,
      userStatisticDescription: "Total Subscribers",
    },
    {
      type: "vehicles",
      userImage: "images/img_car.svg",
      userStatistic: registerVechile?.totalCount,
      userStatisticDescription: "Registered Vehicles",
    },
    {
      type: "dailyUsers",
      userImage: "images/img_users_svgrepo_com.svg",
      userStatistic: dailyUser?.totalCount,
      userStatisticDescription: "Daily Signups",
    },
  ];
  const getAdminData = async () => {
    try {
      const results = await Promise.allSettled([
        fetchWithToken("/admin/getTotalSignUps"),
        fetchWithToken("/admin/getTotalSubscribers"),
        fetchWithToken("/admin/getRegisteredVehicles"),
        fetchWithToken("/admin/getNewUsers"),
        fetchWithToken("/currentFuel/getFuelPrices")
      ]);
  
      // Extracting each result based on index
      const [signupsRes, subscribersRes, vehiclesRes, dailyUsersRes, fuelPriceRes] = results;
  
      if (signupsRes.status === "fulfilled") {
        const signups = signupsRes.value?.getTotalSignUps || { totalCount: 0, users: [] };
        setTotalSingup(signups);
        setUserList(signups.users || []);
      }
  
      if (subscribersRes.status === "fulfilled") {
        const subscribers = subscribersRes.value?.getTotalSubscribers || { totalCount: 0, subscribers: [] };
        setSubscriber(subscribers);
      }
  
      if (vehiclesRes.status === "fulfilled") {
        const vehicles = vehiclesRes.value?.getRegisteredVehicles || { totalCount: 0, vehicles: [] };
        setregisterVechile(vehicles);
      }
  
      if (dailyUsersRes.status === "fulfilled") {
        const dailyUsers = dailyUsersRes.value?.getNewUsers || { totalCount: 0, users: [] };
        setDailyUser(dailyUsers);
      }
  
      if (fuelPriceRes.status === "fulfilled") {
        SetFuelPrice(fuelPriceRes.value.getPrice);
      }
  
      // Check for token expiration or individual errors
      const allErrors = [signupsRes, subscribersRes, vehiclesRes, dailyUsersRes, fuelPriceRes]
        .filter(r => r.status === "rejected")
        .map(e => e.reason);
  
      for (const err of allErrors) {
        if (err?.response?.data?.msg === "Invalid Token") {
          localStorage.clear();
          navigate('/admin-login');
          alert("Invalid Token");
          break;
        }
      }
  
    } catch (error) {
      console.error("Unexpected error in getAdminData:", error);
    }
  };
  
  

  useEffect(() => {
    getAdminData();

    socket.on("newVehicle", HandleSocketUpdate(setregisterVechile, { key: "vehicles" }));
    socket.on("newUser", (newUser) => {
      HandleSocketUpdate(setTotalSingup, { key: "signups" })(newUser);
      HandleSocketUpdate(setDailyUser, { key: "dailyUsers" })(newUser);
    });
    socket.on("newSubscriber", HandleSocketUpdate(setSubscriber,{ key: "subscribers" }));
    return () => {
      socket.off("newUser");
      socket.off("newSubscriber");
      socket.off("newVehicle");
    };
  }, []);

  
  

  return (
    <>
      <Helmet>
        <title>Dashboard Overview - Admin Insights & Analytics</title>
        <meta
          name="description"
          content="Access the admin dashboard to monitor total signups, subscribers, and daily users. Analyze fuel prices, feedback, and revenue statistics for informed decision-making."
        />
      </Helmet>
      <div className="flex w-full items-start gap-[2.25rem] bg-white-a700 px-[0.75rem] py-[1.50rem] sm:py-[1.00rem]">
        <Sidebar1 />
        <div className="flex flex-1 flex-col gap-[1.25rem]" id="dahsvaiord">
          <div className="mr-[0.75rem] flex items-center justify-between gap-[1.25rem] md:mr-0">
            <Heading size="headingxl" as="h1" className="tracking-[0.00rem] md:text-[1.63rem] sm:text-[1.50rem]">
              Dashboard
            </Heading>
            <Img
              src="images/img_rectangle_1886.png"
              alt="Dashboard Image"
              className="h-[3.38rem] w-[3.38rem] rounded-md object-cover"
            />
          </div>
          <div className="mr-[0.75rem] flex items-start  gap-[1.25rem] md:mr-0 md:flex-col">
            <div className="flex flex-1 flex-col gap-[1.25rem] self-center md:self-stretch">
            <div className="flex flex-col gap-[1.25rem]">
  <div className="flex flex-wrap gap-4">
    <Suspense fallback={<div>Loading feed...</div>}>
      {signupStatisticsList.map((d, index) => (
        <div
          key={index}
          onClick={() => {
            setActiveSection(d.type);
            if (d.type === "signups") setUserList(TotalSingup?.users || []);
            if (d.type === "subscribers") setUserList(TotalSubscriber?.subscribers || []);
            if (d.type === "vehicles") setUserList(registerVechile?.vehicles || []);
            if (d.type === "dailyUsers") setUserList(dailyUser?.users || []);
          }}
          className={`cursor-pointer w-full sm:w-[48%] lg:w-[23%] transition-all rounded-[7px] ${
            activeSection === d.type
              ? "ring-2 ring-[#EA352B] bg-red-50"
              : "bg-white shadow-sm hover:shadow-md"
          }`}
        >
          <UserProfile {...d} />
        </div>
      ))}
    </Suspense>
  </div>
                <RevenueDashboardSection />
                <FuelPricesSection fuelPriceList={fuelPrice} />
              </div>
              <FeedbackSection  />
            </div>
            <div className="w-[36%] md:w-full ">
              <div className="flex flex-col gap-[1.25rem] rounded-[20px] border border-solid border-black-900_26 bg-white-a700_01 p-[1.50rem] sm:p-[1.00rem]">
             
                  {(() => {
  const activeItem = signupStatisticsList.find((item) => item.type === activeSection);
  return (
    <div className="flex flex-1 gap-[0.63rem]">
      <Img
        src={activeItem?.userImage}
        alt={`${activeItem?.userStatisticDescription} Image`}
        className="h-[2.13rem] w-[2.13rem]"
      />
      <Heading size="headingmd" as="h4" className="tracking-[0.00rem]">
        {activeItem?.userStatisticDescription}
      </Heading>
    </div>
  );
})()}

                <div className="flex flex-col gap-[1.25rem] mt-4 h-[50em] overflow-scroll">
  <Suspense fallback={<div>Loading feed...</div>}>
    {userList.length > 0 ? (
      userList.map((user, index) => (
        <UserProfile3
        data ={user}
          key={`user-${index}`}
          dateOfJoiningLabel="Date of Joining"
          dateOfJoining={new Date(user.createdAt).toLocaleDateString()}
          emailLabel="Email Address"
          phoneNumberLabel="Phone Number"
          phoneNumber={user?.phNumber || "N/A"}
        />
      ))
    ) : (
      <div className="text-gray-500">No users found</div>
    )}
  </Suspense>
</div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
