import styled from "styled-components";
import color from "color";

import { Outline } from "./shared";

export enum ButtonThemes {
  primary = "primary",
  secondary = "secondary",
  tertiary = "tertiary",
}

interface ButtonProps {
  readonly theme:
    | ButtonThemes.primary
    | ButtonThemes.secondary
    | ButtonThemes.tertiary;
  readonly isLabelFirst: boolean;
}

const ButtonColors: any = {
  [ButtonThemes.primary]: {
    background: "green",
    color: "white",
  },
  [ButtonThemes.secondary]: {
    background: "blue",
    color: "white",
  },
  [ButtonThemes.tertiary]: {
    background: "white",
    color: "black",
  },
};

export const Button = styled.button<ButtonProps>`
  background: ${(props) => ButtonColors[props.theme].background};
  color: ${(props) => ButtonColors[props.theme].color};
  border: none;
  border-radius: 2px;
  padding: 5px 10px;
  outline: none;

  &:focus {
    ${Outline};
  }

  &:hover {
    background: ${(props) =>
      color(ButtonColors[props.theme].background)
        .alpha(0.9)
        .toString()};
  }

  &:active {
    background: ${(props) =>
      color(ButtonColors[props.theme].background)
        .lighten(0.3)
        .saturate(0.3)
        .toString()};
  }

  &:disabled {
    background: ${(props) =>
      color(ButtonColors[props.theme].background)
        .alpha(0.5)
        .toString()};
  }
`;
