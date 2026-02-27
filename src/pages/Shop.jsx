import React, { useEffect, useMemo, useRef, useState } from "react";
import FiltersBar from "../components/FiltersBar";
import ProductGrid from "../components/ProductGrid";
import { CATEGORIES, products } from "../data/products";

export default function Shop() {
  const [filters, setFilters] = useState({
    search: "",
    category: "All",
    maxPrice: 60,
  });

  const [loading, setLoading] = useState(true);
  const searchRef = useRef(null);

  useEffect(() => {
    // fake skeleton loading even though data is local (UX polish)
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "/") {
        e.preventDefault();
        // Focus the first search input in the filters panel
        const el = document.querySelector('input[type="search"]');
        el?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const filtered = useMemo(() => {
    const q = filters.search.trim().toLowerCase();
    return products
      .filter((p) =>
        filters.category === "All" ? true : p.category === filters.category,
      )
      .filter((p) => p.price <= Number(filters.maxPrice))
      .filter((p) => {
        if (!q) return true;
        return (
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
        );
      });
  }, [filters]);

  return (
    <div className="container stackLg">
      <header className="pageHead">
        <h1 className="h1">Shop</h1>
        <p className="lead muted">
          Tools for the left hand. Attitude for the rest of you.
        </p>
      </header>

      <FiltersBar
        categories={CATEGORIES}
        value={filters}
        onChange={(patch) => setFilters((f) => ({ ...f, ...patch }))}
        onReset={() =>
          setFilters({ search: "", category: "All", maxPrice: 60 })
        }
      />

      <ProductGrid products={filtered} loading={loading} />
    </div>
  );
}
