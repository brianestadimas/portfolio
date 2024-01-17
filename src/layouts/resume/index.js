import React, { useState } from 'react';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import VuiBox from "components/VuiBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import GetAppIcon from "@mui/icons-material/GetApp";
import Footer from "examples/Footer";
import Pdf from "@mikecousins/react-pdf";
import cv from "assets/CV.pdf";

function Resume() {
  const [page, setPage] = useState(1);

  const handleDownload = () => {
    // Implement your download logic here
    window.open(cv, '_blank');
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox mt={4} display="flex" flexDirection="column" alignItems="center">
        <Pdf file={cv} page={page}>
          {({ pdfDocument, pdfPage, canvas }) => (
            <>
              {!pdfDocument && <span>Loading...</span>}
              {canvas}
              {Boolean(pdfDocument && pdfDocument.numPages) && (
                      <VuiBox mt={2} mb={2} display="flex" flexDirection="column" alignItems="center">
                        <Grid container spacing={3}>
                          <Grid item xs={6} lg={6} xl={6}>
                              <Button
                                disabled={page === 1}
                                variant="contained" color="primary"
                                onClick={() => setPage(page - 1)}
                                style={{ width: '200px' }}
                                startIcon={<KeyboardArrowLeftIcon />}
                              >
                                Previous
                              </Button>
                            </Grid>
                            <Grid item xs={6} lg={6} xl={6}>
                            <Button
                              disabled={page === pdfDocument.numPages}
                              variant="contained" color="primary"
                              onClick={() => setPage(page + 1)}
                              style={{ width: '200px' }}
                              endIcon={<KeyboardArrowRightIcon />}
                            >
                              Next
                            </Button>
                            </Grid>
                            </Grid>
                          </VuiBox>
              )}
            </>
          )}
        </Pdf>
        <Button variant="contained" color="secondary" onClick={handleDownload} mt={2} startIcon={<GetAppIcon />}>
          Download
        </Button>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Resume;
