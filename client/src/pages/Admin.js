import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import CreateDistrics from "../components/modals/CreateDistrics";
import CreateGroup from "../components/modals/CreateGroup";
import CreateObject from "../components/modals/CreateObject";
import CreateSubObject from "../components/modals/CreateSubObject";

const Admin = () => {
  const [DistricsVisible, setDistricsVisible] = useState(false);
  const [GroupVisible, setGroupVisible] = useState(false);
  const [ObjectVisible, setObjectVisible] = useState(false);
  const [SubObjectVisible, setSubObjectVisible] = useState(false);
  return (
    <Container className="d-flex flex-column">
      <Button variant={"outline-dark"} className="mt-2" onClick={() => setDistricsVisible(true)}>
        Добавить направление
      </Button>
      <Button variant={"outline-dark"} className="mt-2" onClick={() => setGroupVisible(true)}>
        Добавить группу
      </Button>
      <Button variant={"outline-dark"} className="mt-2" onClick={() => setObjectVisible(true)}>
        Добавить предмет
      </Button>
      <Button variant={"outline-dark"} className="mt-2" onClick={() => setSubObjectVisible(true)}>
        Добавить тему
      </Button>
      <CreateDistrics show={DistricsVisible} onHide={() => setDistricsVisible(false)}/>
      <CreateGroup show={GroupVisible} onHide={() => setGroupVisible(false)}/>
      <CreateObject show={ObjectVisible} onHide={() => setObjectVisible(false)}/>
      <CreateSubObject show={SubObjectVisible} onHide={() => setSubObjectVisible(false)}/>
    </Container>
  );
};

export default Admin;
