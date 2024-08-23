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
      <div style={{cursor: 'pointer'}} onClick={googleLogin}>
        <FcGoogle size={30} />
      </div>
    </div>
  );
}
export default GoogleLogin;