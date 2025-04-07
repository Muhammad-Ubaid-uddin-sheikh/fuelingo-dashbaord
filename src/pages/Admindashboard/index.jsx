import { Helmet } from "react-helmet";
import { Button, Heading, Img } from "../../components";
import Sidebar1 from "../../components/Sidebar1";
import UserProfile from "../../components/UserProfile";
import UserProfile3 from "../../components/UserProfile3";
import FeedbackSection from "./FeedbackSection";
import FuelPricesSection from "./FuelPricesSection";
import RevenueDashboardSection from "./RevenueDashboardSection";
import React, { Suspense } from "react";

const signupStatisticsList = [
  { userImage: "images/img_person_light_sk.svg", userStatistic: "124513", userStatisticDescription: "Total Signups" },
  { userImage: "images/img_image_1.png", userStatistic: "6769", userStatisticDescription: "Total Subscribers" },
  { userImage: "images/img_car.svg", userStatistic: "124513", userStatisticDescription: "Registered Vehicles" },
  { userImage: "images/img_users_svgrepo_com.svg", userStatistic: "35561223", userStatisticDescription: "Daily Users" },
];
const employeeDetailsList = [
  {
    userName: "Khalil Al Amiri",
    dateOfJoiningLabel: "Date of Joining",
    dateOfJoining: "24/07/24",
    emailLabel: "Email Address",
    email: "khalil12@gmail.com",
    phoneNumberLabel: "Phone Number",
    phoneNumber: "+91 213 234 542",
  },
  {
    userName: "Khalil Al Amiri",
    dateOfJoiningLabel: "Date of Joining",
    dateOfJoining: "24/07/24",
    emailLabel: "Email Address",
    email: "khalil12@gmail.com",
    phoneNumberLabel: "Phone Number",
    phoneNumber: "+91 213 234 542",
  },
  {
    userName: "Khalil Al Amiri",
    dateOfJoiningLabel: "Date of Joining",
    dateOfJoining: "24/07/24",
    emailLabel: "Email Address",
    email: "khalil12@gmail.com",
    phoneNumberLabel: "Phone Number",
    phoneNumber: "+91 213 234 542",
  },
  {
    userName: "Khalil Al Amiri",
    dateOfJoiningLabel: "Date of Joining",
    dateOfJoining: "24/07/24",
    emailLabel: "Email Address",
    email: "khalil12@gmail.com",
    phoneNumberLabel: "Phone Number",
    phoneNumber: "+91 213 234 542",
  },
  {
    userName: "Khalil Al Amiri",
    dateOfJoiningLabel: "Date of Joining",
    dateOfJoining: "24/07/24",
    emailLabel: "Email Address",
    email: "khalil12@gmail.com",
    phoneNumberLabel: "Phone Number",
    phoneNumber: "+91 213 234 542",
  },
  {
    userName: "Khalil Al Amiri",
    dateOfJoiningLabel: "Date of Joining",
    dateOfJoining: "24/07/24",
    emailLabel: "Email Address",
    email: "khalil12@gmail.com",
    phoneNumberLabel: "Phone Number",
    phoneNumber: "+91 213 234 542",
  },
];

export default function AdmindashboardPage() {
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
          <div className="mr-[0.75rem] flex items-start gap-[1.25rem] md:mr-0 md:flex-col">
            <div className="flex flex-1 flex-col gap-[1.25rem] self-center md:self-stretch">
              <div className="flex flex-col gap-[1.25rem]">
                <div className="flex gap-[0.88rem] md:flex-col">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {signupStatisticsList.map((d, index) => (
                      <UserProfile {...d} key={"listContainer" + index} />
                    ))}
                  </Suspense>
                </div>

                {/* revenue dashboard section */}
                <RevenueDashboardSection />

                {/* fuel prices section */}
                <FuelPricesSection />
              </div>

              {/* feedback section */}
              <FeedbackSection />
            </div>
            <div className="w-[36%] md:w-full">
              <div className="flex flex-col gap-[1.25rem] rounded-[20px] border border-solid border-black-900_26 bg-white-a700_01 p-[1.50rem] sm:p-[1.00rem]">
                <div className="flex items-center justify-center">
                  <div className="flex flex-1 gap-[0.63rem]">
                    <Img src="images/img_person_light_sk.svg" alt="Signups Image" className="h-[2.13rem] w-[2.13rem]" />
                    <Heading size="headingmd" as="h4" className="tracking-[0.00rem]">
                      Total Signups
                    </Heading>
                  </div>
                  <Button
                    color="gray_100_01"
                    size="sm"
                    className="min-w-[7.25rem] rounded-[18px] bg-gradient1 bg-clip-text text-transparent"
                  >
                    View all
                  </Button>
                </div>
                <div className="flex flex-col gap-[1.25rem]">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {employeeDetailsList.map((d, index) => (
                      <UserProfile3 {...d} key={"emailList" + index} />
                    ))}
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
