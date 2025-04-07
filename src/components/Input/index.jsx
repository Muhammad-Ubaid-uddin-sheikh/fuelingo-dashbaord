import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-[10px]",
};

const variants = {
  underline: {
    black_900_4c: "text-black-900_01 border-b border-black-900_4c border-solid",
  },
  fill: {
    gray_100: "bg-gray-100 text-black-900_01",
  },
};

const sizes = {
  lg: "h-[4.38rem] px-[1.00rem] text-[1.00rem]",
  xs: "h-[2.75rem] px-[0.63rem] text-[1.25rem]",
  md: "h-[4.25rem] px-[1.00rem] text-[1.50rem]",
  sm: "h-[3.63rem] px-[0.88rem] text-[1.00rem]",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "fill",
      size = "sm",
      color = "gray_100",
      ...restProps
    },
    ref,
  ) => {
    return (
      <label
        className={`${className} flex items-center justify-center cursor-text  ${shape && shapes[shape]} ${variant && (variants[variant]?.[color] || variants[variant])} ${size && sizes[size]}`}
      >
        {!!label && label}
        {!!prefix && prefix}
        <input ref={ref} type={type} name={name} placeholder={placeholder} onChange={onChange} {...restProps} />
        {!!suffix && suffix}
      </label>
    );
  },
);
Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["lg", "xs", "md", "sm"]),
  variant: PropTypes.oneOf(["underline", "fill"]),
  color: PropTypes.oneOf(["black_900_4c", "gray_100"]),
};

export { Input };
