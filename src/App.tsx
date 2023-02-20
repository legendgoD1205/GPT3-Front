import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Sign from "./pages/Sign";
import Welcome from "./pages/Welcome";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sign" element={<Sign />} />
          <Route path="/Welcome" element={<Welcome />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
