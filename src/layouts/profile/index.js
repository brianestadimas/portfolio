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
import colors from "assets/theme/base/colors";
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";
import Welcome from "../profile/components/Welcome/index";
import CarInformations from "./components/CarInformations";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import WelcomeMark from "layouts/dashboard/components/WelcomeMark";
import Projects from "layouts/dashboard/components/Projects";
import { IoLogoGithub } from "react-icons/io";
import { IoGlobe } from "react-icons/io5";
import { IoBuild } from "react-icons/io5";
import { IoWallet, IoGolf, IoLaptop } from "react-icons/io5";
import { IoDocumentText } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import SatisfactionRate from "layouts/dashboard/components/SatisfactionRate";
// Data
import LineChart from "examples/Charts/LineCharts/LineChart";
import BarChart from "examples/Charts/BarCharts/BarChart";
import { lineChartDataDashboard } from "layouts/profile/data/lineChartData";
import { lineChartOptionsDashboard } from "layouts/profile/data/lineChartOptions";
import { barChartDataDashboard } from "layouts/profile/data/barChartData";
import { barChartOptionsDashboard } from "layouts/profile/data/barChartOptions";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import pro1 from "assets/images/pro1.jpg";
import pro2 from "assets/images/pro2.png";
import pro3 from "assets/images/pro3.png";

import certa from "assets/images/cert-a.jpg";
import certb from "assets/images/cert-b.jpg";
import certc from "assets/images/cert-c.jpg";
import certd from "assets/images/cert-d.jpg";
import certe from "assets/images/cert-e.jpg";
import certf from "assets/images/cert-f.jpg";

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

function Overview() {
  const { gradients } = colors;
  const { cardContent } = gradients;
  return (
    <DashboardLayout>
      <Header />
      <VuiBox mt={3} mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3} xl={3}>
            <MiniStatisticsCard
              title={{ text: "Interest", fontWeight: "regular" }}
              count="Deep Learning"
              percentage={{ color: "success", text: "+Certified" }}
              icon={{ color: "info", component: <IoGolf size="22px" color="white" /> }}
            />
          </Grid>
          <Grid item xs={12} md={3} xl={3}>
            <MiniStatisticsCard
              title={{ text: "Research" }}
              count="AI/ML, Quantum"
              percentage={{ color: "success", text: "Computing" }}
              icon={{ color: "info", component: <IoGlobe size="22px" color="white" /> }}
            />
          </Grid>
          <Grid item xs={12} md={3} xl={3}>
            <MiniStatisticsCard
              title={{ text: "Current Position" }}
              count="Master Student,"
              percentage={{ color: "error", text: "KyungHee" }}
              icon={{ color: "info", component: <IoDocumentText size="22px" color="white" /> }}
            />
          </Grid>
          <Grid item xs={12} md={3} xl={3}>
            <MiniStatisticsCard
              title={{ text: "Coding Experience" }}
              count="5Y (Fullstack)"
              percentage={{ color: "success", text: "and 2Y(ML)" }}
              icon={{ color: "info", component: <IoLaptop size="20px" color="white" /> }}
            />
          </Grid>
        </Grid>
      </VuiBox>
      <VuiBox mb={3}>
        <Grid container spacing="18px">
          <Grid item xs={12} lg={12} xl={5}>
            <WelcomeMark />
          </Grid>
          <Grid item xs={12} lg={6} xl={4}>
            <ProfileInfoCard
              title="profile information"
              description="Hi, I am Brian, an experienced fullstack senior engineer with a strong background in Artificial Intelligence. Over the years, I have honed my skills in developing and implementing tech solutions. My passion for staying at the forefront of technological advancements has fueled my commitment to pushing the boundaries of possibility in the realm of technology!"
              info={{
                email: "brians.estadimas@gmail.com",
              }}
              social={[
                {
                  link: "https://www.facebook.com/brian.e.a.9/",
                  icon: <FacebookIcon />,
                  color: "facebook",
                },
                {
                  link: "https://www.linkedin.com/in/brianestadimas/",
                  icon: <LinkedInIcon />,
                  color: "twitter",
                },
                {
                  link: "https://www.instagram.com/bstdimas/",
                  icon: <InstagramIcon />,
                  color: "instagram",
                },
                {
                  link: "https://github.com/brianestadimas",
                  icon: <GitHubIcon />,
                  color: "instagram",
                },
              ]}
            />
          </Grid>
          <Grid item xs={12} lg={6} xl={3}>
            <SatisfactionRate />
          </Grid>
        </Grid>
      </VuiBox>
      <VuiBox mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6} xl={8}>
            <Card>
              <VuiBox sx={{ height: "100%" }}>
                <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                  Coding Proficiency
                </VuiTypography>
                <VuiBox display="flex" alignItems="center" mb="10px">
                  <VuiTypography variant="button" color="success" fontWeight="bold">
                    Updated by{" "}
                    <VuiTypography variant="button" color="text" fontWeight="regular">
                      June 2023
                    </VuiTypography>
                  </VuiTypography>
                </VuiBox>
                <VuiBox display="flex" alignItems="center" mb="0px">
                  <Grid container item xs={2} lg={2} xl={2}>
                    <div title="SpringBoots MVC">
                      <VuiAvatar
                        src={spring}
                        alt="name"
                        size="sm"
                        style={{
                          marginLeft: "15px",
                          borderRadius: "12px", // Adjust the border radius as needed
                          padding: "3px", // Adjust the padding as needed
                          background: "white",
                          boxShadow: "0 0 10px rgba(173, 216, 230, 0.5)", // Neon outer line (adjust color and size as needed)
                          boxSizing: "border-box",
                        }}
                      />
                    </div>
                    <div title="Java">
                      <VuiAvatar
                        src={java}
                        alt="name"
                        size="sm"
                        style={{
                          marginLeft: "2px",
                          borderRadius: "12px", // Adjust the border radius as needed
                          padding: "3px", // Adjust the padding as needed
                          background: "white",
                          boxShadow: "0 0 10px rgba(173, 216, 230, 0.5)", // Neon outer line (adjust color and size as needed)
                          boxSizing: "border-box",
                        }}
                      />
                    </div>
                  </Grid>
                  <Grid container item xs={2} lg={2} xl={2}>
                    <div title="Python">
                      <VuiAvatar
                        src={python}
                        alt="name"
                        size="sm"
                        style={{
                          marginLeft: "-40px",
                          borderRadius: "12px", // Adjust the border radius as needed
                          padding: "3px", // Adjust the padding as needed
                          background: "white",
                          boxShadow: "0 0 10px rgba(173, 216, 230, 0.5)", // Neon outer line (adjust color and size as needed)
                          boxSizing: "border-box",
                        }}
                      />
                    </div>
                    <div title="Flask">
                      <VuiAvatar
                        src={flask}
                        alt="name"
                        size="sm"
                        style={{
                          marginLeft: "-6px",
                          borderRadius: "12px", // Adjust the border radius as needed
                          padding: "3px", // Adjust the padding as needed
                          background: "white",
                          boxShadow: "0 0 10px rgba(173, 216, 230, 0.5)", // Neon outer line (adjust color and size as needed)
                          boxSizing: "border-box",
                        }}
                      />
                    </div>
                    <div title="Falcon">
                      <VuiAvatar
                        src={falcon}
                        alt="name"
                        size="sm"
                        style={{
                          marginLeft: "2px",
                          borderRadius: "12px", // Adjust the border radius as needed
                          padding: "3px", // Adjust the padding as needed
                          background: "white",
                          boxShadow: "0 0 10px rgba(173, 216, 230, 0.5)", // Neon outer line (adjust color and size as needed)
                          boxSizing: "border-box",
                        }}
                      />
                    </div>
                  </Grid>
                  <Grid container item xs={1} lg={1} xl={1}>
                    <div title="NextJS">
                      <VuiAvatar
                        src={nextjs}
                        alt="name"
                        size="sm"
                        style={{
                          marginLeft: "-75px",
                          borderRadius: "12px", // Adjust the border radius as needed
                          padding: "3px", // Adjust the padding as needed
                          background: "white",
                          boxShadow: "0 0 10px rgba(173, 216, 230, 0.5)", // Neon outer line (adjust color and size as needed)
                          boxSizing: "border-box",
                        }}
                      />
                    </div>
                    <div title="ReactJS">
                      <VuiAvatar
                        src={react}
                        alt="name"
                        size="sm"
                        style={{
                          marginLeft: "-44px",
                          borderRadius: "12px", // Adjust the border radius as needed
                          padding: "3px", // Adjust the padding as needed
                          background: "white",
                          boxShadow: "0 0 10px rgba(173, 216, 230, 0.5)", // Neon outer line (adjust color and size as needed)
                          boxSizing: "border-box",
                        }}
                      />
                    </div>
                  </Grid>
                  <Grid container item xs={1} lg={1} xl={1}>
                    <div title="Flutter">
                      <VuiAvatar
                        src={flutter}
                        alt="name"
                        size="sm"
                        style={{
                          marginLeft: "-45px",
                          borderRadius: "12px", // Adjust the border radius as needed
                          padding: "3px", // Adjust the padding as needed
                          background: "white",
                          boxShadow: "0 0 10px rgba(173, 216, 230, 0.5)", // Neon outer line (adjust color and size as needed)
                          boxSizing: "border-box",
                        }}
                      />
                    </div>
                  </Grid>
                  <Grid container item xs={1} lg={1} xl={1}>
                    <div title="GitLab">
                      <VuiAvatar
                        src={gitlab}
                        alt="name"
                        size="sm"
                        style={{
                          marginLeft: "-25px",
                          borderRadius: "12px", // Adjust the border radius as needed
                          padding: "3px", // Adjust the padding as needed
                          background: "white",
                          boxShadow: "0 0 10px rgba(173, 216, 230, 0.5)", // Neon outer line (adjust color and size as needed)
                          boxSizing: "border-box",
                        }}
                      />
                    </div>
                    <div title="GitHub">
                      <VuiAvatar
                        src={github}
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
                  </Grid>
                  <Grid container item xs={1} lg={1} xl={1}>
                    <div title="Docker">
                      <VuiAvatar
                        src={docker}
                        alt="name"
                        size="sm"
                        style={{
                          marginLeft: "15px",
                          borderRadius: "12px", // Adjust the border radius as needed
                          padding: "3px", // Adjust the padding as needed
                          background: "white",
                          boxShadow: "0 0 10px rgba(173, 216, 230, 0.5)", // Neon outer line (adjust color and size as needed)
                          boxSizing: "border-box",
                        }}
                      />
                    </div>
                  </Grid>
                  <Grid container item xs={2} lg={2} xl={2}>
                    <div title="Ubuntu">
                      <VuiAvatar
                        src={ubuntu}
                        alt="name"
                        size="sm"
                        style={{
                          marginLeft: "30px",
                          borderRadius: "12px", // Adjust the border radius as needed
                          padding: "3px", // Adjust the padding as needed
                          background: "white",
                          boxShadow: "0 0 10px rgba(173, 216, 230, 0.5)", // Neon outer line (adjust color and size as needed)
                          boxSizing: "border-box",
                        }}
                      />
                    </div>
                    <div title="Windows">
                      <VuiAvatar
                        src={windows}
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
                  </Grid>
                  <Grid container item xs={1} lg={1} xl={1}>
                    <div title="Rest API">
                      <VuiAvatar
                        src={restapi}
                        alt="name"
                        size="sm"
                        style={{
                          marginLeft: "-10px",
                          borderRadius: "12px", // Adjust the border radius as needed
                          padding: "3px", // Adjust the padding as needed
                          background: "white",
                          boxShadow: "0 0 10px rgba(173, 216, 230, 0.5)", // Neon outer line (adjust color and size as needed)
                          boxSizing: "border-box",
                        }}
                      />
                    </div>
                    <div title="Websocket">
                      <VuiAvatar
                        src={websocket}
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
                        title="websocket"
                      />
                    </div>
                  </Grid>
                  <Grid container item xs={1} lg={1} xl={1}>
                    <div title="Tensorflow-Keras">
                      <VuiAvatar
                        src={tensorflow}
                        alt="name"
                        size="sm"
                        style={{
                          marginLeft: "0px",
                          borderRadius: "12px", // Adjust the border radius as needed
                          padding: "3px", // Adjust the padding as needed
                          background: "white",
                          boxShadow: "0 0 10px rgba(173, 216, 230, 0.5)", // Neon outer line (adjust color and size as needed)
                          boxSizing: "border-box",
                        }}
                      />
                    </div>
                    <div title="PyTorch">
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
                  </Grid>
                </VuiBox>
                <VuiBox sx={{ height: "310px" }}>
                  <LineChart
                    lineChartData={lineChartDataDashboard}
                    lineChartOptions={lineChartOptionsDashboard}
                  />
                </VuiBox>
              </VuiBox>
            </Card>
          </Grid>
          <Grid item xs={12} lg={6} xl={4}>
            <Card>
              <VuiBox>
                <VuiBox
                  mb="44px"
                  height="220px"
                  sx={{
                    background: linearGradient(
                      cardContent.main,
                      cardContent.state,
                      cardContent.deg
                    ),
                    borderRadius: "20px",
                  }}
                >
                  <Carousel
                    autoPlay
                    interval="5000"
                    transitionTime="1000"
                    showThumbs={false}
                    infiniteLoop
                  >
                    <div>
                      <img src={certa} alt="" />
                    </div>
                    <div>
                      <img src={certb} alt="" />
                    </div>
                    <div>
                      <img src={certc} alt="" />
                    </div>
                    <div>
                      <img src={certd} alt="" />
                    </div>
                    <div>
                      <img src={certe} alt="" />
                    </div>
                    <div>
                      <img src={certf} alt="" />
                    </div>
                  </Carousel>
                </VuiBox>
                <VuiTypography variant="lg" color="white" fontWeight="bold" mt="25px">
                  Certifications
                </VuiTypography>
                <VuiBox display="flex" alignItems="center" mb="20px">
                  <VuiTypography variant="button" color="success" fontWeight="bold">
                    <VuiTypography variant="button" color="text" fontWeight="regular">
                      updated last week
                    </VuiTypography>
                  </VuiTypography>
                </VuiBox>
                <Grid container spacing="50px">
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
                        <FaShoppingCart color="#fff" size="12px" />
                      </VuiBox>
                      <VuiTypography color="text" variant="button" fontWeight="medium">
                        Value
                      </VuiTypography>
                    </Stack>
                    <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                      ~82K$
                    </VuiTypography>
                    <VuiProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
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
                        <IoLogoGithub color="#fff" size="12px" />
                      </VuiBox>
                      <VuiTypography color="text" variant="button" fontWeight="medium">
                        Repo
                      </VuiTypography>
                    </Stack>
                    <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                      44+
                    </VuiTypography>
                    <VuiProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
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
                        <IoBuild color="#fff" size="12px" />
                      </VuiBox>
                      <VuiTypography color="text" variant="button" fontWeight="medium">
                        Stars
                      </VuiTypography>
                    </Stack>
                    <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                      37+
                    </VuiTypography>
                    <VuiProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
                  </Grid>
                </Grid>
              </VuiBox>
            </Card>
          </Grid>
        </Grid>
      </VuiBox>
      <Grid container spacing={3} mb="30px">
        <Grid item xs={12} xl={3} height="100%">
          <PlatformSettings />
        </Grid>
        <Grid item xs={12} xl={9}>
          <Card>
            <VuiBox display="flex" flexDirection="column" height="100%">
              <VuiBox display="flex" flexDirection="column" mb="24px">
                <VuiTypography color="white" variant="lg" fontWeight="bold" mb="6px">
                  Projects
                </VuiTypography>
                <VuiTypography color="text" variant="button" fontWeight="regular">
                  Highlighted projects
                </VuiTypography>
              </VuiBox>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6} xl={4}>
                  <DefaultProjectCard
                    image={pro2}
                    label="project #1"
                    title="Artificial Intelligence"
                    description="Collection of machine learning models with tensorflow and pytorch"
                    action={{
                      type: "internal",
                      route: "/projects",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                    authors={[
                      { image: team1 },
                      { image: team2 },
                      { image: team3 },
                      { image: team4 },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                  <DefaultProjectCard
                    image={pro1}
                    label="project #2"
                    title="Barging Plan Simulation"
                    description="AI for simulating coal and tug movements, for biggest mining company in Indonesia"
                    action={{
                      type: "internal",
                      route: "/projects",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                    authors={[{ image: team3 }, { image: team4 }, { image: team1 }]}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                  <DefaultProjectCard
                    image={pro3}
                    label="project #3"
                    title="Monitoring Systems"
                    description="Performance monitoring, system health, risk management, and various KPI dashboards."
                    action={{
                      type: "internal",
                      route: "/projects",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                    authors={[
                      { image: team4 },
                      { image: team3 },
                      { image: team2 },
                      { image: team1 },
                    ]}
                  />
                </Grid>
              </Grid>
            </VuiBox>
          </Card>
        </Grid>
      </Grid>

      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
