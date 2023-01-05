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
    'Venus laughs at him from her bordering temples,',
    'He, who was just now a patron, now desires to be a client.',
    'But you, hunt in the curved theaters especially,',
    'These places are more abundant than your prayer.',
    'There, you may upon what you love, what you can play with,',
    'What you may once touch, what you may wish to hold.',
    'And so, as a common ant returns through the long crowd,',
    'While it carries the usual food in its grain-bearing mouth,',
    'Or as a swarm of bees, having found their woodlands and fragrant pastures,',
    'Fly through flowers and the topmost thyme,',
    'So too has the finest woman rushed to the famed games,',
    'This abundance has often devoted attention to my judgment.',
    'They come to the spectacle, the same as they come to be spectated,',
    'That place of festival holds losses of chastity.',
    'You first made the passionate games, Romulus,',
    'When the Sabine women, raped, gratified unmarried men.',
    'Then, the curtains were not hanging in the marble theater,',
    'And the stage had not been red with liquid saffron.',
    'There the foliage, which well-wooded Palatia carried,',
    'Had been simply arranged, a stage without art.',
    'The people sat on steps made of earth,',
    'Foliage covering their shaggy heads, as they pleased.',
    'They look back, and observe with their own eyes, each for themselves,',
    'The girl whom he wants, and much moved in his silent heart.',
    'And thrice a dancer beats the leveled ground with her foot,',
    'With a Tuscan piper showing the coarse way.',
    'In the middle of the applause (applauses then were devoid of skill),',
    'The king have the sought-after signals to the people for plunder.',
    'At once, they spring up, revealing their souls in a commotion,',
    'And grab the passionate hands of the virgins.',
    'As doves, a most timid crowd, flee from eagles,',
    'And as a young lamb flees from wolves, having been detected,',
    'Thus, those girls feared the men, rushing them without law,',
    'And it was unaltered in none, who had their color before.',
    'For there was one fear, but not one face of fear,',
    'Some tear their hair, others sit without a soul.',
    'One ill-omened girl becomes quiet, another calls her mother in vain,',
    'This one cries, this one is speechless, this one stays, that one flees.',
    'The raped girls are led away, with the spoils of nuptiality,',
    'And fear itself can make many suitable.',
    'If one would fight back a wanton man and deny her partner,',
    'The man himself would bear her, suffered away in his greedy bosom.',
    'And thus said, "Why damage your soft eyes with tears?',
    'As your father is to your mother, I will be this to you."',
    'Romulus, you alone knew to give these gifts to your soldiers,',
    'If you had given these gifts to me, I would have been a soldier.',
    'Of course, from that, the theaters were with the usual practices,',
    'But even now, they still remain deceitful for the fair.',
    'And do not let the nobles contest of horses evade you,',
    'The huge circus offers many girls to the people.',
    'Nothing is useful for fingers, through which you whisper secrets,',
    'Nor must a sign be acknowledged by you, with a nod.',
    'Sit close by your woman, with nothing forbidding,',
    'Bring yours to her thigh, which you can hold all the while.',
    "And better, even if you don't wish, the line forces her close,",
    'So she must be touched by you, by the nature of the place.',
    'Here friends should be sought by you with the origin of talk,',
    'And let public words move your first songs.',
    'Let yourself inquirely, eagerly, whose horses are arriving,',
    "And don't delay, favor what she favors, whatever it may be.",
    'But when the crowded procession of ivory gods will go by,',
    'Applaud with your hand favoring your mistress, Venus.',
    "And as it happens, if by chance dust has sprayed into your girl's warmth,",
    'It must be case out with your fingers.',
    'And if there was no dust, cast out nothing,',
    'Let anything be a proper cause for your service.',
    'If they linger with their cloaks having dropped to the ground,',
    'Pick it up and bear it, attentive, from the dirty ground.',
    'Immediately, a reward for your service, with the girl allowing,',
    'They touch their legs, which should be seen by your eyes',
    'In addition, look back and some man will sit behind you with whomever,',
    "Don't let him press her soft baackside with his opposite knee.",
    'Small matters captivate light minds, it was useful to many,',
    'To have arranged her cushion with a gentle hand.',
    'And it is useful to move the breeze with a light fan,',
    'And to place hollow stools under her delicate feet.',
    'Both the circus and the sad sand, spread in the troubled forum,',
    'Will be a cause of chance for these new loves.',
    'The boy of Venus often fought in that arena,',
    'And he who saw his wounds, has his wounds.',
    'While he talks, and touches her hand, and asks for a pamphlet,',
    'And asks, after placing a bet, which one would win.',
    'He groaned, wounded, and felt the flying spear,',
    'And he himself became part of the tribute.',
    'Who, when Caesar, in the echo of a naval battle,',
    'Merely introduced the Greek and Persian rafts?',
    'Of course the young man came from one side of the sea,',
    'The girls from the other, and the whole world was in the city.',
    'Who, in that crowd did not find someone whom they would love?',
    'Alas, how love, after arriving, tormented so many!',
    'Look, Caesar prepares to add that which was absent to our conquered world',
    'The far East, you will be ours, Parthia, you will pay the penalty.',
    'Rejoice, tombs of Crassus and standards,',
    'Which did not well endure Barbarian hands.',
    'Our avenger is here, and he declares himself our leader in his prime years',
    'And a boy does not discuss war agendas with a boy',
    'Cowards, refrain from counting the birthdays of the gods,',
    'The virtue of Caesar befell before the day.',
    'His divine talent emerges more quickly than his years,',
    'And badly bears damages of cowardly delay.',
    'Hercules was small and overwhelmed two serpents with his hands,',
    'And now as worthy of Jove in his cradle.',
    "Now also, weren't you a boy, Bacchus, how old were you,",
    'When India, after being conquered, feared your wands?',
    'With the auspices and years of your fathers, boy, you will move to arms,',
    'With the auspices and years of you fathers, you will conquer.',
    'You are indebted to such great beginnings, under so great a name,',
    'Now, a young leader, then soon, to be an old man.',
    'When your brothers are for you, avenge your wounded brothers,',
    'And when your father is for you, uphold the duties of your fathers.',
    "Yours and your homeland's father dressed himself in arms for you,",
    'His enemy seizes kingdoms from an unwilling parent.',
    'You carry pious spears, that one, wicked arrows,',
    'Justice and piety will stand for your standards.',
    'The Parthians are conquered for a reason, let them be conquered by arms,',
    'Let my leader add the Eastern resources to Latium',
    'Father Mars and Father Caesar, give your power for marching',
    'For one is a god to you all, the other will be.',
    'Behold, I surmise, you conquer, and I shall deliver these vowful songs,',
    'And you must be celebrated by me, with my big mouth.',
    'Stand fast and incite you battle lines with my words,',
    '(Oh let my words not lack your courage).',
    'I will speak of Parthian asses and Roman hearts,',
    'And spears which our enemy throws from a stolen horse.',
    'You who flees to conquer, what do you leave behind in defeat, Parthia?',
    'Parthia, your god of war now has a bad omen.',
    'Therefore, that day will be, on which you, most noble of all,',
    'Will go, clad in gold, on four snowy horses.',
    'The generals will go before you, necks burdened by chains,',
    'So they cannot be protected in retreat, in which you are first.',
    'Joyful young mean and girls, mixed together, will watch,',
    'And that day will cheer the hearts of all.',
    'And when one of those asks the names of the kings,',
    'Which places, waters, and mountains are born to them,',
    'Answer all, not as if someone will ask such a thing,',
    'And whatever you do not know, recall it as if known.',
    'Here is Euphrates, having girded his brow with a reed,',
    'That will be Tigris, whose blue hair flays out.',
    'I make these Armenians, that is the Danaeia of the Persians,',
    'That was a city in the Achaean valleys.',
    'That one or that one, the generals, their names will be what you say,',
    'If you will be able, true ones, if not, still fitting ones.',
    'With the tables laid, your guests present you an opportunity,',
    'There is something besides wines you may seek there.',
    'Often a purple love hs overwhelmed the horns of Bacchus,',
    'Brought in by gentle arms, as he lay there.',
    '',
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
