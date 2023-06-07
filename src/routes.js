import Dashboard from "views/Dashboard.js";
import Register from "views/Register.js";
import Login from "views/Login.js";
import ProductList from "views/ProductList.js";
import UserList from "views/UserList.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/Register",
    name: "Register",
    icon: "nc-icon nc-layers-3",
    component: Register,
    layout: "/admin",
  },
  {
    path: "/Login",
    name: "Login",
    icon: "nc-icon nc-circle-09",
    component: Login,
    layout: "/admin",
  },

  {
    path: "/Product",
    name: "Product List",
    icon: "nc-icon nc-bullet-list-67",
    component: ProductList,
    layout: "/admin",
  },
  {
    path: "/User_list",
    name: "User List",
    icon: "nc-icon nc-badge",
    component: UserList,
    layout: "/admin",
  },
];

export default dashboardRoutes;
