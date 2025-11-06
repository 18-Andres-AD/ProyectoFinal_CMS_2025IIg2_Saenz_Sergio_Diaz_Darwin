

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loguin from "./Pages/Loguin/Loguin";
import './index.css'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loguin />} />
        {/* <Route path="/inicio" element={<Inicio />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
