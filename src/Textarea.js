import styled from "styled-components";
import { Input } from "./Input";

export const TextareaResizing = {
  yes: "yes",
  no: "no",
  vertical: "vertical",
};

const TextareaOptions = {
  [TextareaResizing.yes]: null,
  [TextareaResizing.no]: "none",
  [TextareaResizing.vertical]: "vertical",
};

export const Textarea = styled(Input.withComponent("textarea"))`
  resize: ${(props) => TextareaOptions[props.resizing]};
`;
