import { configureStore } from "@reduxjs/toolkit";
import courseSliceReducer from './slices/fetchCourses';
import singleCourseReducer from './slices/fetchSingleCourse';
import getStudentReducer from './slices/fetchStudent'
const store = configureStore({
    reducer: {
        storegetCourses: courseSliceReducer,
        storeGetSingleCourse: singleCourseReducer,
        storeGetStudent: getStudentReducer
    }
})

export default store;