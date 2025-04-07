import React, { useState } from "react";
import { TextField, Checkbox, Autocomplete, Box, Tabs, Tab, Tooltip, IconButton } from "@mui/material";
import { FaRegSquare, FaCheckSquare } from "react-icons/fa";
import { motion } from "framer-motion";
import { CustomInput } from "components/CustomInputfeild";
import CustomButton from "components/CustomButton/CustomButton";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { TbAlertOctagon } from "react-icons/tb";

const services = [
 "Oil change",
    "Brake inspection and replacement",
    "Tire rotation and balancing",
    "Wheel alignment",
    "Air filter replacement",
    "Cabin filter replacement",
    "Battery replacement or testing",
    "Engine diagnostics and repair",
    "Transmission repair or replacement",
    "Suspension and shock repair",
    "Exhaust system repair",
    "Cooling system repair (radiator, hoses, etc.)",
    "Electrical system repair (wiring, alternator, etc.)",
    "Tire replacement",
    "Spark plug replacement",
    "Headlight, taillight, or",
    "Interior cleaning",
    "Exterior washing and polishing",
    "Full detailing (interior and exterior)",
    "Paint protection or waxing",
    "Upholstery repair",
    "AC service and repair",
    "Car wrapping or vinyl installation",
    "Window tinting",
    "Paintwork and scratch repair",
    "Engine tuning or performance upgrades",
      "Roadside assistance (jumpstart, flat tire, towing)",
    "Fuel delivery (if stranded without fuel)",
    "Pre-purchase car inspection",
    "Emission testing",
    "Annual vehicle health checkup",
    "Car accessories installation (dash cams, seat covers, etc.)",
    "Key duplication or programming",
    "Security system installation or repair"
];
const dubaiCities = [
 " Abu Dhabi",
  "Dubai",
  "Sharjah",
  "Ajman",
  "Umm Al-Quwain",
  "Fujairah",
  "Ras Al Khaimah"
];
const SignupForm = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const [userData, setUserData] = useState({
    fullName: "",
    numCars: "",
    email: "",
    lastName:""
  });

  const [providerData, setProviderData] = useState({
    companyName: "",
    CompanyRepresentativeName:"",
    location: "",
    city: "",
    phone: "",
    services: [],
    email: ""
  });
  const handleUserChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserData({ ...userData, [name]: type === "checkbox" ? checked : value });
  };

  const handleProviderChange = (e) => {
    setProviderData({ ...providerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      if (tabIndex === 0) {
        if (!userData.fullName || !userData.lastName || !userData.numCars || !userData.email) {
          toast.error("Please fill all the required fields in the User form.");
          setLoading(false);
          return;
        }
        // Prepare payload for user subscription
        const payload = {
          fullName: userData.fullName,
          lastName:userData.lastName,
          numberOfCars: userData.numCars, // converting "numCars" to "numberOfCars"
          email: userData.email,
        };
  
        const response = await axios.post("https://backend.fuelingo.ae/api/users-subscription", payload);
  
        if (response.status === 200 || response.status === 201) {
          toast.success("User subscription successful!");
          // Clear the user fields on success
          setUserData({ fullName: "", numCars: "", email: "" ,lastName:""});
        } else {
          toast.error("User subscription failed!");
        }
      } else {
        if (
          !providerData.CompanyRepresentativeName ||
          !providerData.companyName ||
          !providerData.location ||
          !providerData.city ||
          !providerData.phone ||
          !providerData.email
        ) {
          toast.error("Please fill all the required fields in the Service Provider form.");
          setLoading(false);
          return;
        }
        // Prepare payload for service provider subscription
        const payload = {
          companyRepresentativeName:providerData.CompanyRepresentativeName,
          companyName: providerData.companyName,
          location: providerData.location,
          city: providerData.city,
          phoneNumber: providerData.phone, // changing "phone" to "phoneNumber"
          email: providerData.email,
          selectServices: providerData.services, // renaming "services" to "selectServices"
        };
  
        const response = await axios.post("https://backend.fuelingo.ae/api/service-providers", payload);
  
        if (response.status === 200 || response.status === 201) {
          toast.success("Service provider subscription successful!");
          // Clear the provider fields on success
          setProviderData({
            CompanyRepresentativeName:"",
            companyName: "",
            location: "",
            city: "",
            phone: "",
            email: "",
            services: [''],
          });
        } else {
          toast.error("Service provider subscription failed!");
        }
      }
    } catch (error) {
      // Check if the error response contains a duplicate key error
      const errorMsg =
        error.response && error.response.data && error.response.data.error
          ? error.response.data.error.toLowerCase()
          : "";
  
      if (errorMsg.includes("duplicate key")) {
        toast.error("Email already exists!");
      } else {
        if (tabIndex === 0) {
          toast.error("An error occurred during user subscription.");
        } else {
          toast.error("An error occurred during service provider subscription.");
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        width: 600,
        margin: "auto",
        p: 3,
        borderRadius: 3,
        boxShadow: 3,
        background: "#fff",
      }}
    >
      {/* ToastContainer to render the notifications */}
      <ToastContainer />
      <Tabs
        value={tabIndex}
        onChange={(_, newIndex) => setTabIndex(newIndex)}
        centered
        sx={{ "& .MuiTabs-indicator": { display: "none" } }}
      >
        <Tab
          label="User"
          sx={{
            width: "35%",
            fontSize: "16px",
            fontFamily: "NeueMontreal",
            border: "2px solid #EA352B",
            color: tabIndex === 0 ? "white" : "black",
            backgroundColor: tabIndex === 0 ? "#EA352B" : "white",
            borderRadius: tabIndex === 0 ? "30px 0px 0px 30px" : "30px 0px 0px 30px",
            transition: "all 0.3s ease",
            "&.Mui-selected": { color: "white !important" },
          }}
          onClick={() => setTabIndex(0)}
        />
        <Tab
          label="Service Provider"
          sx={{
            fontSize: "16px",
            width: "35%",
            fontFamily: "NeueMontreal",
            border: "2px solid #EA352B",
            color: tabIndex === 1 ? "white" : "black",
            backgroundColor: tabIndex === 1 ? "#EA352B" : "white",
            borderRadius: tabIndex === 1 ? "0px 30px 30px 0px" : "0px 30px 30px 0px",
            transition: "all 0.3s ease",
            "&.Mui-selected": { color: "white !important" },
          }}
          onClick={() => setTabIndex(1)}
        />
      </Tabs>

      <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
        <form onSubmit={handleSubmit}>
          {tabIndex === 0 ? (
            <>
            <div className="flex justify-between gap-2">
<div className="w-[49%]"><CustomInput
                label="First Name"
                name="fullName"
                value={userData.fullName}
                onChange={handleUserChange}
                required
              /></div>
<div className="w-[49%]"><CustomInput
                label="Last Name"
                name="lastName"
                value={userData.lastName}
                onChange={handleUserChange}
                required
              /></div>
            </div>
              
              <CustomInput
                label="how many cars do you own?"
                name="numCars"
                type="number"
                value={userData.numCars}
                onChange={handleUserChange}
                required
              />
                <div className="relative ">
             <CustomInput
                label="Email"
                name="email"
                type="email"
                value={userData.email}
                onChange={handleUserChange}
                required
              />
              <Tooltip
        title="Enter a valid email address"
        arrow
      >
        <IconButton className=" !absolute !right-[9px] !top-[27%] text-[#EA352B] ">
          <TbAlertOctagon color="#EA352B" />
        </IconButton>
      </Tooltip>
             
              </div>
            </>
          ) : (
            <>
           <CustomInput
                label="Company Representative Name"
                name="CompanyRepresentativeName"
                value={providerData.CompanyRepresentativeName}
                onChange={handleProviderChange}
                required
              />
              <CustomInput
                label="Company Name"
                name="companyName"
                value={providerData.companyName}
                onChange={handleProviderChange}
                required
              />
              <CustomInput
                label="Location"
                name="location"
                value={providerData.location}
                onChange={handleProviderChange}
                required
              />
              {/* <CustomInput
                label="City"
                name="city"
                value={providerData.city}
                onChange={handleProviderChange}
                required
              /> */}
              {/* <Autocomplete
  value={providerData.city}
  onChange={handleProviderChange}
  options={dubaiCities}
  renderInput={(params) => (
    <TextField
      {...params}
      label="City"
      required={true}
      variant="filled"  // Changed from "outlined" to "filled" to match styling with services input
      fullWidth
      sx={{
        marginTop: '10px', // Added marginTop
        // Style the label
        '& label': {
          color: 'black', // default label color
        },
        '& label.Mui-focused': {
          color: 'black', // label color when focused
        },
        // Style the input underline for filled variant
        '& .MuiFilledInput-root': {
          '&:before': {
            borderBottomColor: '#f6f6f6', // default bottom border color
          },
          '&:after': {
            borderBottomColor: 'red', // bottom border color when focused
          },
        },
        // Style the placeholder text
        '& input::placeholder': {
          color: 'black',
        },
      }}
    />
  )}
  disableClearable
  getOptionLabel={(option) => option}  // Adjust based on the structure of your data (if needed)
/> */}
<Autocomplete
  value={providerData.city}
  onChange={(event, newValue) => {
    setProviderData({ ...providerData, city: newValue });
  }}
  options={dubaiCities}
  renderInput={(params) => (
    <TextField
      {...params}
      label="City"
      required
      variant="filled"
      fullWidth
      sx={{
        marginTop: '10px',
        '& label': {
          color: 'black',
        },
        '& label.Mui-focused': {
          color: 'black',
        },
        '& .MuiFilledInput-root': {
          '&:before': {
            borderBottomColor: '#f6f6f6',
          },
          '&:after': {
            borderBottomColor: 'red',
          },
        },
        '& input::placeholder': {
          color: 'black',
        },
      }}
    />
  )}
  disableClearable
  getOptionLabel={(option) => option}
/>

              <CustomInput
                label="Company Phone Number"
                name="phone"
                type="tel"
                value={providerData.phone}
                onChange={handleProviderChange}
                required
              />
              <div className="relative ">
              <CustomInput
                label="Company Email"
                name="email"
                type="email"
                value={providerData.email}
                onChange={handleProviderChange}
                required
              />
              <Tooltip
               title="Enter a valid email address"
        arrow
      >
        <IconButton className=" !absolute !right-[9px] !top-[27%] text-[#EA352B] ">
          <TbAlertOctagon color="#EA352B" />
        </IconButton>
      </Tooltip>
              </div>
<div className="mt-1">
<Autocomplete
  multiple
  options={services}
  disableCloseOnSelect
  getOptionLabel={(option) => option}
  renderOption={(props, option, { selected }) => (
    <li {...props}>
      <Checkbox
        icon={<FaRegSquare style={{color:'#EA352B'}} />}
        checkedIcon={<FaCheckSquare style={{color:'#EA352B'}} />}
        checked={selected}
      />
      {option}
    </li>
  )}
  renderInput={(params) => (
    <TextField
      {...params}
      label="Select Services your company provides"
      placeholder="Services"
      variant="filled"
      // Added marginTop
      sx={{
         marginTop: '10px',
        // Style the label
        '& label': {
          color: 'black', // default label color
        },
        '& label.Mui-focused': {
          color: 'black', // label color when focused
        },
        // Style the input underline for filled variant
        '& .MuiFilledInput-root': {
          '&:before': {
            borderBottomColor: '#f6f6f6', // default bottom border color
          },
          '&:after': {
            borderBottomColor: 'red', // bottom border color when focused
          },
        },
        // Style the placeholder text
        '& input::placeholder': {
          color: 'black',
        },
      }}
    />
  )}
  onChange={(_, newValue) =>
    setProviderData({ ...providerData, services: newValue })
  }
/>
</div>
              
            </>
          )}
          <CustomButton
          loading={loading}
            type="submit"
            className="mt-3 h-[2.5em]"
            width="100%"
            background="red"
            textButton="Sign Up"
            handleClick={handleSubmit}
          />
        </form>
      </motion.div>
    </Box>
  );
};

export default SignupForm;
