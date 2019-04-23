import * as React from "react";
import styled from "styled-components";

const Label = styled.label``;

const LabelText = styled.span`
  vertical-align: middle;
`;

const Input = styled.input`
  display: none;
`;

interface CheckProps {
  readonly isChecked: boolean;
  readonly isLabelFirst: boolean;
}

const Check = styled.span<CheckProps>`
  vertical-align: middle;
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: blue;
  color: white;
  text-align: center;
  line-height: 20px;
  cursor: pointer;

  margin-left: ${(props) => props.isLabelFirst && "10px"};
  margin-right: ${(props) => !props.isLabelFirst && "10px"};

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
