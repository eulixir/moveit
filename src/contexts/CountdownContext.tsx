import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ChallengesContext } from './ChallengesContext';

let countdownTimeout: NodeJS.Timeout;

interface CountdownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
}

interface CountdownProviderProps {
  children: ReactNode;
}
export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider({ children }: CountdownProviderProps) {
  const { startNewChallenge } = useContext(ChallengesContext);
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFineshed] = useState(false);

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
    setHasFineshed(false);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      console.log('Finalizou!');
      setHasFineshed(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}
