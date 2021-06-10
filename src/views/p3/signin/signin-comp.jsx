import React, { Component } from 'react';

import { Form, Input, Layout, Button } from 'antd';

import { LockOutlined } from '@ant-design/icons';

import { pwdWeakRule } from '~Lib/valid-rules';
import logger from '~Lib/log';
import { DEFAULT_ROUTE } from '../routes/routes-consts';

const { Content, Footer } = Layout;

const formLayout = {
  labelCol: {
    span: 0,
  },
  wrapperCol: {
    span: 24,
  },
};

export default class SigninComponent extends Component {
  state = {
    submitDisabled: true,
  };

  UNSAFE_componentWillMount() {
    const { isUnlocked, history } = this.props;
    if (isUnlocked) {
      history.push(DEFAULT_ROUTE);
    }
  }

  componentDidMount() {
    // this.formRef = React.createRef();
  }

  onFinish = async (values) => {
    const { password } = values;
    const { tryUnlockBrave, history } = this.props;
    // logger.debug('Onfish>>>>>', password, tryUnlockBrave, history);

    try {
      const res = await tryUnlockBrave(password);
      logger.debug('res>>>>', res);
      history.push(DEFAULT_ROUTE);
    } catch (error) {
      logger.error(error);
    }
  };

  onValuesChange = (changedValues) => {
    const { password } = changedValues;
    let valid = pwdWeakRule.pattern.test(password);
    this.setState({ submitDisabled: !valid });
  };

  renderHeader() {
    return <div className="signin-container__header"></div>;
  }

  renderForm() {
    return (
      <Form
        {...formLayout}
        ref={this.formRef}
        name="signinForm"
        onFinish={this.onFinish}
        onValuesChange={this.onValuesChange}
      >
        <Form.Item
          name="password"
          rules={[
            { required: true, message: 'Please input your password' },
            pwdWeakRule,
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            bordered={false}
            className="signin-pwd-input"
          />
        </Form.Item>

        <Form.Item {...formLayout} shouldUpdate>
          {() => (
            <Button
              type="primary"
              shape="round"
              block
              htmlType="submit"
              disabled={this.state.submitDisabled}
            >
              Unlock
            </Button>
          )}
        </Form.Item>
      </Form>
    );
  }

  renderFooterContent() {
    return (
      <>
        <div className="pravicy">隐私协议</div>
      </>
    );
  }

  render() {
    // const { xxx } = this.props;

    return (
      <Layout className="signin-container">
        {this.renderHeader()}
        <Content className="signin-container__main">
          {/* <UnlockForm /> */}
          {this.renderForm()}
        </Content>
        <Footer className="signin-container__footer">
          {this.renderFooterContent()}
        </Footer>
      </Layout>
    );
  }
}
