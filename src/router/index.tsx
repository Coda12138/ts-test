
import App from "../App";
import Home from "pages/Home"
import Example1 from "pages/Example1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const MyRouter: React.FC = () => (
  <Router>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/example1" element={<Example1 />}></Route>
      </Route>
    </Routes>
  </Router>
);

export default MyRouter;