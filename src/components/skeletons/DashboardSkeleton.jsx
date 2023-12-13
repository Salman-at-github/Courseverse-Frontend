import React from 'react';

const DashboardSkeleton = () => {
  return (
    <div className="container mx-auto py-10 min-h-screen px-8 sm:px-0 md:px-10 bg-cyan-50">
      <h1 className="text-3xl font-bold mb-6 text-center">My Dashboard</h1>
      <div className="grid grid-cols-1 gap-6">
        {[1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className="border-2 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col sm:flex-row"
          >
            <div className="h-20 w-20 bg-gray-200 rounded-md mb-4 sm:mr-4 animate-pulse"></div>
            <div className="grow">
              <div className="mb-2 bg-gray-200 h-6 animate-pulse"></div>
              <div className=" mb-2 bg-gray-200 h-4 animate-pulse"></div>
              <div className=" mb-2 bg-gray-200 h-4 animate-pulse"></div>
              <div className="mb-2">
                <span className=" bg-gray-200 h-4 w-16 animate-pulse"></span>
                {/* Progress bar */}
                <div className="h-2 bg-gray-200 rounded-md mt-1">
                  <div className="h-full bg-gray-300 rounded-md animate-pulse"></div>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 h-10 w-full sm:w-24 rounded-md mt-4 sm:mt-0 sm:ml-auto animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardSkeleton;
