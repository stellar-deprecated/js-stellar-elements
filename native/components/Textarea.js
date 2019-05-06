import styled from "styled-components/native";

import Input from "./Input";

const Textarea = styled(Input).attrs({ multiline: true })`
  background-color: pink;
`;

/** @component */
export default Textarea;
