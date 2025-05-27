// import React from "react";
// import ReactStars from "react-rating-stars-component";

// const RatingBar = ({
//   children,
//   className,
//   starCount = 5,
//   color = "grey",
//   activeColor = "red",
//   isEditable = false,
//   ...restProps
// }) => {
//   return (
//     <>
//       <ReactStars
//         edit={isEditable}
//         classNames={className}
//         count={starCount}
//         isHalf={false}
//         color={color}
//         activeColor={activeColor}
//         {...restProps}
//         key={restProps.value || 1}
//       />
//       {children}
//     </>
//   );
// };

// export { RatingBar };
import React from "react";
import ReactStars from "react-rating-stars-component";

const RatingBar = ({
  className,
  value = 0,
  starCount = 5,
  color = "#e0e0e0",        // Light grey for unfilled stars
  activeColor = "#fcc767",  // Yellow for filled stars
  isEditable = false,
  ...restProps
}) => {
  if (!value || value <= 0) return null; // If no rating, don't render

  return (
    <ReactStars
      edit={isEditable}
      classNames={className}
      count={starCount}
      value={value}
      isHalf={false}
      color={color}
      activeColor={activeColor}
      {...restProps}
    />
  );
};

export { RatingBar };
