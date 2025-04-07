import { Text, RatingBar, Heading } from "./..";
import React from "react";

export default function UserProfile2({
  userName = "Khalil Al Amiri",
  userJoinDate = "24/07/24",
  userReview = "The app is really helpful. Now I can easily calculate my cost of travelling. Thank you!",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center justify-center w-full gap-[0.38rem] p-[0.50rem] bg-gray-100_99 rounded-md`}
    >
      <div className="flex items-center justify-center self-stretch">
        <Heading size="textmd" as="p" className="!text-[0.94rem] tracking-[0.00rem]">
          {userName}
        </Heading>
        <div className="flex flex-1 items-center justify-end">
          <RatingBar
            value={4}
            isEditable={true}
            color="#fffbf6"
            activeColor="#fcc767"
            size={12}
            starCount={6}
            className="flex gap-[0.63rem]"
          />
          <div className="ml-[0.50rem] h-[0.13rem] w-[0.13rem] rounded-[1px] bg-blue_gray-400" />
          <Text as="p" className="ml-[0.50rem] !text-[0.81rem] !text-blue_gray-400">
            {userJoinDate}
          </Text>
        </div>
      </div>
      <Text as="p" className="w-full !text-[0.81rem] leading-[1.00rem] !text-black-900_01">
        {userReview}
      </Text>
    </div>
  );
}
