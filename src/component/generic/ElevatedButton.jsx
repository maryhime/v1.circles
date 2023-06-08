import React from 'react'

const ElevatedButton = ({title}) => {
  return (
    <button className='bg-primary text-white rounded-[30px] px-[56px] py-[15px] font-black hover:bg-accent2 uppercase tracking-[0.46px] drop-shadow-[1px_4px_10px_rgba(0,0,0,0.15)]'>
    {title}
  </button>
  )
}

export default ElevatedButton