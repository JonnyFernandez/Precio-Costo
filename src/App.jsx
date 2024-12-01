import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PriceCalculator, GainCalculator } from "./views";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PriceCalculator />} />
        <Route path="/presupuestoB" element={<GainCalculator />} />
      </Routes>
    </Router>
  );
}

export default App;
