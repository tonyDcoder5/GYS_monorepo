import React from "react";
import { Link } from "react-router-dom";
import Downloadables from "../Resources/Downloadables";
import Blogs from "./Blogs";
import Shop from "./Shop";

export default function BlogLayout() {
  return (
    <div className="blog-layout">
      <Shop />
      <Blogs />
      <Downloadables />
    </div>
  );
}
