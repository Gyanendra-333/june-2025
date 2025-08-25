import { Routes, Route } from "react-router-dom";
import UserNavbar from "./pages/User Panel/UserNavbar";
import Home from "./pages/User Panel/Home";
import ElectronicsProducts from "./pages/User Panel/home/ElectronicsProducts";
import BeautyFoodMoreProducts from "./pages/User Panel/home/BeautyFoodMoreProducts";
import SportsAndHealthcareProducts from "./pages/User Panel/home/SportsAndHealthcareProducts";
import UserFooter from "./pages/User Panel/UserFooter";
import PageNotFound from "./components/PageNotFound";


function App() {
  return (
    <>
      <UserNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/best-in-electronics/:slug" element={<ElectronicsProducts />} />
        <Route path="/beauty-food-more-products" element={<BeautyFoodMoreProducts />} />
        <Route path="/sports-healthcare-products/:id" element={<SportsAndHealthcareProducts />} />
        <Route path="/page-not-found" element={<PageNotFound />} />
      </Routes>
      <UserFooter />
    </>
  );
}

export default App;
