import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import TourPackage from "../pages/TourPackage/TourPackage";
import Register from "../pages/Register/Register";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { User } from "firebase/auth";
import { ProtectedRoute } from "./ProtectedRoute";
import TourDetails from "../pages/TourDetails/TourDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

function Router() {
  const [user, setUser] = useState<User | null>(null);
  const [fetch, setFetch] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setFetch(false);
        return;
      }

      setUser(null);
      setFetch(false);
    });

    return () => unsubscribe();
  }, []);

  if (fetch) {
    return null;
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login user={user} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route
          path="/tours"
          element={
            <ProtectedRoute user={user}>
              <TourPackage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tour-details/:id"
          element={
            <ProtectedRoute user={user}>
              <TourDetails />
            </ProtectedRoute>
          }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default Router;
