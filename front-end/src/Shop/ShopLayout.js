import React from "react";

import ShopHeader from "./ShopHeader";
import ShopBlock from "./ShopBlock";


export default function ShopLayout({prompts =[]}) {

  // console.log(prompts);
  const headerPrompts = prompts.filter((prompt)=> prompt.section_name.includes("shop-header"));

  return (
    <div className="shop-layout">
      <ShopHeader prompts={headerPrompts} />
      <ShopBlock prompts={prompts} />
    </div>
  );
}
