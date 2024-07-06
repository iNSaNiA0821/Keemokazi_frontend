import { createContext, useContext } from "react";

export const CourseContext = createContext({
    token: String,
    setToken: () => { }
});

export const useCourseContext = () => useContext(CourseContext);
