import styles from "./Header.module.css"
import rocketLogo from "../assets/rocket.svg"

export const Header = () => {
    return (<header className={styles.header}><img src={rocketLogo} alt="logotipo da rocket to-do"/><strong>to<span>do</span></strong></header>)
}