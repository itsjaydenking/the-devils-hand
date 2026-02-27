import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `navLink stampHover ${isActive ? "navLinkActive" : ""}`
      }
    >
      {children}
    </NavLink>
  );
}

export default function Navbar() {
  const count = useCartStore((s) => s.getCount());

  return (
    <header className="navWrap tornBottom">
      <div className="navInner">
        <Link
          to="/"
          className="logo inkSmear"
          aria-label="The Devil’s Hand home"
        >
          <span className="logoMark" aria-hidden="true">
            ✶
          </span>
          <span className="logoText">THE DEVIL’S HAND</span>
          <span className="logoSub">Left-handed goods</span>
        </Link>

        <nav aria-label="Primary" className="nav">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/shop">Shop</NavItem>
          <NavItem to="/lore">Lore</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/cart">
            Cart{" "}
            <span className="cartPip" aria-label={`${count} items in cart`}>
              {count}
            </span>
          </NavItem>
        </nav>
      </div>
      <div className="warningTape" aria-hidden="true">
        <span>RECLAIM • LEFTY PRIDE • ZINE MAGIC •</span>
        <span>RECLAIM • LEFTY PRIDE • ZINE MAGIC •</span>
      </div>
    </header>
  );
}
