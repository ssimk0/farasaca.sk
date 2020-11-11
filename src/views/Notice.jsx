import React, {useEffect, useState} from "react";
import {Document, Page, pdfjs} from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import {SET_PAGE_TITLE, useAppContext} from "../context/app";
import i18n from "../utils/i18n";

function Notice() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState(null);
  const {dispatch} = useAppContext();

  useEffect(() => {
    dispatch({type: SET_PAGE_TITLE, value: i18n.t("pages.notice.menuName")});
  });

  function onDocumentLoadSuccess({numPages}) {
    setNumPages(numPages);
  }

  return (
    <div className="p-4 container mx-auto">
      <h2 className="text-2xl">{i18n.t("pages.notice.actual")}</h2>
      <Document
        file="http://localhost:8080/api/v1/uploads/menu/weekly/latest"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {
          Array.from(
            new Array(numPages),
            (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
              />
            ),
          )
        }      </Document>

    </div>
  )
}

export default Notice
