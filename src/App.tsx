import { ExperienceBar } from './components/ExperienceBar';
import * as S from './styles/global';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyle from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import usePersistedState from './utils/usePersistedState';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggletheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <S.Container>
        <ExperienceBar />
      </S.Container>
    </ThemeProvider>
  );
}

export default App;
