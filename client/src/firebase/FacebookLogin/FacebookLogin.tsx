import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { auth, db } from "../../firebase/firebase";
import { setDoc, doc } from "firebase/firestore";
import { FaFacebook } from "react-icons/fa";
import { toast } from "react-toastify";

const fbAuthProvider = new FacebookAuthProvider();

export const FacebookAuth = async () => {
    const fbAuth = await signInWithPopup(auth, fbAuthProvider);
    return fbAuth;
}

const FacebookLogin = () => {
    async function facebookLogin() {
        try {
            const result = await FacebookAuth();
            console.log(result);
            const user = result.user;
            if (user) {
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
        } catch (error) {
            console.error("Error during Facebook login:", error);
            toast.error("Failed to log in with Facebook", {
                position: "top-center",
            });
        }
    }

    return (
        <div style={{cursor: 'pointer'}} onClick={facebookLogin}>
            <FaFacebook size={30} />
        </div>
    );
}

export default FacebookLogin;
