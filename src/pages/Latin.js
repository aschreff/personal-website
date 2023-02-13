import React, { useState } from 'react';

import Page from './Page';
import LatinTranslationContent from '../components/latin/LatinTranslationContent';
import { 
  ArsAmatoriaBookOneLines, 
  ArsAmatoriaBookTwoLines, 
  ArsAmatoriaBookThreeLines, 
  RemediaAmorisLines,
} from '../Constants';

import { Row, Col, Typography, Image, Menu } from 'antd';
import styled from 'styled-components';

const { Paragraph } = Typography;

/**
 * Page for Latin translations
 * @returns JSX component of my translation of Ovid's works
 */
const Latin = () => {
  const [selectedKeys, setSelectedKeys] = useState(['1']);

  return (
    <Page title={'Latin Translations'}>
      <Row>
        <ImageContainer xs={24} sm={24} md={12} lg={8} xl={6} xxl={6}>
          <Image
            src={'/imgs/ovid.jpg'}
            preview={false}
            width={200}
            height={200}
          />
        </ImageContainer>
        <LatinOverview xs={24} sm={24} md={12} lg={16} xl={18} xxl={18}>
          <Paragraph>
            One of my interests is Latin. My favorite poet is Ovid, who wrote
            such works as Metamorphoses, Ars Amatoria, Amores, and Remedia
            Amoris. In my free time, I like to create original translations of
            his works. Currently, I am finished with Ars Amatoria Book I, most
            of Ars Amatoria Book II, and a small portions of Ars Amatoria Book
            III and Remedia Amoris. You can check out my progress below.
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
    </Page>
  );
};

const ImageContainer = styled(Col)`
  text-align: center;
  padding: 10px;
`;

const LatinOverview = styled(Col)`
  margin: auto;
`;

export default Latin;
