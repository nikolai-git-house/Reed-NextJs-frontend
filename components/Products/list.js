import React, { Component } from "react";
import Link from "next/link";

import { ProductListContainer, ProductThumb } from "./style";
import { ApiUrl } from "../../config";

export default class ProductList extends Component {
  render() {
    const { products } = this.props;
    return (
      <ProductListContainer>
        {products.map((product, i) => (
          <ProductThumb>
            <div style={{ height: 150 }}>
              <img src={`${ApiUrl}${product.gallery[0].url}`} />
            </div>
            <h2>{product.title}</h2>
            <h3 title={product.description}>{product.description}</h3>
            <Link key={i} href={`/products/item/${product.slug}`}>
              <a>More Details></a>
            </Link>
          </ProductThumb>
        ))}
      </ProductListContainer>
    );
  }
}
