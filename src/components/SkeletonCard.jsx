import React from 'react';

const SkeletonCard = () => (
  <div className="relative h-[450px] w-full animate-pulse">
    <div className="absolute inset-0 bg-gray-200 rounded-[3rem] skew-y-2"></div>
    <div className="relative h-full p-6 flex flex-col">
      <div className="relative h-48 mb-6 bg-gray-300 rounded-[2rem]"></div>
      <div className="flex-grow space-y-4">
        <div className="h-2 w-20 bg-gray-300 rounded"></div>
        <div className="h-8 w-3/4 bg-gray-300 rounded"></div>
        <div className="h-4 w-full bg-gray-300 rounded"></div>
      </div>
      <div className="h-14 w-full bg-gray-300 rounded-2xl mt-4"></div>
    </div>
  </div>
);

export default SkeletonCard;
