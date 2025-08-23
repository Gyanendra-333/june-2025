import { Route, Routes } from "react-router-dom"
import CategoryList from "./pages/User Panel/Category/CategoryList"
import Home from "./pages/User Panel/Home"
import UserNavbar from "./pages/User Panel/UserNavbar"


function App() {

  return (
    <Routes>
      <Route path="/" element={<UserNavbar />} />
      <Route path="/" element={<CategoryList />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App
