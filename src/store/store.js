import { configureStore } from "@reduxjs/toolkit";
import courseSliceReducer from './slices/fetchCourses';
import singleCourseReducer from './slices/fetchSingleCourse';
const store = configureStore({
    reducer: {
        storegetCourses: courseSliceReducer,
        storeGetSingleCourse: singleCourseReducer
    }
})

export default store;