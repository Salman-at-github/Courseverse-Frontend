import React, { useEffect, useState } from "react";
import { BsClock, BsCalendar, BsGeoAlt, BsHeart, BsBook } from "react-icons/bs";
import { FaRegCheckSquare, FaAngleDown, FaAngleUp } from "react-icons/fa";
import {fetchSingleCourse} from "../store/slices/fetchSingleCourse";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SingleCourse = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchSingleCourse(id))
  },[id])

  const [showSyllabus, setShowSyllabus] = useState(false);


  const singleCourseState = useSelector((state)=> state.storeGetSingleCourse)
  if(singleCourseState.status ==='loading' || !singleCourseState.data){
    return(
      <h1>Loading..</h1>
    )
  }
  if(singleCourseState.status ==='failed'){
    return(
      <h1>Failed to fetch info..</h1>
    )
  }
  const courseData = singleCourseState.data;

  return (
    <div className="container mx-auto p-4 md:p-10 overflow-x-hidden min-h-screen bg-cyan-50">
      <div className="shadow-md rounded-md p-4 md:flex md:px-8 border md:justify-evenly bg-white">
        <div className="md:w-1/3 flex justify-center items-center flex-col">
          <img
            src={courseData.thumbnail}
            alt={courseData.name}
            className="w-full h-auto rounded-md mb-4 md:mb-0"
          />
          <div className="hidden md:block">
            <p className="my-6 text-gray-600 text-lg font-normal">
              {/* other course related info */}
              Unable to dedicate every single day towards learnings? Do not
              worry! With our specialized course designed and mentored by{" "}
              {courseData.instructor} , you can dedicate only a few hours each
              week to complete this {courseData.duration} course at your own
              pace!
            </p>
            <button
              className={`bg-blue-500 text-white font-bold p-3 self-start rounded-lg ${courseData.enrollmentStatus === "In Progress" ? 'disabled:bg-green-400': 'disabled:bg-gray-400'}`}
              disabled={courseData.enrollmentStatus === "Closed" || courseData.enrollmentStatus === "In Progress" }
            >
              {courseData.enrollmentStatus ==="In Progress"? "Already enrolled": "Enroll Now"}
            </button>
            {courseData.enrollmentStatus === "Closed" && (
              <p className="text-red-500 py-2 self-start">
                This course's batch is currently full. Kindly check back after a few weeks
              </p>
            )}
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center items-center flex-col p-8">
          <h1 className="text-4xl font-semibold mb-4 text-center">
            {courseData.name}
          </h1>
          <p className="text-gray-600 text-xl mb-4">
            - {courseData.instructor}
          </p>

          <div className="mt-4 text-lg self-start">
            <p>{courseData.description}</p>
          </div>

          <div className="mt-4 text-left rounded-lg self-start p-4 border border-gray-300 shadow-sm font-medium">
            <p className="flex items-center mb-4 text-lg ">
              <BsHeart className="mr-2 text-blue-700" /> Likes:{" "}
              {courseData.likes}
            </p>
            <p className="flex items-center mb-4 text-lg ">
              <BsClock className="mr-2 text-blue-700" /> Duration:{" "}
              {courseData.duration}
            </p>
            <p className="flex mb-4 text-lg items-start">
              <BsCalendar className="mr-2 mt-2 text-blue-700" /> Schedule:{" "}
              {courseData.schedule}
            </p>
            <p className="flex items-center mb-4 text-lg ">
              <BsGeoAlt className="mr-2 text-blue-700" /> Location:{" "}
              {courseData.location}
            </p>
            <p className={`flex items-center mb-4 text-lg `}>
              Status:{" "}
              <span
                className={`ml-2 ${
                  courseData.enrollmentStatus === "Open"
                    ? "text-green-600"
                    : courseData.enrollmentStatus === "Closed"
                    ? "text-red-600"
                    : ""
                }`}
              >
                {courseData.enrollmentStatus}
              </span>
            </p>
          </div>

          <div className="mt-4 self-start border rounded-lg p-2 w-full shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">Prerequisites</h2>
            <ul className="list-none ml-6">
              {courseData.prerequisites.map((prerequisite, index) => (
                <li key={index} className="flex justify-start items-center">
                  <FaRegCheckSquare className="mr-2 text-green-400" />
                  {prerequisite}
                </li>
              ))}
            </ul>
          </div>
          <div className="block md:hidden">
            <p className="my-6 text-gray-600 text-lg font-normal">
              {/* other course related info */}
              Unable to dedicate every single day towards learnings? Do not
              worry! With our specialized course designed and mentored by{" "}
              {courseData.instructor} , you can dedicate only a few hours each
              week to complete this {courseData.duration} course at your own
              pace!
            </p>
            <button
              className={`bg-blue-500 text-white font-bold p-3 self-start rounded-lg ${courseData.enrollmentStatus === "In Progress" ? 'disabled:bg-green-400': 'disabled:bg-gray-400'}`}
              disabled={courseData.enrollmentStatus === "Closed" || courseData.enrollmentStatus === "In Progress" }
            >
              {courseData.enrollmentStatus ==="In Progress"? "Already enrolled": "Enroll Now"}
            </button>
            {courseData.enrollmentStatus === "Closed" && (
              <p className="text-red-500 py-2 self-start">
                This course's batch is currently full. Kindly check back after a few weeks
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-8 border py-4 rounded-lg px-2">
        <div className="text-2xl font-semibold flex justify-start items-center text-left px-4">
          <h2 className="cursor-pointer" onClick={() => setShowSyllabus(!showSyllabus)}>Syllabus</h2>
          {showSyllabus ? (<FaAngleUp className="cursor-pointer" onClick={() => setShowSyllabus(!showSyllabus)}/>
          ) : (
            <FaAngleDown className="cursor-pointer" onClick={() => setShowSyllabus(!showSyllabus)}/>
          )}
        </div>
        <ul className={`my-2 transition-all duration-500 overflow-hidden ${showSyllabus ? "max-h-[1000px]" : "max-h-0 opacity-0"}`}>
          {courseData.syllabus.map((item, index) => (
            <li key={index} className="opacity-100 bg-white p-4 rounded-md shadow-md mb-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Week {item.week}: {item.topic}
              </h3>
              <p className="text-gray-600">{item.content}</p>
            </div>
            <div className="flex items-center mt-4 text-gray-500">
              <BsClock className="mr-2" />
              <span>Approx Time: 1h</span>
            </div>
            <div className="flex items-center mt-2 text-gray-500">
              <BsBook className="mr-2" />
              <span>Readings: Lorem, Epsum</span>
            </div>
          </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SingleCourse;
