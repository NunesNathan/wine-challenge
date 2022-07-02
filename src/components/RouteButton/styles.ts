import styled, { css, DefaultTheme } from 'styled-components';

type WrapperProps = {
  enable: boolean;
};

const wrapperModifiers = {
  enable: (theme: DefaultTheme) => css`
    color: ${theme.color.redViolet};
    margin-top: 2.9rem;
    padding-bottom: 2.8rem;
    border-bottom: 2px solid ${theme.color.redViolet};
  `,
  disable: (theme: DefaultTheme) => css`
    color: ${theme.color.lightGrey};
    border: none;
  `,
};

const wrapper = styled.button<WrapperProps>`
  ${({ theme, enable }) => css`
    border: none;
    font-family: ${theme.font.family.secondary};
    font-weight: 400;
    font-size: ${theme.font.size.large};
    ${enable ? wrapperModifiers.enable(theme) : wrapperModifiers.disable(theme)}
  `}
`;

export default wrapper;
