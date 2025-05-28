import React from 'react'

const OurTestimoniesCard = ({image, text, name, position, testimony}) => {
  return (
    <>
      <div className='w-[90%] mx-auto'>
        <div className='flex bg-gray-300 gap-[2em] items-center w-[600px] h-[300px] justify-center p-4 rounded-[10px]'>
          <div>
            <img className=' rounded-[10px]' src={image} alt="" />
          </div>
          <div>
            <h3 className=' text-[20px] font-bold'>{name}</h3>
            <p className='text-[18px]'>{position}</p>
            <p> {testimony} </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurTestimoniesCard