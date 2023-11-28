import React from 'react'
import Navbar from '../components/Navbar'
import Footer  from '../components/Footer'
import ProductList from '../components/ProductList'
export default function Home() {
  const Product=[
    {
    price:10500,
    name:'Samsung',
    color:'black',
    qunatity:0
  },
  {
    price:1000,
    name:'Samsung J6 Plust',
    color:'Blue',
    qunatity:0
  }
]
  return (
    <div className='md:container mx-auto aspect-video'>
      <Navbar/>
      <ProductList product={Product}/>
      <Footer/>
    </div>
  )
}
