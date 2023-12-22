import React from 'react';
import { Layout, Flex } from 'antd';
import { GithubFilled } from '@ant-design/icons';

const { Footer } = Layout;

function FooterComponent() {
  return (
    <Footer className="footer">
      <Flex justify="center" gap="small">
        CS50x 2023 • Created by Volha Bashlaminava •
        <a href="https://github.com/OBashlaminova">
          <GithubFilled className="footer__icon" />
        </a>
      </Flex>
    </Footer>
  );
}

export default FooterComponent;
