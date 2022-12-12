import React, { useState } from 'react';
import debounce from 'lodash.debounce';

import Page from './Page';

import { Row, Col, Image, Typography, Divider } from 'antd';
import DesktopOutlined from '@ant-design/icons/lib/icons/DesktopOutlined';
import BookOutlined from '@ant-design/icons/lib/icons/BookOutlined';
import ToolOutlined from '@ant-design/icons/lib/icons/ToolOutlined';
import BankOutlined from '@ant-design/icons/lib/icons/BankOutlined';
import styled from 'styled-components';

const { Paragraph, Title } = Typography;

const MAX_WIDTH_FOR_COLLAPSED_BY_DEFAULT = 615;

/**
 * Home page of site including a brief intro, picture, and links to other pages
 * @returns JSX component of home page
 */
const Home = () => {
  const [smallScreen, setSmallScreen] = useState(
    window.innerWidth < MAX_WIDTH_FOR_COLLAPSED_BY_DEFAULT
  );

  const smallScreenCallback = debounce(
    () =>
      setSmallScreen(window.innerWidth < MAX_WIDTH_FOR_COLLAPSED_BY_DEFAULT),
    500
  );

  window.addEventListener('resize', smallScreenCallback);

  return (
    <Page title={'Andrew Schreffler'}>
      <TopRow>
        <ImageContainer xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <StyledImage
            src={'/imgs/cover-photo.jpg'}
            preview={false}
            width={smallScreen ? 200 : 300}
            height={smallScreen ? 200 : 300}
          />
        </ImageContainer>
        <OverviewColumn xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <Title level={3}>Software Engineer</Title>
          <Divider />
          <Paragraph>
            Full-stack developer with a focus on front-end web development. I
            also have experience in automated systems. I've previously worked
            for DoorDash, Bbot (an online ordering start-up), and Cabot Oil and
            Gas.
          </Paragraph>
          <Divider />
          <Paragraph>
            Some of my other interests are cooking, guitar, trail running,
            hiking, Latin, and traveling.
          </Paragraph>
        </OverviewColumn>
      </TopRow>
      <Row justify={'space-between'}>
        <Col
          md={{ offset: 4, span: 4 }}
          lg={{ offset: 4, span: 4 }}
          xl={{ offset: 4, span: 4 }}
          xxl={{ offset: 4, span: 4 }}
        >
          <StyledWorkIcon
            onClick={() => (window.location.href = '/work-experience')}
          />
        </Col>
        <Col md={4} lg={4} xl={4} xxl={4}>
          <StyledEducationIcon
            onClick={() => (window.location.href = '/education-and-skills')}
          />
        </Col>
        <Col md={4} lg={4} xl={4} xxl={4}>
          <StyledProjectIcon
            onClick={() => (window.location.href = '/projects')}
          />
        </Col>
        <Col md={4} lg={4} xl={4} xxl={4}>
          <StyledLatinIcon
            onClick={() => (window.location.href = '/latin-translations')}
          />
        </Col>
      </Row>
    </Page>
  );
};

const ImageContainer = styled(Col)`
  text-align: center;
`;

const StyledImage = styled(Image)`
  padding: 10px;
  border: 2px solid black;
`;

const TopRow = styled(Row)`
  margin: 5rem 2rem 8rem 2rem;
`;

const OverviewColumn = styled(Col)`
  margin: auto;
`;

const StyledWorkIcon = styled(DesktopOutlined)`
  font-size: 25px;
  padding: 10px;
  border: 3px solid black;
  border-radius: 15px;
`;

const StyledEducationIcon = styled(BankOutlined)`
  font-size: 25px;
  padding: 10px;
  border: 3px solid black;
  border-radius: 15px;
`;

const StyledProjectIcon = styled(ToolOutlined)`
  font-size: 25px;
  padding: 10px;
  border: 3px solid black;
  border-radius: 15px;
`;

const StyledLatinIcon = styled(BookOutlined)`
  font-size: 25px;
  padding: 10px;
  border: 3px solid black;
  border-radius: 15px;
`;

export default Home;
