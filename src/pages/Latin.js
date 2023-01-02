import React, { useState } from 'react';

import Page from './Page';
import LatinTranslationContent from '../components/latin/LatinTranslationContent';

import { Row, Col, Typography, Image, Menu } from 'antd';
import styled from 'styled-components';

const { Paragraph } = Typography;

/**
 * Page for Latin translations
 * @returns JSX component of my translation of Ovid's works
 */
const Latin = () => {
  const [selectedKeys, setSelectedKeys] = useState(['1']);

  const ArsAmatoriaBookOneLines = [
    'If anyone of my people should not know the art of loving,',
    'He should read this and, having learned by reading, he may love.',
    'By this art, ships may be moved more swiftly than by oar or sail,',
    'By this art, a chariot is lighter, by this art, love must be ruled.',
    'Automedon was primed to his chariot with flowing reins,',
    'Tiphys in Haemonia was the master of his ship.',
    'Venus has placed me in command as the mastermind of tender love,',
    'Like Typhis and Automedon, I shall be devoted to love.',
    'Certainly he is untamed and will fight me often,',
    'But he is a boy, a tender age, easy to be ruled',
    'The son of Phllyra learned the boy Achilles at the lyre,',
    'And crushed his savage heart with a peaceful art.',
    'Someone who so often terrified his enemies, scared his allies,',
    'He is believed to have feared an aged, old man.',
    'That man supplied the hands which Hector felt,',
    'Enacted with blows ordered by his master.',
    'As Chiron was of the Aeacidae, I am the leader of Love,',
    'One, a cruel boy, the other, born of a goddess.',
    'But yet, the neck of the bull is burdened by the plow',
    'And the reins of a great horse are worn away by its teeth.',
    'And let Cupid yield to me, however much he may wound my heart,',
    'With his bow, or cast off my boasted flames of love.',
    'With this, Cupid pierced me, with this, he so violently burned me,',
    'I, made better by this, will be the avegner of my wound of love.',
    'I would not feign that these skills were given to me by you, Phoebus,',
    'Nor are we taught by the voice of a fluttering bird.',
    'Neither Clio nor the sisters of Clio have appeared to me,',
    'Ready to shepherd my flocks in your valleys, Ascra.',
    'Experience moves this work; Heed an expert soothsayer,',
    'I shall sing the truth; you may steal my work, Mother of Love.',
    'Be distant, girls with thin ribbons, a sign of chasity,',
    'And you who cover the middle of your foot with a long band.',
    'We wil celebrate a protected Venus, and of thefts conceded,',
    'And there will be no shame in my song.',
    'First, try to seek out a task, whom you wish to love,',
    'You, a soldier, who now comes for the first time into these new arms.',
    'After that, the next task if to win over a girl by satifsying her,',
    'Thirdly, that we make that love last a long time.',
    ''
  ];

  const ArsAmatoriaBookTwoLines = [
    'Say, "Look Paean", and say, "Look Paean" again',
    'The prized treasure has fallen into my traps',
    'The prosperous lover lends my poems with a fresh palm',
    'Having been preferred to Hesiod and old Homer',
    '...',
  ];

  const ArsAmatoriaBookThreeLines = [
    '...',
    '...',
    'How I almost forgot to warn, that your armpits shall not stink',
    'Of a savage, goat smell, nor shall your legs be hairy',
    'But I don not teach Caucasian girls',
    'Who drink the waters of the Mysian River',
    '...',
  ];

  const RemediaAmorisLines = [
    '...',
    '...',
    'Of course, "I enourage you to have two lovers at the same time',
    'And if you are brave, you might even have more',
    'When a divided heart is called by two different girls',
    'One love always absorbs the strength of the other',
    '...',
  ];

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
