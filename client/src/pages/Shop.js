import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import DirectionBar from "../components/DirectionBar";
import ObjectList from "../components/ObjectList";
// import { NavLink, useLocation } from 'react-router-dom';

const Shop = () => {
  return (
  <Container>
    <Row className="mt-3">
      <Col md={3}>
        <DirectionBar />
      </Col>
      <Col md={9}>
        <ObjectList />
      </Col>
    </Row>
  </Container>
  );
};

export default Shop;
