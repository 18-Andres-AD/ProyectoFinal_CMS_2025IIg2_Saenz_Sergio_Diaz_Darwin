import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";

export  function App() {
  return (    
    <Routes>
      <Navbar />
      {/* <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </div> */}
    </Routes>
);
}
export default App;