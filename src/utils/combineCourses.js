export const CombineCourses = (studentCourses, allCourses) => {
  if(studentCourses && allCourses){
    return studentCourses.map((course1) => {
        const matchingCourse = allCourses.find((course) => course.id === course1.id);
        return {
          ...course1,
          name: matchingCourse ? matchingCourse.name : 'NA',
          instructor: matchingCourse ? matchingCourse.instructor : 'NA',
          thumbnail: matchingCourse ? matchingCourse.thumbnail : 'NA',
        };
      });
  }  
  };
  
  