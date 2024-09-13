import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import react from "../imagenes/react.png";
import firebase from "../imagenes/firebase.png";
import bootstrap from "../imagenes/bootstrap.png";
import java from "../imagenes/java.png";
import python from "../imagenes/python.png";
import laravel from "../imagenes/laravel.png";
import "./styles.css";

const Tecnologias = () => {
  const handleClick = (tech) => {
    console.log(`Clicked on ${tech}`);
  };

  return (
    <section id="technologies" className="py-5">
      <Container>
        <h2 className="text-center fs-1 fw-bold mb-4">
          Tecnologías Utilizadas
        </h2>
        <Row>
          <Col md={4}>
            <Card className="mb-3" onClick={() => handleClick("react")}>
              <Card.Body>
                <Card.Title className="fs-3">React</Card.Title>
                <Card.Img
                  className="custom-img"
                  variant="top"
                  alt="React"
                  src={react}
                />
                <Card.Text className="text-2">
                  React es una biblioteca de JavaScript para construir
                  interfaces de usuario.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-3" onClick={() => handleClick("firebase")}>
              <Card.Body>
                <Card.Title className="fs-3">Firebase</Card.Title>
                <Card.Img
                  className="custom-img"
                  variant="top"
                  alt="Firebase"
                  src={firebase}
                />
                <Card.Text className="text-2">
                  Firebase es una plataforma de desarrollo de aplicaciones que
                  proporciona una base de datos en tiempo real y otras
                  funcionalidades.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-3" onClick={() => handleClick("bootstrap")}>
              <Card.Body>
                <Card.Title className="fs-3">Bootstrap</Card.Title>
                <Card.Img
                  className="custom-img"
                  variant="top"
                  alt="Bootstrap"
                  src={bootstrap}
                />
                <Card.Text className="text-2">
                  Bootstrap es un marco de diseño para construir interfaces web
                  responsivas.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Card className="mb-3" onClick={() => handleClick("java")}>
              <Card.Body>
                <Card.Title className="fs-3">Java</Card.Title>
                <Card.Img
                  className="custom-img"
                  variant="top"
                  alt="Java"
                  src={java}
                />
                <Card.Text className="text-2">
                  Java es un lenguaje de programación orientado a objetos
                  ampliamente utilizado en desarrollo web y aplicaciones
                  empresariales.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-3" onClick={() => handleClick("laravel")}>
              <Card.Body>
                <Card.Title className="fs-3">Laravel</Card.Title>
                <Card.Img
                  className="custom-img"
                  variant="top"
                  alt="Laravel"
                  src={laravel}
                />
                <Card.Text className="text-2">
                  Laravel es un framework de PHP para construir aplicaciones web
                  con una sintaxis elegante y herramientas robustas.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-3" onClick={() => handleClick("python")}>
              <Card.Body>
                <Card.Title className="fs-3">Python</Card.Title>
                <Card.Img
                  className="custom-img"
                  variant="top"
                  alt="Python"
                  src={python}
                />
                <Card.Text className="text-2">
                  Python es un lenguaje de programación versátil y fácil de
                  aprender, ampliamente utilizado en ciencia de datos y
                  desarrollo web.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Tecnologias;
