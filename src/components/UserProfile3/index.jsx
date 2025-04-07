import { Heading, Text } from "./..";
import React from "react";

export default function UserProfile3({
  userName = "Khalil Al Amiri",
  dateOfJoiningLabel = "Date of Joining",
  dateOfJoining = "24/07/24",
  emailLabel = "Email Address",
  email = "khalil12@gmail.com",
  phoneNumberLabel = "Phone Number",
  phoneNumber = "+91 213 234 542",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start gap-[0.63rem] p-[1.25rem] bg-gray-100_99 flex-1 rounded-[14px]`}
    >
      <Heading size="textxl" as="p" className="!text-gray-900">
        {userName}
      </Heading>
      <div className="flex justify-between gap-[1.25rem] self-stretch">
        <div className="flex flex-col items-start gap-[0.13rem]">
          <Text size="texts" as="p">
            {dateOfJoiningLabel}
          </Text>
          <Heading size="textlg" as="p">
            {dateOfJoining}
          </Heading>
        </div>
        <div className="flex flex-1 justify-center">
          <div className="flex flex-col items-start gap-[0.25rem]">
            <Text size="texts" as="p">
              {emailLabel}
            </Text>
            <Heading size="textlg" as="p">
              {email}
            </Heading>
          </div>
          <div className="flex flex-col items-start gap-[0.13rem]">
            <Text size="texts" as="p">
              {phoneNumberLabel}
            </Text>
            <Heading size="textlg" as="p">
              {phoneNumber}
            </Heading>
          </div>
        </div>
      </div>
    </div>
  );
}
