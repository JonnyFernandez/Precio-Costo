import { Routes, Route } from "react-router-dom"
import { PriceCalculator, Nav, Butget } from "./views"

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<h1>inicio</h1>} />
        <Route path="/price-cal" element={<PriceCalculator />} />
        <Route path="/butget" element={<Butget />} />
      </Routes>
    </>
  )
}

export default App
