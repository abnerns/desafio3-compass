import { Route, Routes } from "react-router-dom"
import Login from "../pages/Login/Login"
import Home from "../pages/Home/Home"
import TourPackage from "../pages/TourPackage/TourPackage"
import Register from "../pages/Register/Register"
import { ToastContainer } from "react-toastify"
import { useEffect, useState } from "react"
import { auth } from "../firebase/firebase"
import { User } from "firebase/auth";

function Router () {
    const [user, setUser] = useState<User|null>(null);
    
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
}, []);

    return(
    <div>
        <Routes>
            <Route path="/" element={user ? <Home /> : <Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/tours" element={<TourPackage />} />
        </Routes>
        <ToastContainer />
    </div>
    )
}

export default Router