import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useCartStore } from "../store/cartStore";

export default function Checkout() {
  const clear = useCartStore((s) => s.clear);

  return (
    <div className="container stackLg">
      <header className="pageHead">
        <h1 className="h1">Checkout</h1>
        <p className="lead muted">A ritual without real payment gateways.</p>
      </header>

      <section className="panel tornAll">
        <h2 className="h2">This is a demo</h2>
        <p className="muted">
          No orders are created and no money is collected. If you’re building
          this into a real store, wire it to Stripe/Shopify/etc. and keep the
          vibe.
        </p>

        <div className="stackMd">
          <Button as={Link} to="/shop" variant="primary">
            Back to shop
          </Button>
          <Button as={Link} to="/" variant="ghost" onClick={() => clear()}>
            Clear cart & return home
          </Button>
        </div>
      </section>
    </div>
  );
}
