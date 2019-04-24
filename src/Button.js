import styled from "styled-components";
import color from "color";
import { Outline } from "./shared";

export const ButtonLevels = {
  primary: "primary",
  secondary: "secondary",
  tertiary: "tertiary",
};

const ButtonColors = {
  [ButtonLevels.primary]: {
    background: "green",
    color: "white",
  },
  [ButtonLevels.secondary]: {
    background: "blue",
    color: "white",
  },
  [ButtonLevels.tertiary]: {
    background: "white",
    color: "black",
  },
};

/**
 * This is a button, and is good.
 * @param {string} level The level of hierarchy of the button.
 */
export const Button = styled.button`
  background: ${(props) => ButtonColors[props.level].background};
  color: ${(props) => ButtonColors[props.level].color};
  border: none;
  border-radius: 2px;
  padding: 5px 10px;
  outline: none;

  &:focus {
    ${Outline};
  }

  &:hover {
    background: ${(props) =>
      color(ButtonColors[props.level].background)
        .alpha(0.9)
        .toString()};
  }

  &:active {
    background: ${(props) =>
      color(ButtonColors[props.level].background)
        .lighten(0.3)
        .saturate(0.3)
        .toString()};
  }

  &:disabled {
    background: ${(props) =>
      color(ButtonColors[props.level].background)
        .alpha(0.5)
        .toString()};
  }
`;

Button.defaultProps = {
  level: ButtonLevels.primary,
};

Button.__docs = `
  # Button

  This is a very clickable and tappable button.

  # Properties

  ## level
  
  Type: \`ButtonLevels.primary\` | \`ButtonLevels.secondary\` | \`ButtonLevels.tertiary\`

  Default: \`ButtonLevels.primary\`

  Use the export \`ButtonLevels\` to set these types.
`;
