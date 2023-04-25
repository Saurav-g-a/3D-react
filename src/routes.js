/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
// import TableList from "views/TableList.js";
// import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
// import Maps from "views/Maps.js";
// import Notifications from "views/Notifications.js";
// import Upgrade from "views/Upgrade.js";
import Register from "views/Register.js";
import Login from "views/Login.js";
import ProductList from "views/ProductList.js";
import UserList from "views/UserList.js";

const dashboardRoutes = [
  // {
  //   upgrade: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "nc-icon nc-alien-33",
  //   component: Upgrade,
  //   layout: "/admin"
  // },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin"
  },

  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-atom",
  //   component: Icons,
  //   layout: "/admin"
  // },
  
  {
    path: "/Register",
    name: "Register",
    icon: "nc-icon nc-layers-3",
    component: Register,
    layout: "/admin"
  },
  {
    path: "/Login",
    name: "Login",
    icon: "nc-icon nc-circle-09",
    component: Login,
    layout: "/admin"
  },
  {
    path: "/Product",
    name: "Product List",
    icon: "nc-icon nc-bullet-list-67",
    component: ProductList,
    layout: "/admin"
  },
  {
    path: "/User_list",
    name: "User List",
    icon: "nc-icon nc-badge",
    component: UserList,
    layout: "/admin"
  }

];

export default dashboardRoutes;
