import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { PALETTE } from "../shared";

const ListEl = styled.li`
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

  &:first-child > ul > & {
    &::before {
      width: 4px;
      height: 4px;
      border: 1px solid ${PALETTE.black60};
      background-color: transparent;
    }
  }

  &:nth-child(2) > ul > & {
    &::before {
      width: 6px;
      height: 6px;
      border-radius: initial;
      background-color: ${PALETTE.black60};
    }
  }
`;

const El = styled.ul`
  position: relative;
  list-style-type: none;
  color: ${PALETTE.black60};
  padding-left: 1.375rem;
`;

/**
 * Note: This exports a React component instead of a styled-component.
 * [Design Mockup](https://zpl.io/2ZXQ0YJ)
 */

const Bullets = ({ data }) => (
  <El>
    {data.map((datum, index) => {
      if (datum.subBullets) {
        return (
          <ListEl>
            {datum.bullet}
            <Bullets key={index} data={datum.subBullets} />
          </ListEl>
        );
      }
      return <ListEl key={datum.bullet}>{datum.bullet}</ListEl>;
    })}
  </El>
);

Bullets.propTypes = {
  /** Please see the structure of its data in 'View Code'*/
  data: PropTypes.array.isRequired,
};

/** @component */
export default Bullets;
