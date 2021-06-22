import React, { PureComponent } from 'react';

import { Select, Dropdown, Menu, Button, Space } from 'antd';

import logger from '~Lib/log';
import { NetIcon } from '~Widgets/svgicons';
import { NETWORK_KEY_MAP } from './index';

export default class SelectorPage extends PureComponent {
  state = {};

  renderMenu = (menu) => {
    return (
      <>
        {menu}
        <div className="s"></div>
      </>
    );
  };

  onSelectHandler = (v) => {
    const { networkSelected } = this.props;
    networkSelected(v);
  };

  render() {
    const { networks, currentChainId } = this.props;

    const currentType = NETWORK_KEY_MAP[currentChainId]
      ? NETWORK_KEY_MAP[currentChainId].name
      : '';

    return (
      <Select
        className="network-selector__box"
        dropdownRender={this.renderMenu}
        onSelect={this.onSelectHandler}
        bordered={false}
        value={currentChainId}
        style={{ width: '100%' }}
        showArrow={false}
        dropdownClassName="network-dropdown"
      >
        {networks.map((network) => (
          <Select.Option
            key={network.chainId}
            value={network.chainId}
            className="network-selector__option"
          >
            <span className="network-name">{network.name}</span>
            <NetIcon className="network-icon" type={network.name} />
          </Select.Option>
        ))}
      </Select>
    );
  }
}
