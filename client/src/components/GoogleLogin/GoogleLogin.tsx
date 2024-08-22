import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../../firebase/firebase";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";
import { FcGoogle } from "react-icons/fc";

function GoogleLogin() {
  function googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      console.log(result);
      const user = result.user;
      if (result.user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: user.displayName,
          photo: user.photoURL,
          lastName: "",
        });
        toast.success("User logged in Successfully", {
          position: "top-center",
        });
        window.location.href = "/";
      }
    });
  }
  return (
    <div>
      <p className="continue-p">--Or continue with--</p>
      <div style={{}} onClick={googleLogin}>
        <FcGoogle />
      </div>
    </div>
  );
}
export default GoogleLogin;