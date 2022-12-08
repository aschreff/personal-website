import React from "react";

import Page from "./Page";

import { Row, Col, Image, Typography, Divider } from "antd";
import DesktopOutlined from "@ant-design/icons/lib/icons/DesktopOutlined";
import BookOutlined from "@ant-design/icons/lib/icons/BookOutlined";
import ToolOutlined from "@ant-design/icons/lib/icons/ToolOutlined";
import BankOutlined from "@ant-design/icons/lib/icons/BankOutlined";
import styled from 'styled-components';

const { Paragraph, Title } = Typography;

/**
 * Home page of site including a brief intro, picture, and links to other pages
 * @returns JSX component of home page
 */
const Home = () => {
  return (
    <Page title={'Andrew Schreffler'}>
      <TopRow>
        <ImageContainer span={12}>
          <StyledImage
            src={'/imgs/cover-photo.jpg'}
            preview={false}
            width={300}
            height={300}
          />
        </ImageContainer>
        <OverviewColumn span={12}>
          <Title level={3}>Software Engineer</Title>
          <Divider />
          <Paragraph>
            Full-stack developer with a focus on front-end web development. I also have experience in automated systems.
            I've previously worked for DoorDash, Bbot (an online ordering start-up), and Cabot Oil and Gas.
          </Paragraph>
          <Divider />
          <Paragraph>
            Some of my other interests are cooking, guitar, trail running, hiking, Latin, and traveling.
          </Paragraph>
        </OverviewColumn>
      </TopRow>
      <IconRow>
        <StyledWorkIcon onClick={() => window.location.href = '/work-experience'}/>
        <StyledEducationIcon onClick={() => window.location.href = '/education-and-skills'}/>
        <StyledProjectIcon onClick={() => window.location.href = '/projects'}/>
        <StyledLatinIcon onClick={() => window.location.href = '/latin-translations'}/>
      </IconRow>
    </Page>
  )
}

const ImageContainer = styled(Col)`
  text-align: center;
`

const StyledImage = styled(Image)`
  padding: 10px;
  border: 2px solid black;
`

const IconRow = styled(Row)`
  display: flex;
  justify-content: space-between;
  margin-right: 20rem;
  margin-left: 20rem;
  margin-top: 8rem;
`

const TopRow = styled(Row)`
  margin: 5rem 2rem 5rem 2rem;
`

const OverviewColumn = styled(Col)`
  margin: auto;
`

const StyledWorkIcon = styled(DesktopOutlined)`
  font-size: 25px;
  padding: 10px; 
  border: 3px solid black; 
  border-radius: 15px;
`

const StyledEducationIcon = styled(BankOutlined)`
  font-size: 25px;
  padding: 10px; 
  border: 3px solid black; 
  border-radius: 15px;
`

const StyledProjectIcon = styled(ToolOutlined)`
  font-size: 25px;
  padding: 10px; 
  border: 3px solid black; 
  border-radius: 15px;
`

const StyledLatinIcon = styled(BookOutlined)`
  font-size: 25px;
  padding: 10px; 
  border: 3px solid black; 
  border-radius: 15px;
`

export default Home;