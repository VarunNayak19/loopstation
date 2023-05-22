import React, { useState } from 'react'
import Logo from "../../images/logo.svg"
const NavBar = () => {
    const [mobileMenu, setmobileMenu] = useState(false)
    return (
        <div className="container max-w-6xl mx-auto px-6 py-12 ">
            <nav className="flex items-center justify-between font-bold text-white">
                <img src={Logo} alt="" className='z-100' />
                <div className="hidden h-10 font-alata md:flex md:space-x-8">
                    <div className="group flex-col flex justify-center">
                        <a href="#" >About</a>
                        <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                    </div>
                    <div className="group flex-col flex justify-center">
                        <a href="#" >Careers</a>
                        <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                    </div>
                    <div className="group flex-col flex justify-center">
                        <a href="#" >Events</a>
                        <div className="mx-2 group-hover:border-b group-hover:border-blue-50 group-hover"></div>
                    </div>
                    <div className="group flex-col flex justify-center">
                        <a href="#" >Products</a>
                        <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                    </div>
                    <div className="group flex-col flex justify-center">
                        <a href="#" >Support</a>
                        <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                    </div>
                </div>
                <div className="md:hidden absolute top-14 right-10" onClick={() => { setmobileMenu(!mobileMenu) }}>
                    <button id="menu-btn" type='button' className={mobileMenu ? "open z-40 block hamburger md:hidden focus:outline:none" : "z-40 block hamburger md:hidden focus:outline:none"}>
                        <span className='hamburger-top neonText'></span>
                        <span className='hamburger-middle neonText'></span>
                        <span className='hamburger-bottom neonText'></span>
                    </button>
                </div>
            </nav>

            <div id="menu" className={mobileMenu ? ` ease-linear flex z-10 absolute top-0 bottom-0 left-0 flex-col self-end  w-full min-h-screen py-1 pt-40 pl-6 space-y-3 text-lg text-white uppercase bg-black` : `hidden`}>
                <a href="#" className="hover:text-pink-500">About</a>
                <a href="#" className="hover:text-pink-500">Careers</a>
                <a href="#" className="hover:text-pink-500">Events</a>
                <a href="#" className="hover:text-pink-500">Products</a>
                <a href="#" className="hover:text-pink-500">Support</a>
            </div>

        </div>
    )
}

export default NavBar