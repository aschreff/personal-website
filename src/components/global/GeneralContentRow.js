import React from "react";
import PropTypes from 'prop-types';

import { Row, Col, Image, Typography, Divider, List } from "antd";
import LinkOutlined from "@ant-design/icons/lib/icons/LinkOutlined";

const { Title, Paragraph } = Typography;

/**
 * Useful component for displaying rows of information across the website.
 * @param title string
 * @param image string of image path
 * @param descriptions array of description objects, can be paragraphs, lists, or tags
 * @param position optional string param
 * @param year optional string param
 * @param link optional string param
 * @returns JSX component of a row with content pertaining to education, work, projects, or skills
 */
const GeneralContentRow = ({ title, image, descriptions, position, year, link }) => {
  return (
    <Row>
      {image && (
        <Col span={4}>
          <Image
            src={image}
            height={150}
            width={150}
            preview={false}
          />
        </Col>
      )}
      <Col span={image ? 20 : 24}>
        <Title level={3}>{title} {position && ' | ' + position} {year && ' | ' + year} {link && <LinkOutlined onClick={() => window.open(link, '_blank')}/>}</Title>
        <Divider />
        {descriptions.map((description, i) => {
          if (description.type === 'paragraph') {
            return <Paragraph key={i}>{description.content}</Paragraph>
          } else if (description.type === 'list') {
            return (
              <List
                bordered
                dataSource={description.content}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            )
          } else if (description.type === 'tags') {
            return (
              <Paragraph>
                {[...description.content]}
              </Paragraph>
            )
          }
        })}
      </Col>
    </Row>
  )
}

GeneralContentRow.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  descriptions: PropTypes.array,
  position: PropTypes.string,
  year: PropTypes.string,
  link: PropTypes.string,
}

export default GeneralContentRow;