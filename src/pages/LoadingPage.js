import React, { useEffect, useState } from 'react';

import { Layout, Typography, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Content } = Layout;
const { Title } = Typography;

/**
 * Loading page that the user is first brought to. Fakes fetching data with a loading spinner before redirecting the
 * user to the main site.
 * @returns JSX component of a fake loading page
 */
const LoadingPage = () => {
  const [loadingMessage, setLoadingMessage] = useState(
    'Hello, welcome to my personal website...'
  );

  useEffect(() => {
    setTimeout(
      () => setLoadingMessage('Please wait while we are fetching data...'),
      4000
    );
    setTimeout(
      () =>
        setLoadingMessage(
          "Just kidding, there's no data to fetch, but if there was, this would be what it would look like..."
        ),
      8000
    );
    setTimeout(
      () => setLoadingMessage('Alright, directing you to the home page now...'),
      12000
    );
    setTimeout(() => (window.location.href = '/home'), 14000);
  }, []);

  return (
    <FullScreenLayout>
      <StyledContent>
        <Title level={2}>{loadingMessage}</Title>
        <Spin indicator={<StyledSpinner />} />
      </StyledContent>
    </FullScreenLayout>
  );
};

const FullScreenLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
  text-align: center;
`;

const StyledContent = styled(Content)`
  margin-top: 10rem;
`;

const StyledSpinner = styled(LoadingOutlined)`
  font-size: 40px;
  color: black;
`;

export default LoadingPage;
