import styled, { css } from "styled-components";
import media from "../../utils/media";

export const Input = styled.input`
 ${props => css`
   background: ${props.theme.colors.surface};
   color: ${props.theme.colors.onSurface};
  @media ${media.mobileS} {
    padding: ${props.theme.spaces.s8}px ${props.theme.spaces.s16}px;
   font-size:${props.theme.fontSizes.fz16};
  }
  @media ${media.tablet} {
    padding: ${props.theme.spaces.s16}px ${props.theme.spaces.s24}px;
   font-size:${props.theme.fontSizes.fz24};
  }
  @media ${media.laptop} {
    padding: ${props.theme.spaces.s16}px ${props.theme.spaces.s24}px;
   font-size:${props.theme.fontSizes.fz24};
  }
  `} 
`
