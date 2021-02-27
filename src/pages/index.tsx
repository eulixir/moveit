import { ExperienceBar } from '../components/ExperienceBar';
import * as S from '../styles/global';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyle from '../styles/global';

function App() {
  return (
    <div>
      <GlobalStyle />
      <S.Container>
        <ExperienceBar />
      </S.Container>
    </div>
  );
}
export default App;
