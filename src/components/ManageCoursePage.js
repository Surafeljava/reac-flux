import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
// import { useParams } from "react-router-dom";
import store from "../stores/courseStore";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import * as courseActions from "../actions/courseActions";

const ManageCoursePage = (props) => {
  const { slug } = useParams();
  const history = useNavigate();
  const [errors, setErrors] = useState({});
  const [courses, setCourses] = useState(store.getCourses());
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  useEffect(() => {
    store.addChangeListener(onChange);
    if (courses.length === 0) {
      courseActions.loadCourses();
    } else if (slug) {
      setCourse(store.getCourseBySlug(slug));
    }
    return () => store.removeChangeListener(onChange);
  }, [slug, courses.length]);

  function onChange() {
    setCourses(store.getCourses());
  }

  function handleChange({ target }) {
    const updatedCourse = {
      ...course,
      [target.name]: target.value,
    };

    setCourse(updatedCourse);
  }

  function formIsValid() {
    const _errors = {};

    if (!course.title) _errors.title = "Title is required";
    if (!course.authorId) _errors.authorId = "Author Id required";
    if (!course.category) _errors.category = "Category is required";

    setErrors(_errors);
    //No Error if the errors obj has no properties

    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    courseActions.saveCourse(course).then(() => {
      history("/courses");
      toast.success("Course Saved!");
    });
  }

  return (
    <>
      <h2>Manage Courses</h2>

      <CourseForm
        course={course}
        errors={errors}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageCoursePage;
