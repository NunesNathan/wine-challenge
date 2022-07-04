import styled, { css } from 'styled-components';

export const wrapper = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const counter = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.font.family.primary};
    font-size: ${theme.font.size.large};
    color: ${theme.color.lightMetal};
    font-weight: 700;
  `}
`;

export const text = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.font.family.primary};
    font-size: ${theme.font.size.large};
    color: ${theme.color.lightMetal};
    font-weight: 400;
    margin-bottom: 3.2rem;
  `}
`;
