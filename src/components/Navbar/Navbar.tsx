import styles from './Navbar.module.css';
import { BsHouse } from 'react-icons/bs';
import { RiMedalFill } from 'react-icons/ri';
import { CgLogOut } from 'react-icons/cg';

import { useRouter } from 'next/router';

import { signOut, useSession } from 'next-auth/client';

export function Navbar() {
  const router = useRouter();

  async function handleClickLogout(e) {
    signOut();
    e.preventDefault();
    await router.push('/');
  }

  const handleClickHome = (e) => {
    e.preventDefault();
    router.push('/pomodoro');
  };

  const handleClickLeader = (e) => {
    e.preventDefault();
    router.push('/leaderboard');
  };
  return (
    <div className={styles.navbarContainer}>
      <img src="/icons/Logo-blue.svg" alt="" />
      <div className={styles.menuIcons}>
        <div onClick={handleClickHome} className={styles.houseDiv}>
          <BsHouse size="40" />
        </div>
        <div onClick={handleClickLeader} className={styles.medalDiv}>
          <RiMedalFill size="40" />
        </div>
      </div>
      <a className={styles.logout} onClick={handleClickLogout}>
        <CgLogOut size="40" />
      </a>
    </div>
  );
}
