import styles from '../styles/pages/Leaderboard.module.css';

import { Navbar } from '../components/Navbar/Navbar';

import Head from 'next/head';
import React from 'react';
import Card from '../components/Card/Card';

export default function Home() {
  return (
    <>
      <Head>
        <title>Leaderboard | move.it</title>
      </Head>
      <div className={styles.leaderboardContainer}>
        <Navbar />
        <div className={styles.leaderboardContent}>
          <h1>Leaderboard</h1>
          <div className={styles.cardTitleContainer}>
            <div>POSIÇÃO</div>
            <div>
              <span>USUÁRIO</span>
            </div>
            <div>DESAFIOS</div>
            <div>EXPERIÊNCIA</div>
          </div>
          <div className={styles.cardContainer}>
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}
