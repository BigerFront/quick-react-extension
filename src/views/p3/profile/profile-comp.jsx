import React, { PureComponent } from 'react';

import { Layout, Form, Divider } from 'antd';
import AddressHeader from '~P3/header/address-header';
import { getThemeName } from '~UI/ui-cnst';

import { ProfileIcon } from '~Widgets/svgicons';
import IntlSelector from '~UI/intl/lang-selector';
import { BraveThemeSelectBox } from './profile-widgets';

export default class ProfilePage extends PureComponent {
  state = {
    minWidth: '70%',
  };

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

  renderIntlCard() {
    return (
      <div className="profile-page__card">
        <div className="profile-page__card-label">
          <label className="brave-label small">选择语言:</label>
        </div>
        <div className="profile-page__card-control">
          <IntlSelector size="small" minWidth={this.state.minWidth} />
        </div>
      </div>
    );
  }

  renderCoinCard() {
    return (
      <>
        <div className="profile-page__card">
          <div className="profile-page__card-label">
            <label className="brave-label small">Center:</label>
          </div>
          <div className="profile-page__card-control">
            <IntlSelector size="small" minWidth={this.state.minWidth} />
          </div>
        </div>
        <div className="profile-page__card">
          <div className="profile-page__card-label">
            <label className="brave-label small">left:</label>
          </div>
          <div className="profile-page__card-control">
            <IntlSelector size="small" minWidth={this.state.minWidth} />
          </div>
        </div>
        <div className="profile-page__card">
          <div className="profile-page__card-label">
            <label className="brave-label small">right:</label>
          </div>
          <div className="profile-page__card-control">
            <IntlSelector size="small" minWidth={this.state.minWidth} />
          </div>
        </div>
      </>
    );
  }

  renderThemeCard() {
    const { braveTheme } = this.props;
    const name = getThemeName(braveTheme);
    return (
      <>
        <div className="profile-page__card">
          <div className="profile-page__card-label">
            <label
              className="brave-label small"
              style={{ textTransform: 'capitalize' }}
            >
              {name}
            </label>
          </div>
          <div className="profile-page__card-control">
            <BraveThemeSelectBox size="small" minWidth={this.state.minWidth} />
          </div>
        </div>
      </>
    );
  }

  render() {
    return (
      <>
        <AddressHeader
          title="Profile"
          className="brave-page__header"
          iconOverlay={() => <ProfileIcon />}
        />
        <Layout.Content className="profile-page__main">
          <Divider className="profile-page__divider" orientation="left">
            语言
          </Divider>
          {this.renderIntlCard()}
          <Divider className="profile-page__divider" orientation="left">
            Brave Theme
          </Divider>
          {this.renderThemeCard()}
          <Divider className="profile-page__divider" orientation="left">
            Home Coins Settings
          </Divider>
          {this.renderCoinCard()}
        </Layout.Content>
      </>
    );
  }
}
