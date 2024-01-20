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
import pytorch from "assets/images/pytorch.svg";
import postgres from "assets/images/postgres.svg";
import kibana from "assets/images/kibana.svg";
import elastic from "assets/images/elastic.svg";
import swagger from "assets/images/swagger.svg";
import tableau from "assets/images/tableau.svg";
import mysql from "assets/images/mysql.svg";
import csharp from "assets/images/csharp.svg";

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

import q1 from "assets/images/projects2/1.png";
import q2 from "assets/images/projects2/2.png";
import q3 from "assets/images/projects2/3.png";
import q4 from "assets/images/projects2/4.png";
import q5 from "assets/images/projects2/5.png";
import q6 from "assets/images/projects2/6.png";
import q7 from "assets/images/projects2/7.png";
import q8 from "assets/images/projects2/8.png";
import q9 from "assets/images/projects2/9.png";
import q10 from "assets/images/projects2/10.png";

import r1 from "assets/images/projects3/1.png";
import r2 from "assets/images/projects3/2.png";
import r3 from "assets/images/projects3/3.png";
import r4 from "assets/images/projects3/4.png";
import r5 from "assets/images/projects3/5.png";
import r6 from "assets/images/projects3/6.png";
import r7 from "assets/images/projects3/7.png";
import r8 from "assets/images/projects3/8.png";
import r9 from "assets/images/projects3/9.png";

import s1 from "assets/images/projects4/1.png";
import s2 from "assets/images/projects4/2.png";
import s3 from "assets/images/projects4/3.png";
import s4 from "assets/images/projects4/4.png";
import s5 from "assets/images/projects4/5.png";
import s6 from "assets/images/projects4/6.png";

import t1 from "assets/images/projects5/1.png";
import t2 from "assets/images/projects5/2.png";
import t3 from "assets/images/projects5/3.png";
import t4 from "assets/images/projects5/4.png";
import t5 from "assets/images/projects5/5.png";
import t6 from "assets/images/projects5/6.png";
import t7 from "assets/images/projects5/7.png";

function Projects() {
  const { gradients } = colors;
  const { cardContent } = gradients;
  const imageList = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16];

  const imageList2 = [q1, q2];
  const imageList3 = [q3, q4, q5, q6, q7, q8, q9, q10];
  const imageList4 = [r1, r2, r3, r4, r5, r6, r7, r8, r9];

  const imageList5 = [s1, s2, s3, s4, s5];
  const imageList6 = [t1, t2];
  const imageList7 = [t4, t5, t6, t7];

  return (
    <DashboardLayout>
      <VuiBox mt={10}>
        <Grid container spacing={3}>
          <Grid item xs={6} lg={7} xl={7}>
            <VuiBox>
              <VuiBox height="420px">
                <div style={{ position: "relative", top: -160, left: -220 }}>
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
              <VuiBox height="480px">
                <Grid container spacing={3}>
                  <Grid item xs={6} lg={6} xl={6}>
                    <div style={{ position: "relative", top: -260, left: -400 }}>
                      <DeviceFrameset device="iPad Mini" color="silver" zoom="40%" width={1500}>
                        <Carousel
                          autoPlay
                          interval="4600"
                          transitionTime="1000"
                          showThumbs={false}
                          infiniteLoop
                        >
                          {imageList3.map((imgSrc, index) => (
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
                          interval="8000"
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
                </Grid>
              </VuiBox>
              <Card>
                <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                  Description
                </VuiTypography>
                <VuiBox display="flex" alignItems="center" mb="20px">
                  <VuiTypography variant="button" color="success" fontWeight="bold">
                    <VuiTypography variant="button" color="text" fontWeight="regular">
                      This microservice project aims to develop a comprehensive barging plan
                      simulation that incorporates deep learning techniques to enhance the
                      efficiency and economic viability of transporting coal, for biggest coal
                      mining company in Indonesia. By integrating real-time data on coal stock
                      prices, weather conditions, mining processes, and route considerations, the
                      simulation and dashboard provide an advanced decision-making tool for
                      optimizing the movement of tugboats, ports, mother vessels, and barges. The
                      deep learning model analyze historical and current data to predict the most
                      effective route, taking into account the fluctuating coal stock prices,
                      ensuring cost-effectiveness and maximizing profitability. The project worth
                      millions of dollars, featured
                    </VuiTypography>{" "}
                    tug, barge, floating crane managements, route optimization, mother vessel
                    management, port management, traffic controller, weather forecast, variable &
                    constant monitoring, dashboard, cycle time, loading, sailing, finishing time
                    management, and timeline simulation.
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
                      Sinarmas Coal Mining
                    </VuiTypography>
                  </Grid>
                  <Grid item xs={4} md={4} lg={4}>
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
                      Monitoring & Simulation
                    </VuiTypography>
                  </Grid>
                  <Grid item xs={5} md={5} lg={5}>
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
                      <div title="Python" style={{ display: "inline-block", marginRight: "5px" }}>
                        <VuiAvatar
                          src={python}
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
                      <div title="Flask" style={{ display: "inline-block", marginRight: "5px" }}>
                        <VuiAvatar
                          src={flask}
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
                        title="Tensorflow"
                        style={{ display: "inline-block", marginRight: "5px" }}
                      >
                        <VuiAvatar
                          src={tensorflow}
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
                      <div title="ReactJS" style={{ display: "inline-block", marginRight: "5px" }}>
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
                      <div title="Tableau" style={{ display: "inline-block", marginRight: "5px" }}>
                        <VuiAvatar
                          src={tableau}
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
          <Grid item xs={7} lg={7} xl={7}>
            <VuiBox>
              <VuiBox height="500px">
                <div style={{ position: "relative", top: -240, left: -200 }}>
                  <DeviceFrameset device="iPad Mini" color="black" zoom="53%" width={1200}>
                    <Carousel
                      autoPlay
                      interval="3000"
                      transitionTime="1000"
                      showThumbs={false}
                      infiniteLoop
                    >
                      {imageList4.map((imgSrc, index) => (
                        <div key={index}>
                          <img src={imgSrc} alt={`Project ${index + 1}`} />
                        </div>
                      ))}
                    </Carousel>
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
                      Human resource and customer relationship management project, including
                      systemize recruitment for outsourcing. Ultimately, the project seeks to
                      improve resource allocation and reduce administrative burdens. Featured{" "}
                    </VuiTypography>
                    performance tracking, presence management, client management, assignment,
                    payroll, candidate sourcing, assessment, and onboarding,
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
                      Sierra Solutions
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
                      CRM - HRM
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
                      <div title="Java" style={{ display: "inline-block", marginRight: "5px" }}>
                        <VuiAvatar
                          src={java}
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
                        title="Spring MVC"
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
                      <div title="MySQL" style={{ display: "inline-block", marginRight: "5px" }}>
                        <VuiAvatar
                          src={mysql}
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
          <Grid item xs={4} lg={4} xl={4} />
          <Grid item xs={2} lg={2} xl={2}>
            <VuiBox>
              <VuiBox height="500px">
                <div style={{ position: "relative", top: -140, left: -120 }}>
                  <DeviceFrameset device="Galaxy Note 8" color="black" zoom="63%">
                    <Carousel
                      autoPlay
                      interval="3000"
                      transitionTime="1000"
                      showThumbs={false}
                      infiniteLoop
                    >
                      {imageList5.map((imgSrc, index) => (
                        <div key={index}>
                          <img src={imgSrc} alt={`Project ${index + 1}`} />
                        </div>
                      ))}
                    </Carousel>
                  </DeviceFrameset>
                </div>
              </VuiBox>
            </VuiBox>
          </Grid>
          <Grid item xs={6} lg={6} xl={6}>
            <VuiBox>
              <VuiBox height="500px">
                <div style={{ position: "relative", top: -240, left: -100 }}>
                  <DeviceFrameset device="iPad Mini" color="black" zoom="53%" width={600}>
                    <img src={s6} alt="" />
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
                      Build financial applications from the scratch, which includes payment,
                      banking, bills, and others as well as improve existing insurance application,
                      partner with many insurance companies. Featured{" "}
                    </VuiTypography>
                    salary advance, personal accident insurance, outpatient insurance, P2P lending,
                    API with banking, virtual account, and dashboard.
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
                      Gigacover
                    </VuiTypography>
                  </Grid>
                  <Grid item xs={6} md={4} lg={4}>
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
                      System & App
                    </VuiTypography>
                  </Grid>
                  <Grid item xs={4} md={4} lg={4}>
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
                      <div
                        title="Python - Falcon"
                        style={{ display: "inline-block", marginRight: "5px" }}
                      >
                        <VuiAvatar
                          src={falcon}
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
                      <div title="ReactJS" style={{ display: "inline-block", marginRight: "5px" }}>
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
                        title="React Native"
                        style={{ display: "inline-block", marginRight: "5px" }}
                      >
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
                      <div title="Rest API" style={{ display: "inline-block", marginRight: "5px" }}>
                        <VuiAvatar
                          src={restapi}
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
          <Grid item xs={6} lg={7} xl={7}>
            <VuiBox>
              <VuiBox height="420px">
                <div style={{ position: "relative", top: -160, left: -220 }}>
                  <DeviceFrameset device="MacBook Pro" color="black" zoom="60%" width={1200}>
                    <Carousel
                      autoPlay
                      interval="3000"
                      transitionTime="1000"
                      showThumbs={false}
                      infiniteLoop
                    >
                      {imageList6.map((imgSrc, index) => (
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
                      Develop KPI dashboard for top-level management for revenue assurance division.
                      Featured
                    </VuiTypography>{" "}
                    reconcile input, lead time management, tower management, PO, KPI and overdue
                    management.
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
                      Tower Bersama
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
                      KPI Dashboard
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
                      <div title="ReactJS" style={{ display: "inline-block", marginRight: "5px" }}>
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
                      <div title="C#" style={{ display: "inline-block", marginRight: "5px" }}>
                        <VuiAvatar
                          src={csharp}
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
              <VuiBox height="480px">
                <Grid container spacing={3}>
                  <Grid item xs={6} lg={6} xl={6}>
                    <div style={{ position: "relative", top: -260, left: -400 }}>
                      <DeviceFrameset device="iPad Mini" color="silver" zoom="40%" width={1500}>
                        <Carousel
                          autoPlay
                          interval="4600"
                          transitionTime="1000"
                          showThumbs={false}
                          infiniteLoop
                        >
                          {imageList7.map((imgSrc, index) => (
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
                        <img src={t3} alt="" />
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
                      Collection of my machine learning models like face mask detection, brain
                      tumour detection, wind turbine prediction, finetuned diffusion model. Featured
                    </VuiTypography>{" "}
                    computer vision (object detection, image classification, image segmentation)
                    projects and LLM model.
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
                      Public (GitHub)
                    </VuiTypography>
                  </Grid>
                  <Grid item xs={4} md={4} lg={4}>
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
                      AI Models
                    </VuiTypography>
                  </Grid>
                  <Grid item xs={5} md={5} lg={5}>
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
                      <div title="Python" style={{ display: "inline-block", marginRight: "5px" }}>
                        <VuiAvatar
                          src={python}
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
                        title="Tensorflow"
                        style={{ display: "inline-block", marginRight: "5px" }}
                      >
                        <VuiAvatar
                          src={tensorflow}
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
                      <div title="Pytorch" style={{ display: "inline-block", marginRight: "5px" }}>
                        <VuiAvatar
                          src={pytorch}
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
                      <div title="Flutter" style={{ display: "inline-block", marginRight: "5px" }}>
                        <VuiAvatar
                          src={flutter}
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
