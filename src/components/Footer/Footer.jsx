import React from 'react'
import Logo from "../../images/logo.svg";
import FaceBook from "../../images/icon-facebook.svg"
import Twitter from "../../images/icon-twitter.svg"
import Pinterest from "../../images/icon-pinterest.svg"
import Instagram from "../../images/icon-instagram.svg"
const Footer = () => {
    return (
        <section>
            <footer className="bg-black">
                <div className="container max-w-6xl py-10 mx-auto">
                    <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
                        <div className="flex-flex-col items-center space-y-8 md:items-start md:space-y-4">
                            <div className="h-8">
                                <img src={Logo} alt="logo" className="w-44 md:ml-3" />
                            </div>
                            <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
                                <div className="group h-10">
                                    <a href="#" >About</a>
                                    <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                                </div>
                                <div className="group h-10">
                                    <a href="#" >Careers</a>
                                    <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                                </div>
                                <div className="group h-10">
                                    <a href="#" >Events</a>
                                    <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                                </div>
                                <div className="group h-10">
                                    <a href="#" >Products</a>
                                    <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                                </div>
                                <div className="group h-10">
                                    <a href="#" >Support</a>
                                    <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-flex-col items-start justify-between space-y-4 text-gray-500 mr-4">
                            <div className="mx-auto md:mx-0 flex items-center justify-center space-x-4 md:justify-start">
                                <div className="h-8 group">
                                    <a href="#">
                                        <img src={FaceBook} alt="facebook" className="h-6 hover:scale-105" />
                                    </a>
                                </div>
                                <div className="h-8 group">
                                    <a href="#">
                                        <img src={Twitter} alt="facebook" className="h-6 hover:scale-105" />
                                    </a>
                                </div>
                                <div className="h-8 group">
                                    <a href="#">
                                        <img src={Pinterest} alt="facebook" className="h-6 hover:scale-105" />
                                    </a>
                                </div>
                                <div className="h-8 group">
                                    <a href="#">
                                        <img src={Instagram} alt="facebook" className="h-6 hover:scale-105" />
                                    </a>
                                </div>
                            </div>
                            <div className="font-bold">&copy; 2023 Varunrunrunrun. All Rights Reserved</div>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default Footer