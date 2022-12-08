import React, { useState } from 'react';

import { Menu } from 'antd';
import HomeOutlined from '@ant-design/icons/lib/icons/HomeOutlined';
import DesktopOutlined from '@ant-design/icons/lib/icons/DesktopOutlined';
import BookOutlined from '@ant-design/icons/lib/icons/BookOutlined';
import ToolOutlined from '@ant-design/icons/lib/icons/ToolOutlined';
import BankOutlined from '@ant-design/icons/lib/icons/BankOutlined';

/**
 * Component for the side bar navigation section of the site.
 * @returns JSX component of a Menu for navigation.
 */
const SidebarNavigation = () => {
  const [selectedKeys, setSelectedKeys] = useState([
    window.location.pathname.slice(1),
  ]);

  const redirectToPage = (relativeUrl) => {
    setSelectedKeys([relativeUrl]);
    window.location.href = relativeUrl;
  };

  return (
    <Menu
      mode={'vertical'}
      theme={'dark'}
      selectedKeys={selectedKeys}
      onSelect={({ key }) => redirectToPage(key)}
    >
      <Menu.Item key={'home'} icon={<HomeOutlined />}>
        Home
      </Menu.Item>
      <Menu.Item key={'work-experience'} icon={<DesktopOutlined />}>
        Work Experience
      </Menu.Item>
      <Menu.Item key={'education-and-skills'} icon={<BankOutlined />}>
        Education and Skills
      </Menu.Item>
      <Menu.Item key={'projects'} icon={<ToolOutlined />}>
        Projects
      </Menu.Item>
      <Menu.Item key={'latin-translations'} icon={<BookOutlined />}>
        Latin Translations
      </Menu.Item>
    </Menu>
  );
};

export default SidebarNavigation;
