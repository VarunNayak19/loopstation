import React, { useState } from 'react'
import { imageArray1 } from './imageCards';
import { imageArray2 } from './imageCards';
const Creations = () => {
    const [seeAll, setSeeAll] = useState(false)
    return (
        <section id="creations">
            <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
                <div className=" mx-4 flex justify-center mb-20 md:justify-between">
                    <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
                        our creations
                    </h2>
                    <button className='hidden btn md:block' onClick={() => setSeeAll(!seeAll)}>
                        See {seeAll ? "less" : "all"}
                    </button>
                </div>
                <div className="mx-4">
                    <div id="#seeLess" className="flex flex-col justify-between w-full space-y-6 text-2xl text-white uppercase md:flex-row md:space-y-0 md:space-x-8">
                        {imageArray1.map((e) => {
                            return (
                                <>
                                    <div className="group relative overflow-hidden md:w-1/4 ">
                                        <img src={e.desktop} alt="" className="hidden w-full duration-200 md:block group-hover:scale-110" />
                                        <img src={e.mobile} alt="" className="md:hidden w-full " />
                                        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-grey-50 group-hover:to-white group-hover:opacity-70"></div>
                                        <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:text-black ">
                                            {e.text}
                                        </h5>

                                    </div>
                                </>

                            )
                        })
                        }
                    </div>
                    {seeAll && <div id="#seeAll" className=" ease-linear duration-200 flex flex-col justify-between w-full space-y-6 text-2xl text-white uppercase md:flex-row md:space-y-0 md:space-x-8 mt-5">
                        {imageArray2.map((e) => {
                            return (
                                <>
                                    <div className="group relative overflow-hidden md:w-1/4 ">
                                        <img src={e.desktop} alt="" className="hidden w-full duration-200 md:block group-hover:scale-110" />
                                        <img src={e.mobile} alt="" className="md:hidden w-full " />
                                        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-grey-50 group-hover:to-white group-hover:opacity-70"></div>
                                        <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:text-black ">
                                            {e.text}
                                        </h5>

                                    </div>
                                </>

                            )
                        })
                        }
                    </div>}
                </div>
                <div className="flex justify-center mt-10 md:hidden">
                    <button className="btn w-full md:hidden" onClick={() => {
                        setSeeAll(!seeAll);
                        window.scrollTo
                    }}>See {seeAll ? "less" : "all"}</button>
                </div>
            </div>
        </section >
    )
}

export default Creations;