import { Img, Heading } from "./..";
import React from "react";

export default function Header({ ...props }) {
  return (
    <header
      {...props}
      className={`${props.className} flex justify-between items-center mr-[0.75rem] gap-[1.25rem] md:mr-0`}
    >
      <div className="flex">
        <Heading size="headingxl" as="h2" className="tracking-[0.00rem] md:text-[1.63rem] sm:text-[1.50rem]">
          Current Fuel Prices
        </Heading>
      </div>
      <Img
        src="images/img_rectangle_1886.png"
        alt="Fuel Image"
        className="h-[3.38rem] w-[3.38rem] rounded-md object-cover"
      />
    </header>
  );
}
