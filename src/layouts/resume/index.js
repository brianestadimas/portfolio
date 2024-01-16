import React, { useState } from 'react';
import Grid from "@mui/material/Grid";

import VuiBox from "components/VuiBox";
import MasterCard from "examples/Cards/MasterCard";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import cv from "assets/CV.pdf";

function Resume() {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox mt={4}>
        <div>
        <Document file={cv} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Resume;
