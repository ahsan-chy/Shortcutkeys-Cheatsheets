import React from 'react'
import Products from './Products';

export default function ProductList({Productprops}) {

  return (
    Productprops.map(Parmeterproduct=>{
     return   <Products  ProductDriling={Parmeterproduct}/>
    })
     
 
  )
}
