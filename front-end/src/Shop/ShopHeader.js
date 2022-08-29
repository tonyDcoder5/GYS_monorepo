import React from "react";

export default function ShopHeader({prompts = []}) {
  
  // console.log(prompts)
  
  return (
      <div className="row shop-header">
        <h3>Shop Section</h3>
        <div className="col-4">Shirt Preview</div>
        <div className="col-7">Coming Soon, Supplier details</div>
      </div>
  );
}
