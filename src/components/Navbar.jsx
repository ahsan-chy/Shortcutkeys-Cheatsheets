import {
    BrowserRouter,
    Link,
    Route,
    Routes,
  } from "react-router-dom";
 const Navbar = () => {
    return (
        <div>
        <nav className="flex items-center justify-between flex-wrap bg-[#011B39] p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"></path></svg>
                <span className="font-semibold text-xl tracking-tight ms-2">Cheatsheets</span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-[#9c8321] border-[#9c8321] hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link to="/"  className="block mt-4 lg:inline-block lg:mt-0 text-[#9c8321] hover:text-white mr-4">
                    Home
                    </Link>
                    <Link to="Features" className="block mt-4 lg:inline-block lg:mt-0 text-[#9c8321] hover:text-white mr-4">
                    Features
                    </Link>
                    <Link to="/*"  className="block mt-4 lg:inline-block lg:mt-0 text-[#9c8321] hover:text-white mr-4">
                    Contributions
                    </Link>
                    <Link to="ContactUs" className="block mt-4 lg:inline-block lg:mt-0 text-[#9c8321] hover:text-white">
                    Contact Us
                    </Link>
                </div>
                <div>
                    <Link to="Login"  className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-[#9c8321] hover:bg-white mt-4 lg:mt-0">Login</Link>
                </div>
            </div>
        </nav>
    </div>
    )
}
export default Navbar;