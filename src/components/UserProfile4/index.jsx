import { Img, Heading } from "./..";
import React from "react";

export default function UserProfile4({
  userImage = "images/img_sad_circle_svgrepo_com.svg",
  userName = "All",
  userActionIcon = "images/img_arrow_right.svg",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center gap-[1.25rem] flex-1`}>
      <div className="flex items-center justify-center self-stretch px-[0.63rem]">
        <div className="flex flex-1 items-center gap-[0.63rem] p-[0.50rem]">
          <Img src={userImage} alt="Sad Icon" className="h-[1.88rem] w-[1.88rem]" />
          <Heading as="p" className="!text-red-600">
            {userName}
          </Heading>
        </div>
        <Img src={userActionIcon} alt="Arrow Icon" className="h-[1.25rem] w-[1.25rem]" />
      </div>
      <div className="h-[0.00rem] w-full self-stretch bg-black-900_4c" />
    </div>
  );
}
