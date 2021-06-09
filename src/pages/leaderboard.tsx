import styles from '../styles/pages/Leaderboard.module.css';

import { Navbar } from '../components/Navbar/Navbar';

import Head from 'next/head';
import React from 'react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Leaderboard | move.it</title>
      </Head>
      <div className={styles.leaderboardContainer}>
        <Navbar />
        <div className={styles.leaderboardContent}>Leaderboard</div>
      </div>
    </>
  );
}
