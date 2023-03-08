import styled, { css } from "styled-components";
import media from "../../utils/media";

export const Title = styled.p`
${props => css`
  color: ${props.theme.colors.onBackground};
  @media ${media.mobileS} {
   font-size:${props.theme.fontSizes.fz16};
  }
  @media ${media.tablet} {
   font-size:${props.theme.fontSizes.fz24};
  }
  @media ${media.laptop} {
   font-size:${props.theme.fontSizes.fz24};
  }
  `}

`

export const Image = styled.img`
width: 250px;
height: 250px;
`

export const Card = styled.div`
${props => css`

     display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
   //  border: 1px solid ${props.theme.colors.secondary};
  @media ${media.mobileS} {
    padding: ${props.theme.spaces.s8}px ${props.theme.spaces.s16}px;
   font-size:${props.theme.fontSizes.fz16};
  }
  @media ${media.tablet} {
    width: 250px;
    padding: ${props.theme.spaces.s16}px ${props.theme.spaces.s24}px;
   font-size:${props.theme.fontSizes.fz24};
  }
  @media ${media.laptop} {
    padding: ${props.theme.spaces.s16}px ${props.theme.spaces.s24}px;
   font-size:${props.theme.fontSizes.fz24};
  }
  `}
`
