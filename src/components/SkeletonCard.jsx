import React from "react";

export default function SkeletonCard() {
  return (
    <div className="card skeleton" aria-hidden="true">
      <div className="skImg shimmer" />
      <div className="skRow shimmer" />
      <div className="skRow shimmer" style={{ width: "70%" }} />
      <div className="skRow shimmer" style={{ width: "45%" }} />
    </div>
  );
}
