import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import QuantityControl from "../components/QuantityControl";
import Modal from "../components/Modal";
import { useCartStore } from "../store/cartStore";

export default function Cart() {
  const itemsById = useCartStore((s) => s.itemsById);
  const setQty = useCartStore((s) => s.setQty);
  const removeItem = useCartStore((s) => s.removeItem);
  const subtotal = useCartStore((s) => s.getSubtotal());

  const items = useMemo(() => Object.values(itemsById), [itemsById]);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  if (!items.length) {
    return (
      <div className="container stackLg">
        <header className="pageHead">
          <h1 className="h1">Cart</h1>
          <p className="lead muted">
            Nothing here yet. The devil’s hand is empty.
          </p>
        </header>

        <div className="empty tornAll">
          <div className="emptyTitle">Your cart is currently a void.</div>
          <p className="muted">
            Go grab something sharp, useful, and lefty-correct.
          </p>
          <Button as={Link} to="/shop" variant="primary">
            Shop left-handed gear
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container stackLg">
      <header className="pageHead">
        <h1 className="h1">Cart</h1>
        <p className="lead muted">Count your relics before the ritual.</p>
      </header>

      <section className="cart tornAll">
        <ul className="cartList" aria-label="Cart items">
          {items.map(({ product, qty }) => (
            <li key={product.id} className="cartItem">
              <img className="cartImg" src={product.image} alt={product.name} />
              <div className="cartInfo">
                <div className="cartTitleRow">
                  <Link className="inkUnderline" to={`/product/${product.id}`}>
                    {product.name}
                  </Link>
                  <span className="muted">${product.price.toFixed(2)}</span>
                </div>
                <div className="cartDesc muted small">
                  {product.description}
                </div>

                <div className="cartControls">
                  <QuantityControl
                    value={qty}
                    onChange={(n) => setQty(product.id, n)}
                    label={`Quantity for ${product.name}`}
                  />
                  <button
                    className="btn btn-ghost thunk"
                    type="button"
                    onClick={() => removeItem(product.id)}
                    aria-label={`Remove ${product.name} from cart`}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="cartSummary tornAll">
          <div className="summaryRow">
            <span className="muted">Subtotal</span>
            <strong>${subtotal.toFixed(2)}</strong>
          </div>
          <div className="summaryFine muted small">
            Taxes, shipping, and earthly consequences not included.
          </div>
          <div className="summaryActions">
            <Button variant="primary" onClick={() => setOpen(true)}>
              Checkout
            </Button>
            <Button as={Link} to="/shop" variant="ghost">
              Keep shopping
            </Button>
          </div>
        </div>
      </section>

      <Modal open={open} title="Mock checkout" onClose={() => setOpen(false)}>
        <p className="muted">
          This is a demo storefront, no payments will be processed.
        </p>
        <div className="stackMd">
          <Button
            variant="primary"
            onClick={() => {
              setOpen(false);
              navigate("/checkout");
            }}
          >
            Continue
          </Button>
          <Button variant="ghost" onClick={() => setOpen(false)}>
            Close
          </Button>
        </div>
      </Modal>
    </div>
  );
}
