import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import "./styles.css";
import laptop from "../imagenes/laptop.png";
const Hero = () => {
  return (
    <section className="custom-bg text-center py-5">
      <Container>
        <Row className="align-items-center">
          <Col>
            <h1 className="bienvenido display-4 bold">¡Bienvenido!</h1>

            <p className="text-custom">
              Mi nombre es José Pablo, soy desarrollador de aplicaciones
              multiplataforma y vivo en Granada, España. Desde pequeño me ha
              gustado el mundillo de la tecnología y hasta ahora he estado
              aprendiendo sobre este. Abajo encontrarás los lenguajes de
              programación que he usado y algún proyecto que he realizado por mi
              cuenta:
            </p>
            <Button variant="light" size="lg" href="/tecnologias">
              Tecnologías
            </Button>
          </Col>
          <Col>
            <img variant="top" alt="Laptop" src={laptop} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
