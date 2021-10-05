import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import Rating from "react-rating";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fullStar, emptyStar);

function Course(props) {
  const { img, title, desc, price, rating, ratingCount } = props.course;

  return (
    <Col className="my-3" md={4}>
      <Card style={{ minHeight: "480px" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="text-muted">{desc}</Card.Text>
          <p>
            {" "}
            <b>Price: {price}$</b>
          </p>
          <div className="mb-3">
            <Row>
              <Col>
                <Rating
                  readonly
                  style={{ color: "goldenrod" }}
                  initialRating={rating}
                  emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
                  fullSymbol={<FontAwesomeIcon icon={fullStar} />}
                />{" "}
                {rating}
              </Col>
              <Col>Total Review: {ratingCount}</Col>
            </Row>
          </div>

          <Button className="w-100" variant="primary">
            View Details
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Course;
