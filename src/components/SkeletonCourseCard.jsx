import React from "react";

const SkeletonCourseCard = () => {
  return (
    <div className="bg-gray-200 w-full flex justify-center items-start flex-col h-fit p-3 rounded-xl shadow-xl animate-pulse">
      <div className="w-full h-52 bg-gray-300 mb-4 rounded-md"></div>
      <div className="h-4 w-3/4 bg-gray-300 mb-2 rounded-md"></div>
      <div className="h-4 w-1/2 bg-gray-300 mb-4 rounded-md"></div>
      <div className="h-4 w-1/4 bg-gray-300 rounded-md"></div>
    </div>
  );
};

export default SkeletonCourseCard;
