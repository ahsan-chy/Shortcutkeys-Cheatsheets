import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductList from '../components/ProductList'
import AuthenticationApp from './AuthenticationApp'

const Home = () => {

  return (
    <div className='container p-6 '>
      {/* <ProductList Productprops={Productobject}/> */}
      <div class="lg:w-1/2"><h1 class="inline-block text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
        Cheat Sheet</h1><p class="mt-1 text-lg text-gray-500 dark:text-gray-400 mb-3 lg:mb-0">Get started with this free tool to view and search for all the class names and CSS properties from the world's most popular utility-first CSS framework. 
         </p></div>
      {/* <AuthenticationApp/> */}
    </div>
  )
}
export default Home;