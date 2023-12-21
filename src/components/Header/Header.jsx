import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { PercentageOutlined, ExperimentOutlined } from '@ant-design/icons';

const { Header } = Layout;

import './Header.scss';

function HeaderComponent() {
  const items = [
    {
      className: 'menu-item',
      key: 'bmi',
      label: 'BMI',
      target: '/bmi',
      icon: <PercentageOutlined />
    },
    {
      className: 'menu-item',
      key: 'bmr',
      label: 'BMR',
      target: '/bmr',
      icon: <ExperimentOutlined />
    }
  ];

  const navigate = useNavigate();

  const handleMenuClick = ({ key }) => {
    const target = items.find((item) => item.key === key).target;
    navigate(target);
  };

  return (
    <Header className="header">
      <Menu className="header__menu" items={items} mode="horizontal" onClick={handleMenuClick} />
    </Header>
  );
}

export default HeaderComponent;
