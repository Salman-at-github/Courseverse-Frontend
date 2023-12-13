import React, { useEffect } from "react";
import CourseCard from "../components/CourseCard";
import { fetchCourses } from "../store/slices/fetchCourses";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/skeletons/CoursesLoadingSkeleton";
import Error from "../components/Error";
import { Link } from "react-router-dom";


const Courses = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch courses when the component mounts
    dispatch(fetchCourses());
  }, []);

  const courseState = useSelector((state) => state.storegetCourses);

  // Display loading indicator while fetching data
  if (courseState.status === "loading") {
    return <Loading />;
  }

  if (courseState.status === "failed") {
    return <Error message={"Failed to fetch courses. Please contact Admin."} />;
  }

  // Filter courses based on the name / instructor
  const filteredCourses = courseState.data.filter((course) => {
    return (
      course.name
        .toLowerCase()
        .includes(courseState.filter ? courseState.filter.toLowerCase() : "") ||
      course.instructor
        .toLowerCase()
        .includes(courseState.filter ? courseState.filter.toLowerCase() : "")
    );
  });

  return (
    <div className="min-h-screen bg-cyan-50 sm:px-4">
        <h1 className="text-3xl font-bold py-6 text-center">Latest Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6 py-8 px-10">
        {courseState.filter ? (
          filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <Link to={`/course/${course.id}`} key={course.id}>
                <CourseCard
                  id={course.id}
                  instructor={course.instructor}
                  name={course.name}
                  imgUrl={course.thumbnail}
                  likes={course.likes}
                />
              </Link>
            ))
          ) : (
            <p className="text-gray-500 text-lg">No matching courses found.</p>
          )
        ) : (
          // If there is no filter, show all courses
          courseState.data ? (
            courseState.data.map((course) => (
              <Link to={`/course/${course.id}`} key={course.id}>
                <CourseCard
                  id={course.id}
                  instructor={course.instructor}
                  name={course.name}
                  imgUrl={course.thumbnail}
                  likes={course.likes}
                />
              </Link>
            ))
          ) : null
        )}
      </div>
    </div>
  );
};

export default Courses;

