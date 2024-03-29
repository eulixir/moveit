import { FaSpotify, FaQuestion, FaWrench } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import { RiMedalFill } from 'react-icons/ri';
import { signOut } from 'next-auth/client';
import { CgLogOut } from 'react-icons/cg';
import styles from './Navbar.module.scss';
import { BsHouse } from 'react-icons/bs';
import { useRouter } from 'next/router';

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

  const handleClickProfile = (e) => {
    e.preventDefault();
    router.push('/profile');
  };

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarLogoContainer}>
        <img src="/icons/Logo-blue.svg" alt="" />
      </div>
      <div className={styles.menuIcons}>
        <div
          onClick={handleClickHome}
          className={
            router.pathname === '/pomodoro'
              ? ` + ${styles.iconDivActive} `
              : ` + ${styles.iconDiv}`
          }
        >
          <BsHouse size="30" />
        </div>
        <div
          onClick={handleClickProfile}
          className={
            router.pathname === '/profile'
              ? ` + ${styles.iconDivActive} `
              : ` + ${styles.iconDiv}`
          }
        >
          <BsFillPersonFill size="30" />
        </div>
        <div
          className={
            router.pathname === '/spotify'
              ? ` + ${styles.iconDivActive} `
              : ` + ${styles.iconDiv}`
          }
        >
          <FaSpotify size="25" />
        </div>
        <div
          onClick={handleClickLeader}
          className={
            router.pathname === '/leaderboard'
              ? ` + ${styles.iconDivActive} `
              : ` + ${styles.iconDiv}`
          }
        >
          <RiMedalFill size="30" />
        </div>
        <div
          className={
            router.pathname === '/settings'
              ? ` + ${styles.iconDivActive} `
              : ` + ${styles.iconDiv}`
          }
        >
          <FaWrench size="30" />
        </div>
      </div>
      <a className={styles.logout} onClick={handleClickLogout}>
        <CgLogOut size="40" />
      </a>
    </div>
  );
}
