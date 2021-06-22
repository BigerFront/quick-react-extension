import React, { PureComponent } from 'react';

import { Layout, Form, Space, Row, Col, Typography } from 'antd';
import AddressHeader from '~P3/header/address-header';

import { ProfileIcon } from '~Widgets/svgicons';
import IntlSelector from '~UI/intl/lang-selector';

const { Title } = Typography;
export default class ProfilePage extends PureComponent {
  state = {};

  renderContent() {
    return (
      <Form
        size="small"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
      >
        <Form.Item label="Language">
          <IntlSelector />
        </Form.Item>
      </Form>
    );
  }

  render() {
    // const { xxx } = this.props;

    return (
      <>
        <AddressHeader
          title="Profile"
          className="brave-page__header"
          iconOverlay={() => <ProfileIcon />}
        />
        <Layout.Content className="profile-page__main">
          <Space></Space>

          <Row>
            <Col span={8} className="brave-label-col">
              <label className="brave-label small">选择语言:</label>
            </Col>
            <Col span={16}>
              <IntlSelector size="small" />
            </Col>
          </Row>
        </Layout.Content>
      </>
    );
  }
}
