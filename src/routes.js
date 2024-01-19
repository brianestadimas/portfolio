

/** 
  All of the routes for the Vision UI Dashboard React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Vision UI Dashboard React layouts
import Contact from "layouts/contact/sign-in";
import Projects from "layouts/projects";
import Examples from "layouts/examples";
import Profile from "layouts/profile";

// Vision UI Dashboard React icons
import { IoRocketSharp, IoTabletLandscape, IoTelescope, IoMegaphone, IoNavigate, IoDocument, IoLogoIonitron } from "react-icons/io5";
import { IoIosDocument } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import { IoBuild } from "react-icons/io5";
import { BsCreditCardFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import Resume from "layouts/resume";
import Transformer from "layouts/transformer";

const routes = [

  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon: <BsFillPersonFill size="15px" color="inherit" />,
    component: Profile,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Projects",
    key: "projects",
    route: "/projects",
    icon: <IoTelescope size="15px" color="inherit" />,
    component: Projects,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Resume",
    key: "resume",
    route: "/resume",
    icon: <IoDocument size="15px" color="inherit" />,
    component: Resume,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Contact Me",
    key: "tables",
    route: "/tables",
    icon: <IoNavigate size="15px" color="inherit" />,
    component: Contact,
    noCollapse: true,
  },
  { type: "title", title: "Courses", key: "course-pages" },
  {
    type: "collapse",
    name: "Vision Transformer",
    key: "transformer",
    route: "/transformer",
    icon: <IoLogoIonitron size="15px" color="inherit" />,
    component: Transformer,
    noCollapse: true,
  },
  { type: "title", title: "UI Collections", key: "account-pages" },
  {
    type: "collapse",
    name: "Examples",
    key: "examples",
    route: "/examples",
    icon: <IoStatsChart size="15px" color="inherit" />,
    component: Examples,
    noCollapse: true,
  },
];

export default routes;
