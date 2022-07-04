import styled, { css } from 'styled-components';

export const wrapper = styled.div`
  display: flex;
`;

export const circle = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.color.white};
    border-radius: 100%;
    height: 2rem;
    right: 1.8rem;
    padding-top: 0.25rem;
    position: relative;
    text-align: center;
    top: 3.6rem;
    width: 2rem;
  `}
`;

export const count = styled.span`
  ${({ theme }) => css`
    color: ${theme.color.chardonnay};
    font-family: ${theme.font.family.primary};
    font-size: 1.2rem;
    font-weight: 700;
    z-index: ${theme.layers.menu};
  `}
`;
