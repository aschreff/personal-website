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
      5000
    );
    setTimeout(
      () =>
        setLoadingMessage(
          "Just kidding, there's no data to fetch, this is a static website..."
        ),
      10000
    );
    setTimeout(
      () =>
        setLoadingMessage(
          'But if there was data to fetch, this would be what it would look like...'
        ),
      15000
    );
    setTimeout(
      () =>
        setLoadingMessage(
          'Anyways, sorry for being annoying, this site will open soon...'
        ),
      20000
    );
    setTimeout(() => (window.location.href = '/home'), 25000);
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
