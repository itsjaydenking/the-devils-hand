import React, { useEffect, useRef } from "react";

export default function Modal({ open, title, children, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const d = dialogRef.current;
    if (!d) return;

    if (!d.open) d.showModal();

    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (!open && d.open) d.close();
  }, [open]);

  if (!open) return null;

  return (
    <dialog
      ref={dialogRef}
      className="modal"
      aria-label={title}
      onClose={onClose}
      onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const inDialog =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom;
        // click outside closes (native dialog already does some of this; we keep it reliable)
        if (!inDialog) onClose?.();
      }}
    >
      <div className="modalInner tornAll">
        <div className="modalHeader">
          <div className="modalTitle">{title}</div>
          <button
            className="iconBtn"
            onClick={onClose}
            aria-label="Close dialog"
          >
            ✕
          </button>
        </div>
        <div className="modalBody">{children}</div>
      </div>
    </dialog>
  );
}
