import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container className="text-center">
        <p>© {new Date().getFullYear()} José Pablo Gómez Gómez</p>
      </Container>
    </footer>
  );
};

export default Footer;
