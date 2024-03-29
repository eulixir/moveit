import React, { createContext, useState, ReactNode, useEffect } from 'react';
import { LevelUpModal } from '../components/LevelUpModal/LevelUpModal';
import challenges from '../../challenges.json';
import { useSession } from 'next-auth/client';
import api from '../../services/api';

export const ChallengesContext = createContext({} as ChallengesContextData);

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  activeChallenge: Challenge;
  resetChallenge: () => void;
  experienceToNextLevel: number;
  completeChallenge: () => void;
  closeLevelUpModal: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;

  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export function ChallengesProvider({
  children,
  ...rest
}: ChallengesProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [session] = useSession();
  const email = session?.user.email;

  const [currentExperience, setCurrentExperience] = useState(
    rest.currentExperience ?? 0
  );
  const [challengesCompleted, setChallengesCompleted] = useState(
    rest.challengesCompleted ?? 0
  );

  const [activeChallenge, setActiveChallenge] = useState(null);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    if (email) {
      send_data_to_api(challengesCompleted, level, currentExperience);
    }
  }, [challengesCompleted]);

  function send_data_to_api(challengesCompleted, level, currentExperience) {
    api
      .put('https://moveit.gigalixirapp.com/api/profile_data', {
        current_level: level,
        current_experience: currentExperience,
        tasks_completed: challengesCompleted,
        email: email,
      })
      .then(function () {
        console.log('Dados enviados para o backend com sucesso 🚀');
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function levelUp() {
    setLevel(level + 1);
    new Audio('./levelup.mp3').play();
    setIsLevelUpModalOpen(true);
  }

  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    new Audio('./notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio 🎉', {
        body: `Valendo ${challenge.amount}xp!`,
      });
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;
    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        levelUp,
        resetChallenge,
        activeChallenge,
        currentExperience,
        startNewChallenge,
        completeChallenge,
        closeLevelUpModal,
        challengesCompleted,
        experienceToNextLevel,
      }}
    >
      {children}

      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengesContext.Provider>
  );
}
