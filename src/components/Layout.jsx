import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SkipLink from "./SkipLink";

export default function Layout({ children }) {
  return (
    <div className="appShell textureNoise">
      <SkipLink />
      <Navbar />
      <main id="main" className="main" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
