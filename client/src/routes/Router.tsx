import { Route, Routes } from "react-router-dom"
import Login from "../pages/Login/Login"
import Home from "../pages/Home/Home"
import TourPackage from "../pages/TourPackage/TourPackage"
import { onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"
import ProtectedRoute from "./ProtectedRoute"
import { auth } from "../firebase/firebase"

function Router () {
    const [user, setUser] = useState(null);
    const [isFetching, setIsFetching] = useState(true);
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setIsFetching(false);
                return;
            }

            setUser(null);
            setIsFetching(false);
        })
        return () => unsubscribe();
    }, [])

    if (isFetching) {
        return <h2>Loading...</h2>
    }
  return (
    <div>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home user={user} />} />
            <Route path="/tours" element={
                <ProtectedRoute user={user}>
                    <TourPackage />
                </ProtectedRoute>
            } />
        </Routes>
    </div>
  )
}

export default Router