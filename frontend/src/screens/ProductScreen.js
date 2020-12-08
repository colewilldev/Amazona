import React from "react";
import Product from "../components/Product";
import data from "../data";

export default function ProductScreen(props) {
  const product = data.products.find((x) => x._id === props.match.params.id);
  console.log("hello");
  console.log(product);
  if (!product) {
    return <div>Product Not Found</div>;
  }
  return (
    <div>
      <div className="row">
        <div className="col-2">
          <img className="large" src={Product.image} alt={Product.name} />
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
          </ul>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}
