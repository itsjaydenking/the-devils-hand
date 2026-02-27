import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Badge from "./Badge";
import { useCartStore } from "../store/cartStore";

export default function ProductCard({ product }) {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <article className="card cardHover tornAll">
      <Link
        to={`/product/${product.id}`}
        className="cardMedia"
        aria-label={`View ${product.name}`}
      >
        <img src={product.image} alt={product.name} loading="lazy" />
        <div className="cardSigil" aria-hidden="true">
          ⟡
        </div>
      </Link>

      <div className="cardBody">
        <div className="cardTop">
          <h3 className="cardTitle">
            <Link to={`/product/${product.id}`} className="inkUnderline">
              {product.name}
            </Link>
          </h3>
          <Badge tone="blood">${product.price.toFixed(2)}</Badge>
        </div>

        <p className="cardDesc">{product.description}</p>

        <div className="cardMeta">
          <Badge tone="paper">{product.category}</Badge>
          <span className="muted small">Lefty-approved</span>
        </div>

        <div className="cardActions">
          <Button
            variant="primary"
            onClick={() => addItem(product, 1)}
            aria-label={`Add ${product.name} to cart`}
          >
            Add to cart
          </Button>
          <Button
            as={Link}
            to={`/product/${product.id}`}
            variant="ghost"
            aria-label="View details"
          >
            Details
          </Button>
        </div>
      </div>
    </article>
  );
}
