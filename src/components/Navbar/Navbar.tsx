import styles from './Navbar.module.css';
import { BsHouse } from 'react-icons/bs';
import { RiMedalFill } from 'react-icons/ri';
import { CgLogOut } from 'react-icons/cg';

import { useRouter } from 'next/router';

export function Navbar() {
  const router = useRouter();

  const handleLogout = (e) => {
    e.preventDefault();
    router.push('/');
  };
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
      <a onClick={handleLogout}>
        <CgLogOut className={styles.logout} size="40" />
      </a>
    </div>
  );
}
