import { Routes, Route } from "react-router-dom"
import { PriceCalculator, Nav, Butget, GainCalculator } from "./views"

function App() {

  return (
    <>
      {/* <Nav /> */}
      <Routes>

        <Route path="/" element={<PriceCalculator />} />
        <Route path="/price-margin" element={<GainCalculator />} />
        {/* <Route path="/butgetA" element={<h1>Presupuesto A</h1>} />
        <Route path="/butgetB" element={<h1>Presupuesto B</h1>} /> */}
      </Routes>
    </>
  )
}

export default App
