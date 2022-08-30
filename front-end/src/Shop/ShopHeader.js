import React from "react";
import StarBanner from "../components/StarBanner";

export default function ShopHeader({prompts = []}) {
  
  // console.log(prompts)
  
  return (
      <div className="row shop-header">
        <StarBanner />
        <div className="col-4">Shirt Preview</div>
        <div className="col-7">Coming Soon, Supplier details</div>
      </div>
  );
}
