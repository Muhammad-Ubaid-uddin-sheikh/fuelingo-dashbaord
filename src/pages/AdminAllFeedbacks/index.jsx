import { Helmet } from "react-helmet";
import { Heading, Img } from "../../components";
import Sidebar2 from "../../components/Sidebar2";
import UserProfile4 from "../../components/UserProfile4";
import UserProfile5 from "../../components/UserProfile5";
import React, { Suspense } from "react";

const navigationList = [
  { userImage: "images/img_sad_circle_svgrepo_com.svg", userName: "All", userActionIcon: "images/img_arrow_right.svg" },
  {
    userImage: "images/img_sad_circle_svgrepo_com_black_900_01.svg",
    userName: "Amazing",
    userActionIcon: "images/img_arrow_right_black_900_01.svg",
  },
  { userImage: "images/img_settings.svg", userName: "Good", userActionIcon: "images/img_arrow_right_black_900_01.svg" },
  {
    userImage: "images/img_settings_black_900_01.svg",
    userName: "Okay",
    userActionIcon: "images/img_arrow_right_black_900_01.svg",
  },
  { userImage: "images/img_sad_circle_svgrepo_com.svg", userName: "All", userActionIcon: "Bad" },
];
const feedbackList = [
  {
    userName: "Khalil Al Amiri",
    userImage: "images/img_sad_circle_svgrepo_com_black_900_01.svg",
    userStatus: "Amazing",
    userDate: "24/07/24",
    userFeedback: "The app is really helpful. Now I can easily calculate my cost of travelling. Thank you!",
  },
  {
    userName: "Khalil Al Amiri",
    userImage: "images/img_settings.svg",
    userStatus: "Good",
    userDate: "24/07/24",
    userFeedback: "The app is really helpful. Now I can easily calculate my cost of travelling. Thank you!",
  },
  {
    userName: "Khalil Al Amiri",
    userImage: "images/img_settings.svg",
    userStatus: "Good",
    userDate: "24/07/24",
    userFeedback: "The app is really helpful. Now I can easily calculate my cost of travelling. Thank you!",
  },
  {
    userName: "Khalil Al Amiri",
    userImage: "images/img_settings_black_900_01.svg",
    userStatus: "Okay",
    userDate: "24/07/24",
    userFeedback: "My Experience with the app was just okay! Need some improvements",
  },
  {
    userName: "Khalil Al Amiri",
    userImage: "images/img_settings_black_900_01_30x30.svg",
    userStatus: "Bad",
    userDate: "24/07/24",
    userFeedback: "Had difficulty adding car to the app! Need to fix it!",
  },
  {
    userName: "Khalil Al Amiri",
    userImage: "images/img_sad_circle_svgrepo_com_black_900_01.svg",
    userStatus: "Amazing",
    userDate: "24/07/24",
    userFeedback: "The app is really helpful. Now I can easily calculate my cost of travelling. Thank you!",
  },
  {
    userName: "Khalil Al Amiri",
    userImage: "images/img_settings.svg",
    userStatus: "Good",
    userDate: "24/07/24",
    userFeedback: "The app is really helpful. Now I can easily calculate my cost of travelling. Thank you!",
  },
  {
    userName: "Khalil Al Amiri",
    userImage: "images/img_sad_circle_svgrepo_com_black_900_01.svg",
    userStatus: "Amazing",
    userDate: "24/07/24",
    userFeedback: "The app is really helpful. Now I can easily calculate my cost of travelling. Thank you!",
  },
];

export default function AdminAllFeedbacksPage() {
  return (
    <>
      <Helmet>
        <title>Admin Feedback Overview - View All User Responses</title>
        <meta
          name="description"
          content="Explore the comprehensive feedback from users on the Admin Dashboard. Categories range from Amazing to Bad, providing insights into user experiences and app performance."
        />
      </Helmet>
      <div  className="flex w-full items-start gap-[2.25rem] bg-white-a700 px-[0.75rem] py-[1.50rem] sm:py-[1.00rem]">
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
                <Suspense fallback={<div>Loading feed...</div>}>
                  {navigationList.map((d, index) => (
                    <UserProfile4 {...d} key={"categoriesList" + index} />
                  ))}
                </Suspense>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start gap-[1.25rem] self-center md:self-stretch">
              <Heading size="headings" as="h3">
                All Feedbacks
              </Heading>
              <div className="flex flex-col gap-[1.25rem] self-stretch">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {feedbackList.map((d, index) => (
                    <UserProfile5 {...d} key={"feedbacksList" + index} />
                  ))}
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
