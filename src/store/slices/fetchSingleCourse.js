import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSingleCourse = createAsyncThunk("courses/fetchSingleCourse", async (courseID) => {
  try {//https://courseverse-backend.onrender.com/api/courses/all
    const response = await fetch(`http://127.0.0.1:3030/api/courses/${courseID}`);
    const data = await response.json();
    return data; // this will be returned as action.payload when success
  } catch (error) {
    throw error; // this will be returned as action.error when failed
  }
});

const singleCourseSlice = createSlice({
  name: "courses",
  initialState: {
    data: null, // course data
    status: "idle", // indicating the promise status
    error: null, // to store errors
  },
  // add multiple scenarios depending on the status of the response
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleCourse.pending, (state) => {
        // if promise is still pending
        state.status = "loading";
      })
      .addCase(fetchSingleCourse.fulfilled, (state, action) => {
        // if promise fulfilled successfully, change the status and update the data
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(fetchSingleCourse.rejected, (state, action) => {
        // if failed, get the errors
        state.status = "failed";
        state.error = action.error; // use action.error instead of action.error.message
      });
  },
});

export default singleCourseSlice.reducer;
