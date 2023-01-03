import "./style/index.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Thank from "./pages/Thank";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="thank" element={<Thank />} />
      </Routes>
    </Router>
  );
}

export default App;
