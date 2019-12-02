import React from "react";
import styled, { css, withTheme } from "styled-components";
import theme from "styled-theming";

const white = "#fff";
const black = "#000";

export const buttonStyles = theme("mode", {
  light: css`
    background: ${white};
    color: ${black};
  `,
  dark: css`
    background: ${black};
    color: ${white};
  `
});

const StyledButton = styled.button`
  ${buttonStyles}
  border-radius: 3px;
`;

function Button(props) {
  console.log("Lib theme:", props.theme);
  return <StyledButton theme={props.theme}>{props.children}</StyledButton>;
}

export default withTheme(Button);
