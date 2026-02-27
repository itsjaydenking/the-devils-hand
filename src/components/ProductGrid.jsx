import React from "react";
import ProductCard from "./ProductCard";
import SkeletonCard from "./SkeletonCard";

export default function ProductGrid({ products, loading = false }) {
  if (loading) {
    return (
      <div className="grid" aria-label="Loading products">
        {Array.from({ length: 8 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (!products.length) {
    return (
      <div className="empty tornAll">
        <div className="emptyTitle">No matches.</div>
        <p className="muted">
          Try a different keyword, category, or price range.
        </p>
      </div>
    );
  }

  return (
    <div className="grid" aria-label="Product grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
