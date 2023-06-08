import React from 'react'

const ServicesPillComponent = ({icon}) => {
  return (
    
    <div className="flex flex-row ">
    <div className=" text-primary flex-col rounded-[50px] h-[auto] w-[313.07px] flex gap-[16px] bg-white drop-shadow-[0_9px_19px_rgba(0,66,117,0.2)] p-[24px] absolute left-[27.12px] pl-[50px] pr-[25px] py-[25px] hover:bg-primary hover:text-white">
      <h6 className="font-bold uppercase text-[20px]">
        Programming
      </h6>
      <p className="font-normal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
      </p>
    </div>
    <div className="absolute z-1 top-[61.63px] left-0">
     {icon}
    </div>
    </div>



  )
}

export default ServicesPillComponent