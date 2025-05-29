import React, { useState } from 'react'
import OurTestimoniesCard from '../OurTestimoniesCard'
import TesttimonySectCard from './TesttimonySectCard';

const OurTestimonies = () => {
    const [translateX, setTranslateX] = useState(0);
  const CARD_WIDTH = 120; 

  const maxTranslate = CARD_WIDTH * 3; 

  const handleNext = () => {
    if (translateX < maxTranslate) {
      setTranslateX(translateX + CARD_WIDTH);
    }
  };

   const handlePrev = () => {
    if (translateX > 0) {
      setTranslateX(translateX - CARD_WIDTH);
    }
  };

  return (
    <div className='w-[95%] mx-auto'>
     <h1 className="text-xl md:text-2xl font-bold text-gray-900 w-[90%] mx-auto mt-8 border-b-2 border-gray-300 pb-3">Testimonies</h1>
    <div className='text-center mt-8 mb-10'>
     <h1 className='text-4xl font-bold text-gray-900'>Real Voices, Real Impacts</h1>
     <p>Hear from people whose lives have been changed by clean water, all thanks to your support</p>
    </div>
     
     <div className="overflow-hidden w-[90%] mx-auto] p-15">
        <div  className="flex gap-[2em] transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${translateX}px)`, width: 'max-content', }}>
        <OurTestimoniesCard image={'/leader.jpg'} name={'Godswill Monday'} position={'Village Leader'} testimony={"Before HomeSpring came, we used to walk hours every morning just to fetch water, and even then it wasn't always clean. Now clean water is right here in our village. My children are healthier, our village is safer, Our kids go to school on time. I even started a small farm. I can't express how much this means to us, Thank you truly from the bottom of my heart."}/>
         <OurTestimoniesCard image={'/teacher.jpg'} name={'Aisha Bello'} position={'Local Teacher'} testimony={"Clean water has changed everything. My students come to school clean, focused, and ready to learn. We no longer worry about stomach pains or missing class because of illness. HomeSpring has given our children a chance to dream again. Thank you for making a difference in our lives."}/>
         <OurTestimoniesCard image={'/farmer.jpg'} name={'Emeka Obiora'} position={'Community Farmer'} testimony={"With water just a few steps from my home, my crops have doubled. I’ve even been able to help my neighbors grow food. We share more, laugh more, and worry less. This water changed not just my farm — it changed our future."}/>
         <OurTestimoniesCard image={'/granny.jpg'} name={'Mama Nkechi'} position={'Grandmother'} testimony={"I remember when my grandchildren used to cry from thirst or sickness. Now, they smile every day. We cook, clean, and bathe with confidence, knowing the water is safe. HomeSpring brought dignity back to our daily life."}/>
    </div>
     </div>
     <div className="space-x-2 text-center mt-6">
        <button onClick={handlePrev} className="bg-green-400 hover:bg-green-500 text-[#fff] py-2 px-4 rounded-[10px] cursor-pointer"
          disabled={translateX === 0}>Prev</button>
        <button onClick={handleNext} className="bg-green-400 hover:bg-green-500 text-[#fff] py-2 px-4 rounded-[10px] cursor-pointer"
          disabled={translateX >= maxTranslate}>Next</button>
      </div>

      <TesttimonySectCard />
    </div>
  )
}

export default OurTestimonies