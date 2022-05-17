import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Document, Page, pdfjs } from "react-pdf";
import { Button } from "react-bootstrap";

const DirectionBar = observer(() => {
  // const { file } = useContext(Context);

  const file = {
    id: 1,
    pfd: `https://cors-anywhere.herokuapp.com/http://www.ihst.ru/projects/sohist/books/bronstein.pdf`,
  };

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
    <div className="main">
      <Document file={file.pfd} onLoadSuccess={onDocumentLoadSuccess} w>
        <Page pageNumber={pageNumber} />
      </Document>
      <div>
        <div className="pagec">
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </div>
        <div className="buttonc">
          <Button
            variant="outline-dark"
            type="button"
            disabled={pageNumber <= 1}
            onClick={previousPage}
            className="Pre"
          >
            Предыдушая
          </Button>
          <Button
            variant="outline-dark"
            type="button"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
          >
            Следующая
          </Button>
        </div>
      </div>
    </div>
  );
});

export default DirectionBar;
