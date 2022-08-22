import React from "react";
import { Link } from "react-router-dom";
import Downloadables from "../Resources/Downloadables";
import Blog from "./Blog";
import Shop from "./Shop";

export default function Layout() {
  return (
    <div className="support">
      <Shop />
      <Blog />
      <Downloadables />
    </div>
  );
}
