import { Component } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import items from "../books/romance.json";

class AllTheBooks extends Component {
  render() {
    return (
      <Container>
        <Row>
          {items.map(book => {
            const title = book.title.length < 25 ? book.title : book.title.slice(0, 23) + "...";

            return (
              <Col xs={6} md={4} lg={3} xl={2} key={book.asin}>
                <Card className={this.props.card}>
                  <Card.Img variant="top" src={book.img} className={this.props.image} />
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{book.category}</Card.Text>
                    <Card.Text className="text-danger text-decoration-underline">{book.price + "$"}</Card.Text>
                    <Button variant="success" className="button">
                      Compra
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
