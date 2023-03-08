import styled, { css } from "styled-components";
import { media } from "../../utils";

export const CardsContainer = styled.div`
  display: flex;
  ${(props) => css`
    @media ${media.mobileS} {
      gap: ${props.theme.spaces.s8}px;
      flex-direction: column;
    }
    @media ${media.tablet} {
      flex-direction: row;
      font-size: ${props.theme.fontSizes.fz24};
      flex-wrap: wrap;
      justify-content: space-between;
    }
    @media ${media.laptop} {
      gap: ${props.theme.spaces.s16}px;
    }
  `}
`;
