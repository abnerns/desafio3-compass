import { signOut } from 'firebase/auth'
import { auth } from '../../firebase/firebase'

const Home = () => {
    const handleSignOUt = () => {
        signOut(auth).then(() => console.log("Sign Out")).catch((error) => console.log(error))
    }
  return (
    <div>
        <h1>Oi</h1>
        <button onClick={handleSignOUt}>Sign Out</button>
    </div>
  )
}

export default Home