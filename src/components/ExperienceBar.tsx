import * as S from '../styles/experienceBar';

export function ExperienceBar() {
  return (
    <S.ExperienceBar>
      <S.ExperienceBarSpan>0 xp</S.ExperienceBarSpan>
      <S.ExperienceBarDiv>
        <S.ExperienceBarDivIntern style={{ width: '50%' }} />
        <S.CurrentExperience style={{ left: '50%' }}>300px</S.CurrentExperience>
      </S.ExperienceBarDiv>
      <S.ExperienceBarSpan>600 xp</S.ExperienceBarSpan>
    </S.ExperienceBar>
  );
}
