import { Heading } from "../../components";
import UserProfile2 from "../../components/UserProfile2";
import React, { Suspense } from "react";

const userFeedbackGrid = [
  {
    userName: "Khalil Al Amiri",
    userJoinDate: "24/07/24",
    userReview: "The app is really helpful. Now I can easily calculate my cost of travelling. Thank you!",
  },
  {
    userName: "Khalil Al Amiri",
    userJoinDate: "24/07/24",
    userReview: "The app is really helpful. Now I can easily calculate my cost of travelling. Thank you!",
  },
  {
    userName: "Khalil Al Amiri",
    userJoinDate: "24/07/24",
    userReview: "The app is really helpful. Now I can easily calculate my cost of travelling. Thank you!",
  },
  {
    userName: "Khalil Al Amiri",
    userJoinDate: "24/07/24",
    userReview: "The app is really helpful. Now I can easily calculate my cost of travelling. Thank you!",
  },
];

export default function FeedbackSection() {
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
              <Heading size="textlg" as="p" className="px-[1.25rem] py-[0.13rem] !text-transparent">
                View All
              </Heading>
            </a>
          </div>
          <div className="grid grid-cols-2 justify-center gap-[1.25rem] lg:grid-cols-2 md:grid-cols-1">
            <Suspense fallback={<div>Loading feed...</div>}>
              {userFeedbackGrid.map((d, index) => (
                <UserProfile2 {...d} key={"dashboardGrid" + index} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
