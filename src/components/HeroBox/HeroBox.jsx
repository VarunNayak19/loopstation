import React, { useState } from 'react'
import vrPng from "../../images/vr.png"
const HeroBox = ({ text }) => {
    const [vrImage, setvrImage] = useState(false);
    const showImage = () => {
        setvrImage(true)
    };
    const hideIamge = () => {
        setvrImage(false)
    }
    return (
        <div className='pb-28  xs:px-3 max-w-6xl mx-auto'>
            <div onMouseOver={() => showImage()} onMouseOut={() => hideIamge()} className=" relative flex justify-end max-w-lg mt-32 mb-32 p-4 font-sans text-3xl text-white uppercase border-2 md:p-10 md:m-32 md:ml-5 md:text-6xl md:hover:max-w-[2000px] md:hover:bg-gray-50 md:hover:text-black md:hover:scale-102 ease-in-out duration-1000">
                <span className='flex md:w-[450px] leading-[70px]'>{text}</span>
                {vrImage && <img src={vrPng} alt="vr" className='hidden md:flex md:w-[550px] md:h-[350px] absolute left-0 bottom-0 ease-linear delay-700 duration-700 ' />}
            </div>
        </div>
    )
}

export default HeroBox