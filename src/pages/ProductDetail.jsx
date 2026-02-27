import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../components/Button";
import Badge from "../components/Badge";
import { products } from "../data/products";
import { useCartStore } from "../store/cartStore";

export default function ProductDetail() {
  const { id } = useParams();
  const product = useMemo(() => products.find((p) => p.id === id), [id]);
  const addItem = useCartStore((s) => s.addItem);

  if (!product) {
    return (
      <div className="container stackLg">
        <div className="empty tornAll">
          <div className="emptyTitle">Product not found.</div>
          <p className="muted">The shelf is empty where that item should be.</p>
          <Button as={Link} to="/shop" variant="primary">
            Back to shop
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container stackLg">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link className="inkUnderline" to="/shop">
          Shop
        </Link>
        <span aria-hidden="true">›</span>
        <span className="muted">{product.name}</span>
      </nav>

      <section className="detail tornAll">
        <div className="detailMedia">
          <img src={product.image} alt={product.name} />
          <div className="detailScribble" aria-hidden="true">
            ⚠ LEFTY ZONE ⚠
          </div>
        </div>

        <div className="detailBody">
          <div className="detailTop">
            <h1 className="h1">{product.name}</h1>
            <div className="detailBadges">
              <Badge tone="paper">{product.category}</Badge>
              <Badge tone="blood">${product.price.toFixed(2)}</Badge>
            </div>
          </div>

          <p className="lead">{product.description}</p>

          <div className="detailBlock">
            <h2 className="h2Sm">Features</h2>
            <ul className="list">
              {product.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>

          <div className="detailBlock">
            <h2 className="h2Sm">Why it’s lefty-friendly</h2>
            <p className="muted">{product.leftyBenefit}</p>
          </div>

          <div className="detailActions">
            <Button variant="primary" onClick={() => addItem(product, 1)}>
              Add to cart
            </Button>
            <Button as={Link} to="/cart" variant="ghost">
              Go to cart
            </Button>
          </div>

          <div className="finePrint muted small">
            Demo store. No real payments. No real shipping. Real vibes.
          </div>
        </div>
      </section>
    </div>
  );
}
