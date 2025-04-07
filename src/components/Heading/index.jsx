// import React from "react";

// const sizes = {
//   textmd: "text-[0.94rem] font-medium",
//   textlg: "text-[1.00rem] font-medium lg:text-[0.81rem]",
//   textxl: "text-[1.13rem] font-medium not-italic lg:text-[0.94rem]",
//   text2xl: "text-[1.25rem] font-medium lg:text-[1.06rem]",
//   text3xl: "text-[1.50rem] font-medium lg:text-[1.25rem] md:text-[1.38rem]",
//   text4xl: "text-[2.00rem] font-medium lg:text-[1.69rem] md:text-[1.88rem] sm:text-[1.75rem]",
//   headingxs: "text-[1.00rem] font-bold italic lg:text-[0.81rem]",
//   headings: "text-[1.50rem] font-bold lg:text-[1.25rem] md:text-[1.38rem]",
//   headingmd: "text-[1.63rem] font-bold lg:text-[1.38rem] md:text-[1.50rem] sm:text-[1.38rem]",
//   headinglg: "text-[1.75rem] font-bold lg:text-[1.44rem] md:text-[1.63rem] sm:text-[1.50rem]",
//   headingxl: "text-[2.00rem] font-bold lg:text-[1.69rem] md:text-[1.88rem] sm:text-[1.75rem]",
// };

// const Heading = ({ children, className = "", size = "text2xl", as, ...restProps }) => {
//   const Component = as || "h6";

//   return (
//     <Component className={`text-black-900_01 font-generalsans ${className} ${sizes[size]}`} {...restProps}>
//       {children}
//     </Component>
//   );
// };

// export { Heading };
import React from "react";

const sizes = {
  textmd: "text-[0.94rem] font-medium",
  textlg: "text-[1.00rem] font-medium lg:text-[0.81rem]",
  textxl: "text-[1.13rem] font-medium not-italic lg:text-[0.94rem]",
  text2xl: "text-[1.25rem] font-medium lg:text-[1.06rem]",
  text3xl: "text-[1.50rem] font-medium lg:text-[1.25rem] md:text-[1.38rem]",
  text4xl: "text-[2.00rem] font-medium lg:text-[1.69rem] md:text-[1.88rem] sm:text-[1.75rem]",
  headingxs: "text-[1.00rem] font-bold italic lg:text-[0.81rem]",
  headings: "text-[1.50rem] font-bold lg:text-[1.25rem] md:text-[1.38rem]",
  headingmd: "text-[1.63rem] font-bold lg:text-[1.38rem] md:text-[1.50rem] sm:text-[1.38rem]",
  headinglg: "text-[1.75rem] font-bold lg:text-[1.44rem] md:text-[1.63rem] sm:text-[1.50rem]",
  headingxl: "text-[2.00rem] font-bold lg:text-[1.69rem] md:text-[1.88rem] sm:text-[1.75rem]",
};

const Heading = ({ children, className = "", size = "text2xl", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component
      className={`text-black-900_01 font-generalsans font-neuemontreal font-medium ${className} ${sizes[size]}`}
      style={{ fontFamily: "'NeueMontreal', sans-serif", fontWeight: 500 }}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Heading };
