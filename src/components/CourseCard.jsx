import React from "react";
import { IoIosHeartEmpty } from "react-icons/io";

const CourseCard = ({ id,instructor, name, imgUrl, likes }) => {
  return (
    <div key={id} className="bg-white w-full flex justify-center items-start flex-col h-fit md:min-h-80 p-3 rounded-xl shadow-xl transition-transform duration-300 hover:scale-[103%] cursor-pointer">
      <img src={imgUrl} alt="Thumbnail" className="w-full rounded-md" />
      <h3 className="mt-2 mb-1 font-thin self-start text-lg">{instructor}'s</h3>
      <h2 className="font-semibold mb-2">{name}</h2>
      <div className="flex justify-between items-center w-full sm:pr-1">
        <span className="self-start font-thin">Course</span>
        <span className="flex justify-center items-center gap-1 font-normal text-gray-500">
          {likes}
          <IoIosHeartEmpty />
        </span>
      </div>
    </div>
  );
};

export default CourseCard;
