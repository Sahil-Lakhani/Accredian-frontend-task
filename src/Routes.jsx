import {
  BrowserRouter as Router,
  Route,
  Routes as ReactRoutes,
} from "react-router-dom";
import Login from "./components/Login"
import Signup from "./components/SignupForm"; // 
import HomePage from "./components/HomePage";

const Routes = () => {
  return (
    <Router>
      <ReactRoutes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<HomePage />} />
      </ReactRoutes>
    </Router>
  );
};

export default Routes;
