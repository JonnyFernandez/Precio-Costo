import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PriceCalculator, GainCalculator, Nav } from "./views";


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<PriceCalculator />} />
        <Route path="/presupuestoB" element={<GainCalculator />} />
      </Routes>
    </Router>
  );
}

export default App;
