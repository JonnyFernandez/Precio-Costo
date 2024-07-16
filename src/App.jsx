import { Routes, Route } from "react-router-dom"
import { PriceCalculator, Nav, Butget } from "./views"

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<h1>Inicio</h1>} />
        <Route path="/price-cal" element={<PriceCalculator />} />
        <Route path="/price-margin" element={<h1>Precio por margen</h1>} />
        <Route path="/butgetA" element={<h1>Presupuesto A</h1>} />
        <Route path="/butgetB" element={<h1>Presupuesto B</h1>} />
      </Routes>
    </>
  )
}

export default App
