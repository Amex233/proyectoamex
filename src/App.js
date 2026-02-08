import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Scrum from "./pages/Scrum";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scrum" element={<Scrum />} />
      </Routes>
    </Router>
  );
}

export default App;

