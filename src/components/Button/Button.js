import React from "react";
import styled, { css, ThemeProvider } from "styled-components";
import theme from "styled-theming";

const white = "#fff";
const black = "#000";

const buttonStyles = theme("mode", {
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
  return (
    <ThemeProvider theme={{ mode: "dark" }}>
      <StyledButton>{props.children}</StyledButton>
    </ThemeProvider>
  );
}

export default Button;
