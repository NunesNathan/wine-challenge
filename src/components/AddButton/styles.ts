import styled, { css } from 'styled-components';

const wrapper = styled.p`
  ${({ theme }) => css`
    text-align: center;
    height: 100%;
    width: 100%;
    background: none;
    color: ${theme.color.white};
    font-size: ${theme.font.size.xxsmall};
    font-family: ${theme.font.family.primary};
    font-weight: 700;
  `}
`;

export default wrapper;
