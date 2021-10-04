import React from "react";
import Bg from "./../../images/bg.png";
import { Container, Button, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Course from "./../course/Course.js";
import useCourses from "../useCourses/useCourses.js";
const Home = () => {
  const history = useHistory();
  const [courses] = useCourses();
  const featureCourses = courses.slice(0, 6);
  function GoServices() {
    history.push("/courses");
  }

  return (
    <div>
      <div
        style={{
          background: `url(${Bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <div
            style={{ height: "90vh" }}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="text-center my-5 py-5">
              <h1 className="text-white">Learn to be creative</h1>
              <p className="my-4 text-white fs-5">
                Learn exciting technologies from web development, design, game
                development and more!
              </p>
              <Button
                onClick={GoServices}
                className="rounded-pill fs-5 py-2 px-4"
                variant="primary"
              >
                View Courses
              </Button>
            </div>
          </div>
        </Container>
      </div>
      <Container className="my-5">
        <h2 className="text-center mb-4">Featured Courses</h2>
        <Row>
          {featureCourses?.map((course) => (
            <Course course={course} key={course.key}></Course>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
