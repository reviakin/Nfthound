import styled, { css } from "styled-components";

export const Error = styled.p`
  ${(props) => css`
    color: ${props.theme.colors.error};
  `}
`;
