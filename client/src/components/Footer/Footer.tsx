import { Facebook, Linkedin, Plane, Send, Twitter } from "lucide-react"
import styles from "./Footer.module.css"
import NavButton from "../NavButton/NavButton"
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormValues {
    email: string;
}

const Footer = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm<FormValues>();
      const onSubmit: SubmitHandler<FormValues> = (values) => alert(JSON.stringify(values, null, 2));

  return (
    <div className={styles.footer}>
        <div className={styles.box1}>
            <div className={styles.logo}>
                <Plane />
                <p>Trisog</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                <p className={styles.cursive}>Need any help?</p>
                <div className={styles.call}>
                    <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Call Us:</p>
                    <p style={{ fontSize: '20px', fontWeight: 'bold', color: 'rgb(231, 75, 75)'}}>(888)1234 5678</p>
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                <p>Love Street, muscat, Oman</p>
                <p>exaample@trisog.com</p>
            </div>
            <div className={styles.social}>
                <a href="https://www.facebook.com/?locale=pt_BR"><Facebook fill="white" /></a>
                <a href="https://x.com/"><Twitter fill="white"/></a>
                <a href="https://www.linkedin.com/"><Linkedin fill="white"/></a>
            </div>
        </div>
        <span className={styles.line}/>
        <div className={styles.box2}>
                <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                    <p className={styles.cursive}>Company</p>
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>Travel Guides</p>
                    <p>Data Policy</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                    <p className={styles.cursive}>Top Destination</p>
                    <p>Las Vegas</p>
                    <p>New York City</p>
                    <p>San Francisco</p>
                    <p>Hawaii</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                    <p>Tokyo</p>
                    <p>Sidney</p>
                    <p>Melbourne</p>
                    <p>Dubai</p>
                </div>
            </div>
            <span className={styles.line}/>
        <div className={styles.box3}>
            <div style={{display: 'flex', gap:'1rem', flexFlow: 'column'}}>
                <p className={styles.cursive}>Sign up Newsletter</p>
                <div className={styles.form}>
                <form onSubmit={handleSubmit(onSubmit)} className={`${styles.inputField} ${errors.email ? styles.error : ''}`}>
                    <div className={styles.inputWrapper}>
                    <Send color="black" opacity={0.6} size={18} />
                    <input type="text"
                        id="email"
                        placeholder="Enter email..."
                        {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
                    />
                    </div>
                    <div style={{display: 'flex', gap: '0.5rem'}}>
                        <button type="submit"><NavButton value="Submit" /></button>
                        {errors.email && <span style={{color: 'red'}}>Invalid email</span>}
                    </div>
                </form>
                </div>
            </div>
            <p style={{fontSize: '18px'}}>© 2023 Trisog All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer