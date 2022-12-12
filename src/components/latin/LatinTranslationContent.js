import React from 'react';
import PropTypes from 'prop-types';

import { Typography, Layout } from 'antd';
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
        <div key={index}>
          <Text>{line}</Text>
          <br />
        </div>
      ))}
    </PoemContainer>
  );
};

const PoemContainer = styled(Content)`
  margin: 25px;
`;

LatinTranslationContent.propTypes = {
  lines: PropTypes.array,
};

export default LatinTranslationContent;
