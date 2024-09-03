import { Calendar, Flag, Send, Users } from "lucide-react"
import SearchBox from "./SearchBox/SearchBox"
import styles from "./SearchBar.module.css"
import { useState } from "react"


const SearchBar = ({onDestinationNameChange, onTypeChange, onDateChange, onPeopleChange}: {onDestinationNameChange: (name: string) => void, onTypeChange: (name: string) => void, onDateChange: (name: string) => void, onPeopleChange: (maxPeople: number | null) => void}) => {
  const [localDestinationName, setLocalDestinationName] = useState<string>("");
  const [searchType, setSearchType] = useState<string>('');
  const [dateStart, setDateStart] = useState<string>('');
  const [maxPeople, setMaxPeople] = useState<number>(0);

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
    onPeopleChange(maxPeople);
  };

  const handleSubmit = () => {
    handleDestination();
    handleType();
    handleDate();
    handlePeople();
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
        value={maxPeople}
        onChange={peopleInput}
      />
      <button className={styles.btn} onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default SearchBar