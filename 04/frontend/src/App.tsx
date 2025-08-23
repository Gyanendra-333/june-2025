import { Routes, Route } from "react-router-dom";
import UserNavbar from "./pages/User Panel/UserNavbar";
import Home from "./pages/User Panel/Home";
import ElectronicsProducts from "./pages/User Panel/home/ElectronicsProducts";
import BeautyFoodMoreProducts from "./pages/User Panel/home/BeautyFoodMoreProducts";

function App() {
  return (
    <div>
      <UserNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/best-in-electronics/:slug" element={<ElectronicsProducts />} />
        <Route path="/beauty-food-more-products/:slug" element={<BeautyFoodMoreProducts />} />
      </Routes>
    </div>
  );
}

export default App;
