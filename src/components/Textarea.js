import styled from "styled-components";
import PropTypes from "prop-types";

import { Input } from "./Input";

/** @component */
export const Textarea = styled(Input.withComponent("textarea"))`
  resize: ${(props) => props.resize};
`;

Textarea.Resize = {
  both: "both",
  none: "none",
  vertical: "vertical",
  horizontal: "horizontal",
};

Textarea.defaultProps = {
  resize: Textarea.Resize.yes,
};

Textarea.propTypes = {
  resize: PropTypes.oneOf([
    Textarea.Resize.both,
    Textarea.Resize.none,
    Textarea.Resize.vertical,
    Textarea.Resize.horizontal,
  ]),
};
