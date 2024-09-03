import { Calendar, Flag, Send, Users } from "lucide-react"
import SearchBox from "./SearchBox/SearchBox"
import styles from "./SearchBar.module.css"
import { useState } from "react"


const SearchBar = ({onDestinationNameChange, onTypeChange}: {onDestinationNameChange: (name: string) => void, onTypeChange: (name: string) => void}) => {
  const [localDestinationName, setLocalDestinationName] = useState<string>("");
  const [searchType, setSearchType] = useState<string>('');

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

  const handleSubmit = () => {
    handleDestination();
    handleType();
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
      />
      <SearchBox 
        label="Guests"
        icon={<Users size={18} />}
        placeholder="0"
      />
      <button className={styles.btn} onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default SearchBar