import { Landing } from '../components/Landing/Landing';

import Head from 'next/head';

import React from 'react';

export default function LandingPage() {
  return (
    <div>
      <Head>
        <title>Início | move.it</title>
      </Head>

      <Landing />
    </div>
  );
}
