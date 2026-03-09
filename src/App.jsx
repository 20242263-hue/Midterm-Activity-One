import { Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation.jsx";
import Home from "./pages/Home.jsx";
import Students from "./Pages/Students.jsx";
import About from "./Pages/About.jsx";


function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/about" element={<About />} />
        <Route path="/students/:id" element={<StudentDetails />} />
      </Routes>
    </div>
  );
}

export default App;