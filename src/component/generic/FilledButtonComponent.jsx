import React from 'react'

const FilledButtonComponent = ({title}) => {
  return (
    <button className='bg-primary text-white rounded-[30px] px-[56px] py-[15px] font-black hover:bg-accent2 uppercase  tracking-[0.46px] '>
      {title}
    </button>
    
  )
}

export default FilledButtonComponent