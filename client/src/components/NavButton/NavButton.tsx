import styles from "./NavButton.module.css"
import { NavButtonProps } from "./types"

const NavButton = (props: NavButtonProps) => {
  return (
    <div className={styles.button}>
        {props.value}
    </div>
  )
}

export default NavButton