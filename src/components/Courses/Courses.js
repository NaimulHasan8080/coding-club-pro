import React from "react";
import { Container, Row } from "react-bootstrap";
import Course from "../course/Course.js";
import useCourses from "../useCourses/useCourses.js";

const Courses = () => {
  const [courses] = useCourses();
  return (
    <div>
      <Container className="my-5">
        <h2 className="text-center mb-4">Our All Courses</h2>
        <Row>
          {courses?.map((course) => (
            <Course course={course} key={course.key}></Course>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
