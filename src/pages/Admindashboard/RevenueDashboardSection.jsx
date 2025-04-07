import { Heading, Img, Text } from "../../components";
import React from "react";

export default function RevenueDashboardSection() {
  return (
    <>
      {/* revenue dashboard section */}
      <div>
        <div className="flex flex-col gap-[1.13rem] rounded-[20px] border border-solid border-black-900_26 bg-white-a700_01 p-[1.38rem] sm:p-[1.00rem]">
          <div className="flex items-center justify-center">
            <Heading as="h2" className="tracking-[0.00rem]">
              Revenue
            </Heading>
            <div className="flex flex-1 items-center justify-end">
              <Heading as="h3" className="mt-[0.25rem] self-end tracking-[0.00rem]">
                AED 4,939.58
              </Heading>
              <div className="flex items-center gap-[0.13rem]">
                <Text size="texts" as="p" className="!font-medium tracking-[0.00rem] !text-light_green-a700">
                  + AED 192.20
                </Text>
                <Img src="images/img_vector_3.svg" alt="Revenue Chart" className="h-[0.63rem]" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-[1.25rem] md:flex-col">
            <div className="flex flex-col items-end gap-[2.38rem]">
              <Heading size="textxl" as="h4" className="!font-manrope !font-normal tracking-[0.00rem]">
                40k
              </Heading>
              <Heading size="textxl" as="h5" className="!font-manrope !font-normal tracking-[0.00rem]">
                30k
              </Heading>
              <Heading size="textxl" as="h6" className="!font-manrope !font-normal tracking-[0.00rem]">
                20k
              </Heading>
              <Heading size="textxl" as="p" className="!font-manrope !font-normal tracking-[0.00rem]">
                10k
              </Heading>
              <Heading size="textxl" as="p" className="mb-[1.38rem] !font-manrope !font-normal tracking-[0.00rem]">
                0
              </Heading>
            </div>
            <div className="flex flex-1 flex-col gap-[0.50rem] md:self-stretch">
              <Img src="images/img_frame_1000001925.png" alt="Date Chart" className="h-[17.63rem] object-cover" />
              <div className="flex flex-wrap justify-between gap-[1.25rem] px-[0.88rem]">
                <Heading as="p" className="!font-manrope !font-normal">
                  16 Mar
                </Heading>
                <Heading as="p" className="!font-manrope !font-normal">
                  18 Mar
                </Heading>
                <Heading as="p" className="!font-manrope !font-normal">
                  20 Mar
                </Heading>
                <Heading as="p" className="!font-manrope !font-normal">
                  22 Mar
                </Heading>
                <Heading as="p" className="!font-manrope !font-normal">
                  24 Mar
                </Heading>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
