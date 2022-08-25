import React from "react";
import { Link } from "react-router-dom";
import Downloadables from "../Resources/Downloadables";
import Blogs from "./Blogs";
import Shop from "./Shop";

export default function Layout() {
  return (
    <div className="support">
      <Shop />
      <Blogs />
      <Downloadables />
    </div>
  );
}
