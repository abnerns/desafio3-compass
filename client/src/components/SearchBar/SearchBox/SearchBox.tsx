import styles from "./SearchBox.module.css"
import { SearchBoxProps } from "./types"

const SearchBox = (props: SearchBoxProps) => {
  return (
    <div className={styles.container}>
        <label className={styles.label}>{props.label}</label>
        <div className={styles.field}>
          <div className={styles.icon}>{props.icon}</div>
          <input
            placeholder={props.placeholder}
            className={styles.input}
          />     
        </div>
        
            
    </div>
  )
}

export default SearchBox