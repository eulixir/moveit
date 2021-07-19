import styles from '../styles/pages/Profile.module.scss';
import { Navbar } from '../components/Navbar/Navbar';
import { getSession } from 'next-auth/client';
import React, { useEffect, useState } from 'react';
import Toggle from '../components/Toggle/Toggle';
import { GetServerSideProps } from 'next';
import Cookies from 'js-cookie';
import Head from 'next/head';
import api from 'axios';

interface ProfileProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  theme: string;
}

export default function Profile(props: ProfileProps) {
  const currentTheme = props.theme;

  const [activeTheme, setActiveTheme] = useState(currentTheme);
  const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light';

  const getCurrentTheme = () => {
    if (currentTheme == 'dark') {
      return true;
    } else {
      return false;
    }
  };
  const [toggled, setToggled] = useState(getCurrentTheme());

  const handleClick = () => {
    setToggled(activeTheme === 'light');
    setActiveTheme(inactiveTheme);
  };

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
  }, [activeTheme]);

  useEffect(() => {
    Cookies.set('theme', activeTheme);
  }, [activeTheme]);

  console.log(toggled);

  return (
    <>
      <Head>
        <title>Profile | move.it</title>
      </Head>
      <div className={styles.profileContainer}>
        <Navbar />
        <div className={styles.profileContent}>
          <Toggle toggled={toggled} onClick={handleClick} />
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession({ ctx });
  const email = session?.user.email;
  const result = await api
    .get(process.env.API_URL + '/api/users/get_by_email/' + email)
    .then(function (response) {
      const level: number = response.data.user.profile_data.current_level;
      const currentExperience: number =
        response.data.user.profile_data.current_experience;
      const tasks_completed: number =
        response.data.user.profile_data.tasks_completed;
      const { theme } = ctx.req.cookies;

      return {
        props: {
          level: Number(level),
          currentExperience: Number(currentExperience),
          challengesCompleted: Number(tasks_completed),
          theme: String(theme),
        },
      };
    })
    .catch(function (error) {
      console.log(error);
      const { theme } = ctx.req.cookies;
      return {
        props: {
          level: Number(1),
          currentExperience: Number(0),
          challengesCompleted: Number(0),
          theme: String(theme),
        },
      };
    });
  return result;
};
