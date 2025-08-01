import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bikes from "./pages/Bikes";
import BikeDetails from "./pages/BikeDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Bikes />} />
        <Route path="/bike/:id" element={<BikeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
