import React from "react";
import Downloadables from "../Resources/Downloadables";
import FAQs from "./FAQs";
import ShopHeader from "../Shop/ShopHeader";

export default function BlogLayout() {
  return (
    <div className="faq-layout">
      <ShopHeader />
      <FAQs />
      <Downloadables />
    </div>
  );
}
