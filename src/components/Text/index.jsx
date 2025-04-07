import React from "react";

const sizes = {
  textxs: "text-[0.81rem] font-normal not-italic",
  texts: "text-[0.88rem] font-normal not-italic",
};

const Text = ({ children, className = "", as, size = "textxs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-gray-800_02 font-neuemontreal ${className} ${sizes[size]}`}
      style={{ fontFamily: "'NeueMontreal', sans-serif", fontWeight: 400, fontSize: "12px" }}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
