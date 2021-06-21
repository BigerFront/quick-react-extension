/* eslint-disable jsx-a11y/aria-role */
import React, { PureComponent } from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { compressAddress } from '~/helpers/text-utils';
import { Tooltip } from 'antd';

export default class LabelPage extends PureComponent {
  state = {
    addressText: '',
    copiedTips: '',
    dataTips: '',
    visible: false,
  };

  componentDidMount() {
    const { cliped } = this.props;
    if (cliped) this.setState({ dataTips: 'click copy clipboard' });
  }

  onVisibleChange = (visible) => {
    this.setState({ visible: visible });
    if (!visible) {
      this.setState({ copiedTips: 'click copy address' });
    }
  };

  onCopyHandler = (text, result) => {
    if (result) {
      this.setState({ visible: true });

      setTimeout(() => {
        this.setState({ visible: false, copiedTips: 'address copied!' });
      }, 2000);
    } else {
    }
  };

  onClickHandler = () => {
    const { addressText } = this.props;
    this.setState({ addressText });
  };

  renderNoClipboard() {
    const { address } = this.props;
    return (
      <span className="address-breaker" style={{ wordBreak: 'break-all' }}>
        {address}
      </span>
    );
  }

  renderCopiedTips = () => {
    return <div className="address-copied-tips">{this.state.copiedTips}</div>;
  };

  renderHasClipboard() {
    const { address, compressed } = this.props;
    return (
      <CopyToClipboard text={address} onCopy={this.onCopyHandler}>
        <div className="address-label__wrapper">
          <div
            className="address-breaker"
            role="brave"
            style={{ cursor: 'copy', wordBreak: 'break-all' }}
          >
            {compressed ? compressAddress(address) : address}

            <span className="address-tiper">click copy to clipboard.</span>
          </div>
        </div>
      </CopyToClipboard>
    );
  }

  render() {
    const { cliped } = this.props;

    return cliped ? this.renderHasClipboard() : this.renderNoClipboard();
  }
}
