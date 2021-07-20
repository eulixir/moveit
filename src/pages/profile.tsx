import { getSession, useSession } from 'next-auth/client';
import styles from '../styles/pages/Profile.module.scss';
import { Navbar } from '../components/Navbar/Navbar';
import React, { useEffect, useState } from 'react';
import Toggle from '../components/Toggle/Toggle';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import Head from 'next/head';
import api from 'axios';
import Session from '../components/Session/Session';
interface ProfileProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  theme: string;
  image: string;
  name: string;
}

export default function Profile(props: ProfileProps) {
  const [session] = useSession();
  const router = useRouter();
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

  return (
    <>
      <Head>
        <title>Profile | move.it</title>
      </Head>
      {session && (
        <div className={styles.profileContainer}>
          <Navbar />
          <div className={styles.profileContent}>
            <div className={styles.toggleContainer}>
              <Toggle toggled={toggled} onClick={handleClick} />
            </div>
            <div className={styles.profileContentContainer}>
              <div className={styles.userProfileContainer}>
                <img src={props.image} alt="user image" />
                <span>{props.name}</span>
              </div>
              <div className={styles.userDataContainer}>
                <div>
                  <span>Level:</span> {props.level}
                </div>
                <div>
                  <span>Experiência atual:</span> {props.currentExperience}
                </div>
                <div>
                  <span>Desafios completos:</span> {props.challengesCompleted}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {!session && <Session />}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession({ ctx });
  const email = session?.user.email;
  const result = await api
    .get(process.env.API_URL + '/api/users/get_by_email/' + email)
    .then(function (response) {
      const name: string = response.data.user.name;
      const level: number = response.data.user.profile_data.current_level;
      const image: string = response.data.user.image;

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
          name: String(name),
          image: String(image),
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
