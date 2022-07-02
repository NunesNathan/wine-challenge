import styled, { css } from 'styled-components';

export const Wrapper = styled.aside`
  height: 100vh;
  padding-left: 15.5rem;
  margin-right: 3rem;
`;

export const title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.color.black};
    font-family: ${theme.font.family.secondary};
    font-size: 2rem;
    font-weight: 700;
  `}
`;
