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
