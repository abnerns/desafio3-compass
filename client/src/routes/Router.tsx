import { Route, Routes } from "react-router-dom"
import Login from "../pages/Login/Login"
import Home from "../pages/Home/Home"

function Router () {
  return (
    <div>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
        </Routes>
    </div>
  )
}

export default Router