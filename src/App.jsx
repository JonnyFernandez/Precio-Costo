import { Routes, Route } from "react-router-dom"
import { PriceCalculator, Nav, Butget } from "./views"

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<PriceCalculator />} />
        <Route path="/price-cal" element={<PriceCalculator />} />
        <Route path="/butget" element={<Butget />} />
      </Routes>
    </>
  )
}

export default App
