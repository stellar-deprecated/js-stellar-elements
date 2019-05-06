import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Outline } from "../shared";

const Label = styled.label`
  position: relative;

  ${(props) =>
    props.isFullWidth &&
    `
    display: flex;
    justify-content: space-between;
  `};

  &:hover {
    cursor: pointer;
  }
`;

const LabelText = styled.span`
  vertical-align: middle;
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  width: 1px;
  height: 1px;
`;

const Check = styled.span`
  vertical-align: middle;
  display: inline-block;
  width: 20px;
  height: 20px;
  color: black;
  border-radius: 2px;
  border: 1px solid black;
  text-align: center;
  line-height: 20px;

  margin-left: ${(props) => props.isLabelFirst && "10px"};
  margin-right: ${(props) => !props.isLabelFirst && "10px"};

  ${Label}:focus &,
  ${Input}:focus + & {
    ${Outline};
  }

  ${Label}:hover & {
    border-color: #666;
  }

  &:after {
    content: "✓";
    display: ${(props) => (props.isChecked ? "block" : "none")};
  }
`;

/**
 * Note: This exports a React component instead of a styled-component.
 */
const Checkbox = ({ label, isLabelFirst, isFullWidth, checked, ...props }) => {
  return (
    <Label isFullWidth={isFullWidth}>
      {isLabelFirst && <LabelText>{label}</LabelText>}
      <Input type="checkbox" {...props} checked={checked} />
      <Check isChecked={checked} isLabelFirst={isLabelFirst} />
      {!isLabelFirst && <LabelText>{label}</LabelText>}
    </Label>
  );
};

Checkbox.defaultProps = {
  isLabelFirst: false,
};

Checkbox.propTypes = {
  /** @ignore */
  checked: PropTypes.bool,
  label: PropTypes.string,
  /** If true, the label will appear to the left of the checkbox. */
  isLabelFirst: PropTypes.bool,
  /** If true, take up the full width and justify the contents.*/
  isFullWidth: PropTypes.bool,
};

/** @component */
export default Checkbox;
