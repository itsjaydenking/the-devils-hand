import React from "react";

export default function Button({
  as: As = "button",
  variant = "primary",
  className = "",
  ...props
}) {
  return <As className={`btn btn-${variant} thunk ${className}`} {...props} />;
}
