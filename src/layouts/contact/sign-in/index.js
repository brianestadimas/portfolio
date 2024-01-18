

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiInput from "components/VuiInput";
import VuiButton from "components/VuiButton";
import VuiSwitch from "components/VuiSwitch";
import GradientBorder from "examples/GradientBorder";

// Vision UI Dashboard assets
import radialGradient from "assets/theme/functions/radialGradient";
import palette from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";

// Authentication layout components
import CoverLayout from "layouts/contact/components/CoverLayout";

// Images
import bgSignIn from "assets/images/signInImage.png";

function Contact() {
  const [rememberMe, setRememberMe] = useState(true);
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const handleSendEmail = () => {
    const mailtoLink = `mailto:brians.estadimas@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`My name is ${name}\n\n${message}`)}`;

    // Open the default email client
    window.location.href = mailtoLink;
  };

  return (
    <CoverLayout
      title="Nice to see you!"
      color="white"
      description="Let us keep in Touch, feel free to contact me."
      premotto="INSPIRED BY THE FUTURE"
      motto="It's not faith in technology,"
      motto2="It is faith in people."
      motto3="- Steve Jobs"
      image={bgSignIn}
    >
      <VuiBox component="form" role="form" ml={-10}>
        <VuiBox mb={2}>
          <VuiBox mb={1} ml={0.5}>
            <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
              Name
            </VuiTypography>
          </VuiBox>
          <GradientBorder
            minWidth="130%"
            padding="1px"
            borderRadius={borders.borderRadius.lg}
            backgroundImage={radialGradient(
              palette.gradients.borderLight.main,
              palette.gradients.borderLight.state,
              palette.gradients.borderLight.angle
            )}
          >
            <VuiInput type="text" placeholder="Your name..." fontWeight="500" 
            onChange={(e) => setName(e.target.value)}/>
          </GradientBorder>
        </VuiBox>
        <VuiBox mb={2}>
          <VuiBox mb={1} ml={0.5}>
            <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
              Subject
            </VuiTypography>
          </VuiBox>
          <GradientBorder
            minWidth="130%"
            borderRadius={borders.borderRadius.lg}
            padding="1px"
            backgroundImage={radialGradient(
              palette.gradients.borderLight.main,
              palette.gradients.borderLight.state,
              palette.gradients.borderLight.angle
            )}
          >
            <VuiInput
              type="text"
              placeholder="Your subject..."
              fontWeight="500"
              onChange={(e) => setSubject(e.target.value)}
            />
          </GradientBorder>
        </VuiBox>
        <VuiBox mb={2}>
          <VuiBox mb={1} ml={0.5}>
            <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
              Message
            </VuiTypography>
          </VuiBox>
          <GradientBorder
            minWidth="130%"
            borderRadius={borders.borderRadius.lg}
            padding="1px"
            backgroundImage={radialGradient(
              palette.gradients.borderLight.main,
              palette.gradients.borderLight.state,
              palette.gradients.borderLight.angle
            )}
          >
            <VuiInput
              type="text"
              placeholder="Your message..."
              fontWeight="500"
              onChange={(e) => setMessage(e.target.value)}
            />
          </GradientBorder>
        </VuiBox>
        
        <VuiBox display="flex" alignItems="center">
          <VuiSwitch color="info" checked={rememberMe} onChange={handleSetRememberMe} />
          <VuiTypography
            variant="caption"
            color="white"
            fontWeight="medium"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;Remember me
          </VuiTypography>
        </VuiBox>
        <VuiBox mt={4} mb={1} ml={10}>
          <VuiButton color="info" fullWidth onClick={handleSendEmail} >
            SEND EMAIL
          </VuiButton>
        </VuiBox>
      </VuiBox>
    </CoverLayout>
  );
}

export default Contact;
