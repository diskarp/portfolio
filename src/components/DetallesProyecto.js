import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";
import imagen1 from "../imagenes/trsb.png";
import imagen2 from "../imagenes/reservas.png";
import imagen3 from "../imagenes/login.png";
import "./ServiceDetail.css";

const projectData = {
  trsb: {
    title: "TheRealSouthBlog",
    text: "TheRealSouthBlog es una aplicación web que como su propio nombre indica es un blog en el que podrás encontrar las últimas noticias sobre videojuegos, tecnología y un montón de curiosidades. Esta aplicación web está realizada con Laravel. Y tiene una gran cantidad de caracteristicas interesantes como por ejemplo la creación de noticias por parte de un administrador, contiene también un foro donde los usuarios registrados pueden interactuar y un sistema de comentarios para poder realizar comentarios al post.",
    image: imagen1,
  },
  reservas: {
    title: "Reservas Zoom",
    text: "Aplicación web realizada en Laravel para la Escuela Andaluza de Salud Pública que consiste en una aplicación que permite a los usuarios reservar salas para realizar conferencias.",
    image: imagen2,
  },
  login: {
    title: "Login funcional",
    text: "Un sistema de registro/login realizado en React.js que guarda los usuarios en Firebase. Este fue un proyecto que realicé cuando comencé a aprender sobre React y quise que guardara los usuarios que se pusieran en ese momento.",
    image: imagen3,
  },
};

const DetallesProyecto = () => {
  const { id } = useParams();
  const project = projectData[id];

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <Container className="py-5">
      <Card className="mb-3">
        <Card.Body>
          <Card.Title className="fw-bold fs-3">{project?.title}</Card.Title>
          <Card.Text className="textocard">{project?.text}</Card.Text>
          {project?.image && (
            <Card.Img variant="top" src={project.image} alt={project.title} />
          )}

          <Button variant="primary" className="mt-3" onClick={handleBackClick}>
            Volver Atrás
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DetallesProyecto;
