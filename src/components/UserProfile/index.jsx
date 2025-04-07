import { Text, Heading, Img } from "./..";
import React from "react";

const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num.toString();
};

export default function UserProfile({
  userImage = "images/img_person_light_sk.svg",
  userStatistic = "124513",
  userStatisticDescription = "Total Signups",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex justify-center items-start w-[25%] md:w-full p-[0.50rem] border-black-900_26 border border-solid bg-white-a700_01 rounded-md`}
    >
      <Img src={userImage} alt="Profile Image" className="h-[1.5rem] w-[1.5rem]" />
      <div className="flex flex-1 flex-col items-end justify-center gap-[0.38rem] self-center">
        <Heading size="headinglg" as="h3">
          {formatNumber(parseInt(userStatistic, 10))}
        </Heading>
        <Text as="p" >
          {userStatisticDescription}
        </Text>
      </div>
    </div>
  );
}
