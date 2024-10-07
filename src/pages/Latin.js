import React, { useState } from 'react';

import Page from './Page';
import LatinTranslationContent from '../components/latin/LatinTranslationContent';
import { 
  ArsAmatoriaBookOneLines, 
  ArsAmatoriaBookTwoLines, 
  ArsAmatoriaBookThreeLines, 
  RemediaAmorisLines,
  CatullusOneLines,
  CatullusTwoLines,
  CatullusThreeLines,
  CatullusFourLines,
  CatullusFiveLines,
} from '../Constants';

import { Row, Col, Typography, Menu } from 'antd';
import styled from 'styled-components';
import { Content } from 'antd/es/layout/layout';

const { Paragraph,  Title } = Typography;

/**
 * Page for Latin translations
 * @returns JSX component of my translation of Ovid's works
 */
const Latin = () => {
  const [selectedKeys, setSelectedKeys] = useState(['1']);

  return (
    <Page title={'Latin Translations'}>
      <Row>
        <LatinOverview xs={24} sm={24} md={12} lg={16} xl={18} xxl={18}>
          <Paragraph>
            One of my interests is Latin. My favorite poet is Ovid, who wrote
            such works as Metamorphoses, Ars Amatoria, Amores, and Remedia
            Amoris. In my free time, I like to create original translations of
            his works. I have finished translating all of Ars Amatoria. I am
            currently working on translating the poetry of another one of my
            favorite poets, Catullus.
          </Paragraph>
        </LatinOverview>
      </Row>
      <Row>
        <Col span={24}>
          <Menu
            mode={'horizontal'}
            selectedKeys={selectedKeys}
            onSelect={({ key }) => setSelectedKeys([key])}
          >
            <Menu.Item key={1}>Ars Amatoria, Book I</Menu.Item>
            <Menu.Item key={2}>Ars Amatoria, Book II</Menu.Item>
            <Menu.Item key={3}>Ars Amatoria, Book III</Menu.Item>
            <Menu.Item key={4}>Remedia Amoris</Menu.Item>
            <Menu.Item key={5}>Poetry of Catullus</Menu.Item>
          </Menu>
        </Col>
      </Row>
      {selectedKeys.includes('1') && (
        <LatinTranslationContent lines={ArsAmatoriaBookOneLines} />
      )}
      {selectedKeys.includes('2') && (
        <LatinTranslationContent lines={ArsAmatoriaBookTwoLines} />
      )}
      {selectedKeys.includes('3') && (
        <LatinTranslationContent lines={ArsAmatoriaBookThreeLines} />
      )}
      {selectedKeys.includes('4') && (
        <LatinTranslationContent lines={RemediaAmorisLines} />
      )}
      {selectedKeys.includes('5') && (
        <Content>
          <CatullusContainer>
            <Title level={5} >Catullus I</Title>
            <LatinTranslationContent lines={CatullusOneLines} />
          </CatullusContainer>
          <CatullusContainer>
            <Title level={5} >Catullus II [IIA]</Title>
            <LatinTranslationContent lines={CatullusTwoLines} />
          </CatullusContainer>
          <CatullusContainer>
            <Title level={5} >Catullus III</Title>
            <LatinTranslationContent lines={CatullusThreeLines} />
          </CatullusContainer>
          <CatullusContainer>
            <Title level={5} >Catullus IV</Title>
            <LatinTranslationContent lines={CatullusFourLines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5} >Catullus V</Title>
             <LatinTranslationContent lines={CatullusFiveLines} />
          </CatullusContainer>
        </Content>
      )}
    </Page>
  );
};

const LatinOverview = styled(Col)`
  margin: auto;
`;

const CatullusContainer = styled.div`
  margin: 25px;
`

export default Latin;
