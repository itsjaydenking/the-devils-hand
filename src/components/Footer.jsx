import React from "react";

export default function Footer() {
  return (
    <footer className="footer tornTop">
      <div className="container footerGrid">
        <div>
          <div className="footerTitle">Coven-approved customer service</div>
          <p className="muted">
            We answer emails, appease printers, and hex right-handed scissors
            (politely). This site is a demo storefront.
          </p>
        </div>

        <div>
          <div className="footerTitle">Sigils (social)</div>
          <div className="iconRow" aria-label="Social links (placeholders)">
            <button
              className="iconBtn"
              type="button"
              aria-label="Instagram (placeholder)"
            >
              ⟡
            </button>
            <button
              className="iconBtn"
              type="button"
              aria-label="TikTok (placeholder)"
            >
              ⟠
            </button>
            <button
              className="iconBtn"
              type="button"
              aria-label="YouTube (placeholder)"
            >
              ⧗
            </button>
          </div>
        </div>

        <div>
          <div className="footerTitle">House rules</div>
          <ul className="footerList">
            <li>Accessible by design</li>
            <li>No shame. No switching.</li>
            <li>Left-handed tools, loud identity</li>
          </ul>
        </div>
      </div>
      <div className="footerBottom">
        <span>© {new Date().getFullYear()} The Devil’s Hand</span>
        <span className="muted">Built with Vite + React</span>
      </div>
    </footer>
  );
}
