import React from 'react';

import { Layout } from 'antd';
import styled from 'styled-components';

const { Footer } = Layout;

/**
 * General footer for entire site.
 * @returns JSX footer component
 */
const CustomFooter = () => {
  return (
    <StyledFooter>Developed by Andrew Schreffler, Version 1.2.2</StyledFooter>
  );
};

const StyledFooter = styled(Footer)`
  text-align: center;
  &.ant-layout-footer {
    background-color: #eeeeee;
  }
`;

export default CustomFooter;
