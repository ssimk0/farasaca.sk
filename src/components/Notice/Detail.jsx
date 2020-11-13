import {Document, Page, pdfjs} from "react-pdf";
import React, {useState} from "react";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';


function Detail({file}) {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState(null);
  function onDocumentLoadSuccess({numPages}) {
    setNumPages(numPages);
  }

  return (
    <Document
      file={file}
      onLoadSuccess={onDocumentLoadSuccess}
    >
      {
        Array.from(
          new Array(numPages),
          (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              scale={2.0}
            />
          ),
        )
      }
    </Document>
  )
}

export default Detail
