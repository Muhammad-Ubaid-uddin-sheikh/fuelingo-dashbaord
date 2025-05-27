import { useNavigate } from "react-router-dom";
import { Heading } from "../../components";
import UserProfile2 from "../../components/UserProfile2";
import React, { Suspense, useEffect, useState } from "react";
import { fetchWithToken } from "api/ApiHandler";


export default function FeedbackSection() {
  const navigate = useNavigate()
  const [allfeed,setallseed] = useState([])
  const getAdminData = async () => {
    try {
      const data = await fetchWithToken("/feedback/getfeedbacks");
      setallseed(data.feedback);
    } catch (error) {
      console.error("Fetch error:", error.response?.data || error);
      if (error?.response?.data?.msg === "Invalid Token") {
        localStorage.clear();
        window.location.href = "/admin-login";
      }
    }
  };
  console.log('allfeed',allfeed)
useEffect(()=>{
  getAdminData()
},[])
  return (
    <>
      {/* feedback section */}
      <div>
        <div className="flex flex-col gap-[1.25rem] rounded-[20px] border border-solid border-black-900_26 bg-white-a700_01 p-[1.50rem] sm:p-[1.00rem]">
          <div className="flex flex-wrap justify-between gap-[1.25rem]">
            <Heading size="headings" as="h4">
              Feedback
            </Heading>
            <a
              href="#"
              className="flex items-center justify-center rounded-[14px] bg-gray-100_01 bg-gradient1 bg-clip-text"
            >
              <Heading onClick={()=>navigate('/admin-all-feedbacks')} size="textlg" as="p" className="px-[1.25rem] py-[0.13rem] !text-transparent">
                View All
              </Heading>
            </a>
          </div>
          <div className="grid grid-cols-2 justify-center gap-[1.25rem] lg:grid-cols-2 md:grid-cols-1">
            <Suspense fallback={<div>Loading feed...</div>}>
              {allfeed?.map((d, index) => (
                <UserProfile2 userRating={d?.rating} userName={d?.userId?.firstName || "Anonymous"}
                userJoinDate={new Date(d?.createdAt).toLocaleDateString()}
                userReview={d?.feedback} {...d} key={"dashboardGrid" + index} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
