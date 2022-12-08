import React from 'react';

import Page from './Page';
import GeneralContentRow from '../components/global/GeneralContentRow';

import { Tag } from 'antd';
import styled from 'styled-components';

/**
 * Education and Skills page of the site
 * @returns JSX component of education and skills overview
 */
const EducationAndSkills = () => {
  const education = [
    {
      title: 'Carnegie Mellon University',
      year: '2016-2020',
      descriptions: [
        {
          type: 'paragraph',
          content:
            'I attended Carnegie Mellon University and graduated with a BS in Chemical Engineering, with a GPA of 3.45. I was a member of the Sigma Nu Fraternity, holding multiple positions including President and Treasurer.',
        },
      ],
      image: '/imgs/cmu.png',
    },
    {
      title: 'Glenelg Country School',
      year: '2012-2016',
      descriptions: [
        {
          type: 'paragraph',
          content:
            'I attended Glenelg Country School for high school. I finished with a GPA of 4.70. I participated in cross country, baseball, musical theater, and science olympiad.',
        },
      ],
      image: '/imgs/gcs.png',
    },
  ];

  const skills = [
    {
      title: 'Professional Skills',
      descriptions: [
        {
          type: 'tags',
          content: [
            <StyledTag color={'red'}>Python</StyledTag>,
            <StyledTag color={'red'}>JavaScript</StyledTag>,
            <StyledTag color={'red'}>TypeScript</StyledTag>,
            <StyledTag color={'red'}>CSS</StyledTag>,
            <StyledTag color={'red'}>PHP</StyledTag>,
            <StyledTag color={'red'}>MATLAB</StyledTag>,

            <StyledTag color={'cyan'}>Django</StyledTag>,
            <StyledTag color={'cyan'}>React</StyledTag>,
            <StyledTag color={'cyan'}>React Native</StyledTag>,
            <StyledTag color={'cyan'}>Flask</StyledTag>,
            <StyledTag color={'cyan'}>AngularJS</StyledTag>,
            <StyledTag color={'cyan'}>Laravel</StyledTag>,

            <StyledTag color={'magenta'}>Cypress</StyledTag>,
            <StyledTag color={'magenta'}>Git</StyledTag>,
            <StyledTag color={'magenta'}>Amplitude</StyledTag>,
            <StyledTag color={'magenta'}>Chronosphere</StyledTag>,

            <StyledTag color={'purple'}>AWS Lambda</StyledTag>,
            <StyledTag color={'purple'}>AWS S3</StyledTag>,

            <StyledTag color={'volcano'}>SolidWorks</StyledTag>,
            <StyledTag color={'volcano'}>Autodesk Inventor</StyledTag>,

            <StyledTag color={'blue'}>ABB</StyledTag>,
            <StyledTag color={'blue'}>Allen-Bradley</StyledTag>,
            <StyledTag color={'blue'}>TotalFlow</StyledTag>,
            <StyledTag color={'blue'}>Arduino</StyledTag>,
            <StyledTag color={'blue'}>Symphony+</StyledTag>,
            <StyledTag color={'blue'}>iX Developer</StyledTag>,
            <StyledTag color={'blue'}>Aspen</StyledTag>,
          ],
        },
      ],
    },
  ];

  return (
    <Page title={'Education And Skills'}>
      {education.map((institution, i) => (
        <GeneralContentRow
          key={i}
          title={institution.title}
          year={institution.year}
          descriptions={institution.descriptions}
          image={institution.image}
        />
      ))}
      {skills.map((skill, i) => (
        <GeneralContentRow
          key={i}
          title={skill.title}
          descriptions={skill.descriptions}
        />
      ))}
    </Page>
  );
};

const StyledTag = styled(Tag)`
  margin: 5px 5px 5px 5px;
  font-size: 15px;
`;

export default EducationAndSkills;
