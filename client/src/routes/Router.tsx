import { Route, Routes } from "react-router-dom"
import Login from "../pages/Login/Login"
import Home from "../pages/Home/Home"
import TourPackage from "../pages/TourPackage/TourPackage"
import Register from "../pages/Register/Register"
import { ToastContainer } from "react-toastify"
import { useEffect, useState } from "react"
import { auth } from "../firebase/firebase"
import { User } from "firebase/auth";
import { ProtectedRoute } from "./ProtectedRoute"

function Router () {
    const [user, setUser] = useState<User|null>(null);
    const [fetch, setFetch] = useState(true);
    
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
        if(user){
            setUser(user);
            setFetch(false);
            return;
        }

        setUser(null);
        setFetch(false);
    });

    return () => unsubscribe();
}, []);

    if(fetch){
        return <h2>Loading...</h2>;
    }

    return(
    <div>
        <Routes>
            <Route path="/" element={user ? <Home /> : <Login user={user} />} />
            <Route path="/login" element={<Login user={user} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/tours" element={
                <ProtectedRoute user={user}>
                    <TourPackage />
                </ProtectedRoute>
            } />
        </Routes>
        <ToastContainer />
    </div>
    )
}

export default Router