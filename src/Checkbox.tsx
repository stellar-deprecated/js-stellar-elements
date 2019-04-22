import * as React from "react";
import styled from "styled-components";

const Label = styled.label``;

const Input = styled.input``;

interface CheckboxProps {
  label: React.ReactNode;
  labelFirst: boolean;
}

export const Checkbox: React.SFC<CheckboxProps> = ({
  label,
  labelFirst,
  ...props
}) => {
  return (
    <Label>
      {labelFirst && label}
      <Input type="checkbox" {...props} />
      {!labelFirst && label}
    </Label>
  );
};
