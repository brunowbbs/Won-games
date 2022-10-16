import styled, { css } from "styled-components";

import * as GameItemsStyles from "../GameItem/styles";

export const Wrapper = styled.div`
  ${GameItemsStyles.Wrapper} {
    &::last-child {
      border-bottom: 1px solid #000;
    }
  }
`;
