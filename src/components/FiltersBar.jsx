import React from "react";
import Badge from "./Badge";

export default function FiltersBar({ categories, value, onChange, onReset }) {
  const { search, category, maxPrice } = value;

  return (
    <section className="filters tornAll" aria-label="Shop filters">
      <div className="filtersRow">
        <label className="field">
          <span className="fieldLabel">Search</span>
          <input
            className="input"
            value={search}
            onChange={(e) => onChange({ search: e.target.value })}
            placeholder="Search the shelves…"
            type="search"
            aria-label="Search products"
          />
        </label>

        <label className="field">
          <span className="fieldLabel">Category</span>
          <select
            className="input"
            value={category}
            onChange={(e) => onChange({ category: e.target.value })}
            aria-label="Filter by category"
          >
            <option value="All">All</option>
            {categories.map((c) => (
              <option value={c} key={c}>
                {c}
              </option>
            ))}
          </select>
        </label>

        <label className="field">
          <span className="fieldLabel">
            Max price <Badge tone="neon">${Number(maxPrice).toFixed(0)}</Badge>
          </span>
          <input
            className="range"
            type="range"
            min="5"
            max="60"
            step="1"
            value={maxPrice}
            onChange={(e) => onChange({ maxPrice: e.target.value })}
            aria-label="Max price"
          />
        </label>

        <button className="btn btn-ghost thunk" onClick={onReset} type="button">
          Reset
        </button>
      </div>

      <div className="filtersHint muted small">
        Tip: Hit <kbd>/</kbd> to jump to search.
      </div>
    </section>
  );
}
