import React from "react";
import PropTypes from 'prop-types';

import { Typography,  Layout } from "antd";
import styled from 'styled-components';

const { Content } = Layout;
const { Text } = Typography;

/**
 * Component for transforming an array of lines into a nicely formatted poem.
 * @param lines array of strings
 * @returns JSX component that displays a poem.
 */
const LatinTranslationContent = ({ lines }) => {
  return (
    <PoemContainer>
      {lines.map((line, index) => (
        <div>
         <PoemLine key={index} shouldIndent={index % 2 === 1}>{line}</PoemLine>
         <br />
        </div>
      ))}
    </PoemContainer>
  )
};

const PoemContainer = styled(Content)`
  margin: 25px;
`

const PoemLine = styled(Text)`
  margin-left: ${props => (props.shouldIndent ? '10px' : 0)};
`

LatinTranslationContent.propTypes = {
  lines: PropTypes.array,
}

export default LatinTranslationContent;