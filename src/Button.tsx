import styled from "styled-components";
import color from "color";

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
    box-shadow: 0 3px 5px rgba(0, 0, 255, 0.3);
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
