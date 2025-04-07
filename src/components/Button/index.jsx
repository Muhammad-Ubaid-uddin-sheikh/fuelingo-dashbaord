
import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[10px]",
};
const variants = {
  fill: {
    blue_600: "bg-red-600 text-white-a700_01",  // Added blue color
    gray_100_01: "bg-gray-100_01",
  },
};
const sizes = {
  lg: "h-[3.38rem] px-[1.50rem] text-[1.50rem]",
  xs: "h-[1.75rem] px-[1.25rem] text-[1.00rem]",
  sm: "h-[2.25rem] px-[1.88rem] text-[1.06rem]",
  md: "h-[2.63rem] px-[2.13rem] text-[1.13rem]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "lg",
  color = "blue_600",  // Default to blue color
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap font-medium ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["lg", "xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["blue_600", "gray_100_01"]),  // Updated to reflect blue color option
};

export { Button };
