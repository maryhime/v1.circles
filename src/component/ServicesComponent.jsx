import React from 'react'
import ElevatedButton from './generic/ElevatedButton'
import ServicesPillComponent from './generic/ServicesPillComponent'

const ServicesComponent = () => {
  return (
    
    <div className="flex flex-row gap-[48px] py-[150px] px-[100px] bg-cover bg-[url('images/services.png')] items-center">
      {/* heading + buttons */}
      <div className="flex flex-col gap-[48px] w-full">
        <div className="flex flex-col gap-[8px]">
          <h5 className="uppercase font-black text-[24px] leading-[28.8px] tracking-[3.2px] text-primary">
            what we offer
          </h5>
          <div className="font-black text-[64px] leading-[76.8px] text-primary uppercase">
            <text className='text-accent2'>Services</text> we offer
          </div>
        </div>
        <div className="w-[auto]">
          <ElevatedButton title='View All' />
        </div>

      </div>
      {/* serivices */}
      <div className="w-full flex justify-center">
        <svg className='relative -z-1' width="501" height="480" viewBox="0 0 501 480" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="250.5" cy="240" rx="249.5" ry="239" stroke="#FF7571" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 5" />
        </svg>
        <div className="flex flex-row absolute w-[340.19px]">
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
              <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.399048" y="0.628174" width="55.4654" height="55.4654" rx="27.7327" fill="#FDAF77" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6111 17.8403C15.806 19.6453 15.806 22.5505 15.806 28.3609C15.806 34.1712 15.806 37.0764 17.6111 38.8815C19.4161 40.6865 22.3213 40.6865 28.1317 40.6865C33.942 40.6865 36.8472 40.6865 38.6523 38.8815C40.4573 37.0764 40.4573 34.1712 40.4573 28.3609C40.4573 22.5505 40.4573 19.6453 38.6523 17.8403C36.8472 16.0352 33.942 16.0352 28.1317 16.0352C22.3213 16.0352 19.4161 16.0352 17.6111 17.8403ZM29.9658 21.5151C30.4589 21.6472 30.7516 22.1541 30.6195 22.6473L27.4294 34.5529C27.2972 35.0461 26.7903 35.3387 26.2972 35.2066C25.804 35.0744 25.5114 34.5676 25.6435 34.0744L28.8336 22.1687C28.9658 21.6756 29.4727 21.3829 29.9658 21.5151ZM31.792 24.0095C32.153 23.6485 32.7383 23.6485 33.0993 24.0095L33.3561 24.2663C34.1392 25.0493 34.7922 25.7023 35.2409 26.2904C35.7145 26.9111 36.0467 27.5669 36.0467 28.3609C36.0467 29.1548 35.7145 29.8106 35.2409 30.4313C34.7922 31.0194 34.1392 31.6724 33.3561 32.4554L33.0993 32.7122C32.7383 33.0732 32.153 33.0732 31.792 32.7122C31.431 32.3512 31.431 31.7659 31.792 31.4049L32.0035 31.1934C32.8436 30.3532 33.4066 29.7875 33.771 29.3099C34.1191 28.8536 34.1978 28.588 34.1978 28.3609C34.1978 28.1337 34.1191 27.8681 33.771 27.4119C33.4066 26.9343 32.8436 26.3685 32.0035 25.5283L31.792 25.3168C31.431 24.9558 31.431 24.3705 31.792 24.0095ZM23.1643 24.0095C23.5253 23.6485 24.1106 23.6485 24.4716 24.0095C24.8326 24.3705 24.8326 24.9558 24.4716 25.3168L24.2601 25.5283C23.4199 26.3685 22.8569 26.9343 22.4925 27.4119C22.1444 27.8681 22.0657 28.1337 22.0657 28.3609C22.0657 28.588 22.1444 28.8536 22.4925 29.3099C22.8569 29.7875 23.4199 30.3532 24.2601 31.1934L24.4716 31.4049C24.8326 31.7659 24.8326 32.3512 24.4716 32.7122C24.1106 33.0732 23.5253 33.0732 23.1643 32.7122L22.9075 32.4554C22.1244 31.6724 21.4714 31.0194 21.0227 30.4313C20.5491 29.8106 20.2169 29.1548 20.2169 28.3609C20.2169 27.5669 20.5491 26.9111 21.0227 26.2904C21.4714 25.7023 22.1244 25.0493 22.9075 24.2663L23.1643 24.0095Z" fill="white" />
              </svg>
            </div>


          </div>
          <div className="flex flex-row gap-[52px]">
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
              <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.399048" y="0.628174" width="55.4654" height="55.4654" rx="27.7327" fill="#FDAF77" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6111 17.8403C15.806 19.6453 15.806 22.5505 15.806 28.3609C15.806 34.1712 15.806 37.0764 17.6111 38.8815C19.4161 40.6865 22.3213 40.6865 28.1317 40.6865C33.942 40.6865 36.8472 40.6865 38.6523 38.8815C40.4573 37.0764 40.4573 34.1712 40.4573 28.3609C40.4573 22.5505 40.4573 19.6453 38.6523 17.8403C36.8472 16.0352 33.942 16.0352 28.1317 16.0352C22.3213 16.0352 19.4161 16.0352 17.6111 17.8403ZM29.9658 21.5151C30.4589 21.6472 30.7516 22.1541 30.6195 22.6473L27.4294 34.5529C27.2972 35.0461 26.7903 35.3387 26.2972 35.2066C25.804 35.0744 25.5114 34.5676 25.6435 34.0744L28.8336 22.1687C28.9658 21.6756 29.4727 21.3829 29.9658 21.5151ZM31.792 24.0095C32.153 23.6485 32.7383 23.6485 33.0993 24.0095L33.3561 24.2663C34.1392 25.0493 34.7922 25.7023 35.2409 26.2904C35.7145 26.9111 36.0467 27.5669 36.0467 28.3609C36.0467 29.1548 35.7145 29.8106 35.2409 30.4313C34.7922 31.0194 34.1392 31.6724 33.3561 32.4554L33.0993 32.7122C32.7383 33.0732 32.153 33.0732 31.792 32.7122C31.431 32.3512 31.431 31.7659 31.792 31.4049L32.0035 31.1934C32.8436 30.3532 33.4066 29.7875 33.771 29.3099C34.1191 28.8536 34.1978 28.588 34.1978 28.3609C34.1978 28.1337 34.1191 27.8681 33.771 27.4119C33.4066 26.9343 32.8436 26.3685 32.0035 25.5283L31.792 25.3168C31.431 24.9558 31.431 24.3705 31.792 24.0095ZM23.1643 24.0095C23.5253 23.6485 24.1106 23.6485 24.4716 24.0095C24.8326 24.3705 24.8326 24.9558 24.4716 25.3168L24.2601 25.5283C23.4199 26.3685 22.8569 26.9343 22.4925 27.4119C22.1444 27.8681 22.0657 28.1337 22.0657 28.3609C22.0657 28.588 22.1444 28.8536 22.4925 29.3099C22.8569 29.7875 23.4199 30.3532 24.2601 31.1934L24.4716 31.4049C24.8326 31.7659 24.8326 32.3512 24.4716 32.7122C24.1106 33.0732 23.5253 33.0732 23.1643 32.7122L22.9075 32.4554C22.1244 31.6724 21.4714 31.0194 21.0227 30.4313C20.5491 29.8106 20.2169 29.1548 20.2169 28.3609C20.2169 27.5669 20.5491 26.9111 21.0227 26.2904C21.4714 25.7023 22.1244 25.0493 22.9075 24.2663L23.1643 24.0095Z" fill="white" />
              </svg>
            </div>


          </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default ServicesComponent