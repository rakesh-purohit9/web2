import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder5: "rounded-radius5",
  RoundedBorder8: "rounded-radius8",
  RoundedBorder2: "rounded-radius2",
  icbRoundedBorder17: "rounded-radius175",
  icbCircleBorder32: "rounded-radius32",
};
const variants = {
  FillBlueA700: "bg-blue_A700 text-white_A700",
  icbFillBluegray50: "bg-bluegray_50",
  icbFillBlue51: "bg-blue_51",
};
const sizes = {
  sm: "sm:p-[3px] md:p-[4px] p-[7px]",
  md: "p-[10px] sm:p-[5px] md:p-[6px]",
  lg: "md:p-[10px] p-[15px] sm:p-[7px]",
  smIcn: "sm:p-[4px] md:p-[5px] p-[8px]",
  mdIcn: "md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
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
  shape: PropTypes.oneOf([
    "RoundedBorder5",
    "RoundedBorder8",
    "RoundedBorder2",
    "icbRoundedBorder17",
    "icbCircleBorder32",
  ]),
  variant: PropTypes.oneOf([
    "FillBlueA700",
    "icbFillBluegray50",
    "icbFillBlue51",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "smIcn", "mdIcn"]),
};
Button.defaultProps = { className: "", shape: "", variant: "", size: "" };

export { Button };
