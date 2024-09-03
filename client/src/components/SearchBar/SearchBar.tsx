import { Calendar, Flag, Send, Users } from "lucide-react"
import SearchBox from "./SearchBox/SearchBox"
import styles from "./SearchBar.module.css"
import { useEffect, useState } from "react"
import { SearchBarProps } from "./types"


const SearchBar = ({initialDestination = "", initialType = "", initialDate = "", initialPeople = 0, onDestinationNameChange, onTypeChange, onDateChange, onPeopleChange, onSearchSubmit}: SearchBarProps) => {
  const [localDestinationName, setLocalDestinationName] = useState<string>(initialDestination);
  const [searchType, setSearchType] = useState<string>(initialType);
  const [dateStart, setDateStart] = useState<string>(initialDate);
  const [maxPeople, setMaxPeople] = useState<number | null>(initialPeople);

  useEffect(() => {
    if (initialDestination || initialType || initialDate || initialPeople !== 0 ? initialPeople : null) {
      setLocalDestinationName("");
      setSearchType("");
      setDateStart("");
      setMaxPeople(null);
    }
  }, [initialDestination, initialType, initialDate, initialPeople]);

  const destinationInput= (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalDestinationName(event.target.value);
  };

  const handleDestination = () => {
    onDestinationNameChange(localDestinationName);
  };

  const typeInput= (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchType(event.target.value);
  };

  const handleType = () => {
    onTypeChange(searchType);
  };

  const dateInput= (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateStart(event.target.value);
  };

  const handleDate = () => {
    onDateChange(dateStart);
  };

  const peopleInput= (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPeople(Number(event.target.value));
  };

  const handlePeople = () => {
    if (maxPeople !== null) {
      onPeopleChange(maxPeople);
    }
  };

  const handleSubmit = () => {
    handleDestination();
    handleType();
    handleDate();
    handlePeople();
    onSearchSubmit(localDestinationName, searchType, dateStart, maxPeople);
  }

  return (
    <div className={styles.container}>
      <SearchBox 
        label="Destination"
        placeholder="Where to go?"
        icon={<Send size={18} />}
        value={localDestinationName} 
        onChange={destinationInput}
      />
      <SearchBox 
        label="Type"
        icon={<Flag size={18} />}
        placeholder="Activity"
        value={searchType}
        onChange={typeInput}
      />
      <SearchBox 
        label="When"
        icon={<Calendar size={18} />}
        placeholder="Date"
        value={dateStart}
        onChange={dateInput}
      />
      <SearchBox 
        label="Guests"
        icon={<Users size={18} />}
        placeholder="0"
        value={maxPeople !== null ? maxPeople.toString() : ""}
        onChange={peopleInput}
      />
      <button className={styles.btn} onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default SearchBar