import "./App.css";
import VsCode from "./pages/VsCode";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VsCode />} />
      </Routes>
    </Router>
  );
}

export default App;
