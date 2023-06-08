import React, { useState } from 'react'
import FilledButtonComponent from './generic/FilledButtonComponent';

const navigations = ['Home', 'About', 'Services', 'Works'];

const NavbarComponent = () => {
  const [active, setActive] = useState(0);
  return (
    <>
      <div className='flex justify-between py-[30.5px] px-[100px] '>
        <div className='flex justify-center items-center text-[36px] font-extrabold uppercase text-primary hover:text-accent2'>
          Circles
        </div>
        <div className='flex gap-[48px]'>
          <div className='flex justify-center items-center'>
            <ul className='flex gap-[24px]'>
              {
                navigations.map((item, index) => (
                  index === active
                    ?
                    <li key={index} className='text-accent2 cursor-pointer font-bold uppercase hover:text-accent1'>{item}
                    </li>
                    :
                    <li key={index} className='text-primary cursor-pointer font-bold uppercase hover:text-accent2'>{item}
                    </li>
                )
                )
              }
            </ul>
          </div>
          <div>
           <FilledButtonComponent title='Contact' />
          </div>
        </div>
      </div>
    </>
  )
}

export default NavbarComponent