import React, {useState} from 'react';
import {Document, Page, pdfjs} from "react-pdf";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

function DetailView({file}) {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const [numPages, setNumPages] = useState(null);
  const [pageNum, setPageNum] = useState(1);

  console.log(file)

  function onDocumentLoadSuccess({numPages}) {
    setNumPages(numPages);
  }

  return (
    <div className="container py-4">
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page
          pageNumber={pageNum}
          scale={2.0}
        />
      </Document>
      {numPages && (
      <div className="text-center">
        {pageNum > 1 && <button className="pr-4 font-bold text-4xl focus:outline-none text-blue-500 hover:text-blue-600"
                                onClick={() => setPageNum(pageNum - 1)}> {" < "} </button>
        }
        <span>{pageNum}/{numPages}</span>
        {pageNum < numPages && <button className="pl-4 font-bold text-4xl focus:outline-none text-blue-500 hover:text-blue-600"
                                       onClick={() => setPageNum(pageNum + 1)}> {" > "} </button>
        }
      </div>
      )}
    </div>
  )
}


export default DetailView
