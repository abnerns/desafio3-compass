import { useEffect, useState } from "react";
import { auth, db } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { UserInfo } from "../../types/User";
import styles from "./Header.module.css";
import { Container, Nav, Navbar, Form } from "react-bootstrap";
import { Search, User } from "lucide-react";
import { useLocation } from "react-router-dom";
import { FaGoogle, FaLinkedin, FaPinterest, FaTwitter } from "react-icons/fa";

const Header = ({ onSearchChange }: {onSearchChange: (name: string) => void}) => {
  const [userDetails, setUserDetails] = useState<UserInfo | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState<string>('');
  const [searchTrigger, setSearchTrigger] = useState(false);
  const location = useLocation();

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log(user);

        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data() as UserInfo);
          console.log(docSnap.data());
        } else {
          console.log("Documento de usuário não encontrado");
        }
      } else {
        console.log("User is not logged in");
        setUserDetails(null);
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error logging out:", error.message);
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  const getFirstName = (fullName: string) => {
    const firstName = fullName.split(" ")[0];
    return firstName;
  };

  const handleForm = () => {
    setShowForm((prevShowSearchForm) => !prevShowSearchForm); 
  };

  const searchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSearch = () => {
    onSearchChange(search);
    setSearchTrigger(true);
  }

  useEffect(() => {
    if (searchTrigger) {
      setSearch('');
      setSearchTrigger(false);
    }
  }, [searchTrigger]);

  return (
    <div>
        <div className={styles.upperLine}>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem'}}>
                <p>(000)999-898-999</p><p>|</p><p>info@trisog.com</p>
            </div>
            <div className={styles.social}>
                <FaTwitter />
                <FaLinkedin />
                <FaGoogle />
                <FaPinterest />
                <p>|</p><p>EUR</p>
            </div>
        </div>
        <Navbar expand="lg" className="bg-body-tertiary p-4" style={{ fontFamily: "Work Sans" }}>
        <Container style={{ display: "flex", gap: "2rem" }}>
            <div className={styles.logo}>
              <a href="/"><img src="https://3challenge-compass.s3.us-east-2.amazonaws.com/logo-black.png" alt="logo" style={{width: '110px'}} /></a>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={"me-auto"} style={{ display: "flex", gap: "0.5rem" }}>
                <Nav.Link href="/" className={styles.navLink} style={location.pathname === "/" ? { color: "#EB565A" } : {}}>
                Home
                </Nav.Link>
                <Nav.Link href="/error" className={styles.navLink} style={location.pathname === "/error" ? { color: "#EB565A" } : {}}>
                About
                </Nav.Link>
                <Nav.Link href="/tours" className={styles.navLink} style={location.pathname === "/tours" ? { color: "#EB565A" } : {}}>
                Tours
                </Nav.Link>
                <Nav.Link href="/error" className={styles.navLink} style={location.pathname === "/error" ? { color: "#EB565A" } : {}}>
                Destination
                </Nav.Link>
                <Nav.Link href="/error" className={styles.navLink} style={location.pathname === "/error" ? { color: "#EB565A" } : {}}>
                Blog
                </Nav.Link>
                <Nav.Link href="/error" className={styles.navLink} style={location.pathname === "/error" ? { color: "#EB565A" } : {}}>
                Pages
                </Nav.Link>
                <Nav.Link href="/error" className={styles.navLink} style={location.pathname === "/error" ? { color: "#EB565A" } : {}}>
                Contact
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        <div className={styles.userNav}>
            {showForm && (
            <Form className={"d-flex"}>
                <Form.Control type="search" onChange={searchInput} placeholder="Search" value={search} className="me-2" style={{borderColor: 'white', outline: 'none', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}} />
            </Form>
            )}
            <button onClick={handleSearch} style={{display: 'flex', alignSelf: 'center'}}><Search size={22} onClick={handleForm} className={styles.cursor} /></button>
            {userDetails ? (
            <div className={styles.userOn}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.75rem", color: "#EB565A", fontWeight: "bold" }}>
                  <img src={userDetails.photo} width={"20%"} style={{ borderRadius: "50%" }} />
                  <p>{getFirstName(userDetails.firstName)}</p>
                </div>
                <button className={styles.button} onClick={handleLogout}>Logout</button>
            </div>
            ) : (
            <div className={styles.userOff}>
                <User />
                <a href="/login">
                <button className={styles.button}>Login / Signup</button>
                </a>
            </div>
            )}
        </div>
        </Navbar>
    </div>
  );
};

export default Header;
