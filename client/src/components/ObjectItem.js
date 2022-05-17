import React from "react";
import { Col, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { OBJECT_ROUTE } from "../utils/consts";

const ObjectItem = ({ object }) => {
  const history = useHistory();
  return (
    <Col
      md={3}
      className="mt-3"
      onClick={() => history.push(OBJECT_ROUTE + "/" + object.id)}
    >
      <Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
        <Card.Body>
          <Card.Title>{object.name}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ObjectItem;
