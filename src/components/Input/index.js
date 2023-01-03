import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineBluegray200: "border border-bluegray_200 border-solid",
  srcFillBluegray50: "bg-bluegray_50",
};
const shapes = {
  RoundedBorder8: "rounded-radius8",
  srcRoundedBorder17: "rounded-radius175",
};
const sizes = {
  sm: "md:p-[11px] p-[17px] sm:px-[15px] sm:py-[9px]",
  smSrc: "p-[11px] sm:p-[5px] md:p-[7px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder8", "srcRoundedBorder17"]),
  variant: PropTypes.oneOf(["OutlineBluegray200", "srcFillBluegray50"]),
  size: PropTypes.oneOf(["sm", "smSrc"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "RoundedBorder8",
  variant: "OutlineBluegray200",
  size: "sm",
};

export { Input };
