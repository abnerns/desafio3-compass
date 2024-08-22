import { signInWithEmailAndPassword, User } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase/firebase";
import { toast } from "react-toastify";
import GoogleLogin from "../../components/GoogleLogin/GoogleLogin";
import { Navigate } from "react-router-dom";
import FacebookLogin from "../../components/FacebookLogin/FacebookLogin";

function Login({ user }: { user: User | null }) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "/";
      toast.success("User logged in Successfully", {
        position: "top-center",
      });
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        toast.error(error.message, {
          position: "bottom-center",
        });
      } else {
        toast.error("An unexpected error occurred", {
          position: "bottom-center",
        });
      }
    }
  };

  if(user){
    return <Navigate to ="/"></Navigate>
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Login</h3>

      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      <p className="forgot-password text-right">
        New user <a href="/register">Register Here</a>
      </p>
      <GoogleLogin />
      <FacebookLogin />
    </form>
  );
}

export default Login;
