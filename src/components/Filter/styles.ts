import styled, { css } from 'styled-components';

export const Wrapper = styled.aside`
  height: 100vh;
  padding-left: 15.9rem;
  margin-top: 4rem;
  margin-right: 3rem;
`;

export const title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.color.black};
    font-family: ${theme.font.family.secondary};
    font-size: ${theme.font.size.xlarge};
    font-weight: 700;
  `}
`;
