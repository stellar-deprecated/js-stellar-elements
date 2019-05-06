import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";

const ButtonColors = {
  primary: {
    background: "green",
    color: "#FFF",
  },
  secondary: {
    background: "blue",
    color: "#FFF",
  },
  tertiary: {
    background: "#FFF",
    color: "#000",
  },
};

const El = styled.View`
  background-color: ${(props) => ButtonColors[props.level].background};
  color: ${(props) => ButtonColors[props.level].color};
  border-radius: 2px;
  padding: 5px 10px;
`;

const Button = ({ level, children, ...props }) => (
  <TouchableOpacity {...props}>
    <El level={level}>{children}</El>
  </TouchableOpacity>
);

Button.Levels = {
  primary: "primary",
  secondary: "secondary",
  tertiary: "tertiary",
};

Button.defaultProps = {
  level: Button.Levels.primary,
};

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,

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
