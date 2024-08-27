import styles from "./BookTour.module.css"
import { Container, Form } from "react-bootstrap"
import { CiCalendar } from "react-icons/ci"
import { FaAngleDown, FaMinus, FaPlus } from "react-icons/fa"
const BookTour = () => {
  return (
    <div className={styles.container}>
        <span style={{display: 'flex', alignItems: 'flex-end', gap: '0.5rem' }}><p style={{fontSize: '32px', fontWeight: 'bold', marginBottom: '0.5rem'}}>$104</p><p>/ per person</p></span>
        <span style={{height: '1px', background: 'black', width: '100%', opacity: '0.2'}}></span>
        <Container className={styles.box}>
                <p className={styles.subtitle}>Date</p>
                <Form className="d-flex align-items-center">
                    <div className={styles.input}>
                      <input type="type" placeholder="Choose date" style={{backgroundColor: '#F7F8FA'}}></input>
                      <CiCalendar size={24} />
                    </div>
                </Form>
        </Container>
        <Container className={styles.box}>
                <p className={styles.subtitle}>Time</p>
                <Form className="d-flex align-items-center">
                    <div className={styles.input}>
                      <input type="type" placeholder="Select" style={{backgroundColor: '#F7F8FA'}}></input>
                      <FaAngleDown size={24} />
                    </div>
                </Form>
        </Container>
        <Container>
        <div>
            <p className={styles.subtitle}>Ticket</p>
        </div>
            <Form className={styles.ticketForm}>
                <p>Adults (18+ years)</p>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <button value="minus" className={styles.ticketCheck}><FaMinus /></button>
                    <div className={styles.ticketCheck} style={{fontWeight: '600'}}>0</div>
                    <button value="plus" className={styles.ticketCheck}><FaPlus /></button>
                </div>
            </Form>
            <Form className={styles.ticketForm}>
                <p>Kids (12+ years)</p>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <button value="minus" className={styles.ticketCheck}><FaMinus /></button>
                    <div className={styles.ticketCheck} style={{fontWeight: '600'}}>0</div>
                    <button value="plus" className={styles.ticketCheck}><FaPlus /></button>
                </div>
            </Form>
            <Form className={styles.ticketForm}>
                <p>Children (3+ years)</p>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <button value="minus" className={styles.ticketCheck}><FaMinus /></button>
                    <div className={styles.ticketCheck} style={{fontWeight: '600'}}>0</div>
                    <button value="plus" className={styles.ticketCheck}><FaPlus /></button>
                </div>
            </Form>
        </Container>
        <span style={{height: '1px', background: 'black', width: '100%', opacity: '0.2'}}></span>
        <div>
            <span style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}><p style={{opacity: '0.7'}}>Total</p><p style={{color: '#FC5056', fontSize: '24px', fontWeight: 'bold'}}>$104</p></span>
        </div>
        <button className={styles.button}>Book now</button>
    </div>
  )
}

export default BookTour