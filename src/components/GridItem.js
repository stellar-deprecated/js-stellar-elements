import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const GridItemEl = styled.div`
  display: flex;
  grid-column: ${(props) => props.column};
  grid-row: ${(props) => props.row};
`;

const GridItem = React.forwardRef(function GridItem(
  { column, row, ...props },
  ref,
) {
  return <GridItemEl ref={ref} column={column} row={row} {...props} />;
});

GridItem.propTypes = {
  /**
   * For 'grid-column' attribute
   * Tells the auto-placement algorithm to fill in each column in turn, adding new columns as necessary
   */
  column: PropTypes.string,
  /**
   * * For 'grid-row' attribute
   * Tells the auto-placement algorithm to fill in each row in turn, adding new rows as necessary (default)
   */
  row: PropTypes.string,
};

/** @component */
export default GridItem;
