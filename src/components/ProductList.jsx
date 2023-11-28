import React from 'react'
import Products from './Products';

export default function ProductList({product}) {
    console.log(product);
  return (
    <div>
      <Products/>
    </div>
  )
}
