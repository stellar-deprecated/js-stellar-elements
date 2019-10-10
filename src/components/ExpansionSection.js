import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ExpansionSectionEl = styled.div`
  display: block;
  overflow: hidden;
  height: ${(props) => (props.isExpanded ? `${props.height}px` : 0)};
  transition: height 250ms ease-out;
`;

const ExpansionSection = React.forwardRef(function ExpansionSection({
  children,
  isExpanded,
  ...props
}) {
  const sectionRef = React.useRef(null);
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    setHeight(sectionRef.current.scrollHeight);
  }, [height]);

  return (
    <ExpansionSectionEl
      ref={sectionRef}
      height={height}
      isExpanded={isExpanded}
      {...props}
    >
      {children}
    </ExpansionSectionEl>
  );
});

ExpansionSection.propTypes = {
  /**
   * If true, expands the section, otherwise collapse it. Setting this prop enables control over the panel.
   */
  isExpanded: PropTypes.bool,
  /**
   * The content of the expansion component.
   */
  children: PropTypes.node.isRequired,
};

/** @component */
export default ExpansionSection;
