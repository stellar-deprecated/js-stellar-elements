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

const Card = ({ title, icon, children }) => (
  <CardEl>
    {icon && <img src={icon} alt={title} />}
    <SubsectionHeader color={PALETTE.black60}>{title}</SubsectionHeader>
    <Text>{children}</Text>
  </CardEl>
);

Card.propTypes = {
  /**
   * The type of button to show. Don't pass a string; use the object
   * `Card.Types` to pass a named constant.
   */
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  children: PropTypes.node.isRequired,
};

/** @component */
export default Card;
