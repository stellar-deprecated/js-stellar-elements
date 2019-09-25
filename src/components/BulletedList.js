import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { PALETTE } from "../shared";

const El = styled.ul`
  position: relative;
  list-style-type: none;
  color: ${PALETTE.black60};
  padding-left: 1.375rem;

  & > li {
    position: relative;
    margin: 0.5rem 0;

    &::before {
      content: "";
      position: absolute;
      left: -1.4rem;
      top: 0.7rem;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: ${PALETTE.black60};
    }

    &:first-child > ul > li {
      &::before {
        width: 4px;
        height: 4px;
        border: 1px solid ${PALETTE.black60};
        background-color: transparent;
      }
    }

    &:nth-child(2) > ul > li {
      &::before {
        width: 6px;
        height: 6px;
        border-radius: initial;
        background-color: ${PALETTE.black60};
      }
    }
  }
`;

/**
 * Note: This exports a React component instead of a styled-component.
 * [Design Mockup](https://zpl.io/2ZXQ0YJ)
 */

const BulletedList = ({ children }) => <El>{children}</El>;

BulletedList.propTypes = {
  children: PropTypes.node.isRequired,
};

/** @component */
export default BulletedList;
