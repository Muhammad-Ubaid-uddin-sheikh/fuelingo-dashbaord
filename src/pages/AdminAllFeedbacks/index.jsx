import { Helmet } from "react-helmet";
import { Heading, Img } from "../../components";
import Sidebar2 from "../../components/Sidebar2";
import UserProfile5 from "../../components/UserProfile5";
import React, { Suspense, useEffect, useState } from "react";
import { AdminLoginAPi, fetchWithToken } from "api/ApiHandler";
import { FaArrowRight } from "react-icons/fa6";

const navigationList = [
  {
    userImage: "images/img_sad_circle_svgrepo_com.svg",
    userName: "All",
  },
  {
    userImage: "images/img_sad_circle_svgrepo_com_black_900_01.svg",
    userName: "Amazing",
  },
  {
    userImage: "images/img_settings.svg",
    userName: "Good",
  },
  {
    userImage: "images/img_settings_black_900_01.svg",
    userName: "Okay",
  },
  {
    userImage: "images/img_settings_black_900_01_30x30.svg",
    userName: "Bad",
  },
];

export default function Adminallfeedbacks() {
  const [allFeedBack, setAllFeedBack] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("All");

  const getAdminData = async () => {
    try {
      const data = await fetchWithToken("/feedback/getfeedbacks");
      setAllFeedBack(data.feedback);
    } catch (error) {
      console.error("Fetch error:", error.response?.data || error);
      if (error?.response?.data?.msg === "Invalid Token") {
        localStorage.clear();
        window.location.href = "/admin-login";
      }
    }
  };
  const DeleteFeedBack = async (id) => {
    try {
      const response = await AdminLoginAPi('/feedback/deleteFeedback', { id });
  
      // ✅ Filter out the deleted feedback from local state
      setAllFeedBack((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error('Delete failed:', err);
    }
  };
  
  const filteredFeedback =
  selectedStatus === "All"
    ? allFeedBack
    : allFeedBack.filter((item) => item.rating === selectedStatus);

  useEffect(() => {
    getAdminData();
  }, []);

  return (
    <>
      <Helmet>
        <title>Admin Feedback Overview - View All User Responses</title>
        <meta
          name="description"
          content="Explore the comprehensive feedback from users on the Admin Dashboard. Categories range from Amazing to Bad, providing insights into user experiences and app performance."
        />
      </Helmet>
      <div className="flex w-full items-start gap-[2.25rem] bg-white-a700 px-[0.75rem] py-[1.50rem] sm:py-[1.00rem]">
        <Sidebar2 />
        <div className="flex flex-1 flex-col gap-[1.25rem]" id="dahsvaiord">
          <div className="mr-[0.75rem] flex items-center md:mr-0">
            <div className="flex flex-1">
              <Heading size="headingxl" as="h1" className="tracking-[0.00rem] md:text-[1.63rem] sm:text-[1.50rem]">
                Feedbacks
              </Heading>
            </div>
            <Img
              src="images/img_rectangle_1886.png"
              alt="Feedback Image"
              className="h-[3.38rem] w-[3.38rem] rounded-md object-cover"
            />
          </div>
          <div className="mr-[0.75rem] flex items-start gap-[1.13rem] md:mr-0 md:flex-col">
            <div className="flex w-[36%] flex-col items-start gap-[1.88rem] rounded-[20px] border border-solid border-black-900_26 bg-white-a700_01 p-[1.50rem] md:w-full sm:p-[1.00rem]">
              <Heading size="headings" as="h2">
                Categories
              </Heading>
              <div className="flex flex-col gap-[1.13rem] self-stretch">
                <Suspense fallback={<div>Loading categories...</div>}>
                  
                  {navigationList.map((item, index) => {
                  const isActive = selectedStatus === item.userName;
                  return (
                    <div
                      key={item.userName + index}
                      onClick={() => setSelectedStatus(item.userName)}
                      className={`flex items-center justify-between px-4 py-2 rounded-lg cursor-pointer ${
                        isActive
                          ? "bg-red-100 text-[#EA352B] font-semibold"
                          : "hover:bg-gray-100 text-black"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Img src={item.userImage} alt={item.userName} className="h-6 w-6 object-contain" />
                        <span className="" style={{fontFamily:"'NeueMontreal', sans-serif",fontWeight:500}}>{item.userName}</span>
                      </div>
                      <FaArrowRight className="w-4 h-4" />
                    </div>
                  );
                })}
                </Suspense>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start gap-[1.25rem] self-center md:self-stretch">
              <Heading size="headings" as="h3">
              {selectedStatus} Feedbacks
              </Heading>
              <div className="flex flex-col gap-[1.25rem] self-stretch">
                <Suspense fallback={<div>Loading feedback...</div>}>
                {filteredFeedback.length > 0 ? (
                    filteredFeedback.map((item, index) => (
                      <UserProfile5 OnClick={()=>DeleteFeedBack(item?._id)}
                        key={item._id || index}
                        userName={item?.userId?.firstName || "Anonymous"}
                        userImage={
                          navigationList.find((nav) => nav.userName === item.rating)?.userImage ||
                          "images/img_settings.svg"
                        }
                        userStatus={item.rating}
                        userDate={new Date(item.createdAt).toLocaleDateString()}
                        userFeedback={item.feedback}
                      />
                    ))
                  ) : (
                    <div className="text-gray-500">No feedback found.</div>
                  )}
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
