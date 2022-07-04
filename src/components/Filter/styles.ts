import styled, { css } from 'styled-components';

export const Wrapper = styled.aside`
  height: 100vh;
  margin-top: 4rem;
`;

export const title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.color.black};
    font-family: ${theme.font.family.secondary};
    font-size: ${theme.font.size.xlarge};
    font-weight: 700;
  `}
`;

export const type = styled.h4`
  ${({ theme }) => css`
    margin-top: 3.2rem;
    margin-bottom: 3rem;
    color: ${theme.color.darkestGrey};
    font-family: ${theme.font.family.primary};
    font-size: ${theme.font.size.large};
    font-weight: 700;
  `}
`;
