import styles from './Navbar.module.css';
import { BsHouse } from 'react-icons/bs';
import { RiMedalFill } from 'react-icons/ri';
import { CgLogOut } from 'react-icons/cg';

import { useRouter } from 'next/router';

export function Navbar() {
  const router = useRouter();

  const handleClickLogout = (e) => {
    e.preventDefault();
    router.push('/');
  };

  const handleClickHome = (e) => {
    e.preventDefault();
    router.push('/pomodoro');
  };

  const handleClickLeader = (e) => {
    e.preventDefault();
    router.push('/leaderbord');
  };
  return (
    <div className={styles.navbarContainer}>
      <img src="/icons/Logo-blue.svg" alt="" />
      <div className={styles.menuIcons}>
        <div className={styles.houseDiv}>
          <a onClick={handleClickHome}>
            <BsHouse size="40" />
          </a>
        </div>
        <div className={styles.medalDiv}>
          <a onClick={handleClickLeader}>
            <RiMedalFill size="40" />
          </a>
        </div>
      </div>
      <a className={styles.logout} onClick={handleClickLogout}>
        <CgLogOut size="40" />
      </a>
    </div>
  );
}
