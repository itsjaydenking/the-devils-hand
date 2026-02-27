import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Badge from "../components/Badge";
import ProductGrid from "../components/ProductGrid";
import { products } from "../data/products";

export default function Home() {
  const featured = useMemo(() => products.slice(0, 6), []);

  return (
    <div className="container stackLg">
      <section className="hero tornAll grittyGradient">
        <div className="heroInner">
          <div className="heroKicker">
            <Badge tone="neon">Blessed are the left-handed.</Badge>
            <Badge tone="blood">Reclaim the Devil’s Hand.</Badge>
          </div>

          <h1 className="h1">
            LEFTY GEAR FOR PEOPLE WHO GOT TIRED OF APOLOGIZING.
          </h1>

          <p className="lead">
            A punk-zine occult shop for southpaws: tools, talismans, and
            everyday fixes for a world designed the other way around.
          </p>

          <div className="heroActions">
            <Button as={Link} to="/shop" variant="primary">
              Enter the shop
            </Button>
            <Button as={Link} to="/lore" variant="ghost">
              Read the lore
            </Button>
          </div>

          <div className="heroMarks" aria-hidden="true">
            <div className="stamp">COVEN CHECKED</div>
            <div className="stamp">NO SWITCHING</div>
            <div className="stamp">LEFTY PRIDE</div>
          </div>
        </div>
      </section>

      <section className="panel tornAll">
        <h2 className="h2">Manifesto</h2>
        <div className="manifestoGrid">
          <p>
            The left hand was labeled <strong>devilish</strong> in old stories
            and strict classrooms. Some religious schooling treated
            left-handedness like a flaw to be corrected.
          </p>
          <p>
            Kids were pushed, sometimes with humiliation and “discipline,” to
            write with the right hand, even when it never felt natural.
          </p>
          <p>
            This shop exists to reclaim the label with rebellious pride:
            left-handedness as identity, craft, and a quiet kind of power.
          </p>
          <p className="note tornAll">
            I was born left-handed but was forced to use my right hand. My
            mother is left-handed. My partner is left-handed and their dad too.
            We’re not broken; we’re a lineage. We’re done being corrected.
          </p>
        </div>

        <div className="sigilRow" aria-hidden="true">
          <span>✶</span>
          <span>⟡</span>
          <span>⟠</span>
          <span>⧗</span>
          <span>✶</span>
        </div>
      </section>

      <section className="stackMd">
        <div className="sectionHead">
          <h2 className="h2">Featured relics</h2>
          <Link className="inkUnderline" to="/shop">
            See all products →
          </Link>
        </div>

        <ProductGrid products={featured} />
      </section>
    </div>
  );
}
