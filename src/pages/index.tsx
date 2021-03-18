import { Landing } from '../components/Landing/Landing';

import Head from 'next/head';

import React from 'react';

export default function LandingPage() {
  return (
    <div>
      <Head>
        <title>Início | move.it</title>
        <meta
          name="google-site-verification"
          content="v3l2LuN4eO5NYPQfG_swy4M-2Ev6s_7g_yLrDSTxM6E"
        />
      </Head>
      <Landing />
    </div>
  );
}
