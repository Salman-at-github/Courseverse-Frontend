import React from 'react';

const SimpleScreenSkeleton = () => {
  return (
    <div className="container mx-auto p-10 min-h-screen flex">
      {/* Left side with image */}
      <div className="w-1/3 p-4">
        <div className="w-full h-64 bg-gray-200 rounded-md animate-pulse"></div>
        <div className="mt-4 bg-gray-200 h-20 animate-pulse"></div>
      </div>

      {/* Right side with paragraphs */}
      <div className="w-2/3 p-4">
        <div className="mb-4 bg-gray-200 h-8 animate-pulse"></div>
        <div className="mb-4 bg-gray-200 h-6 animate-pulse"></div>
        <div className="mb-4 bg-gray-200 h-6 animate-pulse"></div>
        <div className="mb-4 bg-gray-200 h-6 animate-pulse"></div>
        <div className="mb-4 bg-gray-200 h-6 animate-pulse"></div>
        <div className="mb-4 bg-gray-200 h-10 animate-pulse"></div>
        <div className="bg-gray-200 h-32 animate-pulse"></div>
      </div>
    </div>
  );
};

export default SimpleScreenSkeleton;
