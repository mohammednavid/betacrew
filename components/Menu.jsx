import styles from '../styles/Menu.module.css'
const Menu = ({menu, setMenu}) => {
    return (
        <div className={styles.menu}>
            <a className={styles.menuIcon} onClick={()=> setMenu(false)}>X</a>
            <h1>Menu Component</h1>
        </div>
    )
}

export default Menu
