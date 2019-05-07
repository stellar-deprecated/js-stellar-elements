import styled from "styled-components/native";
import { Picker } from "react-native";

import Input from "./Input";

const Select = styled(Input.withComponent(Picker)).attrs({ multiline: true })`
  border: 1px solid black;
  border-radius: 2px;
  padding: 5px 8px;
`;

/** @component */
export default Select;
