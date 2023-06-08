import React from 'react'
import ElevatedButton from './generic/ElevatedButton'
import { TextButtonComponent } from './generic/TextButtonComponent'

const HeroComponent = () => {
  return (
    <div className="flex gap-[24px] py-[227px] px-[100px] bg-cover bg-[url('images/background.png')] items-center">
      {/* heading */}
      <div className="flex flex-col gap-[48px]">
        <div className="flex flex-col gap-[24px]">
          <h1 className="text-[128px] font-bold uppercase text-primary leading-[153.6px]">
            Circles
          </h1>
          <div className="font-body text-[24px] font-normal text-primary">
            Bringing work back on the track
          </div>
        </div>
        <div className="flex flex-row gap-[16px]">
          <ElevatedButton title='Contact' />
          <TextButtonComponent title='Services' />
        </div>
      </div>
      <div className="w-full">
        <img src="/src/assets/hero.svg" className='w-full h-auto' alt="" />
      </div>
    </div>
  )
}

export default HeroComponent