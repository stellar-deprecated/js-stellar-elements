import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const GridEl = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: ${(props) => props.templateColumns};
  grid-gap: ${(props) => props.gap};
`;

const Grid = React.forwardRef(function Grid(
  { children, templateColumns, gap, ...props },
  ref,
) {
  return (
    <GridEl ref={ref} templateColumns={templateColumns} gap={gap} {...props}>
      {children}
    </GridEl>
  );
});

Grid.propTypes = {
  /**
   * Sets the 'grid-template-columns'
   */
  templateColumns: PropTypes.string,
  /**
   * Gap of the grid. A shorthand for 'grid-row-gap' and 'grid-column-gap'
   * For example, 'grid-gap: 15px 10px;' will have gap of 15px between the rows 10px between the columns
   */
  gap: PropTypes.string,
  children: PropTypes.node.isRequired,
};

/** @component */
export default Grid;
