import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Grid from "@mui/material/Grid";
import team1 from "assets/images/avatar1.png";
import team2 from "assets/images/avatar2.png";
import team3 from "assets/images/avatar3.png";
import team4 from "assets/images/avatar4.png";
import linearGradient from "assets/theme/functions/linearGradient";
import { Card, LinearProgress, Stack } from "@mui/material";
import VuiProgress from "components/VuiProgress";
// Images
import profile1 from "assets/images/profile-1.png";
import profile2 from "assets/images/profile-2.png";
import profile3 from "assets/images/profile-3.png";
// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import Footer from "examples/Footer";
// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// Overview page components
import { IoIosApps, IoLogoGithub } from "react-icons/io";
import { IoApps, IoBuild } from "react-icons/io5";
import { IoWallet, IoGolf, IoLaptop } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
// Data
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import colors from "assets/theme/base/colors";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";

import VuiAvatar from "components/VuiAvatar2";
import spring from "assets/images/spring.svg";
import java from "assets/images/java.svg";
import python from "assets/images/python.svg";
import flask from "assets/images/flask.svg";
import falcon from "assets/images/falcon.svg";
import nextjs from "assets/images/nextjs.svg";
import react from "assets/images/react.svg";
import flutter from "assets/images/flutter.svg";
import github from "assets/images/github.svg";
import gitlab from "assets/images/gitlab.svg";
import docker from "assets/images/docker.svg";
import ubuntu from "assets/images/ubuntu.svg";
import windows from "assets/images/windows.svg";
import restapi from "assets/images/restapi.svg";
import websocket from "assets/images/websocket.svg";
import tensorflow from "assets/images/tensorflow.svg";
import pytorch from "assets/images/python.svg";
import postgres from "assets/images/postgres.svg";
import kibana from "assets/images/kibana.svg";
import elastic from "assets/images/elastic.svg";
import swagger from "assets/images/swagger.svg";

import p1 from "assets/images/projects1/1.png";
import p2 from "assets/images/projects1/2.png";
import p3 from "assets/images/projects1/3.png";
import p4 from "assets/images/projects1/4.png";
import p5 from "assets/images/projects1/5.png";
import p6 from "assets/images/projects1/6.png";
import p7 from "assets/images/projects1/7.png";
import p8 from "assets/images/projects1/8.png";
import p9 from "assets/images/projects1/9.png";
import p10 from "assets/images/projects1/10.png";
import p11 from "assets/images/projects1/11.png";
import p12 from "assets/images/projects1/12.png";
import p13 from "assets/images/projects1/13.png";
import p14 from "assets/images/projects1/14.png";
import p15 from "assets/images/projects1/15.png";
import p16 from "assets/images/projects1/16.png";

function Projects() {
  const { gradients } = colors;
  const { cardContent } = gradients;
  const imageList = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16];

  const imageList2 = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16];

  return (
    <DashboardLayout>
      <VuiBox mt={10}>
        <Grid container spacing={3}>
          <Grid item xs={6} lg={7} xl={7}>
            <VuiBox>
              <VuiBox height="420px">
                <div style={{ position: "relative", top: -160, left: -200 }}>
                  <DeviceFrameset device="MacBook Pro" color="black" zoom="60%" width={1200}>
                    <Carousel
                      autoPlay
                      interval="3000"
                      transitionTime="1000"
                      showThumbs={false}
                      infiniteLoop
                    >
                      {imageList.map((imgSrc, index) => (
                        <div key={index}>
                          <img src={imgSrc} alt={`Project ${index + 1}`} />
                        </div>
                      ))}
                    </Carousel>
                    {/* <img src="https://res.cloudinary.com/yumyo/image/upload/v1647279421/media/folio/prj/rac/screens/home-1440.png" /> */}
                  </DeviceFrameset>
                </div>
              </VuiBox>
              <Card>
                <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                  Description
                </VuiTypography>
                <VuiBox display="flex" alignItems="center" mb="20px">
                  <VuiTypography variant="button" color="success" fontWeight="bold">
                    <VuiTypography variant="button" color="text" fontWeight="regular">
                      This project leverages the power of Kibana and ElasticSearch to create a
                      comprehensive monitoring system for servers and services and it is being used
                      by ministry of planning and development. Featured
                    </VuiTypography>{" "}
                    service management, server management, database management, role management,
                    risk management, rules, anomaly detection, threats, and maps application
                    infrastructure.
                  </VuiTypography>
                </VuiBox>
                <Grid container spacing="50px">
                  <Grid item xs={6} md={3} lg={3}>
                    <Stack
                      direction="row"
                      spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                      mb="6px"
                    >
                      <VuiBox
                        bgColor="info"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                      >
                        <IoWallet color="#fff" size="12px" />
                      </VuiBox>
                      <VuiTypography color="text" variant="button" fontWeight="medium">
                        Client
                      </VuiTypography>
                    </Stack>
                    <VuiTypography color="white" variant="lg" fontWeight="" mb="8px">
                      BAPPENAS
                    </VuiTypography>
                  </Grid>
                  <Grid item xs={6} md={3} lg={3}>
                    <Stack
                      direction="row"
                      spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                      mb="6px"
                    >
                      <VuiBox
                        bgColor="info"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                      >
                        <IoApps color="#fff" size="12px" />
                      </VuiBox>
                      <VuiTypography color="text" variant="button" fontWeight="medium">
                        Type
                      </VuiTypography>
                    </Stack>
                    <VuiTypography color="white" variant="lg" fontWeight="" mb="8px">
                      Monitoring
                    </VuiTypography>
                  </Grid>
                  <Grid item xs={6} md={6} lg={6}>
                    <Stack
                      direction="row"
                      spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                      mb="6px"
                    >
                      <VuiBox
                        bgColor="info"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                      >
                        <IoIosApps color="#fff" size="12px" />
                      </VuiBox>
                      <VuiTypography color="text" variant="button" fontWeight="medium">
                        Stack
                      </VuiTypography>
                    </Stack>
                    <VuiTypography color="white" variant="lg" fontWeight="" mb="8px">
                      <div title="Kibana" style={{ display: "inline-block", marginRight: "5px" }}>
                        <VuiAvatar
                          src={kibana}
                          alt="name"
                          size="sm"
                          style={{
                            marginLeft: "1px",
                            borderRadius: "12px", // Adjust the border radius as needed
                            padding: "3px", // Adjust the padding as needed
                            background: "white",
                            boxShadow: "0 0 10px rgba(173, 216, 230, 0.5)", // Neon outer line (adjust color and size as needed)
                            boxSizing: "border-box",
                          }}
                        />
                      </div>
                      <div
                        title="Elastic Search"
                        style={{ display: "inline-block", marginRight: "5px" }}
                      >
                        <VuiAvatar
                          src={elastic}
                          alt="name"
                          size="sm"
                          style={{
                            marginLeft: "1px",
                            borderRadius: "12px", // Adjust the border radius as needed
                            padding: "3px", // Adjust the padding as needed
                            background: "white",
                            boxShadow: "0 0 10px rgba(173, 216, 230, 0.5)", // Neon outer line (adjust color and size as needed)
                            boxSizing: "border-box",
                          }}
                        />
                      </div>
                      <div
                        title="Java SpringBoots"
                        style={{ display: "inline-block", marginRight: "5px" }}
                      >
                        <VuiAvatar
                          src={spring}
                          alt="name"
                          size="sm"
                          style={{
                            marginLeft: "1px",
                            borderRadius: "12px", // Adjust the border radius as needed
                            padding: "3px", // Adjust the padding as needed
                            background: "white",
                            boxShadow: "0 0 10px rgba(173, 216, 230, 0.5)", // Neon outer line (adjust color and size as needed)
                            boxSizing: "border-box",
                          }}
                        />
                      </div>
                      <div
                        title="Swagger API"
                        style={{ display: "inline-block", marginRight: "5px" }}
                      >
                        <VuiAvatar
                          src={swagger}
                          alt="name"
                          size="sm"
                          style={{
                            marginLeft: "1px",
                            borderRadius: "12px", // Adjust the border radius as needed
                            padding: "3px", // Adjust the padding as needed
                            background: "white",
                            boxShadow: "0 0 10px rgba(173, 216, 230, 0.5)", // Neon outer line (adjust color and size as needed)
                            boxSizing: "border-box",
                          }}
                        />
                      </div>
                      <div title="NextJS" style={{ display: "inline-block", marginRight: "5px" }}>
                        <VuiAvatar
                          src={react}
                          alt="name"
                          size="sm"
                          style={{
                            marginLeft: "1px",
                            borderRadius: "12px", // Adjust the border radius as needed
                            padding: "3px", // Adjust the padding as needed
                            background: "white",
                            boxShadow: "0 0 10px rgba(173, 216, 230, 0.5)", // Neon outer line (adjust color and size as needed)
                            boxSizing: "border-box",
                          }}
                        />
                      </div>
                      <div
                        title="PostgreSQL"
                        style={{ display: "inline-block", marginRight: "5px" }}
                      >
                        <VuiAvatar
                          src={postgres}
                          alt="name"
                          size="sm"
                          style={{
                            marginLeft: "1px",
                            borderRadius: "12px", // Adjust the border radius as needed
                            padding: "3px", // Adjust the padding as needed
                            background: "white",
                            boxShadow: "0 0 10px rgba(173, 216, 230, 0.5)", // Neon outer line (adjust color and size as needed)
                            boxSizing: "border-box",
                          }}
                        />
                      </div>
                      <div title="Docker" style={{ display: "inline-block", marginRight: "5px" }}>
                        <VuiAvatar
                          src={docker}
                          alt="name"
                          size="sm"
                          style={{
                            marginLeft: "1px",
                            borderRadius: "12px", // Adjust the border radius as needed
                            padding: "3px", // Adjust the padding as needed
                            background: "white",
                            boxShadow: "0 0 10px rgba(173, 216, 230, 0.5)", // Neon outer line (adjust color and size as needed)
                            boxSizing: "border-box",
                          }}
                        />
                      </div>
                    </VuiTypography>
                  </Grid>
                </Grid>
              </Card>
            </VuiBox>
          </Grid>
        </Grid>
      </VuiBox>
      <VuiBox mt={10}>
        <Grid container spacing={3}>
          <Grid item xs={3} lg={3} xl={3} />
          <Grid item xs={8} lg={8} xl={8}>
            <VuiBox>
              <VuiBox height="470px">
                <Grid container spacing={3}>
                  <Grid item xs={6} lg={6} xl={6}>
                    <div style={{ position: "relative", top: -260, left: -400 }}>
                      <DeviceFrameset device="iPad Mini" color="silver" zoom="40%" width={1500}>
                        <Carousel
                          autoPlay
                          interval="3000"
                          transitionTime="1000"
                          showThumbs={false}
                          infiniteLoop
                        >
                          {imageList2.map((imgSrc, index) => (
                            <div key={index}>
                              <img src={imgSrc} alt={`Project ${index + 1}`} />
                            </div>
                          ))}
                        </Carousel>
                      </DeviceFrameset>
                    </div>
                  </Grid>
                  <Grid item xs={6} lg={6} xl={6}>
                    <div style={{ position: "relative", top: -300, left: 90 }}>
                      <DeviceFrameset device="iPhone 8" color="black" zoom="70%">
                        <Carousel
                          autoPlay
                          interval="3000"
                          transitionTime="1000"
                          showThumbs={false}
                          infiniteLoop
                        >
                          {imageList.map((imgSrc, index) => (
                            <div key={index}>
                              <img src={imgSrc} alt={`Project ${index + 1}`} />
                            </div>
                          ))}
                        </Carousel>
                      </DeviceFrameset>
                    </div>
                  </Grid>
                </Grid>
              </VuiBox>
              <Card>
                <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                  Description
                </VuiTypography>
                <VuiBox display="flex" alignItems="center" mb="20px">
                  <VuiTypography variant="button" color="success" fontWeight="bold">
                    <VuiTypography variant="button" color="text" fontWeight="regular">
                      This project leverages the power of Kibana and ElasticSearch to create a
                      comprehensive monitoring system for servers and services and it is being used
                      by ministry of planning and development. Featured
                    </VuiTypography>{" "}
                    service management, server management, database management, role management,
                    risk management, rules, anomaly detection, threats, and maps application
                    infrastructure.
                  </VuiTypography>
                </VuiBox>
                <Grid container spacing="50px">
                  <Grid item xs={6} md={3} lg={3}>
                    <Stack
                      direction="row"
                      spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                      mb="6px"
                    >
                      <VuiBox
                        bgColor="info"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                      >
                        <IoWallet color="#fff" size="12px" />
                      </VuiBox>
                      <VuiTypography color="text" variant="button" fontWeight="medium">
                        Client
                      </VuiTypography>
                    </Stack>
                    <VuiTypography color="white" variant="lg" fontWeight="" mb="8px">
                      BAPPENAS
                    </VuiTypography>
                  </Grid>
                  <Grid item xs={6} md={3} lg={3}>
                    <Stack
                      direction="row"
                      spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                      mb="6px"
                    >
                      <VuiBox
                        bgColor="info"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                      >
                        <IoApps color="#fff" size="12px" />
                      </VuiBox>
                      <VuiTypography color="text" variant="button" fontWeight="medium">
                        Type
                      </VuiTypography>
                    </Stack>
                    <VuiTypography color="white" variant="lg" fontWeight="" mb="8px">
                      Monitoring
                    </VuiTypography>
                  </Grid>
                  <Grid item xs={6} md={6} lg={6}>
                    <Stack
                      direction="row"
                      spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                      mb="6px"
                    >
                      <VuiBox
                        bgColor="info"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                      >
                        <IoIosApps color="#fff" size="12px" />
                      </VuiBox>
                      <VuiTypography color="text" variant="button" fontWeight="medium">
                        Stack
                      </VuiTypography>
                    </Stack>
                    <VuiTypography color="white" variant="lg" fontWeight="" mb="8px">
                      <div title="Kibana" style={{ display: "inline-block", marginRight: "5px" }}>
                        <VuiAvatar
                          src={kibana}
                          alt="name"
                          size="sm"
                          style={{
                            marginLeft: "1px",
                            borderRadius: "12px", // Adjust the border radius as needed
                            padding: "3px", // Adjust the padding as needed
                            background: "white",
                            boxShadow: "0 0 10px rgba(173, 216, 230, 0.5)", // Neon outer line (adjust color and size as needed)
                            boxSizing: "border-box",
                          }}
                        />
                      </div>
                      <div
                        title="Elastic Search"
                        style={{ display: "inline-block", marginRight: "5px" }}
                      >
                        <VuiAvatar
                          src={elastic}
                          alt="name"
                          size="sm"
                          style={{
                            marginLeft: "1px",
                            borderRadius: "12px", // Adjust the border radius as needed
                            padding: "3px", // Adjust the padding as needed
                            background: "white",
                            boxShadow: "0 0 10px rgba(173, 216, 230, 0.5)", // Neon outer line (adjust color and size as needed)
                            boxSizing: "border-box",
                          }}
                        />
                      </div>
                      <div
                        title="Java SpringBoots"
                        style={{ display: "inline-block", marginRight: "5px" }}
                      >
                        <VuiAvatar
                          src={spring}
                          alt="name"
                          size="sm"
                          style={{
                            marginLeft: "1px",
                            borderRadius: "12px", // Adjust the border radius as needed
                            padding: "3px", // Adjust the padding as needed
                            background: "white",
                            boxShadow: "0 0 10px rgba(173, 216, 230, 0.5)", // Neon outer line (adjust color and size as needed)
                            boxSizing: "border-box",
                          }}
                        />
                      </div>
                      <div
                        title="Swagger API"
                        style={{ display: "inline-block", marginRight: "5px" }}
                      >
                        <VuiAvatar
                          src={swagger}
                          alt="name"
                          size="sm"
                          style={{
                            marginLeft: "1px",
                            borderRadius: "12px", // Adjust the border radius as needed
                            padding: "3px", // Adjust the padding as needed
                            background: "white",
                            boxShadow: "0 0 10px rgba(173, 216, 230, 0.5)", // Neon outer line (adjust color and size as needed)
                            boxSizing: "border-box",
                          }}
                        />
                      </div>
                      <div title="NextJS" style={{ display: "inline-block", marginRight: "5px" }}>
                        <VuiAvatar
                          src={react}
                          alt="name"
                          size="sm"
                          style={{
                            marginLeft: "1px",
                            borderRadius: "12px", // Adjust the border radius as needed
                            padding: "3px", // Adjust the padding as needed
                            background: "white",
                            boxShadow: "0 0 10px rgba(173, 216, 230, 0.5)", // Neon outer line (adjust color and size as needed)
                            boxSizing: "border-box",
                          }}
                        />
                      </div>
                      <div
                        title="PostgreSQL"
                        style={{ display: "inline-block", marginRight: "5px" }}
                      >
                        <VuiAvatar
                          src={postgres}
                          alt="name"
                          size="sm"
                          style={{
                            marginLeft: "1px",
                            borderRadius: "12px", // Adjust the border radius as needed
                            padding: "3px", // Adjust the padding as needed
                            background: "white",
                            boxShadow: "0 0 10px rgba(173, 216, 230, 0.5)", // Neon outer line (adjust color and size as needed)
                            boxSizing: "border-box",
                          }}
                        />
                      </div>
                      <div title="Docker" style={{ display: "inline-block", marginRight: "5px" }}>
                        <VuiAvatar
                          src={docker}
                          alt="name"
                          size="sm"
                          style={{
                            marginLeft: "1px",
                            borderRadius: "12px", // Adjust the border radius as needed
                            padding: "3px", // Adjust the padding as needed
                            background: "white",
                            boxShadow: "0 0 10px rgba(173, 216, 230, 0.5)", // Neon outer line (adjust color and size as needed)
                            boxSizing: "border-box",
                          }}
                        />
                      </div>
                    </VuiTypography>
                  </Grid>
                </Grid>
              </Card>
            </VuiBox>
          </Grid>
        </Grid>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Projects;
