import React from 'react'
import Navbar from '../components/Navbar'
import Footer  from '../components/Footer'
import ProductList from '../components/ProductList'
import AuthenticationApp from './AuthenticationApp'
export default function Home() {
  const Productobject=[
    {
    price:10500,
    name:'Samsung',
    color:'black',
    qunatity:0
  },
  {
    price:1000,
    name:'Samsung J6 Plus',
    color:'Blue',
    qunatity:0
  }
]
  return (
    <div className='md:container mx-auto aspect-video'>
      {/* <Navbar/>
      <ProductList Productprops={Productobject}/>
      <Footer/> */}
      <AuthenticationApp/>
    </div>
  )
}
