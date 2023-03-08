import styled, { css } from "styled-components";
import media from '../../utils/media'

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  ${props => css`
  background: ${props.theme.colors.background};
  color: ${props.theme.colors.onBackground};
  @media ${media.mobileS} {
    padding: ${props.theme.spaces.s8}px ${props.theme.spaces.s16}px;
    gap: ${props.theme.spaces.s16}px;
  }
  @media ${media.tablet} {
    padding: ${props.theme.spaces.s16}px ${props.theme.spaces.s32}px;
    gap: ${props.theme.spaces.s16}px;
  }
  @media ${media.laptop} {
    padding: ${props.theme.spaces.s32}px ${props.theme.spaces.s64}px;
    gap: ${props.theme.spaces.s32}px;
  }
  `}
`
