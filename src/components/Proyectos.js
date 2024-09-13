import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import imagen1 from "../imagenes/trsb.png";
import imagen2 from "../imagenes/reservas.png";
import imagen3 from "../imagenes/login.png";
import "./proyectos.css";

const Proyectos = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/service/${id}`);
  };

  return (
    <section id="services" className="py-5">
      <Container>
        <h2 className="text-center fs-1 fw-bold mb-4">Proyectos</h2>
        <Row>
          <Col md={4}>
            <Card className="mb-3" onClick={() => handleClick("trsb")}>
              <Card.Body>
                <Card.Title className="fs-3">TheRealSouthBlog</Card.Title>
                <Card.Img
                  className="custom-img"
                  variant="top"
                  src={imagen1}
                  alt="TheRealSouthBlog"
                />
                <Card.Text className="texto-5">
                  TheRealSouthBlog es una aplicación web que como su propio
                  nombre indica es un blog en el que podrás encontrar las
                  últimas noticias sobre videojuegos, tecnología y un montón de
                  curiosidades. Esta aplicación web está realizada con Laravel.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="mb-3" onClick={() => handleClick("reservas")}>
              <Card.Body>
                <Card.Title className="fs-3">Reservas Zoom</Card.Title>
                <Card.Img
                  className="custom-img"
                  variant="top"
                  src={imagen2}
                  alt="Reservas Zoom"
                />
                <Card.Text className="texto-5">
                  Aplicación web realizada en Laravel para la Escuela Andaluza
                  de Salud Pública que consiste en una aplicación que permite a
                  los usuarios reservar salas para realizar conferencias.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="mb-3" onClick={() => handleClick("login")}>
              <Card.Body>
                <Card.Title className="fs-3">Login funcional</Card.Title>
                <Card.Img
                  className="custom-img"
                  variant="top"
                  src={imagen3}
                  alt="Login funcional"
                />
                <Card.Text className="texto-5">
                  Un sistema de registro/login realizado en React.js que guarda
                  los usuarios en Firebase.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Proyectos;
