import styled from "styled-components";
import color from "color";
import PropTypes from "prop-types";

import { Outline } from "../shared";

const ButtonColors = {
  primary: {
    background: "green",
    color: "white",
  },
  secondary: {
    background: "blue",
    color: "white",
  },
  tertiary: {
    background: "white",
    color: "black",
  },
};

const Button = styled.button`
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

Button.Levels = {
  primary: "primary",
  secondary: "secondary",
  tertiary: "tertiary",
};

Button.defaultProps = {
  level: Button.Levels.primary,
};

Button.propTypes = {
  /**
   * The type of button to show. Don't pass a string; use the object
   * `Button.Levels` to pass a named constant.
   */
  level: PropTypes.oneOf([
    Button.Levels.primary,
    Button.Levels.secondary,
    Button.Levels.tertiary,
  ]),
};

/** @component */
export default Button;
