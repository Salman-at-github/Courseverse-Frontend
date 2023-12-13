import React, { useEffect, useState } from 'react';
import {  RiCheckboxCircleLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import {fetchStudent} from '../store/slices/fetchStudent';
import Error from '../components/Error';
import DashboardSkeleton from '../components/skeletons/DashboardSkeleton';

const coursesData = [
  {
    id: 1,
    name: 'NA',
    instructor: 'NA',
    thumbnail: 'NA',
    dueDate: 'NA',
    progress: 0,
    completed: false,
  }
];

const Dashboard = () => {
  const [enrolledCourses, setEnrolledCourses] = useState(coursesData);
  const dispatch = useDispatch();
  const studentState = useSelector((state) => state.storeGetStudent);

  useEffect(() => {
    dispatch(fetchStudent(1000));
  }, [dispatch]);

  useEffect(() => {
    // Check if studentState has data and update enrolledCourses
    if (studentState.status === 'success' && studentState.data?.courses) {
      setEnrolledCourses(studentState.data.courses);
    }
  }, [studentState]);

  const markAsCompleted = (courseId) => {
    setEnrolledCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === courseId ? { ...course, completed: true, progress: 100 } : course
      )
    );
  };

  if(studentState.status === 'loading'){
    return (<DashboardSkeleton/>)
  }
  else if(studentState.status === 'success'){
    return (
      <div className="container mx-auto py-10 min-h-screen px-8 sm:px-0 md:px-10 bg-cyan-50">
        <h1 className="text-3xl font-bold mb-6 text-center">My Dashboard</h1>
        <div className="grid grid-cols-1 gap-6">
          {enrolledCourses.map((course) => (
            <div
              key={course.id}
              className="border-2 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex justify-start items-center flex-col sm:flex-row"
            >
              <img
                src={course.thumbnail}
                alt={`${course.name} Thumbnail`}
                className="h-20 object-cover mb-4 rounded-md mr-4"
              />
              <div className='grow'>
  
              <h2 className="text-2xl font-sans font-bold mb-2">{course.name}</h2>
              <p className="text-gray-600 mb-2 text-lg font-medium">Instructor: {course.instructor}</p>
              <p className="text-gray-600 mb-2">Due Date: {!course.completed?
              course.dueDate : <span>NA</span> }</p>
              <div className="mb-2">
                <span className="text-gray-600">Progress: {course.progress}%</span>
                {/* Progress bar */}
                <div className="h-2 bg-gray-200 rounded-md mt-1">
                  <div
                    className={`h-full ${course.progress <= 30? 'bg-yellow-400' : course.progress <=70? 'bg-green-400' : 'bg-green-600'} rounded-md`}
                    style={{
                      width: `${course.progress}%`,
                      transition: 'width 0.5s ease-in-out',
                    }}
                  ></div>
              </div>
                </div>
              </div>
              {!course.completed ? (
                <button
                  onClick={() => markAsCompleted(course.id)}
                  className="bg-blue-950 text-white py-2 mt-4 px-4 rounded-md hover:bg-blue-800 transition-all duration-300 self-start sm:self-center"
                >
                  Mark as Completed
                </button>
              ) : (
                <div className="flex items-center text-green-500">
                  <RiCheckboxCircleLine className="mr-2" />
                  Completed
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  else {
    // if error, alert user
    return(
      <Error message={"Unable to fetch courses. Please contact Admin"}/>
    )
  }

};

export default Dashboard;
