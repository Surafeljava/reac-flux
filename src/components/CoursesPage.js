import React, { useState, useEffect } from "react";
// import { getCourses } from "../api/courseApi";
// import store from "../stores/store";
import store from "../stores/courseStore";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import { loadCourses, deleteCourse } from "../actions/courseActions";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

function CoursesPage() {
  const [courses, setCourses] = useState(store.getCourses());

  useEffect(() => {
    store.addChangeListener(onChange);
    if (store.getCourses().length === 0) loadCourses();
    return () => store.removeChangeListener(onChange); //Clean on unmount
  }, []);

  function onChange() {
    setCourses(store.getCourses());
  }

  return (
    <>
      <ToastContainer
        autoClose={3000}
        position="top-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h2>Courses</h2>
      <Link to="/course" className="btn btn-primary">
        {" "}
        Add Course{" "}
      </Link>
      <CourseList
        courses={courses}
        deleteCourse={(id) => {
          deleteCourse(id).then(() => {
            toast.success("Course Deleted!");
          });
        }}
      />
    </>
  );
}

export default CoursesPage;
