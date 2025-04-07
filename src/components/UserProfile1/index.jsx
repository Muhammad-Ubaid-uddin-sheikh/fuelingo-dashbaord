import { Heading } from "./..";
import React from "react";

export default function UserProfile1({
  userRating = "3.34",
  userFeedback = "ممتاز",
  userFuelType = "SUPER 98",
  background,
  ...props
}) {
  return (
    <div 
      {...props}
      className={`${props.className} flex justify-center items-center w-[24%] md:w-full px-[0.88rem] py-[1.13rem] rounded-lg`}
      style={{ backgroundColor: background }} // Set background color using inline style
    >
      <Heading size="headings" as="h4" className="!text-white-a700_01">
        {userRating}
      </Heading>
      <div className="flex flex-1 flex-col items-end gap-[0.25rem]" >
        <Heading size="textlg" as="p" className="!text-white-a700_01">
          {userFeedback}
        </Heading>
        <Heading size="headingxs" as="h6" className="!text-white-a700_01">
          {userFuelType}
        </Heading>
      </div>
    </div>
  );
}
