import styled, { css } from "styled-components";
import media from "styled-media-query";

import { Breakpoint, MediaMatchProps } from "./types";

const mediaMatchModifiers = {
  lessThan: (size: Breakpoint) => css`
    ${media.lessThan(size)`display:block`}
  `,
  greaterThan: (size: Breakpoint) => css`
    ${media.greaterThan(size)`display:block`}
  `,
};

export default styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;

    ${!!lessThan && mediaMatchModifiers.lessThan(lessThan)}
    ${!!greaterThan && mediaMatchModifiers.greaterThan(greaterThan)}
  `}
`;
