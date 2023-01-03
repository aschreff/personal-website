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
    'This method, this area will be stamped by my royal chariot,',
    'This limit will be overwhelmed by my wheel, having been urged on.',
    'And while it is allowed that you may go anywhere with loosened reins,',
    'Choose someone to whom you would say, "You alone satisfy me."',
    'This girl will not come to you, carried by feeble winds,',
    'A proper girl must be sought with your eyes.',
    'A hunter knows well, where he must aim his nets for a deer,',
    'He knows well, in which hollow a bear keeps, gnashing his teeth.',
    'Shrubs have been known to bird-catchers, and he who checks hooks,',
    'Knows which waters are dwelled in by schools of fish.',
    'You too, who seek the capacity for long love,',
    'First learn in which place a girl is most frequent.',
    'I will not order you, searching, to give your sails to the wind,',
    'Nor is there a long path that must be trodden by you to find her.',
    'Let Perseus carry Andromeda away from the black Indians,',
    'And let a Grecian girl be seized by a Phrygian man.',
    'Thus, Rome will give you so many girls, that you will say,',
    'This city has everything there ever was in the world."',
    'As many fields as Gargara has, as many bunches fruit as Methynma,',
    'As many fish in the ocean, and birds hidden in the foliage.',
    'As many stars in the sky, Rome has that many girls,',
    'The mother of Aeneas was founded in this city for them.',
    'Whether you are captivated by ones in their prime and still increasing years,',
    'A fair woman will arrive before your eyes.',
    'Or if you desire a young girl, a thousand young girls will please you,',
    'You will be compelled to have not known your own desires.',
    'Or if a late and older age serves you better,',
    'This too, believe me, will be a more abundant flock.',
    'Do you, lazy, only walk under the shadow of Pompey,',
    'When the sun approaches the backs of the Lions of Hercules?',
    "Or when the mother has added her own gifts to her son's gifts,",
    'A work rich with foreign marble.',
    'And let not the portico in Livio be shunned by you, which,',
    'Strewn with ancient tablets, carries the name of its founder',
    'And in which the granddaughters of Belides, risked to prepare death for their wretched cousins,',
    'And in which their savage father stands with drawn sword.',
    'Nor let Adonis, having cried over Venus, pass by you,',
    'Nor let the seventh sacred rite of the Syrian Jew.',
    "And don't flee from the Memphian temple of the linen-wearing maiden,",
    'She makes many girls what she herself was to Jove.',
    'Even the forums (who can believe it?) are ripe for love,',
    'All too often has a flame been found in a noisy forum.',
    'Where Appias, placed under the temple of Venus,',
    'Made of marble, beats the air with its precise waters,',
    'In that place, often is a consult seized by love,',
    'And he, who admonished others, fails to chastise himself.',
    'Often in that eloquent place, his words abandon him,',
    'And new things come, and his cause must be delivered.',
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
