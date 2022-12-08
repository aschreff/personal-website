import React from "react";

import Page from "./Page";
import GeneralContentRow from "../components/global/GeneralContentRow";

/**
 * Page for the website displaying all my work experiences
 * @returns JSX component of my work experiences
 */
const Work = () => {

  const jobs = [
    {
      title: 'DoorDash',
      position: 'Software Engineer',
      year: '2022',
      descriptions: [
        {
          type: 'paragraph',
          content: 'My previous company, Bbot, was acquired by DoorDash in March of 2022. I moved over to DoorDash at this time, but continued to work on the same Bbot product that I had previously been working on.',
        },
        {
          type: 'paragraph',
          content: 'Here are some projects I completed during my time at DoorDash:',
        },
        {
          type: 'list',
          content: ['Wrote the front-end code that allowed customers to checkout using gift cards on the Bbot platform.', 'Completed a project that allowed a kitchen tablet at a restaurant to poll for order tickets and send them to a kitchen printer via a TCP connection. This eliminated the need for Raspberry Pis to run our printer software at many restaurants.', 'Migrated our Terminal app (a React Native kitchen software android application) from Native Base 2 to Native Base 3.', 'Also wrote the frontend code that added loyalty integrations to our Terminal app.']
        }
      ],
      image: '/imgs/doordash.png',
    },
    {
      title: 'Bbot',
      position: 'Software Engineer',
      year: '2020 - 2022',
      descriptions: [
        {
          type: 'paragraph',
          content: 'Bbot was a dining tech startup focused on building online ordering and order/pay at the table technology for restaurants, breweries, hotels, and food halls. '
        },
        {
          type: 'paragraph',
          content: 'I worked as a full-stack developer, mainly focusing on frontend web and android development. Skills I developed during my time here were Python, JavaScript / TypeScript, AngularJS, Django, AWS Lambda, AWS S3, React, and React Native.'
        },
        {
          type: 'paragraph',
          content: 'Here are some projects I completed while at Bbot:'
        },
        {
          type: 'list',
          content: ['Developed a Squarespace-like application for restuarants to build custom branded ordering sites.', 'Developed a new method for uploading photos to our platform using AWS Lambda and S3 that appropriately resized images and compressed file size.', 'Developed our \'Bbot App Store\' page in our Admin Panel which allowed resturants to connect to any number of integrations (POS, Delivery, Rewards/Loyalty, etc.)', 'Developed an interface to allow developers to easily connect with our External API. They could generate webhook credentials, set webhook urls, and build and publish tiles for the Bbot App Store.', 'Developed an interface for creating promos and added the ability for promos to only be used a certain number of times per customer.', 'Developed a feature for tracking and charging restaurants for SMS messaging costs.']
        }
      ],
      image: '/imgs/bbot.svg',
    },
    {
      title: 'Cabot Oil and Gas',
      position: 'SCADA Intern',
      year: '2019',
      descriptions: [
        {
          type: 'paragraph',
          content: 'Cabot Oil & Gas Corporation is an independent oil and gas producer, currently focusing their efforts on the extraction of natural gas from the Marcellus Shale in Northeastern Pennsylvania. '
        },
        {
          type: 'paragraph',
          content: 'I worked as a SCADA Intern (Supervisory Control and Data Acquisition). Skills I developed during this time were PLC Programming (ABB, Allen-Bradley, TotalFlow), HMI Design (iX Developer), PHP, Laravel, and JavaScript.'
        },
        {
          type: 'paragraph',
          content: 'Here are the main projects I worked on while at Cabot:'
        },
        {
          type: 'list',
          content: ['Created a controls system for methanol injection at the well-pads, which is used to prevent pipes from freezing during the winter.', 'Developed a web application of an interactive system map of Cabot\'s well-pads and the Williams pipeline. It could display live data and historical records of selected well-pads and provided a number of other useful analysis tools. I utilized a CygNet API to add advanced functionality to this application.']
        }
      ],
      image: '/imgs/cabot.png',
    },
    {
      title: 'Axalta Coating Systems',
      position: 'Operations Intern',
      year: '2018',
      descriptions: [
        {
          type: 'paragraph',
          content: 'Axalta Coating Systems is a global leader in paint and protective coating manufacturing, specializing in light vehicle OEM and refinish. I worked as an Operations Engineering Intern at the North American Technology Center, located in Mt. Clemens, MI.'
        },
        {
          type: 'paragraph',
          content: 'Skills I developed during this time were HMI design (ABB Symphony+), JavaScript, Python, and Flask.'
        },
        {
          type: 'paragraph',
          content: 'Here are the main projects I completed while at Axalta:'
        },
        {
          type: 'list',
          content: ['Developed a new set of operational graphic interfaces for one of the resin reactor systems on the plant floor. The graphics files I created included files for the reactor, weigh tanks, thin tanks, MDI tanks, and dust collectors. One of the main features of these interfaces was programming the pipes to be highlighted when material was flowing. This had not been implemented in previous interfaces and made it easier for operators to identify flow paths.', 'Developed a web application that operators can use on all the resin reactors at the site to identify what wash they should be using on the reactors in between batches of resin. This web applications allows them to easily download and print the directions for these washes. It also allows engineers to easily update, edit, and add new washes to the app.']
        }
      ],
      image: '/imgs/axalta.png',
    },
  ]

  return (
    <Page title={'Work Experience'}>
      {jobs.map((job, i) => (
        <GeneralContentRow
          key={i}
          title={job.title}
          position={job.position}
          year={job.year}
          descriptions={job.descriptions}
          image={job.image}
        />
      ))}
    </Page>
  )
}

export default Work;