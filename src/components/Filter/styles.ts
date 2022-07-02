import styled, { css } from 'styled-components';

export const Wrapper = styled.aside`
  height: 100vh;
  max-width: 40rem;
  text-align: center;
`;

export const title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.color.black};
    font-family: ${theme.font.family.secondary};
    font-size: 2rem;
    font-weight: 700;
  `}
`;
