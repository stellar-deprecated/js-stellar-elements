import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Outline } from "./shared";

const Label = styled.label`
  position: relative;

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

export const Checkbox = ({ label, labelFirst, checked, ...props }) => {
  return (
    <Label>
      {labelFirst && <LabelText>{label}</LabelText>}
      <Input type="checkbox" {...props} checked={checked} />
      <Check isChecked={checked} isLabelFirst={labelFirst} />
      {!labelFirst && <LabelText>{label}</LabelText>}
    </Label>
  );
};

Checkbox.defaultProps = {
  checked: false,
  labelFirst: false,
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  labelFirst: PropTypes.bool,
};
