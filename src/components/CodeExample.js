import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { PALETTE, FONT_WEIGHT } from "../shared";

const CodeExampleEl = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;
  background: ${(props) =>
    props.isCodeSnippet ? PALETTE.black90 : PALETTE.white80};
`;

const TitleEl = styled.div`
  position: relative;
  padding: 0;
  padding-top: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${PALETTE.white60};
  font-size: 0.875rem;
  font-weight: ${FONT_WEIGHT.medium};
`;
const ContentEl = styled.div`
  padding: 1rem 0;
`;

/**
 * Note: This exports a React component instead of a styled-component.
 * [Design Mockup](https://zpl.io/V1DGqJ5)
 */

const CodeExample = React.forwardRef(function CodeExample(
  { title, children, ...props },
  ref,
) {
  return (
    <CodeExampleEl ref={ref} {...props}>
      <TitleEl>{title}</TitleEl>
      <ContentEl>{children}</ContentEl>
    </CodeExampleEl>
  );
});

CodeExample.propTypes = {
  /**
   * The title of the card
   */
  title: PropTypes.node.isRequired,
  /**
   * The copy of the card
   */
  children: PropTypes.node.isRequired,
};

/** @component */
export default CodeExample;
