import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background: rebeccapurple;
    display: flex;
    align-items: center;
    padding: ${theme.spacings.xxsmall} 0;
    position: relative;
    justify-content: space-between;
  `}
`;

export const LogoWrapper = styled.div`
  ${media.lessThan("medium")`
    position: absolute;
    left:50%;
    transform:translateX(-50%)
  `}
`;

export const MenuGroup = styled.div`
  ${() => css`
    display: flex;
    justify-content: flex-end;
  `}
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    cursor: pointer;
    padding: ${theme.spacings.xxsmall};
  `}
`;
