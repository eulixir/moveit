import { CompletedChallenges } from '../components/CompletedChallenge/CompletedChallenge';
import { ExperienceBar } from '../components/ExperienceBar/ExperienceBar';
import { ChallengeBox } from '../components/ChallengeBox/ChallengeBox';
import PrivacyButton from '../components/PrivacyButton/PrivacyButton';
import { ChallengesProvider } from '../contexts/ChallengesContext';

import TermsButton from '../components/TermsButton/TermsButton';
import { Countdown } from '../components/Countdown/Countdown';
import { Profile } from '../components/Profile/Profile';
import { Navbar } from '../components/Navbar/Navbar';
import styles from '../styles/pages/Home.module.scss';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';
import api from 'axios';
import { getSession } from 'next-auth/client';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <>
      <ChallengesProvider
        level={props.level}
        currentExperience={props.currentExperience}
        challengesCompleted={props.challengesCompleted}
      >
        <div className={styles.homeContainer}>
          <Navbar />
          <div className={styles.container}>
            <Head>
              <title>Início | move.it</title>
            </Head>
            <ExperienceBar />
            <section className={styles.section}>
              <div>
                <Profile />
                <CompletedChallenges />
                <Countdown />
              </div>
              <div>
                <ChallengeBox />
                <div className={styles.JuriContainer}>
                  <PrivacyButton />
                  <TermsButton />
                </div>
              </div>
            </section>
          </div>
        </div>
      </ChallengesProvider>
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession({ ctx });
  const email = session?.user.email;
  const result = await api
    .get('https://moveit.gigalixirapp.com/api/profile_data/' + email)
    .then(function (response) {
      const level: number =
        response.data.profile_data.profile_data.current_level;
      const currentExperience: number =
        response.data.profile_data.profile_data.current_experience;
      const tasks_completed: number =
        response.data.profile_data.profile_data.tasks_completed;
      return {
        props: {
          level: Number(level),
          currentExperience: Number(currentExperience),
          challengesCompleted: Number(tasks_completed),
        },
      };
    })
    .catch(function (error) {
      return {
        props: {
          level: Number(1),
          currentExperience: Number(0),
          challengesCompleted: Number(0),
        },
      };
    });

  return result;
};
