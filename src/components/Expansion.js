import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { PALETTE } from "../shared";
import ExpansionSection from "./ExpansionSection";

const ExpansionEl = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 4px;
  border: ${(props) =>
    props.hasBorder ? `solid 1px ${PALETTE.white60}` : "none"};
`;

const ExpansionHeaderEl = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  height: auto;
  overflow: hidden;
  transition: transform 250ms ease-out;
`;

const ExpansionIconEl = styled.div`
  display: block;
  width: auto;
  align-items: center;
  justify-content: space-between;

  img {
    height: 15px;
    width: 15px;
  }
`;

/**
 * Note: This exports a React component instead of a styled-component.
 * [Design Mockup](https://zpl.io/V1DGqJ5)
 */

const Expansion = React.forwardRef(function Expansion(
  { title, hasBorder, expandIcon, children, ...props },
  ref,
) {
  const [isExpanded, setExpanded] = React.useState(false);

  const onHandleClick = () => {
    setExpanded(!isExpanded);
  };

  return (
    <ExpansionEl
      ref={ref}
      hasBorder={hasBorder}
      aria-expanded={isExpanded}
      {...props}
    >
      <ExpansionHeaderEl onClick={onHandleClick}>
        {title}
        <ExpansionIconEl>{expandIcon}</ExpansionIconEl>
      </ExpansionHeaderEl>
      <ExpansionSection isExpanded={isExpanded}>{children}</ExpansionSection>
    </ExpansionEl>
  );
});

Expansion.propTypes = {
  /**
   * Title of the Expansion that will be visible
   */
  title: PropTypes.node.isRequired,
  /**
   * If true, default border styling applies
   */
  hasBorder: PropTypes.bool,
  /**
   * Icon to indicate to open or close the expansion
   */
  expandIcon: PropTypes.node.isRequired,
  /**
   * The content of the expansion component.
   */
  children: PropTypes.node.isRequired,
};

/** @component */
export default Expansion;
