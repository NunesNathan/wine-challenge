import styled, { css, DefaultTheme } from 'styled-components';

export const wrapper = styled.li`
  ${({ theme }) => css`
    height: 33.3rem;
    width: 25.6rem;
    background: ${theme.color.white};
    box-shadow: 0px 9.73384px 14.6008px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  `}
`;

export const img = styled.img`
  height: 17.813rem;
  margin-top: 0.9rem;
`;

export const name = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.font.family.primary};
    font-size: ${theme.font.size.regular};
    color: ${theme.color.metal};
    font-weight: 700;
    text-align: center;
  `}
`;

export const originalPrice = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.font.family.primary};
    font-size: ${theme.font.size.smaller};
    color: ${theme.color.darkGrey};
    font-weight: 700;
    text-align: right;
    text-decoration-line: line-through;
  `}
`;
export const off = styled.span`
  ${({ theme }) => css`
    background-color: ${theme.color.highlight};
    font-family: ${theme.font.family.primary};
    font-size: ${theme.font.size.xsmaller};
    color: ${theme.color.white};
    font-weight: 700;
    text-align: left;
    padding: 0.1rem 0.3rem;
    border-radius: 0.2rem;
  `}
`;
export const member = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.font.family.primary};
    font-size: ${theme.font.size.smaller};
    color: ${theme.color.metal};
    font-weight: 700;
    text-align: right;
  `}
`;

export const container = styled.div`
  width: 100%;
  > :nth-child(2) {
    margin-left: 0.5rem;
  }
  text-align: center;
`;

type MemberPricesProps = {
  upper?: boolean;
};

const memberPricesCase = {
  upper: (theme: DefaultTheme) => css`
    font-size: ${theme.font.size.xxlarge};
  `,
  lower: (theme: DefaultTheme) => css`
    font-size: ${theme.font.size.smaller};
  `,
};

export const memberPrice = styled.span<MemberPricesProps>`
  ${({ theme, upper }) => css`
    font-family: ${theme.font.family.primary};
    color: ${theme.color.magenta};
    font-weight: 700;
    text-align: left;
    ${upper ? memberPricesCase.upper(theme) : memberPricesCase.lower(theme)}
  `}
`;

export const nonMemberPrice = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.font.family.primary};
    font-size: ${theme.font.size.xxxsmall};
    color: ${theme.color.darkGrey};
    font-weight: 700;
    text-align: center;
    margin-bottom: 2.149rem;
  `}
`;

export const add = styled.button`
  ${({ theme }) => css`
    margin-top: 5rem;
    background-color: ${theme.color.green};
    height: 4rem;
    width: 25.6rem;
    border-radius: 0.38rem;
    box-shadow: 0px 0.973384px 1.94677px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    padding: 11.6806px 23.3612px;
    cursor: pointer;
  `}
`;
