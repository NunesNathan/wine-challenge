import styled, { css } from 'styled-components';

export const wrapper = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.color.white};
    position: relative;
    top: 0;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    padding: 1.504rem 15.075rem;
    border-bottom: 1px ${theme.color.lightGrey};
    box-shadow: 0 2px 1px 1px ${theme.color.silver};
  `}
`;

export const buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 25.5rem;
`;
