import styled from 'styled-components';

export const ExperienceBar = styled.header`
  display: flex;
  align-items: center;
`;
export const ExperienceBarSpan = styled.span`
  display: flex;
  align-items: center;
`;

export const ExperienceBarDiv = styled.div`
  flex: 1;
  height: 4px;
  border-radius: 4px;
  background: var(--gray-line);
  position: relative;
  margin: 0 1.5rem;
`;

export const ExperienceBarDivIntern = styled.div`
  height: 4px;
  border-radius: 4px;
  background: var(--green);
`;

export const CurrentExperience = styled.span`
  position: absolute;
  top: 12px;
  transform: translateX(-50%);
`;
