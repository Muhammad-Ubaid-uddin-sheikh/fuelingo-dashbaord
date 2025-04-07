
import { Helmet } from "react-helmet";
import { Button, Input, Heading, Img, Text } from "../../components";
import Header from "../../components/Header";
import Sidebar11 from "../../components/Sidebar11";
import React from "react";
import { Autocomplete, Popper, TextField } from "@mui/material";


// Array of months
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

// Array of years from 2000 to 3000
const years = Array.from({ length: 1001 }, (_, index) => 2000 + index);

export default function AdminFuelPricesPage() {
  return (
    <>
      <Helmet>
        <title>Fuel Prices Management - Admin Control Panel</title>
        <meta
          name="description"
          content="Manage and update fuel prices for SUPER 98, Special 95, E Plus 91, and Diesel. Keep track of changes and ensure accurate pricing information is displayed."
        />
      </Helmet>
      <div className="w-full bg-white-a700 px-[0.75rem] py-[1.50rem] sm:py-[1.00rem]">
        <div className="mb-[0.25rem] flex items-start gap-[2.25rem]">
          <Sidebar11 />
          <div className="flex flex-1 flex-col gap-[1.25rem]" id="dahsvaiord">
            <Header />
            <div className="mr-[0.75rem] flex items-start gap-[1.25rem] md:mr-0 md:flex-col">
              <div className="flex w-[36%] flex-col items-start gap-[1.88rem] rounded-[20px] border border-solid border-black-900_26 bg-white-a700_01 p-[1.50rem] md:w-full sm:p-[1.00rem]">
                <Heading size="headings" as="h1">
                  Current Fuel Prices
                </Heading>
                <div className="flex flex-col gap-[1.13rem] self-stretch">
                  <div className="flex flex-col gap-[1.25rem]">
                    <div className="flex items-center justify-between gap-[1.25rem] px-[0.63rem]">
                      <Heading as="h2">SUPER 98</Heading>
                      <Img
                        src="images/img_edit_svgrepo_com.svg"
                        alt="Super 98 Edit"
                        className="h-[1.25rem] w-[1.25rem]"
                      />
                    </div>
                    <div className="h-[0.00rem] bg-black-900_4c" />
                  </div>
                  <div className="flex flex-col gap-[1.25rem]">
                    <div className="flex items-center justify-between gap-[1.25rem] px-[0.63rem]">
                      <Heading as="h3">Special 95</Heading>
                      <Img
                        src="images/img_edit_svgrepo_com.svg"
                        alt="Special 95 Edit"
                        className="h-[1.25rem] w-[1.25rem]"
                      />
                    </div>
                    <div className="h-[0.00rem] bg-black-900_4c" />
                  </div>
                  <Input
                    color="black_900_4c"
                    size="xs"
                    variant="underline"
                    shape="square"
                    name="E Plus 91 Edit"
                    placeholder={`E Plus 91`}
                    suffix={
                      <Img
                        src="images/img_edit_svgrepo_com.svg"
                        alt="Edit Svgrepo.com"
                        className="my-[0.13rem] h-[1.25rem] w-[1.25rem]"
                      />
                    }
                    className="gap-[1.00rem] font-medium"
                  />
                  <div className="flex items-center justify-center px-[0.63rem]">
                    <div className="flex flex-1">
                      <Heading as="h4">Diesel</Heading>
                    </div>
                    <Img src="images/img_edit_svgrepo_com.svg" alt="Diesel Edit" className="h-[1.25rem] w-[1.25rem]" />
                  </div>
                </div>
              </div>
              <div className="flex-1 self-center md:self-stretch">
                <div className="rounded-md bg-white-a700_01 p-[1.25rem]">
                  <div className="flex flex-col gap-[5.00rem] lg:gap-[5.00rem] md:gap-[3.75rem] sm:gap-[2.50rem]">
                    <div className="flex flex-col items-end gap-[1.88rem]">
                      <div className="flex w-[8%] justify-center rounded-[14px] bg-gray-100_01 lg:w-full md:w-full">
                       
                      </div>
                      <div className="flex flex-col gap-[1.25rem] self-stretch">
                        <div className="flex flex-col items-start gap-[0.63rem]">
                          <Heading as="h6">Title (English)</Heading>
                          <Input
                            shape="round"
                            name="English Title Edit"
                            placeholder={`SUPER 98`}
                            className="self-stretch"
                          />
                        </div>
                        <div className="flex flex-col items-end gap-[0.63rem]">
                          <Heading as="p">عنوان (العربية)</Heading>
                          <Input
                            shape="round"
                            name="Arabic Title Edit"
                            placeholder={`ممتاز`}
                            className="self-stretch"
                          />
                        </div>
                        <div className="flex flex-col items-start gap-[0.63rem]">
                          <Heading as="p">Price</Heading>
                          <Input
                          type='number'
                            shape="round"
                            name="Price Edit"
                            placeholder={`3.34`}
                            suffix={
                              <Text className="my-[0.13rem] w-[2.00rem] text-[1.00rem] font-normal !text-black-900_99">
                                AED
                              </Text>
                            }
                            className="gap-[1.00rem] self-stretch"
                          />
                        </div>
                        <div className="flex flex-col items-start gap-[0.63rem]">
                          <Heading as="p">Month</Heading>
                          <Autocomplete
  disablePortal
  options={months}
  sx={{
    background: '#F1F2F5',
    border: 'none',
    borderRadius: 3,
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none', // Remove the border
      },
      '&:hover fieldset': {
        border: 'none', // Remove border on hover
      },
      '&.Mui-focused fieldset': {
        border: 'none', // Remove border when focused
      },
    },
  }}
  PopperComponent={(props) => (
    <Popper {...props} placement="bottom-start" />
  )}
  renderInput={(params) => (
    <TextField
      {...params}
      InputProps={{
        ...params.InputProps,
        disableUnderline: true, // Removes underline
      }}
    />
  )}
  className="self-stretch"
/>

                        </div>
                        <div className="flex flex-col items-start gap-[0.63rem]">
                          <Heading as="p">Year</Heading>
                          
                          <Autocomplete
  disablePortal
  sx={{
    background: '#F1F2F5',
    border: 'none',
    borderRadius: 3,
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none', // Remove the border
      },
      '&:hover fieldset': {
        border: 'none', // Remove border on hover
      },
      '&.Mui-focused fieldset': {
        border: 'none', // Remove border when focused
      },
    },
  }}
  options={years}
  renderInput={(params) => (
    <TextField
      {...params}
      InputProps={{
        ...params.InputProps,
        disableUnderline: true, // Removes underline for older Material-UI versions
      }}
    />
  )}
  className="self-stretch"
/>

                        </div>
                        <div className="flex flex-col items-start gap-[0.63rem]">
                          <Heading as="p">Color</Heading>
                          <Input
                            size="lg"
                            shape="round"
                            name="Color Edit"
                            placeholder={`0897D3`}
                            className="self-stretch"
                          />
                        </div>
                      </div>
                    </div>
                    <Button size="md" shape="round" className="self-stretch">
                      Save
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
