import styled, { css } from 'styled-components';

export const Wrapper = styled.aside`
  max-width: 40rem;
  height: 100vh;
  text-align: center;
`;

export const title = styled.h3`
  ${({ theme }) => css`
    font-size: 2rem;
    font-family: ${theme.font.family.secondary};
    font-weight: 700;
    color: ${theme.color.black};
  `}
`;
