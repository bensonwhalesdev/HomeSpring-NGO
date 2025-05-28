import React from 'react';

const OurMemories = () => {
  return (
    <>
      <h1 className="text-xl md:text-2xl font-bold text-gray-900 w-[90%] mx-auto mt-8 border-b-2 border-gray-300 pb-3">
        Our Memories
      </h1>

      <div className="w-[90%] mx-auto p-4 md:p-10 text-gray-600">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
          See the change, <br className="hidden md:block" /> in Action
        </h1>
        <p className="text-base md:text-lg">
          See how access to clean water is transforming daily lives in villages
          <br className="hidden md:block" /> across the region. Real stories. Real impact.
        </p>
      </div>

      <div className="w-[90%] mx-auto flex flex-col md:flex-row gap-6 p-4 md:p-10">
        <img
          className="w-full md:w-1/3 rounded-[10px] object-cover"
          src="/memories.jpg"
          alt="Memory 1"
        />
        <img
          className="w-full md:w-1/3 rounded-[10px] object-cover"
          src="/memories-2.jpg"
          alt="Memory 2"
        />
        <img
          className="w-full md:w-1/3 rounded-[10px] object-cover"
          src="/memories-3.webp"
          alt="Memory 3"
        />
      </div>
    </>
  );
};

export default OurMemories;
