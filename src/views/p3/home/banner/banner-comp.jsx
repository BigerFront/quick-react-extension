import React, { PureComponent } from 'react';

import { Avatar } from 'antd';

import {
  SafetyIcon,
  IncreaseIcon,
  MailIcon,
  SwitchIcon,
} from '~Widgets/svgicons';

import { compressAddress } from '~/helpers/text-utils';
import NetworkSelector from '~P3/selectors/network-selector';

import BraveIcon from '~Widgets/brave-icon/icon-font';
import BraveAvatar from '~UI/brave-avatar';

export default class HomeBanner extends PureComponent {
  state = {
    selectedAddress: '',
    network: 'mainnet',
  };

  slogan = 'protects your asset safety';

  UNSAFE_componentWillMount() {}

  renderTitleContainer(appTitle) {
    return (
      <div className="home-banner__title--container">
        <h1>{appTitle}</h1>
      </div>
    );
  }

  renderLogoContainer() {
    const { isUnlocked } = this.props;
    return (
      <div className="home-banner__logo--container-wrapper">
        <div className="left-fill"></div>
        <div className="home-banner__logo">
          <BraveAvatar
            className="brave-avatar"
            size={isUnlocked ? 80 : 120}
            gap={10}
          />
        </div>
        <div className="home-banner__network--wrapper">
          <NetworkSelector />
          {/* <span className="network-name">{this.state.network}</span>
          <NetIcon className="network-icon" type={this.state.network} /> */}
        </div>
      </div>
    );
  }

  renderSloganContainer() {
    return (
      <div className="home-banner__slogan">
        <h4>{this.slogan}</h4>
        <div className="home-banner__slogan--iconbox">
          <IncreaseIcon />
          <SafetyIcon />
          <MailIcon />
        </div>
      </div>
    );
  }

  renderSelectedContainer() {
    const { selectedAddress } = this.props;

    return (
      <div className="home-banner__selected">
        <span className="address">{compressAddress(selectedAddress)}</span>

        <SwitchIcon className="address-switch-icon" />

        {/* <ExchageIcon className="address-switch-icon" /> */}
      </div>
    );
  }

  renderAssetsContainer() {
    return (
      <>
        <div className="asset-box">
          <p>
            <BraveIcon
              type="brave-btc"
              className="asset-icon"
              style={{ color: 'rgb(254, 205, 87)' }}
            />
          </p>
          <div>
            <span className="asset-balance">1.2456</span>
          </div>
        </div>
        <div className="asset-box">
          <p>
            <BraveIcon
              type="brave-qeeb"
              className="asset-icon main"
              style={{ fontSize: '2.05rem', borderRadius: '1.875rem' }}
            />
          </p>
          <div>
            <span className="asset-balance">320019.23</span>
          </div>
        </div>
        <div className="asset-box">
          <p>
            <BraveIcon
              type="brave-eth"
              className="asset-icon"
              style={{ color: '#0f4e8c' }}
            />
          </p>
          <div>
            <span className="asset-balance">25.5678</span>
          </div>
        </div>
      </>
    );
  }

  render() {
    const {
      selectedAddress,
      isUnlocked,
      appTitle = 'Brave Troops',
    } = this.props;

    return (
      <>
        <div className="home-banner__wrapper">
          {/** Header Title */ this.renderTitleContainer(appTitle)}
          {/** Logo */ this.renderLogoContainer()}
        </div>
        {isUnlocked ? null : this.renderSloganContainer()}
        {isUnlocked ? this.renderSelectedContainer() : null}
        <div className="home-banner__assets--container">
          {isUnlocked ? this.renderAssetsContainer() : null}
        </div>
      </>
    );
  }
}
