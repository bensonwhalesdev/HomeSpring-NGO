import React from 'react'
import Button from '../Button'

const TesttimonySectCard = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-green-600 w-[90%] mx-auto mt-10 rounded-[10px] overflow-hidden">
      
      {/* Text Section */}
      <div className="p-6 sm:p-10 flex-1 text-center lg:text-left">
        <h1 className="text-2xl sm:text-3xl font-bold text-white">
          Everyone Deserves Clean Water, Be The Reason a Village Has Clean Water Today
        </h1>
        <p className="pt-4 text-white text-base sm:text-lg leading-relaxed">
          Your contribution can bring lasting change. Your support builds water facilities,
          empowers communities, and gives children a healthier future.
        </p>
        <div className="mt-5">
          <Button
            text="Donate Now"
            classStyle="bg-white text-green-600 p-3 px-5 rounded-[10px] hover:bg-gray-100 transition-colors"
          />
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <img
          src="/testimony.jpg"
          alt="Testimony"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default TesttimonySectCard
