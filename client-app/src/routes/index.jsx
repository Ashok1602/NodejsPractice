
import App from "../App";
import Tutorials from "../Components/index";
import AddTutorial from "../Components/AddTutorial";

var indexRoutes = [
  { path: "/", component: App },
  { path: "/tutorial", component: Tutorials },
  { path: "/add", component: AddTutorial },
];

export default indexRoutes;
