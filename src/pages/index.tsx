import { CompletedChallenges } from '../components/CompletedChallenge';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import styles from '../styles/pages/Home.module.css';

import Head from 'next/head';

function App() {
  return (
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
        <div></div>
      </section>
    </div>
  );
}
export default App;
