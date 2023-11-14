import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { cardContent } from "../../data";
import { Button, Card, Container, Row } from "react-bootstrap";

const Cards = () => {
  return (
    <Container>
      <Row className="mt-5 gap-4">
        <h2 className="mt-5 mb-5">
          Feel Free to try out our Home made Delicacies
        </h2>
        <section className="row row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-center">
          {cardContent.map((item) => (
            <Card key={item.id} className="col">
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.details}</Card.Text>
                <Button variant="primary">Click to Submit Your Orders</Button>
              </Card.Body>
            </Card>
          ))}
        </section>
      </Row>
    </Container>
  );
};

export default Cards;
