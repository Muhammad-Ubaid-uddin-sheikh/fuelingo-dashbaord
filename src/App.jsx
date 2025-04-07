// import React from "react";
// import Routes from "./Routes";
// import { BrowserRouter as Router } from "react-router-dom";

// function App() {
//   return (
//     <Router>

//       <Routes />
//     </Router>
//   );
// }

// export default App;
import React, { useEffect, useState } from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

function App() {
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem("recaptcha-verified");
    if (verified === "true") {
      setIsVerified(true);
    }
  }, []);

  const handleCaptcha = (value) => {
    if (value) {
      localStorage.setItem("recaptcha-verified", "true");
      setIsVerified(true);
    }
  };

  return (
    <>
      {!isVerified ? (
        // <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
        //   <h2 className="text-2xl font-bold mb-6">Please verify to continue</h2>
        //   <ReCAPTCHA
        //     sitekey="6LftNQ0rAAAAANdGr97ElxAI3eQmdQTagU_WcJgV"
        //     onChange={handleCaptcha}
        //   />
        // </div>
        <div className="min-h-screen flex items-center justify-center bg-[#fcf4f3] p-4">
          <div className="bg-[white] shadow-xl rounded-xl p-8 max-w-md w-full text-center">
            {/* Optional Logo */}
            {/* <img src="/logo.png" alt="Logo" className="w-20 h-20 mx-auto mb-4" /> */}

            <h1 className="text-[#EA352B] font-NeueMontreal" style={{ fontSize: "30px", marginBottom: "20px"  }}>Welcome to Our Website</h1>
            <p className="text-sm text-[black] font-[300] mb-6">Please complete the verification below to continue browsing.</p>

            <div className="flex justify-center">
              <ReCAPTCHA
                sitekey="6Ld6OQ0rAAAAAHeImDPnATKqBAi_AztjoDHj5ZBw" // Replace this with your actual site key
                onChange={handleCaptcha}
              />
            </div>

            <p className="text-xs text-gray-400 mt-4">Protected by Google reCAPTCHA</p>
          </div>
        </div>
      ) : (
        <Router>
          <Routes />
        </Router>
      )}
    </>
  );
}

export default App;
