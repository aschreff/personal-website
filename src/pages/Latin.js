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
  Catullus21Lines,
  Catullus22Lines,
  Catullus23Lines,
  Catullus24Lines,
  Catullus25Lines,
  Catullus26Lines,
  Catullus27Lines,
  Catullus28Lines,
  Catullus29Lines,
  Catullus30Lines,
  Catullus31Lines,
  Catullus32Lines,
  Catullus33Lines,
  Catullus34Lines,
  Catullus35Lines,
  Catullus36Lines,
  Catullus37Lines,
  Catullus38Lines,
  Catullus39Lines,
  Catullus40Lines,
  Catullus41Lines,
  Catullus42Lines,
  Catullus43Lines,
  Catullus44Lines,
  Catullus45Lines,
  Catullus46Lines,
  Catullus47Lines,
  Catullus48Lines,
  Catullus49Lines,
  Catullus50Lines,
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
            <Title level={5}>Catullus I</Title>
            <LatinTranslationContent lines={Catullus1Lines} />
          </CatullusContainer>
          <CatullusContainer>
            <Title level={5}>Catullus II [IIa]</Title>
            <LatinTranslationContent lines={Catullus2Lines} />
          </CatullusContainer>
          <CatullusContainer>
            <Title level={5}>Catullus III</Title>
            <LatinTranslationContent lines={Catullus3Lines} />
          </CatullusContainer>
          <CatullusContainer>
            <Title level={5}>Catullus IV</Title>
            <LatinTranslationContent lines={Catullus4Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5}>Catullus V</Title>
             <LatinTranslationContent lines={Catullus5Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5}>Catullus VI</Title>
             <LatinTranslationContent lines={Catullus6Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5}>Catullus VII</Title>
             <LatinTranslationContent lines={Catullus7Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5}>Catullus VIII</Title>
             <LatinTranslationContent lines={Catullus8Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5}>Catullus IX</Title>
             <LatinTranslationContent lines={Catullus9Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5}>Catullus X</Title>
             <LatinTranslationContent lines={Catullus10Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5}>Catullus XI</Title>
             <LatinTranslationContent lines={Catullus11Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5}>Catullus XII</Title>
             <LatinTranslationContent lines={Catullus12Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5}>Catullus XIII</Title>
             <LatinTranslationContent lines={Catullus13Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5}>Catullus XIV [XIVa]</Title>
             <LatinTranslationContent lines={Catullus14Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5}>Catullus XV</Title>
             <LatinTranslationContent lines={Catullus15Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5}>Catullus XVI</Title>
             <LatinTranslationContent lines={Catullus16Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5}>Catullus XVII</Title>
             <LatinTranslationContent lines={Catullus17Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5}>Catullus XVIII - XX</Title>
             <LatinTranslationContent lines={Catullus18To20Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5}>Catullus XXI</Title>
             <LatinTranslationContent lines={Catullus21Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5}>Catullus XXII</Title>
             <LatinTranslationContent lines={Catullus22Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5}>Catullus XXIII</Title>
             <LatinTranslationContent lines={Catullus23Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5}>Catullus XXIV</Title>
             <LatinTranslationContent lines={Catullus24Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5}>Catullus XXV</Title>
             <LatinTranslationContent lines={Catullus25Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5}>Catullus XXVI</Title>
             <LatinTranslationContent lines={Catullus26Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5}>Catullus XXVII</Title>
             <LatinTranslationContent lines={Catullus27Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5}>Catullus XXVIII</Title>
             <LatinTranslationContent lines={Catullus28Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5}>Catullus XXIX</Title>
             <LatinTranslationContent lines={Catullus29Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5}>Catullus XXX</Title>
             <LatinTranslationContent lines={Catullus30Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5}>Catullus XXXI</Title>
             <LatinTranslationContent lines={Catullus31Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5}>Catullus XXXII</Title>
             <LatinTranslationContent lines={Catullus32Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5}>Catullus XXXIII</Title>
             <LatinTranslationContent lines={Catullus33Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5}>Catullus XXXIV</Title>
             <LatinTranslationContent lines={Catullus34Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5}>Catullus XXXV</Title>
             <LatinTranslationContent lines={Catullus35Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5}>Catullus XXXVI</Title>
             <LatinTranslationContent lines={Catullus36Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5}>Catullus XXXVII</Title>
             <LatinTranslationContent lines={Catullus37Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5}>Catullus XXXVIII</Title>
             <LatinTranslationContent lines={Catullus38Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5}>Catullus XXXIX</Title>
             <LatinTranslationContent lines={Catullus39Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5}>Catullus XL</Title>
             <LatinTranslationContent lines={Catullus40Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5}>Catullus XLI</Title>
             <LatinTranslationContent lines={Catullus41Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5}>Catullus XLII</Title>
             <LatinTranslationContent lines={Catullus42Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5}>Catullus XLIII</Title>
             <LatinTranslationContent lines={Catullus43Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5}>Catullus XLIV</Title>
             <LatinTranslationContent lines={Catullus44Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5}>Catullus XLV</Title>
             <LatinTranslationContent lines={Catullus45Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5}>Catullus XLVI</Title>
             <LatinTranslationContent lines={Catullus46Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5}>Catullus XLVII</Title>
             <LatinTranslationContent lines={Catullus47Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5}>Catullus XLVIII</Title>
             <LatinTranslationContent lines={Catullus48Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5}>Catullus XLIX</Title>
             <LatinTranslationContent lines={Catullus49Lines} />
          </CatullusContainer>
          <CatullusContainer>
             <Title level={5}>Catullus L</Title>
             <LatinTranslationContent lines={Catullus50Lines} />
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
