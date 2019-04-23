import styled from "styled-components";

import { Outline } from "./shared";

export const Input = styled.input`
  border: 1px solid blue;
  border-radius: 2px;

  outline: none;

  &:focus {
    ${Outline};
  }
`;
