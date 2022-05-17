import React from "react";
import { Container, Col, Row, Accordion } from "react-bootstrap";
import PdfView from "../components/PdfView";

const ObjectPage = () => {
  const subject = {
    id: 1,
    name: "Тест тема",
    img: `https://sun9-62.userapi.com/s/v1/if2/f7axPjAZMl7_lXNZVqjCU7nW1VWus-VEXY3LVuiCjrIy3h1qTJuP8Qtr9ss2xV4vikm9-MSgiyyH1uW2ahfQMRDt.jpg?size=750x750&quality=96&type=album`,
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <PdfView />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2>{subject.name}</h2>
            <div>
              {/* <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Accordion Item #2</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion> */}
            </div>
          </Row>
        </Col>
      </Row>
      {/* <Row>
        {discriptiont.map((info) => (
          <Row key={info.id}>
            {info.title}: {info.description}
          </Row>
        ))}
      </Row> */}
    </Container>
  );
};

export default ObjectPage;
