import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//Please use localhost if backend is not responding. Backend code is on https://github.com/Salman-at-github/Courseverse-Backend

// const host = http://127.0.0.1:3030
const host = `https://courseverse-backend.onrender.com`

export const fetchCourses = createAsyncThunk("courses/fetchCourses", async () => {
  try {
    const response = await fetch(`${host}/api/courses/all`);
    const data = await response.json();
    return data; // this will be returned as action.payload when success
  } catch (error) {
    throw error; // this will be returned as action.error when failed
  }
});

const courseSlice = createSlice({
  name: "courses",
  initialState: {
    data: [], // course data
    status: "idle", // indicating the promise status
    error: null, // to store errors
    filter: "",
  },
  reducers: {
    //to enable search
    setFilter: (state, action)=>{
      //update search filter
      state.filter = action.payload;
    }
  },
  // add multiple scenarios depending on the status of the response
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        // if promise is still pending
        state.status = "loading";
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        // if promise fulfilled successfully, change the status and update the data
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        // if failed, get the errors
        state.status = "failed";
        state.error = action.error; // use action.error instead of action.error.message
      });
  },
});

//export the action
export const {setFilter} = courseSlice.actions;

export default courseSlice.reducer;
