import React from "react";

export default function QuantityControl({
  value,
  onChange,
  label = "Quantity",
}) {
  return (
    <div className="qty" aria-label={label}>
      <button
        className="qtyBtn thunk"
        type="button"
        onClick={() => onChange(Math.max(1, value - 1))}
        aria-label="Decrease quantity"
      >
        −
      </button>
      <input
        className="qtyInput"
        value={value}
        onChange={(e) => {
          const n = Number(e.target.value.replace(/[^\d]/g, ""));
          onChange(Number.isFinite(n) && n > 0 ? n : 1);
        }}
        inputMode="numeric"
        pattern="[0-9]*"
        aria-label="Quantity input"
      />
      <button
        className="qtyBtn thunk"
        type="button"
        onClick={() => onChange(Math.min(99, value + 1))}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}
