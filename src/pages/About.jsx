import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Badge from "../components/Badge";

export default function About() {
  return (
    <div className="container stackLg">
      <header className="pageHead">
        <h1 className="h1">About</h1>
        <p className="lead muted">
          A brand built from a stubborn truth: you shouldn’t have to switch
          hands to be treated as “correct.”
        </p>
      </header>

      <section className="panel tornAll">
        <div className="sectionHead">
          <h2 className="h2">What we stand for</h2>
          <Badge tone="blood">Values</Badge>
        </div>

        <div className="manifestoGrid">
          <p>
            <strong>Inclusion:</strong> Tools should fit people, not the other
            way around. Left-handed users deserve thoughtful design—not an
            afterthought aisle.
          </p>
          <p>
            <strong>Identity:</strong> We reclaim language that was used to
            shame. “Devil’s hand” becomes a badge, not a bruise.
          </p>
          <p>
            <strong>Craft:</strong> We love the details: mirrored bevels,
            flipped markings, right-side binding, and layouts that stop
            punishing your wrist.
          </p>
          <p className="note tornAll">
            This is a demo site concept—built to feel real, accessible, and
            brand-forward.
          </p>
        </div>

        <div className="stackMd">
          <Button as={Link} to="/shop" variant="primary">
            Shop the Devil’s Hand
          </Button>
          <Button as={Link} to="/lore" variant="ghost">
            Read the lore
          </Button>
        </div>
      </section>
    </div>
  );
}
