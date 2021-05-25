import React from "react";
import { Link } from "react-router-dom";

export default function TestLinks() {
  return (
    <div className="testLinks">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/test/counter">Test Counter</Link>
      <Link to="/test/theme">Test Theme</Link>
    </div>
  );
}
