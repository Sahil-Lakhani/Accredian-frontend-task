import {
  BrowserRouter as Router,
  Route,
  Routes as ReactRoutes,
} from "react-router-dom";
import Login from "./components/Login"
import Signup from "./components/SignupForm";

const Routes = () => {
  return (
    <Router>
      <ReactRoutes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </ReactRoutes>
    </Router>
  );
};

export default Routes;
