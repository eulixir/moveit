import { CompletedChallenges } from '../components/CompletedChallenge/CompletedChallenge';
import { ExperienceBar } from '../components/ExperienceBar/ExperienceBar';
import { ChallengeBox } from '../components/ChallengeBox/ChallengeBox';
import { Countdown } from '../components/Countdown/Countdown';
import { Profile } from '../components/Profile/Profile';
import { Navbar } from '../components/Navbar/Navbar';
import { GetServerSideProps } from 'next';

import styles from '../styles/pages/Home.module.css';

import Head from 'next/head';
import { CountdownProvider } from '../contexts/CountdownContext';
import React from 'react';
import { ChallengesProvider } from '../contexts/ChallengesContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Navbar />
        <Head>
          <title>Início | move.it</title>
        </Head>
        <ExperienceBar />
        <CountdownProvider>
          <section className={styles.section}>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
