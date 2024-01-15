/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// @mui material components
// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
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
import { IoIosRocket } from "react-icons/io";
import { IoGlobe } from "react-icons/io5";
import { IoBuild } from "react-icons/io5";
import { IoWallet } from "react-icons/io5";
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

function Overview() {
  const { gradients } = colors;
  const { cardContent } = gradients;
  return (
    <DashboardLayout>
      <Header />
      <VuiBox mt={3} mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Interest", fontWeight: "regular" }}
                count="Deep Learning"
                percentage={{ color: "success", text: "+Certified" }}
                icon={{ color: "info", component: <IoWallet size="22px" color="white" /> }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Research" }}
                count="AI, Quantum"
                percentage={{ color: "success", text: "Computing" }}
                icon={{ color: "info", component: <IoGlobe size="22px" color="white" /> }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Current Position" }}
                count="Ms-PhD,"
                percentage={{ color: "error", text: "Kyung Hee Univ." }}
                icon={{ color: "info", component: <IoDocumentText size="22px" color="white" /> }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Coding Experience" }}
                count="5Y (Fullstack)"
                percentage={{ color: "success", text: "+2Y (ML)" }}
                icon={{ color: "info", component: <FaShoppingCart size="20px" color="white" /> }}
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
                  link: "https://www.facebook.com/CreativeTim/",
                  icon: <FacebookIcon />,
                  color: "facebook",
                },
                {
                  link: "https://twitter.com/creativetim",
                  icon: <TwitterIcon />,
                  color: "twitter",
                },
                {
                  link: "https://www.instagram.com/creativetimofficial/",
                  icon: <InstagramIcon />,
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
            <Grid item xs={12} lg={6} xl={7}>
              <Card>
                <VuiBox sx={{ height: "100%" }}>
                  <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                    Coding Proficiency
                  </VuiTypography>
                  <VuiBox display="flex" alignItems="center" mb="10px">
                    <VuiTypography variant="button" color="success" fontWeight="bold">
                      Updated by {" "}
                      <VuiTypography variant="button" color="text" fontWeight="regular">
                        June 2023
                      </VuiTypography>
                    </VuiTypography>
                  </VuiBox>
                  <VuiBox display="flex" alignItems="center" mb="0px">
                    <Grid container item xs={2} lg={2} xl={2}>
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
                    </Grid>
                    <Grid container item xs={2} lg={2} xl={2}>
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
                    </Grid>
                    <Grid container item xs={1} lg={1} xl={1}>
                      <VuiAvatar
                        src={nextjs}
                        alt="name"
                        size="sm"
                        style={{
                          marginLeft: "-65px",
                          borderRadius: "12px", // Adjust the border radius as needed
                          padding: "3px", // Adjust the padding as needed
                          background: "white",
                          boxShadow: "0 0 10px rgba(173, 216, 230, 0.5)", // Neon outer line (adjust color and size as needed)
                          boxSizing: "border-box",
                        }}
                      />
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
                    </Grid>
                    <Grid container item xs={1} lg={1} xl={1}>
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
                    </Grid>
                    <Grid container item xs={1} lg={1} xl={1}>
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
                    </Grid>
                     <Grid container item xs={1} lg={1} xl={1}>
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
                    </Grid>
                    <Grid container item xs={2} lg={2} xl={2}>
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
                    </Grid>
                    <Grid container item xs={1} lg={1} xl={1}>
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
                      />
                    </Grid>
                    <Grid container item xs={1} lg={1} xl={1}>
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
            <Grid item xs={12} lg={6} xl={5}>
              <Card>
                <VuiBox>
                  <VuiBox
                    mb="24px"
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
                    <BarChart
                      barChartData={barChartDataDashboard}
                      barChartOptions={barChartOptionsDashboard}
                    />
                  </VuiBox>
                  <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                    Active Users
                  </VuiTypography>
                  <VuiBox display="flex" alignItems="center" mb="40px">
                    <VuiTypography variant="button" color="success" fontWeight="bold">
                      (+23){" "}
                      <VuiTypography variant="button" color="text" fontWeight="regular">
                        than last week
                      </VuiTypography>
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
                          Users
                        </VuiTypography>
                      </Stack>
                      <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        32,984
                      </VuiTypography>
                      <VuiProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
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
                          <IoIosRocket color="#fff" size="12px" />
                        </VuiBox>
                        <VuiTypography color="text" variant="button" fontWeight="medium">
                          Clicks
                        </VuiTypography>
                      </Stack>
                      <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        2,42M
                      </VuiTypography>
                      <VuiProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
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
                          <FaShoppingCart color="#fff" size="12px" />
                        </VuiBox>
                        <VuiTypography color="text" variant="button" fontWeight="medium">
                          Sales
                        </VuiTypography>
                      </Stack>
                      <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        2,400$
                      </VuiTypography>
                      <VuiProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
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
                          <IoBuild color="#fff" size="12px" />
                        </VuiBox>
                        <VuiTypography color="text" variant="button" fontWeight="medium">
                          Items
                        </VuiTypography>
                      </Stack>
                      <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        320
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
                    image={profile1}
                    label="project #2"
                    title="modern"
                    description="As Uber works through a huge amount of internal management turmoil."
                    action={{
                      type: "internal",
                      route: "/pages/profile/profile-overview",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                    authors={[
                      { image: team1, name: "Elena Morison" },
                      { image: team2, name: "Ryan Milly" },
                      { image: team3, name: "Nick Daniel" },
                      { image: team4, name: "Peterson" },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                  <DefaultProjectCard
                    image={profile2}
                    label="project #1"
                    title="scandinavian"
                    description="Music is something that every person has his or her own specific opinion about."
                    action={{
                      type: "internal",
                      route: "/pages/profile/profile-overview",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                    authors={[
                      { image: team3, name: "Nick Daniel" },
                      { image: team4, name: "Peterson" },
                      { image: team1, name: "Elena Morison" },
                      { image: team2, name: "Ryan Milly" },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                  <DefaultProjectCard
                    image={profile3}
                    label="project #3"
                    title="minimalist"
                    description="Different people have different taste, and various types of music."
                    action={{
                      type: "internal",
                      route: "/pages/profile/profile-overview",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                    authors={[
                      { image: team4, name: "Peterson" },
                      { image: team3, name: "Nick Daniel" },
                      { image: team2, name: "Ryan Milly" },
                      { image: team1, name: "Elena Morison" },
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
