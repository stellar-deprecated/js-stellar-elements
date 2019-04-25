import styled from "styled-components";

const Input = styled.input`
  border: 1px solid black;
  border-radius: 2px;

  outline: none;

  padding: 5px 8px;

  &:hover {
    border-color: #666;
  }

  &:focus {
    border-color: lightBlue;
  }
`;

/** @component */
export default Input;
