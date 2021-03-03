import styles from './Navbar.module.css';
import { BsHouse } from 'react-icons/bs';
import { RiMedalFill } from 'react-icons/ri';

export function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <img src="/icons/Logo-blue.svg" alt="" />
      <div className={styles.menuIcons}>
        <div className={styles.houseDiv}>
          <BsHouse size="40" />
        </div>
        <div className={styles.medalDiv}>
          <RiMedalFill size="40" />
        </div>
      </div>
    </div>
  );
}
