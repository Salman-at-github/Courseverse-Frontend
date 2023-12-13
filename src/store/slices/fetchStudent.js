import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CombineCourses } from "../../utils/combineCourses";


//Please use localhost if backend is not responding. Backend code is on https://github.com/Salman-at-github/Courseverse-Backend

// const host = `http://127.0.0.1:3030`
const host = `https://courseverse-backend.onrender.com`

export const fetchStudent = createAsyncThunk(
  "student/fetchStudent",
  async (studentID, { dispatch, getState }) => {
    try {
      const response = await fetch(`${host}/api/student/${studentID}`);
      const studentData = await response.json();

      const courseResponse = await fetch(`${host}/api/courses/all`);
      const allCourses = await courseResponse.json()
    
      
      // Combine student courses with all courses
      const combinedData = studentData?.courses
        ? CombineCourses(studentData.courses, allCourses)
        : [];

      return { ...studentData, courses: combinedData };
    } catch (error) {
      throw error;
    }
  }
);

const studentSlice = createSlice({
  name: "student",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {
    markCourseCompleted: (state, action) => {
      const { courseId } = action.payload;

      // Find the course in the student's data and mark it as completed
      state.data.courses = state.data.courses.map((course) =>
        course.id === courseId ? { ...course, completed: true, progress: 100 } : course
      );
    },
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudent.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStudent.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(fetchStudent.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      });
  },
});

export const { markCourseCompleted } = studentSlice.actions;

export default studentSlice.reducer;
