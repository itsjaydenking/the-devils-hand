import React from "react";

export default function Badge({ children, tone = "neon" }) {
  return <span className={`badge badge-${tone}`}>{children}</span>;
}
