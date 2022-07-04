import styled, { css } from 'styled-components';

export const wrapper = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.color.white};
    position: relative;
    height: 8.823rem;
    top: 0;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 13.8rem;
    border-bottom: 1px ${theme.color.lightGrey};
    box-shadow: 0 2px 1px 1px ${theme.color.silver};
  `}
`;

export const buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 25.5rem;
`;
