import React from 'react';
import SkeletonCourseCard from './SkeletonCourseCard';

const Loading = () => {
  return (
    <div className="className='min-h-screen bg-cyan-50 sm:px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6 py-10 px-10'">
        {Array.from({length:8}).map((_, index)=>{
            return(
                <SkeletonCourseCard key={index}/>
            )
        })}
    </div>
  );
};

export default Loading;
