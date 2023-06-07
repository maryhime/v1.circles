import React, { useState } from 'react'

const navigations = ['Home', 'About', 'Services', 'Works'];

const NavbarComponent = () => {
  const [active, setActive] = useState(0);
  return (
    <>
      <div className='flex justify-between py-[30.5px] px-[100px]'>
        <div className='flex justify-center items-center text-[36px]'>
          Circles
        </div>
        <div className='flex gap-[28px]'>
          <div className='flex justify-center items-center'>
            <ul className='flex gap-[28px] '>
              {
                navigations.map((item, index) => (
                  index === active
                    ?
                    <li key={index} className='text-accent2 cursor-pointer'>{item}
                    </li>
                    :
                    <li key={index} className='text-primary cursor-pointer'>{item}
                    </li>
                )
                )
              }
            </ul>
          </div>
          <div>
            <button className='bg-[#004275] text-[#F6F2F2] rounded-full px-[52px] py-[15px]'>
              Contact
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavbarComponent