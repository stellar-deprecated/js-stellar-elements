import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { PALETTE } from "../shared";

import Text from "./Text";
import SubsectionHeader from "./SubsectionHeader";

const CardEl = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 4px;
  border: solid 1px ${PALETTE.white80};
  box-shadow: 0 8px 16px -8px rgba(19, 12, 51, 0.08);

  ${SubsectionHeader} {
    margin-bottom: 0.5rem;
  }

  img {
    display: block;
    overflow: hidden;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin-bottom: 1.5rem;
  }
`;

/**
 * Note: This exports a React component instead of a styled-component.
 * [Design Mockup](https://app.zeplin.io/project/5d5aecf2918cf74d46363015/screen/5d813f575d1398783f61df5b)
 */

const Card = React.forwardRef(function Card(
  { title, icon, children, ...props },
  ref,
) {
  <CardEl ref={ref} {...props}>
    {icon && <img src={icon} alt={title} />}
    <SubsectionHeader color={PALETTE.black60}>{title}</SubsectionHeader>
    <Text>{children}</Text>
  </CardEl>;
});

Card.propTypes = {
  /**
   * The title of the card
   */
  title: PropTypes.node.isRequired,
  /**
   * The icon of the card. @TODO
   */
  icon: PropTypes.string,
  /**
   * The copy of the card
   */
  children: PropTypes.node.isRequired,
};

/** @component */
export default Card;
