import React from "react";
import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";
import Button from "../components/Button";

export default function ErrorPage() {
  const err = useRouteError();

  let title = "Something went sideways.";
  let message = "The ritual failed. Try again.";

  if (isRouteErrorResponse(err)) {
    title =
      err.status === 404
        ? "404 — Not Found"
        : `${err.status} — ${err.statusText}`;
    message =
      err.status === 404
        ? "This page doesn’t exist (or it slipped into the void)."
        : err.data?.message || message;
  }

  return (
    <div className="container stackLg" style={{ paddingTop: 18 }}>
      <section className="panel tornAll">
        <h1 className="h1">{title}</h1>
        <p className="lead muted">{message}</p>
        <div className="stackMd" style={{ marginTop: 12 }}>
          <Button as={Link} to="/" variant="primary">
            Back home
          </Button>
          <Button as={Link} to="/shop" variant="ghost">
            Go to shop
          </Button>
        </div>
      </section>
    </div>
  );
}
