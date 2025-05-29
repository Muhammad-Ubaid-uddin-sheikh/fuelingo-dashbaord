
import { Button, Heading } from "../../components";
import UserProfile1 from "../../components/UserProfile1";
import React, { Suspense } from "react";
const fuelNameArabicMap = {
  "SUPER 98": "ممتاز",
  "SPECIAL 95": "خصوصي",
 "E PLUS 91": "إي بلس",
  "DIESEL": "ديزل",
};
export default function FuelPricesSection({fuelPriceList}) {
  const normalizeName = (name) => name.trim().toUpperCase();

  return (
    <>
      {/* fuel prices section */}
      <div>
        <div className="flex flex-col gap-[1.25rem] rounded-[20px] border border-solid border-black-900_26 bg-white-a700_01 p-[1.50rem] sm:p-[1.00rem]">
          <div className="flex justify-between gap-[1.25rem]">
            <Heading size="headings" as="h4">
              Current Fuel Prices
            </Heading>
            {/* <Button
              color="gray_100_01"
              size="xs"
              className="min-w-[4.25rem] rounded-[14px] bg-gradient1 bg-clip-text text-transparent"
            >
              Edit
            </Button> */}
          </div>
          <div className="flex gap-[1.25rem] md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {/* {fuelPriceList.map((d, index) => (
                <UserProfile1
                  background={d?.color}  // Set background color dynamically
                  {...d}
                  key={"fuelList" + index}
                  className="bg-light_blue-700"
                />
              ))} */}
               {fuelPriceList?.map((fuel, index) => (
              <UserProfile1
                key={`fuel-${index}`}
                background={fuel.color}
                userFuelType={fuel.name}
                userRating={fuel.fuelPrice.toFixed(2)}
                userFeedback={fuelNameArabicMap[normalizeName(fuel.name)] || fuel.name}
              />
            ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
