import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Document, Page, pdfjs } from "react-pdf";

const ObjectPage = () => {
  const file = {
    id: 1,
    pfd: `https://cors-anywhere.herokuapp.com/http://www.ihst.ru/projects/sohist/books/bronstein.pdf`,
  };
  const subject = {
    id: 1,
    name: "Тест тема",
    img: `https://sun9-62.userapi.com/s/v1/if2/f7axPjAZMl7_lXNZVqjCU7nW1VWus-VEXY3LVuiCjrIy3h1qTJuP8Qtr9ss2xV4vikm9-MSgiyyH1uW2ahfQMRDt.jpg?size=750x750&quality=96&type=album`,
  };
  const discriptiont = { id: 1, title: "test", discription: "test" };

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  /*To Prevent right click on screen*/
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <div className="main">
            <Document file={file.pfd} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} />
            </Document>
            <div>
              <div className="pagec">
                Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
              </div>
              <div className="buttonc">
                <button
                  type="button"
                  disabled={pageNumber <= 1}
                  onClick={previousPage}
                  className="Pre"
                >
                  Предыдущая
                </button>
                <button
                  type="button"
                  disabled={pageNumber >= numPages}
                  onClick={nextPage}
                >
                  Следующая
                </button>
              </div>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2>{subject.name}</h2>
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
