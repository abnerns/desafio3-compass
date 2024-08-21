import { Calendar, Flag, Send, Users } from "lucide-react"
import NavButton from "../NavButton/NavButton"
import SearchBox from "./SearchBox/SearchBox"
import styles from "./SearchBar.module.css"


const SearchBar = () => {
  return (
    <div className={styles.container}>
        <SearchBox 
        label="Destination"
        icon={<Send />}
        placeholder="Where to go?"
      />
      <SearchBox 
        label="Type"
        icon={<Flag />}
        placeholder="Activity"
      />
      <SearchBox 
        label="When"
        icon={<Calendar />}
        placeholder="Date"
      />
      <SearchBox 
        label="Guests"
        icon={<Users />}
        placeholder="0"
      />
      <NavButton
        value="Search"
      />
    </div>
  )
}

export default SearchBar