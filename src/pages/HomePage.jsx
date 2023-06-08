import React from 'react'
import NavbarComponent from '../component/NavbarComponent'
import HeroComponent from '../component/HeroComponent'
import ServicesComponent from '../component/ServicesComponent'

const HomePage = () => {
  return (
    <>
      <div className="w-full absolute z-100 ">
        <NavbarComponent />
      </div>
      <HeroComponent />
      <ServicesComponent />
    </>

  )
}

export default HomePage