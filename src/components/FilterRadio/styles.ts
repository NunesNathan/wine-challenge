import styled, { css } from 'styled-components';

export const Wrapper = styled.label`
  height: 2rem;
  display: flex;
  flex-direction: row;
  margin-bottom: 2.8rem;
  > input {
    height: 1.98rem;
    width: 1.98rem;
  }
`;

export const text = styled.p`
  ${({ theme }) => css`
    margin-left: 1.17rem;
    color: ${theme.color.metal};
    font-family: ${theme.font.family.primary};
    font-size: ${theme.font.size.xxsmall};
    font-weight: 400;
  `}
`;
