import React from 'react'
import NavBar from '../NavBar/NavBar'
import HeroBox from '../HeroBox/HeroBox'

const HeroSection = () => {
    return (
        <section id="hero" >
            <NavBar />
            <HeroBox text="Impressive Experiences That Deliver" />
        </section>
    )
}

export default HeroSection