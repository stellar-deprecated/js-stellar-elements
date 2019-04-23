import styled from "styled-components";
import { Input } from "./Input";

export enum TextareaResizing {
  yes = "yes",
  no = "no",
  vertical = "vertical",
}

interface TextareaParams {
  resizing:
    | TextareaResizing.yes
    | TextareaResizing.no
    | TextareaResizing.vertical;
}

const TextareaOptions: any = {
  [TextareaResizing.yes]: null,
  [TextareaResizing.no]: "none",
  [TextareaResizing.vertical]: "vertical",
};

export const Textarea = styled(Input.withComponent("textarea"))<TextareaParams>`
  resize: ${(props) => TextareaOptions[props.resizing]};
`;
