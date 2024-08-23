import { signInWithEmailAndPassword, User } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase/firebase";
import { toast } from "react-toastify";
import GoogleLogin from "../../firebase/GoogleLogin/GoogleLogin";
import { Navigate } from "react-router-dom";
import FacebookLogin from "../../firebase/FacebookLogin/FacebookLogin";
import styles from "./Login.module.css"

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
    <div className={styles.container}>
      <div className={styles.card}>
        <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', justifyContent: 'center', fontSize: '26px', fontFamily: 'Work Sans', fontWeight: 'bold' }}>Login</div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            required
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
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-danger" style={{marginTop: '1rem' }}>
            Submit
          </button>
        </div>
        <div className={styles.register}>
          <p style={{fontWeight: 'bold', display: 'flex', gap: '0.5rem'}}>
            New user? <a href="/register">Register</a>
          </p>
          <p>--Or continue with--</p>
        </div>
        <div className={styles.altLogin}>
          <GoogleLogin />
          <FacebookLogin />
        </div>
      </form>
      </div>
    </div>
    
  );
}

export default Login;
