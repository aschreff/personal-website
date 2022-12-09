import React from 'react';

import Page from './Page';
import GeneralContentRow from '../components/global/GeneralContentRow';

/**
 * Page for the website that displays projects
 * @returns JSX component of my projects
 */
const Projects = () => {
  const projects = [
    {
      title: 'Dimethyl Ether Process Design',
      year: '2019',
      descriptions: [
        {
          type: 'paragraph',
          content:
            'I worked in a team of three students to design a chemical process for the production of dimethyl ether from a feed of syngas. This project included using Aspen to simulate the process as well as to perform heat integration. We also performed a full utilities analysis, sized and costed all the equipment needed, and performed a complete economic analysis of the process to determine market viability. ',
        },
      ],
      image: '/imgs/dme.png',
      link: 'https://drive.google.com/file/d/1DymdJX0PUw5NojXqQvqgNfz070loZJuc/view',
    },
    {
      title: 'Microbial Electrolysis for Hydrogen Production',
      year: '2019',
      descriptions: [
        {
          type: 'paragraph',
          content:
            'I worked in a team of four students to construct a microbial electrolysis cell (MEC) from scratch using a feedstock of yeast and glycerol. The cell was able to produce hydrogen gas as its end product. The purpose of this was to model the production of hydrogen gas from a glycerol waste for use in a soybean crush plant. ',
        },
      ],
      image: '/imgs/mec.png',
      link: 'https://drive.google.com/file/d/1xHSXL8IHzcpvsYTHVS_O6YTUtchq36Fs/view',
    },
    {
      title: '112 Broadway Ave',
      year: '2017',
      descriptions: [
        {
          type: 'paragraph',
          content:
            'This is a virtual stage and script builder application, coded in Python. I utilized Pygame for this project, but other than that, everything is completely original.',
        },
      ],
      image: '/imgs/pygame.png',
      link: 'https://www.youtube.com/watch?v=M6G36AgYb-A',
    },
    {
      title: 'The Frostlite',
      year: '2016',
      descriptions: [
        {
          type: 'paragraph',
          content:
            'I led a team of three engineering students to create a thermo-protective glove that alerts the user of their frostbite risk level utilizing Arduino and thermistor technology. We presented to a panel of professional engineers after finishing the project.',
        },
      ],
      image: '/imgs/frostlite.png',
      link: 'https://drive.google.com/file/d/1_9wlvj5iSL0Yd58m2kAL2vZGgzQhT3VG/view',
    },
    {
      title: 'Caviat',
      year: '2015',
      descriptions: [
        {
          type: 'paragraph',
          content:
            'This is a music sound system that has hands-free music controls. Sonar readers will read your hand positions and can raise or lower volume, skip tracks, pause tracks, and play tracks based on your hand position. The core of this project is Arduino technology.',
        },
      ],
      image: '/imgs/caviat.png',
      link: 'https://caviat.weebly.com/',
    },
  ];

  return (
    <Page title={'Projects'}>
      {projects.map((project, i) => (
        <GeneralContentRow
          key={i}
          title={project.title}
          year={project.year}
          descriptions={project.descriptions}
          image={project.image}
          link={project.link}
        />
      ))}
    </Page>
  );
};

export default Projects;
