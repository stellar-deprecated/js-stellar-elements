import * as React from "react";
import styled from "styled-components";

const Label = styled.label``;

const Input = styled.input`
  display: none;
`;

interface CheckProps {
  readonly isChecked: boolean;
}

const Check = styled.span<CheckProps>`
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: blue;
  color: white;
  text-align: center;
  line-height: 20px;
  cursor: pointer;

  &:after {
    content: "✓";
    display: ${(props) => (props.isChecked ? "block" : "none")};
  }
`;

interface CheckboxProps {
  label: React.ReactNode;
  labelFirst: boolean;
  checked: boolean;
}

export const Checkbox: React.SFC<CheckboxProps> = ({
  label,
  labelFirst,
  checked,
  ...props
}) => {
  return (
    <Label>
      {labelFirst && label}
      <Input type="checkbox" {...props} checked={checked} />
      <Check isChecked={checked} />
      {!labelFirst && label}
    </Label>
  );
};

Checkbox.defaultProps = {
  checked: false,
  labelFirst: false,
};
