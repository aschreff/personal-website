import React, { useState } from 'react';

import Page from './Page';
import LatinTranslationContent from '../components/latin/LatinTranslationContent';
import { 
  ArsAmatoriaBookOneLines, 
  ArsAmatoriaBookTwoLines, 
  ArsAmatoriaBookThreeLines, 
  RemediaAmorisLines,
  Catullus1Lines,
  Catullus2Lines,
  Catullus3Lines,
  Catullus4Lines,
  Catullus5Lines,
  Catullus6Lines,
  Catullus7Lines,
  Catullus8Lines,
  Catullus9Lines,
  Catullus10Lines,
  Catullus11Lines,
  Catullus12Lines,
  Catullus13Lines,
  Catullus14Lines,
  Catullus15Lines,
  Catullus16Lines,
  Catullus17Lines,
  Catullus18To20Lines,
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
            <LatinTranslationContent lines={Catullus1Lines} />
          </CatullusContainer>
          <CatullusContainer>
            <Title level={5} >Catullus II [IIa]</Title>
            <LatinTranslationContent lines={Catullus2Lines} />
          </CatullusContainer>
          <CatullusContainer>
            <Title level={5} >Catullus III</Title>
            <LatinTranslationContent lines={Catullus3Lines} />
          </CatullusContainer>
          <CatullusContainer>
            <Title level={5} >Catullus IV</Title>
            <LatinTranslationContent lines={Catullus4Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5} >Catullus V</Title>
             <LatinTranslationContent lines={Catullus5Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5} >Catullus VI</Title>
             <LatinTranslationContent lines={Catullus6Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5} >Catullus VII</Title>
             <LatinTranslationContent lines={Catullus7Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5} >Catullus VIII</Title>
             <LatinTranslationContent lines={Catullus8Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5} >Catullus IX</Title>
             <LatinTranslationContent lines={Catullus9Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5} >Catullus X</Title>
             <LatinTranslationContent lines={Catullus10Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5} >Catullus XI</Title>
             <LatinTranslationContent lines={Catullus11Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5} >Catullus XII</Title>
             <LatinTranslationContent lines={Catullus12Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5} >Catullus XIII</Title>
             <LatinTranslationContent lines={Catullus13Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5} >Catullus XIV [XIVa]</Title>
             <LatinTranslationContent lines={Catullus14Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5} >Catullus XV</Title>
             <LatinTranslationContent lines={Catullus15Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5} >Catullus XVI</Title>
             <LatinTranslationContent lines={Catullus16Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5} >Catullus XVII</Title>
             <LatinTranslationContent lines={Catullus17Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5} >Catullus XVIII - XX</Title>
             <LatinTranslationContent lines={Catullus18To20Lines} />
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
