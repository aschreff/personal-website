import React, { useState } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

import SidebarNavigation from '../components/global/SidebarNavigation';
import CustomFooter from '../components/global/CustomFooter';

import { Layout, Typography, Image, Row, Col } from 'antd';
import LinkedinOutlined from '@ant-design/icons/lib/icons/LinkedinOutlined';
import IdcardOutlined from '@ant-design/icons/lib/icons/IdcardOutlined';
import styled from 'styled-components';

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const MAX_WIDTH_FOR_COLLAPSED_BY_DEFAULT = 576;

/**
 * General page component all pages use, includes a side bar, footer, and header
 * @param children JSX elements, any children passed in to be wrapped in the page
 * @param title string
 * @returns JSX component, page structure wrapping an page content
 */
const Page = ({ children, title }) => {
  const [collapsed, setCollapsed] = useState(
    window.innerWidth < MAX_WIDTH_FOR_COLLAPSED_BY_DEFAULT
  );

  const setCollapsedIfNecessary = debounce(() => {
    if (window.innerWidth < MAX_WIDTH_FOR_COLLAPSED_BY_DEFAULT && !collapsed) {
      setCollapsed(true);
    } else if (
      window.innerWidth > MAX_WIDTH_FOR_COLLAPSED_BY_DEFAULT &&
      collapsed
    ) {
      setCollapsed(false);
    }
  }, 500);

  window.addEventListener('resize', setCollapsedIfNecessary);

  return (
    <FullScreenLayout>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={250}
      >
        <Image src={'/imgs/logo.png'} preview={false} />
        {!collapsed && (
          <>
            <Row>
              <Col span={24}>
                <SiderTitle level={4}>Andrew Schreffler</SiderTitle>
              </Col>
            </Row>
            <IconRow>
              <LinkedInIcon
                onClick={() =>
                  window.open(
                    'https://www.linkedin.com/in/andrew-schreffler/',
                    '_blank'
                  )
                }
              />
              <ResumeIcon
                onClick={() =>
                  window.open(
                    'https://drive.google.com/file/d/1T3THzZC1cNXNu46UVrNYLGCkmU8yMtHu/view?usp=sharing',
                    '_blank'
                  )
                }
              />
            </IconRow>
          </>
        )}
        <SidebarNavigation />
      </Sider>
      <Layout>
        <StyledHeader>
          <StyledTitle level={2}>{title}</StyledTitle>
        </StyledHeader>
        <Content>{children}</Content>
        <CustomFooter />
      </Layout>
    </FullScreenLayout>
  );
};

const FullScreenLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
`;

const StyledHeader = styled(Header)`
  text-align: center;
  &.ant-layout-header {
    background-color: rgb(243, 243, 243);
  }
`;

const StyledTitle = styled(Title)`
  margin-top: 15px;
  margin-bottom: 15px;
`;

const IconRow = styled(Row)`
  display: flex;
  justify-content: space-between;
  margin-right: 4.5rem;
  margin-left: 4.5rem;
`;

const SiderTitle = styled(Title)`
  &.ant-typography {
    color: #ffffff;
  }
  text-align: center;
`;

const LinkedInIcon = styled(LinkedinOutlined)`
  color: #ffffff;
  font-size: 20px;
`;

const ResumeIcon = styled(IdcardOutlined)`
  color: #ffffff;
  font-size: 20px;
`;

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array,
};

export default Page;
