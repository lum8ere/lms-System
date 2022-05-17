import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import SubObjectList from "../components/SubObjectList"

const ObjectPage = () => {
  return (
    <Container className="mt-3">
      <Row className="mt-3">
        <Col md={9}>
          <SubObjectList />
        </Col>
      </Row>
    </Container>
  );
};

export default ObjectPage;
