import styles from "./SearchBox.module.css"
import { SearchBoxProps } from "./types"

const SearchBox = (props: SearchBoxProps) => {
  return (
    <div className={styles.container}>
        <label className={styles.label}>{props.label}</label>
        <div className={styles.field}>
            <span className={styles.icon}>{props.icon}</span>
            {props.placeholder}
        </div>
    </div>
  )
}

export default SearchBox