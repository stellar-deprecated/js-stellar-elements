import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { PALETTE, MEDIA_QUERIES } from "../shared";

import Text from "./Text";
import SubsectionHeader from "./SubsectionHeader";

const CardEl = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.isIconInline ? "row" : "column")};
  padding: 1.5rem;
  border-radius: 4px;
  border: solid 1px ${PALETTE.white80};
  box-shadow: 0 2px 8px -4px rgba(0, 0, 0, 0.08);

  @media (${MEDIA_QUERIES.ltTablet}) {
    flex-direction: column;
  }

  ${SubsectionHeader} {
    margin-bottom: 0.65rem;
  }

  img {
    display: block;
    overflow: hidden;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin-right: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const ContentEl = styled.div``;

/**
 * Note: This exports a React component instead of a styled-component.
 * [Design Mockup](https://app.zeplin.io/project/5d5aecf2918cf74d46363015/screen/5d813f575d1398783f61df5b)
 */

const Card = React.forwardRef(function Card(
  { title, icon, children, ...props },
  ref,
) {
  return (
    <CardEl ref={ref} {...props}>
      {icon && <img src={icon} alt={title} />}
      <ContentEl>
        <SubsectionHeader>{title}</SubsectionHeader>
        <Text>{children}</Text>
      </ContentEl>
    </CardEl>
  );
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
   * Set to true if an icon should appear next to the card's content on desktop
   */
  isIconInline: PropTypes.bool,
  /**
   * The copy of the card
   */
  children: PropTypes.node.isRequired,
};

/** @component */
export default Card;
