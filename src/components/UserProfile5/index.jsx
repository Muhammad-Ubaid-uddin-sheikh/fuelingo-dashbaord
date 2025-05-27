import { Img, Text, Heading } from "./..";
import React from "react";

export default function UserProfile5({
  OnClick,
  userName = "Khalil Al Amiri",
  userImage = "images/img_sad_circle_svgrepo_com_black_900_01.svg",
  userStatus = "Amazing",
  userDate = "24/07/24",
  userFeedback = "The app is really helpful. Now I can easily calculate my cost of travelling. Thank you!",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex sm:flex-col justify-center items-start p-[1.00rem] bg-white-a700_01 flex-1 rounded-md`}
    >
      <div className="flex flex-1 flex-col items-start gap-[0.38rem] self-center sm:gap-[0.38rem]">
        <div className="flex flex-col items-start self-stretch">
          <Heading size="textmd" as="p" className="!text-[0.94rem] tracking-[0.00rem]">
            {userName}
          </Heading>
          <div className="flex items-center self-stretch">
            <div className="flex items-center gap-[0.38rem]">
              <Img src={userImage} alt="Emotion Image" className="h-[1.00rem] w-[1.00rem]" />
              <Text as="p" className="!text-[0.81rem] !font-medium !text-black-900_01">
                {userStatus}
              </Text>
            </div>
            <div className="ml-[0.50rem] mt-[0.50rem] h-[0.13rem] w-[0.13rem] self-start rounded-[1px] bg-blue_gray-400" />
            <Text as="p" className="ml-[0.50rem] !text-[0.81rem] !text-blue_gray-400" style={{fontFamily:"'NeueMontreal', sans-serif",fontWeight:400}}>
              {userDate}
            </Text>
          </div>
        </div>
        <Text as="p" className="!text-[0.81rem] !text-black-900_01" style={{fontFamily:"'NeueMontreal', sans-serif",fontWeight:300}}>
          {userFeedback}
        </Text>
      </div>
      <Img onClick={OnClick} src="images/img_delete_svgrepo_com.svg" alt="Delete Icon" className="h-[1.50rem] w-[1.50rem] cursor-pointer" />
    </div>
  );
}
