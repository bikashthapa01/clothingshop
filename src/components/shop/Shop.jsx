import { ProductsContext } from "../../contexts/products.context"
import { ProductCard } from "../product-card/ProductCard";
import "./Shop.styles.scss"

import React, { useContext } from 'react'


export const Shop = () => {
    const {products} = useContext(ProductsContext);
  return (
    <div className="shop-container">
        {products.map((product)=>{
            return <ProductCard key={product.id} product = {product}/>
        })}
    </div>
  )
}
