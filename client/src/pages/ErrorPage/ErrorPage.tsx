import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"

const ErrorPage = () => {
  return (
    <div>
        <Header />
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img src="https://3challenge-compass.s3.us-east-2.amazonaws.com/gif-ezgif.com-webp-to-gif-converter.gif" alt="error page!" style={{padding: '3rem', width: '80%'}}  />
        </div> 
        <Footer />
    </div>
  )
}

export default ErrorPage